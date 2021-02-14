import { createLocalVue, shallowMount } from '@vue/test-utils'
import TodoInput from '@/components/TodoInput'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
let store
describe('The todo input component', function () {

  let wrapper

  const mutations = {
    ADD_TODO: jest.fn()
  }

  beforeEach(function () {
    jest.clearAllMocks()
    store = new Vuex.Store({
      mutations
    })
    wrapper = shallowMount(TodoInput, {
      localVue,
      store
    })
  })

  async function addTodo (todoText) {
    wrapper.find('[data-testid="todo-input"]').setValue(todoText)
    await wrapper.find('[data-testid="todo-submit"]').trigger('click')
  }

  it('should can be mounted', function () {
    expect(wrapper.exists()).toBe(true)
  })

  it('empties the input field when todo has been added', async () => {
    await addTodo('this is not important')
    expect(wrapper.find('[data-testid="todo-input"]').element.value).toEqual('')
  })

  it('should allows for adding one todo item', async function () {
    await addTodo('My first todo item')
    await addTodo('My second todo item')

    expect(mutations.ADD_TODO).toHaveBeenCalledTimes(2)
    expect(mutations.ADD_TODO).toHaveBeenCalledWith({}, 'My first todo item')
    expect(mutations.ADD_TODO).toHaveBeenCalledWith({}, 'My second todo item')
  })
})
