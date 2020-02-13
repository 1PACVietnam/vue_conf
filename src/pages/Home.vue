<template>
  <op-wrapper>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="$t('hello.greeting')"/>
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
