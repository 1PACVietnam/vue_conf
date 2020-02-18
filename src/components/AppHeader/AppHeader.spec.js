import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader/AppHeader'

const wrapper = shallowMount(AppHeader)

describe('AppHeader.vue', () => {
  it('should render correctly', () => {
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.element).toMatchSnapshot()
  })
})
