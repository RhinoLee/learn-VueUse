import { promiseTimeout } from '@/shared/utils'
import { noop } from '@/shared'
import { shallowRef, ref } from 'vue'

// 看不懂原始碼 Shallow extends boolean 的用意，所以只留下 D = any 這個泛形
export interface UseAsyncStateOptions<D = any> {
  /**
   * Delay for executing the promise. In milliseconds.
   *
   * @default 0
   */
  delay?: number

  /**
   * Execute the promise right after the function is invoked.
   * Will apply the delay if any.
   *
   * When set to false, you will need to execute it manually.
   *
   * @default true
   */
  immediate?: boolean

  /**
   * Callback when error is caught.
   */
  onError?: (e: unknown) => void

  /**
   * Callback when success is caught.
   * @param {D} data
   */
  onSuccess?: (data: D) => void

  /**
   * Sets the state to initialState before executing the promise.
   *
   * This can be useful when calling the execute function more than once (for
   * example, to refresh data). When set to false, the current state remains
   * unchanged until the promise resolves.
   *
   * @default true
   */
  resetOnExecute?: boolean

  /**
   * Use shallowRef.
   *
   * @default true
   */
  shallow?: boolean
  /**
   *
   * An error is thrown when executing the execute function
   *
   * @default false
   */
  throwError?: boolean
}

export function useAsyncState(promise: any, initState: any, options: UseAsyncStateOptions) {
  const {
    immediate = true,
    delay = 0,
    onError = noop,
    onSuccess = noop,
    resetOnExecute = true,
    shallow = true,
    throwError
  } = options ?? {}

  const state = shallow ? shallowRef(initState) : initState
  const isReady = ref(false)
  const isLoading = ref(false)
  const error = shallowRef<unknown | undefined>(undefined)

  async function execute(delay = 0, ...args: any[]) {
    if (resetOnExecute) state.value = initState

    isLoading.value = true
    isReady.value = false
    error.value = undefined

    if (delay > 0) {
      await promiseTimeout(delay)
    }

    const _promise = typeof promise === 'function' ? promise(...args) : promise

    try {
      const data = await _promise
      state.value = data
      isReady.value = true
      onSuccess(data)
    } catch (err) {
      error.value = err
      onError(err)
      if (throwError) throw err
    } finally {
      isLoading.value = false
    }

    return state.value
  }

  if (immediate) execute(delay)

  return { isLoading, isReady, state, error, execute }
}
