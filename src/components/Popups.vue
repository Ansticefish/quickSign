<template lang="pug">
div.mask
  div.window     
    h2 {{ caption }}
    div.btns
      button.btns__orange(v-if="btnCaption.length < 1" @click="closeWindow")  {{ btnCaption[1]}}
      button.btns__blue(@click="closeWindow") {{ btnCaption[0] }}
</template>

<script>
export default {
  name: 'Popups',
  props: {
    caption: {
      type: String,
      required: true
    },
    btnCaption: {
      type: Array,
      required: true
    }
  },
  methods: {
    closeWindow () {
      if (this.caption === '檔案上傳成功，請選擇想增加簽名的檔案！'){
        this.$emit('close-window')
        this.$router.push('/uploadFile/old')
      }
      this.$emit('close-window')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/popups.scss';
.mask {
  @extend %mask;
  .window {
    @include containerStyle (43.2vw, 27.5vh, $white, none, 35px);
    @include fontStyle ($h2, $dark-grey);
    @include flex (center, center);
    flex-direction: column;
    position: relative;
    .btns {
      @include position (absolute, $bottom: 1vh, $right: 2vw);
      &__orange {
        @extend %close-btn-orange;
      }
      &__blue {
        @extend %open-file-btn;
      }
    }
  }
}
</style>