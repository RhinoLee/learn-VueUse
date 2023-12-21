import type { ComponentPublicInstance } from 'vue'
import type { MaybeRef, MaybeRefOrGetter } from '@/shared'
import { toValue } from '@/shared'

export type VueInstance = ComponentPublicInstance
// 泛型 T 被規範為 MaybeElement 或 MaybeElement 的子類型
export type MaybeElement = HTMLElement | SVGElement | VueInstance | undefined | null
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeRefOrGetter<T>

export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends VueInstance
  ? Exclude<MaybeElement, VueInstance>
  : T | undefined

/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
export function unrefElement<T extends MaybeElement>(
  elRef: MaybeComputedElementRef<T>
): UnRefElementReturn<T> {
  const plain = toValue(elRef)
  return (plain as VueInstance)?.$el ?? plain
}
