<template lang="pug">
div.container
  section.left-bar
    div.top
      h3 文件名稱
      //- when file-name is clicked, toggle its child between p and input
      div.file-name(v-if="!editName" @click="toggleEditName")
        p 六角學院2022版活動切結書.pdfffffffffffffffffffffffffffffffffffffffff
        img(src="~@/assets/image/edit.png")
      input.edit-file-name(v-else type="text" @click="toggleEditName") 
    div.bottom
      h3 我的簽名
      //- change with data
      button.sign(v-for="(sign, index) in createdSign" )
        img.sign-created(:src="sign.img")
        img.delete(src="~@/assets/image/delete.png"   @click="deleteSign(index)")
      button.create-sign(@click="createSign")
        p 創建簽名
        img(src="~@/assets/image/pen.png")
      button.upload-sign(@click="UploadingSign")
        p 上傳圖片
        img(src="~@/assets/image/upload-img.png")
  section.edit-area
    canvas.pdf-preview(ref="pdfLoader")      
  Footer.footer
  //- pop-up windows
  SignBoard(v-if="openSign" @close-window="closeWindow" @save-sign="saveSign")
  UploadSign(v-if="openUpload" @close-window="closeWindow" @save-sign="saveSign")
</template>

<script>
import Footer from '../components/Footer.vue'
import SignBoard from '../components/SignBoard.vue'
import UploadSign from '../components/UploadSign.vue'

export default {
  name: 'SignFile',
  components: {
    Footer,
    SignBoard,
    UploadSign,
  },
  data () {
    return {
      createdSign: [],
      editName: false,
      openSign: false,
      openUpload: false,
    }
  },
  methods: {
    toggleEditName () {
      this.editName = !this.editName
    },
    createSign () {
      this.openSign = !this.openSign
    },
    UploadingSign () {
      this.openUpload = !this.openUpload
    },
    closeWindow () {
      this.openSign = false
      this.openUpload = false
    },
    saveSign (signs) {
      this.openSign = false
      this.openUpload = false
      this.createdSign = signs
    },
    deleteSign (index) {
      this.createdSign.splice(index, 1)
      localStorage.setItem('signs', JSON.stringify(this.createdSign))
    }
  },
  mounted () {
    const signs = JSON.parse(localStorage.getItem('signs'))
    if (signs === null) {
      this.createdSign = []
    } else {
      this.createdSign = signs
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include containerStyle(100vw, fit-content, $mid-grey);
  @include flex;
  margin-top: 60px;
  .left-bar {
    @include containerStyle(20%, fit-content, $white);
    min-height: calc(100vh - 160px);
  }
  .edit-area {
    @include containerStyle(80%, fit-content, black);
    min-height: calc(100vh - 160px);
  }
  .footer {
    @include position (absolute, $bottom: 0, $left: 0);
  }
}

// left bar style
.left-bar {
  padding: 25px;
  @include fontStyle($h3, $dark-grey);
  .top {
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid $mid-grey;
    h3 {
      font-weight: 700;
      margin-bottom: 15px;
    }
    .file-name {
      margin-bottom: 25px;
      letter-spacing: normal;
      @include flex(center, space-between);
      p {
        // prevent letter overflow
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      img {
        width: 15px;
        float: inline-end;
      }
      &:hover {
        border: 0.5px solid $dark-grey;
        padding: 1px 5px;
        cursor: pointer;
      }
    }
    input {
      width: 100%;
      margin-bottom: 25px;
      padding: 1px 5px;
      box-sizing: border-box;
      @include fontStyle($h3, $dark-grey, normal);
      border: 0.5px solid $dark-grey;
      border-radius: 3px;
      outline: none;    
      &::placeholder {
        @include fontStyle($h3, $dark-grey, normal);
      }
      &:focus {
        border: 0.5px solid $dark-grey;
      }
    }
  }
  .bottom {
    width: 100%;
    padding-top: 25px;
    h3 {
      margin-bottom: 25px;
    }
    button {
      margin-bottom: 5px;
    }
    .sign {
      @extend %delete-sign-btn;
    }
    .create-sign, .upload-sign {
      @extend %create-sign-btn; 
    }
  }
}
</style>