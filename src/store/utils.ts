export const bindActionCreators = (actionCreators: any, dispatch: any) => {
  console.log('bindActionCreatorsbindActionCreators')
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(
      'bindActionCreators expected an object or a function, instead received ' +
        (actionCreators === null ? 'null' : typeof actionCreators) +
        '. ' +
        'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
    )
  }

  var keys = Object.keys(actionCreators)
  var boundActionCreators: any = {}
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    var actionCreator = actionCreators[key]

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }

  return boundActionCreators
}

function bindActionCreator(actionCreator: any, dispatch: any) {
  return function (this: any) {
    return dispatch(actionCreator.apply(this, arguments))
  }
}
