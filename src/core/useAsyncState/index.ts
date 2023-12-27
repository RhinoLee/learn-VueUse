import { promiseTimeout } from '@/shared/utils'

export function useAsyncState() {
  async function execute(delay = 0) {
    if (delay > 0) {
      await promiseTimeout(delay)
    }

    console.log('start execute')
  }

  return { execute }
}
