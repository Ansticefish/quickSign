<template lang="pug">
nav 
  img(src="~@/assets/image/logo-nav.png")
  div.btns
    button.btns-left 邀請他人簽署
    button.btns-mid 簽署新文件
    button.btns-right 登入
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
nav {
  @include containerStyle (100vw, 60px, $light-main);
  @include flex (center, space-around);
}

.btns {
  button {
    @extend %nav-button;
    margin-right: 30px;
  }
}
</style>