function reducer(state: any, action: any) {
  console.log('reducer state', state)
  console.log('reducer action', action)
  switch (action.type) {
    case 'ADD': // 加
      return Object.assign({}, state, {
        type: 'add',
        index: ++state.index,
      })
    case 'DOWN': // 减
      return Object.assign({}, state, {
        type: 'down',
        index: --state.index,
      })
    case 'FETCH': //请求
      return Object.assign({}, state)
    default:
      // 重置
      return Object.assign({}, state, {
        index: 1,
      })
  }
}

export default reducer
