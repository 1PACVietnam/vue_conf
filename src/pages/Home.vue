<template>
  <op-wrapper>
    <app-header />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="$t('hello.greeting')"/>
  </op-wrapper>
</template>

<script>
import OpWrapper from '@/elements/Wrapper/Wrapper'

import AppHeader from '@/components/AppHeader/AppHeader'
import HelloWorld from '@/components/HelloWorld/HelloWorld'

export default {
  name: 'Home',
  components: {
    AppHeader,
    HelloWorld,
    OpWrapper
  }
}
</script>
