<template lang="pug">
div#app
  Navbar.navbar
  router-view
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

.navbar {
  @include position(absolute, $top: 0, $right: 0);
  z-index: 1000;
}

</style>
