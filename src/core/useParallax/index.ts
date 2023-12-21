import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { MaybeElementRef } from '../unrefElement'
import { useMouseInElement } from '../useMouseInElement'
import { defaultWindow } from '../_configurable'

export interface UseParallaxReturn {
  /**
   * Roll value. Scaled to `-0.5 ~ 0.5`
   */
  roll: ComputedRef<number>
  /**
   * Tilt value. Scaled to `-0.5 ~ 0.5`
   */
  tilt: ComputedRef<number>
  /**
   * Sensor source, can be `mouse` or `deviceOrientation`
   */
  source: ComputedRef<'deviceOrientation' | 'mouse'>
}

export function useParallax(target: MaybeElementRef): UseParallaxReturn {
  const { elementX, elementY, elementWidth, elementHeight } = useMouseInElement(target, {
    handleOutside: false,
    window: defaultWindow
  })

  const roll = computed(() => {
    return -(elementY.value - elementHeight.value / 2) / elementHeight.value
  })

  /**
   * elementX.value => 滑鼠指標以 target 為基準的相對座標
   * elementX.value / 2 會等於 elementWidth.value / 2
   * 所以這時候會是 0，不傾斜
   */
  const tilt = computed(() => {
    return (elementX.value - elementWidth.value / 2) / elementWidth.value
  })

  const source = computed<'mouse' | 'deviceOrientation'>(() => {
    return 'mouse'
  })

  return { roll, tilt, source }
}
