import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TodoList from '@/components/TodoList'

const localVue = createLocalVue()
localVue.use(Vuex)
let store

describe('The TodoList component', () => {
  let wrapper
  const getters = {
    todos: jest.fn(() => [{
      description: 'First',
      done: false
    }, {
      description: 'Second',
      done: false
    }])
  }
  beforeEach(() => {
    store = new Vuex.Store({ getters })
    wrapper = shallowMount(TodoList, {
      localVue,
      store
    })
  })

  function elementText (testId) {
    return wrapper.find(`[data-testid="${testId}"]`).text()
  }

  it('should can be mounted', function () {
    expect(wrapper.exists()).toBe(true)
  })

  it('should display the items in the order they are present in the store', function () {
    expect(elementText('todo-0')).toMatch('First')
    expect(elementText('todo-1')).toMatch('Second')
  })
})
