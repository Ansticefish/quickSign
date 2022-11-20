<template lang="pug">
div.bottom
  div.upload-area
    label.instruction(for="upload")
      input(type="file" accept=".pdf" id="upload" @change="uploadFile")
      p.instruction__top 點擊此處上傳 或 直接拖曳檔案
      img(src="~@/assets/image/upload-pdf.png")
      p.instruction__bottom (限10MB以下PDF檔)
  //pop-up windows
  Popups(:caption="caption" :btn-caption="btnCaption" @close-window="closePopups" v-if="showPopup")
</template>

<script>
import Popups from '../components/Popups.vue'

export default {
  name: 'UploadFileNew', 
  data () {
    return {
      caption: '',
      btnCaption: [],
      showPopup: false
    }
  },
  components: {
    Popups,
  },
  methods: {
    uploadFile ($e) {
      const file = $e.target.files[0]
      console.log(file)
      if(file.type !== "application/pdf"){
        this.showPopups('您的檔案不是PDF檔！', ["我知道了"] )
      } else if (file.size > 10*1024*1024 ) {
        this.showPopups('您的檔案太大了！', ["我知道了"])
      }
      this.showPopups('檔案上傳成功，請選擇想增加簽名的檔案！', ["我知道了"])
      // save file to localStorage & vuex  
    },
    closePopups () {
      this.showPopup = false
    },
    showPopups ( caption, btnCaption) {
      this.caption = caption
      this.btnCaption = btnCaption
      this.showPopup = true
    }
  }
}

</script>


<style lang="scss" scoped>
@import '../assets/scss/upload.scss';
.bottom { 
  @extend %uploadFileStyle;
  input {
    display: none;
  }
  p, img {
    cursor: pointer;
  }
}
</style>