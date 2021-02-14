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

  function expectMutationToHaveBeenCalledWith (item) {
    expect(mutations.ADD_TODO).toHaveBeenCalledWith({}, item)
  }

  it('should can be mounted', function () {
    expect(wrapper.exists()).toBe(true)
  })

  it('empties the input field when todo has been added', async () => {
    await addTodo('this is not important')
    expect(wrapper.find('[data-testid="todo-input"]').element.value).toEqual('')
  })

  it('should allows for adding todo item', async function () {
    await addTodo('My first todo item')
    expectMutationToHaveBeenCalledWith('My first todo item')
  })

  it('should allows for adding one todo item', async function () {
    await addTodo('My first todo item')
    await addTodo('My second todo item')

    expect(mutations.ADD_TODO).toHaveBeenCalledTimes(2)
    expectMutationToHaveBeenCalledWith('My first todo item')
    expectMutationToHaveBeenCalledWith('My second todo item')
  })
})
