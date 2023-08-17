<template>
  <div class="flex items-center">
    <div class="mx-3 max-w-[75px] md:me-6 md:max-w-[100px] xl:max-w-[150px]">
      <BooksIcon />
    </div>
    <div>
      <div class="green text-2xl md:text-5xl mb-3">{{ title }}</div>
      <RouterLink to="/edit/author" tag='button'>
        <button
          class="rounded-lg ring-2 ring-green-900 py-2 px-4 mt-2 hover:ring-3 hover:ring-green-700 ease-out duration-200 hover:font-semibold"
          @click="changeHeader()"
        >
          Add Author
        </button>
      </RouterLink>
    </div>

    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </div>
</template>

<script setup lang="ts">
import { HeaderType, useHeaderStore } from '../../stores/headers'
import BooksIcon from '../icons/IconBooks.vue'

const { setCurrentHeader } = useHeaderStore()

const title = 'My Library'

const changeHeader = () => {
  setCurrentHeader(HeaderType.ADD_AUTHOR)
}
</script>
