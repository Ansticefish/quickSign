<template lang="pug">
div.sign-board 
   div.window
     h2 在框格內簽下大名！
     div.board-wrapper
      canvas(ref="signBoard" @mousedown="startSign" @mousemove="drawSign" @mouseup="finishSign")
      footer.board-footer
        div.color-selectors
          h2(@click="clearCanvas") 清除
          div.black(:class="{'active': color === '#000000' }" @click='()=> this.color = "#000000"')
          div.blue(:class="{'active': color === '#0038A6'}" @click='()=> this.color = "#0038A6"') 
          div.red(:class="{'active': color === '#FF0000'}" @click='()=> this.color = "#FF0000"')
        div.btns
          button.cancel(@click="closeWindow") 取消
          button.finish(@click="saveSign") 簽好了
</template>

<script>
export default {
  name: 'SignBoard',
  data () {
    return {
      isSigning: false,
      color: "#000000"
    }
  },
  methods: {
    closeWindow() {
      this.$emit('close-window')
    },
    saveSign() {
      this.$emit('save-sign')
    },
    startSign ($e) {
      this.isSigning = true
      const canvas = $e.target
      const ctx = canvas.getContext('2d')
      ctx.strokeStyle = this.color
      ctx.beginPath()
      ctx.moveTo($e.offsetX, $e.offsetY)
    },
    drawSign($e) {
      const canvas = $e.target
      const ctx = canvas.getContext('2d')
      ctx.lineTo($e.offsetX, $e.offsetY)
      if(this.isSigning === false) return
      ctx.stroke()
    },
    finishSign () {
      this.isSigning = false
    },
    clearCanvas () {
      const canvas = this.$refs.signBoard
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  },
  mounted () {
    // define canvas size globally
    const canvas = this.$refs.signBoard
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/popups.scss';
.sign-board {
  @extend %mask;
  .window {
    @include containerStyle(43vw, 51vh, $white, none, 35px);
    max-width: 830px;
    @include flex (center, space-evenly);
    flex-direction: column;
    h2 {
      @include fontStyle($h2, $dark-grey);
    }
    .board-wrapper {
      width: 100%;
      height: 80%;
      @include flex (center);
      flex-direction: column;
      canvas {
        @include containerStyle(90%, 80%, $white, 1px dashed $dark-grey);
      }
    }
    footer {
      margin-top: 20px;
      width: 90%;
      @include flex (center, space-between);
      .color-selectors {
        @include flex (center);
        width: 40%;
        h2 {
          @include fontStyle ($h2, $secondary);
          transition: opacity .2s;
          &:hover {
            opacity: 0.3;
            cursor: pointer;
          }
        }
        div {
          @include containerStyle(35px, 35px, $white, 3px solid $white, 50%);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin-left: 15px;
          transition: opacity .2s;
          &:hover {
            opacity: 0.3;
            cursor: pointer;
          }
          &.active {
            opacity: 0.3;
            box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
          }
        }
        .black {
          background-color: #000000;
        }
        .blue {
          background-color: #0038A6;
        }
        .red {
          background-color: #FF0000;
        }
      }
      .btns {
        @include flex (center, space-between);
        .cancel {
          @extend %close-btn-orange;
        }
        .finish {
          @extend %open-file-btn;
          margin-left: 15px;
        }
      }
      
    } 
  }
}
</style>