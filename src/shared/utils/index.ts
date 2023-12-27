export * from './is'
export * from './types'
export * from './filters'

export function promiseTimeout(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
