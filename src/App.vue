<template lang="pug">
div#app
  Navbar
  router-view
  button.home-button 簽署新文件
  div.file-button 六角學院
  button.nav-button 新增文件
  button.create-sign-btn 
    p 創建簽名
    img(src="~@/assets/image/pen.png")
  button.sign-btn 
    p 創建簽名
    img(src="~@/assets/image/delete.png")
  button.open-file-btn 開啟文件
  button.close-btn-white 取消
  button.close-btn-orange 取消
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>


<style lang="scss">
// reset css
html,
body,
div,
span,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
abbr,
img,
ol,
ul,
li,
form,
label,
canvas,
footer,
header,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
footer,
header,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

// general style for this project 
html, body {
  font-family: 'Noto Sans TC', sans-serif;
  letter-spacing: .2rem;
  font-weight: 400;
  background-color: $bg-color;
}

.home-button {
  @extend %home-button;
}

.file-button {
  @extend %file-button;
}

.nav-button {
  @extend %nav-button;
}

.create-sign-btn {
  @extend %create-sign-btn;
}

.sign-btn {
  @extend %delete-sign-btn;
}

.open-file-btn {
  @extend %open-file-btn;
}


.close-btn-white {
  @extend %close-btn-white;
}

.close-btn-orange {
  @extend %close-btn-orange;
}
</style>
