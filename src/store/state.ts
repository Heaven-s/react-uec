export interface InterfaceState {
  user: Object
}

export const defaultState = {
  user: {},
  browser: {
    width: window.innerWidth,
    height: window.innerHeight
  }
}
