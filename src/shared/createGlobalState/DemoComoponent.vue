<script setup lang="ts">
import { useGlobalState } from './store'

const store = useGlobalState()
</script>

<template>
  <div>
    <h2>I am child</h2>
    <div>{{ store.count }}</div>
    <div>{{ store.doubleCount }}</div>
  </div>
</template>
