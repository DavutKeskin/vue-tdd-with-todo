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

  const mutations = {
    TOGGLE_TODO: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
    store = new Vuex.Store({
      getters,
      mutations
    })
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
    expect(getters.todos).toHaveBeenCalledTimes(1)
    expect(elementText('todo-0')).toMatch('First')
    expect(elementText('todo-1')).toMatch('Second')
  })

  it('should "items can be marked as done by clicking an element before the item', async function () {
    await wrapper.find('[data-testid="todo-0-toggle"]').trigger('click')
    expect(mutations.TOGGLE_TODO).toHaveBeenCalledWith({}, {
      description: 'First',
      done: false
    })
  })
})
