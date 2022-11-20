<template lang="pug">
div.bottom
  div.upload-area(v-if="!files.length")
    div.instruction
      p.instruction__top 尚未上傳任何文件！
  div.files-area(v-else)
    div.search-area
      input.search-bar(placeholder="搜尋文件名稱")
    div.file-table
      div.file-table__top
        p 名稱
        p 上傳時間
        p 上次開啟
        //- use v-for to render data
      div.file-table__content.active
        p 六角學院2022版活動切結書.pdf 
        p 2022/10/31, 23:45
        p --
      div.file-table__content(v-for="n in 10")
        p 六角學院2022版活動切結書.pdf 
        p 2022/10/31, 23:45
        p --
    p.separation or 
    h2 登入查看更多歷史文件
    div.login
      img.login__fb(src="~@/assets/image/logo-facebook.png")
      img.login__google(src="~@/assets/image/logo-google.png")


</template>

<script>
export default {
  name: 'UploadFileOld',
  data () {
    return {
      files: [],
    }
  },
  mounted () {
    const files = JSON.parse(localStorage.getItem('files'))
    if (files === null) {
      this.files = []
    }

    this.files = files
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/upload.scss';
.bottom {
 @extend %uploadFileStyle;
}

.files-area {
  @include containerStyle (100%, 100%, inherit);
  @include fontStyle($h2, $dark-grey);
  text-align: center;
  padding: 50px;
  .search-area {
    position: relative;
    &::before {
      content: '';
      @include position (absolute, $top: 50%, $right: 15px);
      transform: translate(0, -50%);
      width: 30px;
      height: 30px;
      background-image: url('~@/assets/image/upload-search.png');
    }
    .search-bar {
      @include containerStyle (100%, 60px, inherit, 1px solid $dark-grey, 30px);
      @include fontStyle($h2, $dark-grey, normal);
      padding: 18px 31px;
      box-sizing: border-box;
      // reset focus style
      outline: none;
      &::placeholder {
        @include fontStyle($h2, $placeholder-color, normal);
      }
      &:focus {
        border: 2px solid $primary;
      }
    }
  }
  .file-table {
    height: fit-content;
    // maintain height when there is not many files
    min-height: 21vh;
    margin-top: 30px;
    &__top {
      @include flex(center, space-evenly);
      p {
        width: calc(100%/3);
        margin-bottom: 25px;
        font-size: $h3;
        text-align: left;
        padding-left: 31px;
      }
    }
    &__content {
      @extend %file-button;
    }
  }

  .separation {
    font-size: $h3;
    letter-spacing: .2rem;
    @include flex (center, space-between);
    margin: 25px;
    &::before, &::after {
      content: '';
      @include containerStyle (calc((100% - 42px)/2), 0, none, 1px solid $dark-grey);
    }
  }

  h2 {
    margin-bottom: 10px;
  }
}
</style>