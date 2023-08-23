<template>
  <div class="h-[90vh] mt-10 divide-y divide-primary/25 overflow-y-auto">
    <div v-if="store.authorList.length === 0" class="text-2xl">Author not found</div>
    <div
      v-else
      class="grid grid-cols-3 my-4 items-center"
      v-for="author in store.authorList"
      :key="author.key"
    >
      <img :src="author.photo" :alt="author.name" class="h-[75px] object-cover" />
      <div class="text-lg col-span-2 flex flex-col">
        {{ author.name }} <small>{{ author.topWork }}</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditStore } from '@/stores/edit'
import { watch } from 'vue'
const store = useEditStore()

watch(store.authorList, (newVal) => {
  console.log(newVal)
})
</script>
