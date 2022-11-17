<template lang="pug">
div.bottom
  div.upload-area
    div.instruction
      p.instruction__top 點擊此處上傳 或 直接拖曳檔案
      img(src="~@/assets/image/upload-pdf.png")
      p.instruction__bottom (限10MB以下PDF檔)
</template>

<script>
export default {
  name: 'UploadFileNew'
}

</script>


<style lang="scss" scoped>
@import '../assets/scss/upload.scss';
.bottom { 
  @extend %uploadFileStyle;
}
</style>