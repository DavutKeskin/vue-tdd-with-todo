import todo from '@/store/todo'

describe('The todo store', () => {
  it('uses a function to generate the initial state', () => {
    const newState = todo.state()
    expect(newState).not.toBeDefined()
  })
})
