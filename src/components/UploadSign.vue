<template lang="pug">
div.upload
  div.window
    h2 上傳簽名圖檔！
    div.wrapper
      label.instruction(for="upload" v-if="!uploadedSign" ref="label")
        input(type="file" accept=".png, .jpg" id="upload" @change="uploadFile")
        p.instruction__top 點擊此處上傳 或 直接拖曳檔案
        img(src="~@/assets/image/upload-img-big.png")
        p.instruction__bottom (限10MB以下JPG、PNG圖檔)
      canvas.preview(v-show="uploadedSign" ref="canvasBoard")
        img(:src="uploadedSign" ref="img")
      footer
        h2(@click="deleteSign") 清除
        div.btns
          button.cancel(@click="closeWindow") 取消
          button.finish(@click="saveSign" :disabled="!uploadedSign") 使用圖檔
</template>

<script>
export default {
  name: 'UploadSign',
  data () {
    return {
      uploadedSign: ''
    }
  },
  methods: {
    closeWindow () {
      this.$emit('close-window')
    },
    saveSign () {
      const signs = JSON.parse(localStorage.getItem('signs'))
      // use toDataURL() to create a stabler url for img
      const newURL = this.$refs.canvasBoard.toDataURL()
      signs.push({ img: newURL })
      localStorage.setItem('signs', JSON.stringify(signs))
      this.$emit('save-sign', signs)
    },
    uploadFile ($e) {
      const file = $e.target.files[0]
      if (file.type === 'image/png' || file.type === "image/jpeg"  ) {
        this.uploadedSign = URL.createObjectURL(file)
      } else {
        return
      }
      
    },
    deleteSign () {
      this.uploadedSign = ''
    }
  },
  mounted () {
    // set up canvas
    const canvas = this.$refs.canvasBoard
    canvas.width = this.$refs.label.offsetWidth
    canvas.height = this.$refs.label.offsetHeight
    const ctx = canvas.getContext('2d')
    //when img is loaded, run this code
    this.$refs.img.onload = () => {
      ctx.drawImage(this.$refs.img, 0, 0, canvas.offsetWidth, canvas.offsetHeight)
    } 
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/popups.scss';

.upload {
  @extend %mask;
  .window {
    @include containerStyle(43vw, 51vh, $white, none, 35px);
    max-width: 830px;
    @include flex (center, space-evenly);
    flex-direction: column;
    h2 {
      @include fontStyle($h2, $dark-grey);
    }
    .wrapper {
      width: 100%;
      height: 80%;
      @include flex (center);
      flex-direction: column;
      .instruction {
        @include containerStyle(90%, 80%, $white, 1px dashed $dark-grey, 35px);
        @include flex (center, center);
        flex-direction: column;
        @include fontStyle($h1, $dark-grey);
        &:hover {
          background-color: $light-main;
          cursor: pointer;
        }
        input {
          display: none;
        }
        img {
          margin: 39px;
        }
      }
      .preview {
        @include containerStyle(90%, 80%, $white, 1px dashed $dark-grey, 35px);
        object-fit: contain;
      }
    }
    footer {
      margin-top: 20px;
      width: 90%;
      @include flex(center, space-between);
      h2 {
        @include fontStyle ($h2, $secondary);
        transition: opacity .2s;
        &:hover {
          opacity: 0.3;
          cursor: pointer;
        }
      }
      .btns {
        @include flex (center, flex-end);
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