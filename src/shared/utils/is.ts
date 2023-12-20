export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'

export const isObject = (val: any): val is object => toString.call(val) === '[object Object]'

export const noop = () => {}
