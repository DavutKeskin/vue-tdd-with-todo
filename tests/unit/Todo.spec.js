import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo'

describe('The Todo.vue component', () => {
  it('can be mounted', () => {
    const wrapper = shallowMount(Todo)
    expect(wrapper.exists()).toBeTruthy()
  })
})
