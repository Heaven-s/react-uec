export const todosReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          text: action.text,
        },
      ]
    // ... other actions ...
    default:
      return state
  }
}
