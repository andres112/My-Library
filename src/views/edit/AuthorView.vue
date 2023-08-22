<template>
  <div class="h-screen mt-10 divide-y divide-primary/25 overflow-y-auto">
    <div class="mt-4 flex flex-col">
      <label class="text-sm"> Name </label>
      <div class="text-xl font-semibold capitalize">This is an about page</div>
    </div>

    <div class="mt-4 flex flex-col">
      <label class="text-sm my-4"> Bio </label>
      <div class="text-base">{{ author?.details.bio }}</div>
      <img :src="photoAuthor" alt="author" />
      <pre>
        {{ author?.details }}	
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
//TODO: Just for testing move to AddAuthor component
import { onMounted, ref, computed } from 'vue';
import { useAuthor } from '../../hooks/useAuthor'

const { getAuthor } = {...useAuthor()}
const author = ref()

const photoAuthor = computed(() => {
  if (!author.value) return
  return URL.createObjectURL(author.value.image)
})
onMounted(async () => {
  author.value = await getAuthor("Stephen king")
})


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
