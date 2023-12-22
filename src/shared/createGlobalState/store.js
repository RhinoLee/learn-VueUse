import { computed, ref } from 'vue'
import { createGlobalState } from './index'

export const useGlobalState = createGlobalState(() => {
  // state
  const count = ref(0)

  // getters
  const doubleCount = computed(() => count.value * 2)

  // actions
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
