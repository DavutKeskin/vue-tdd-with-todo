import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo'

describe('The Todo.vue component', () => {
  it('can be mounted', () => {
    const wrapper = shallowMount(Todo)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Display the title when passed a prop', () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: 'Props passed title'
      }
    })
    expect(wrapper.text()).toMatch('Props passed title')
  })
})
