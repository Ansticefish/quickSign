<template lang="pug">
nav
  div.title-wrapper
    img(src="~@/assets/image/logo-nav.png")
    span | 簽署新文件
  div.btns
    button.btns-left(:disabled="true") 邀請他人簽署
    button.btns-mid(@click="()=> this.$router.push('/uploadFile')") 簽署新文件
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

.title-wrapper {
  @include flex (center, space-between);
  width: 230px;
}

.btns {
  button {
    @extend %nav-button;
    margin-right: 30px;
  }
}
</style>