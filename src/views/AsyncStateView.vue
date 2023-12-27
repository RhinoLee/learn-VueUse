<script setup lang="ts">
import axios from 'axios'
import YAML from 'js-yaml'
import { useAsyncState } from '@/core/useAsyncState'

const { execute } = useAsyncState()
execute(2000)
</script>

<template>
  <div><h1>useAsyncState</h1></div>
  <!-- <div>
    <note>Ready: {{ isReady.toString() }}</note>
    <note>Loading: {{ isLoading.toString() }}</note>
    <pre lang="json" class="ml-2">{{ YAML.dump(state) }}</pre>
    <button @click="execute(2000, { id: 2 })">Execute</button>
  </div> -->
</template>
