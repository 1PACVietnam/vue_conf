<template>
  <op-wrapper>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </op-wrapper>
</template>

<script>
import OpWrapper from '@/elements/Wrapper/Wrapper.js'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    OpWrapper
  }
}
</script>
