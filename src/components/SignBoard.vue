<template lang="pug">
div.sign-board 
   div.window
     h2 在框格內簽下大名！
     div.board-wrapper
      canvas
      footer.board-footer
        div.color-selectors
          h2 清除
          div.black
          div.blue 
          div.red
        div.btns
          button.cancel 取消
          button.finish 簽好了
</template>

<script>
export default {
  name: 'SignBoard',
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
        }
        div {
          @include containerStyle(35px, 35px, $white, 3px solid $white, 50%);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin-left: 15px;
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