<template>
  <div class="h-[90vh] mt-10 divide-y divide-primary/25 overflow-y-auto">
    <div v-if="store.loading" class="text-2xl">Loading...</div>
    <div v-if="store.authorList.length === 0 && !store.loading" class="text-2xl">Author not found</div>
    <div
      v-else
      class="grid grid-cols-5 items-center cursor-pointer hover:bg-primary/25 px-2"
      v-for="author in store.authorList"
      :key="author.key"
      @click.prevent='selectAuthor(author)'
    >
      <div class="my-2">
        <img :src="author.photo" :alt="author.name" class="h-[75px] object-cover" />
      </div>
      <div class="text-lg col-span-4 flex flex-col">
        {{ author.name }} <small>{{ author.topWork }}</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditStore } from '@/stores/edit'
import { watch } from 'vue'
import { type SummaryAuthor } from '../../models/author';
import router from '@/router';
const store = useEditStore()

const selectAuthor = (author: SummaryAuthor) => {
  if (!author) return
  store.setCurrentEditAuthor(author)
  // route to the route with name edit_author_id id: author.key
  router.push(`/edit/author/${author.key}`)
}

watch(store.authorList, (newVal) => {
  console.log(newVal)
})
</script>
