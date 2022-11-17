<template lang="pug">
div.home
  div.left
    div.img-wrapper
      img.main(src="~@/assets/image/home-main.png", alt="")
      img.block-top(src="~@/assets/image/home-left-block-top.png", alt="")
      img.block-bottom(src="~@/assets/image/home-left-block-bottom.png", alt="")
    div.title
      img.title__img(src="~@/assets/image/logo-home.png", alt="")
      p 線上簽署，方便快速。
      button.btn--sign 簽署新文件
  div.right
    img.main-blocks(src="~@/assets/image/home-right.png", alt="")
    img.shadow(src="~@/assets/image/home-shadow.png", alt="")
    img.block-right(src="~@/assets/image/home-right-blocks.png", alt="")
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
.home {
  @include containerStyle(100vw, 100vh, $light-grey);
  box-sizing: border-box;
  overflow: hidden;
}

.left {
  @include flex (center);
  overflow: hidden;
  width: 100%;
  height: 100%;
  .img-wrapper {
    position: relative;
    width: 48%;
    z-index: 10;
    .main {
      width: 100%;
      object-fit: contain;
      object-position: bottom;
    }
    .block-top {
      @include position (absolute, $top: 30%, $left: 5%);
    }
    .block-bottom {
      @include position (absolute, $top: 50%, $left: 0);
    }
  }
  .title {
    margin-top: -120px;
    margin-right: 10%;
    z-index: 10;
    width: 30%;
    &__img {
      width: 100%;
    }
    p {
      @include fontStyle($h1, $secondary, 1rem);
      white-space: nowrap;
      text-align: justify;
      margin-top: 23px;
    }
    .btn--sign {
      @extend %home-button;
      margin-top: 8.6vh;
    }
  }
}


.right {
  @include position(absolute, $top: 0, $right: 0);
  width: 100%;
  height: 100%;
  text-align: end;
  overflow:hidden;
  .main-blocks {
    width: 90%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
  .shadow {
    @include position(absolute, $bottom: 0, $left: 19%);
    height: 25%;
  }
  .block-right {
    @include position(absolute, $bottom: 50%, $right: 3%);
  }
}
</style>