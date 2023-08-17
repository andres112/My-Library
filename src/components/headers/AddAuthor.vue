<template>
  <div class="flex items-center">
    <div class="mx-3 max-w-[75px] md:me-6 md:max-w-[100px] xl:max-w-[150px]">
      <AuthorIcon />
    </div>
    <div>
      <input
        class="text-lg md:text-2xl mb-3 w-full bg-transparent hover:border-b-2 focus-visible:border-b focus-visible:outline-none py-3"
        placeholder="Author`s name"
        v-model="author"
      />
      <div class="flex gap-6">
        <RouterLink to="/">
          <button
            class="rounded-lg ring-2 ring-orange-900 py-2 px-4 mt-2 hover:ring-3 hover:ring-orange-700 ease-out duration-200 hover:font-semibold"
            @click="changeHeader()"
          >
            Home
          </button>
        </RouterLink>
        <button
          class="rounded-lg ring-2 ring-green-900 py-2 px-4 mt-2 hover:ring-3 hover:ring-green-700 ease-out duration-200 hover:font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeaderType, useHeaderStore } from '../../stores/headers'
import AuthorIcon from '../icons/IconAuthor.vue'
import { ref } from 'vue'

const { setCurrentHeader } = useHeaderStore()

const author = ref('')
const changeHeader = () => {
  setCurrentHeader(HeaderType.MAIN)
}
</script>
