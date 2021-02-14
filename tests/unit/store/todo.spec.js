import todo from '@/store/todo'

describe('The todo store', () => {
  it('uses a function to generate the initial state', () => {
    const newState = todo.state()
    expect(newState).not.toBeUndefined()
  })

  it('stores the todos at the todos key', () => {
    const newState = todo.state()
    expect(newState).toEqual({ todos: [] })
  })
})

describe('the mutations', function () {
  let state
  beforeEach(function () {
    state = todo.state()
  })

  it('should the mutations', function () {
    todo.mutations.ADD_TODO(state, 'A random todo description')

    expect(state).toEqual({
      todos: [{
        description: 'A random todo description',
        done: false
      }]
    })
  })

  it('should can be added using the add ADD_TODO mutation passing a description', function () {
    todo.mutations.ADD_TODO(state, 'Another todo description')

    expect(state).toEqual({
      todos: [{
        description: 'Another todo description',
        done: false
      }]
    })
  })

  it('should the order in which the todos are added are preserved in the state ', function () {

    todo.mutations.ADD_TODO(state, 'First todo')
    todo.mutations.ADD_TODO(state, 'Second todo')

    expect(state).toEqual({
      todos: [
        {
          description: 'First todo',
          done: false
        },
        {
          description: 'Second todo',
          done: false
        }
      ]
    })
  })
})
