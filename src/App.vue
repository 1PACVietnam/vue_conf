<template>
  <op-wrapper id="app">
    <op-wrapper id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <op-link status="success">About</op-link>
    </op-wrapper>
    <router-view/>
  </op-wrapper>
</template>

<script>
import OpWrapper from '@/elements/Wrapper/Wrapper'
import OpLink from '@/elements/Link/Link'

export default {
  components: {
    OpWrapper,
    OpLink
  }
}
</script>
