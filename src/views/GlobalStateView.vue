<script setup lang="ts">
import { useGlobalState } from '@/shared/createGlobalState/store'
import DemoComponent from '@/shared/createGlobalState/DemoComoponent.vue'

const store = useGlobalState()
</script>

<template>
  <div>
    <div>{{ store.count }}</div>
    <div>{{ store.doubleCount }}</div>
    <button @click="store.increment">+ 1</button>
    <hr />
    <DemoComponent></DemoComponent>
  </div>
</template>
