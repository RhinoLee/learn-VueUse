import type { AnyFn } from '../utils'

export const createGlobalState = (stateFactory: AnyFn) => {
  let initialized = false
  let state: any

  return () => {
    if (!initialized) {
      state = stateFactory()
      initialized = true
    }

    return state
  }
}
