<template>
  <div class="h-[90vh] mt-10 divide-y divide-primary/25 overflow-y-auto">
    <div class="my-2">
      <img :src="author.photo" :alt="author.name" class="h-[250px] object-cover" />
    </div>
    <div class="text-lg col-span-4 flex flex-col">
      {{ author.name }} <small>{{ author.topWork }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditStore } from '@/stores/edit'
import { computed } from 'vue'
const store = useEditStore()

const author = computed(() => store.currentEditAuthor)
</script>
