<template>
  <op-wrapper>
    <op-heading>This is an about page</op-heading>
    <op-button status="default">Button</op-button>
    <op-button status="default">Button</op-button>
    <op-button status="success">Button Success</op-button>
    <op-button status="error">Button Error</op-button>
    <op-button status="primary">Button Primary</op-button>
    <br />
    <op-input v-model="$v.params.$model" placeholder="placeholder" />
    <p v-if="$v.params.$error">dasdas</p>
  </op-wrapper>
</template>

<script>
import OpWrapper from '@/elements/Wrapper/Wrapper.js'
import OpButton from '@/elements/Button/Button'
import OpInput from '@/elements/Input/Input'
import OpHeading from '@/elements/Heading/Heading'
import exampleValidation from '@/validations/exampleValidation'

export default {
  data () {
    return {
      params: ''
    }
  },

  components: {
    OpButton,
    OpInput,
    OpWrapper,
    OpHeading
  },

  mixins: [exampleValidation]
}
</script>
