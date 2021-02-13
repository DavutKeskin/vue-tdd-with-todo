import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo'

describe('The Todo.vue component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      propsData: {
        title: 'My List'
      }
    })
  })

  async function addTodo (todoText) {
    wrapper.find('[data-testid="todo-input"]').setValue(todoText)
    await wrapper.find('[data-testid="todo-submit"]').trigger('click')
  }

  it('can be mounted', () => {
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

  it('allows for adding one todo item', async () => {
    wrapper.find('[data-testid="todo-input"]').setValue('my first todo item')
    await wrapper.find('[data-testid="todo-submit"]').trigger('click')
    expect(wrapper.find('[data-testid="todos"]').text()).toContain('my first todo item')
  })

  it('allows for more than  one todo item to be added', async () => {
    await addTodo('my first todo item')
    await addTodo('my second todo item')
    expect(wrapper.find('[data-testid="todos"]').text()).toContain('my first todo item')
    expect(wrapper.find('[data-testid="todos"]').text()).toContain('my second todo item')
  })

  it('empties the input field when todo has been added', async () => {
    await addTodo('this is not important')
    expect(wrapper.find('[data-testid="todo-input"]').element.value).toEqual('')
  })

  it('items can be marked as done by clicking an element before the item ', async () => {
    await addTodo('First')
    await addTodo('Second')
    expect(wrapper.find('[data-testid="todo-0-toggle"]').text()).toContain('Mark done')
    await wrapper.find('[data-testid="todo-0-toggle"]').trigger('click')
    expect(wrapper.find('[data-testid="todo-0-toggle"]').text()).toEqual('Done')
  })
})
