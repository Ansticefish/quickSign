<template lang="pug">
div.container
  div.content
    div.top
      router-link(to="/uploadFile/new" :class="{'active': this.$route.name === 'uploadNew'}") 上傳新文件
      router-link( to="/uploadFile/old" :class="['right',{'active': this.$route.name === 'uploadOld'}]") 選擇已上傳文件
    router-view
</template>

<script>
export default {
  name: 'UploadFile',
}

</script>


<style lang="scss" scoped>
.container {
  @include containerStyle(100vw , 100vh, $mid-grey);
  @include flex (center, center);
  padding-top: 60px;
  box-sizing: border-box;
  .content {
    @include containerStyle(75vw, 79.6vh, transparent);
  }
}

.top {
  @include containerStyle(100%, 60px, $light-main, none, 35px);
  @include flex (center, center);
  a {
    text-decoration: none;
    @include containerStyle(100%, 60px, $light-main, none, 35px 35px 0px 0px);
    @include fontStyle($h2, $secondary);
    text-align: center;
    line-height: 60px;
    &.active {
      background-color: $white;
      color: $primary;
      box-shadow: 8px 0px 4px rgba(238, 237, 232, 0.5);
      z-index: 1;
    }
    &.right.active {
      box-shadow: -8px 0px 4px rgba(238, 237, 232, 0.5);
    }
  }
}
</style>