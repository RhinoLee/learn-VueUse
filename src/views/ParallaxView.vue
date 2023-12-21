<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CSSProperties } from 'vue'
import { useParallax } from '@/core'

const target = ref(null)
const { roll, tilt } = useParallax(target)

const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px'
}

const cardWindowStyle: CSSProperties = {
  position: 'absolute',
  fontSize: '6rem',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
  width: '2em',
  height: '2em'
}

const cardStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  background: '#fff',
  height: '20rem',
  width: '15rem',
  borderRadius: '5px',
  border: '1px solid #cdcdcd',
  overflow: 'hidden',
  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',
  transform: `rotateX(${roll.value * 20}deg) rotateY(${tilt.value * 20}deg)`,
  transition: '.1s ease-out all'
}))

// 處理 cardWindow 內部圖層
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all'
}

const layer0 = computed<CSSProperties>(() => ({
  ...layerBase,
  transform: `translateX(${tilt.value * 10}px) translateY(${roll.value * 10}px) scale(1.35)`
}))

const layer1 = computed<CSSProperties>(() => ({
  ...layerBase,
  transform: `translateX(${tilt.value * 20}px) translateY(${roll.value * 20}px) scale(1.35)`
}))

const layer2 = computed<CSSProperties>(() => ({
  ...layerBase,
  transform: `translateX(${tilt.value * 30}px) translateY(${roll.value * 30}px) scale(1.35)`
}))

const layer3 = computed<CSSProperties>(() => ({
  ...layerBase,
  transform: `translateX(${tilt.value * 40}px) translateY(${roll.value * 40}px) scale(1.35)`
}))
</script>

<template>
  <div>
    <div ref="target">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <div :style="cardWindowStyle">
            <img
              :style="layer0"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer0.png"
              alt=""
            />
            <img
              :style="layer1"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer1.png"
              alt=""
            />
            <img
              :style="layer2"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer2.png"
              alt=""
            />
            <img
              :style="layer3"
              src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="note opacity-1">
        Credit of images to
        <a href="https://codepen.io/jaromvogel" target="__blank">Jarom Vogel</a>
      </div>
    </div>
  </div>
</template>
