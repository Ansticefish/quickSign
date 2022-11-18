<template lang="pug">
footer
  div.steppers
    div.stepper.active.done
      h3 上傳文件
      div.step-one
    div.stepper.active
      h3 進行簽署
      div.step-two
    div.stepper
      h3 下載文件
      div
  div.buttons
    button.cancel 取消
    button.open 開啟文件
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
footer {
  @include position (fixed, $bottom: 0, $left: 0);
  @include containerStyle(100vw, 100px, $light-main);
  @include flex(center, space-around);
}


// steppers
.steppers {
  @include flex(center, space-between);
  width: 25vw;
  height: 60%;
  .stepper {
    height: 100%;
    @include fontStyle($h3, $dark-grey);
    // to enable z-index for its children
    @include flex(center, space-around);
    flex-direction: column;
    & div {
      @include containerStyle (22px, 22px, $white, 3px solid $white, 50%);
      box-shadow: 0px 4px 4px #EEEDE8;
      z-index: 1;
    }
    .step-one,.step-two {
      position: relative;
      &:before {
        content: '';
        @include position (absolute, $top: 50%, $left: 22px);   
        transform: translate(0, -50%);
        @include containerStyle (calc(25vw/2 - 11px - 33px - 20px), 9px, $white, 3px solid $white, 0);
        box-shadow: 0px 4px 4px #EEEDE8;
      }
    }
    &.active {
      color: $primary;
      & div {
        background-color: $primary;
        &:before {
          background-color: $primary;
        }
      }
    }
    &.done {
      color: $secondary;
      & div {
        background-color: $secondary;
        &:before {
          background-color: $secondary;
        }
      }
    }
  }
}

//buttons 
.buttons {
  .cancel {
    @extend %close-btn-white;
  }
  .open {
    @extend %open-file-btn;
    margin-left: 15px;
  }
}
</style>