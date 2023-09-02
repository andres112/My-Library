<template>
  <div class="h-[90vh] mt-10 divide-y divide-primary/25 overflow-y-auto">
    <div v-if="store.loading" class="loader text-2xl"></div>
    <div v-if="store.authorList.length === 0 && !store.loading" class="text-2xl">
      Author not found
    </div>
    <div
      v-else
      class="grid grid-cols-5 items-center cursor-pointer hover:bg-primary/25 px-2"
      v-for="author in store.authorList"
      :key="author.key"
      @click.prevent="selectAuthor(author)"
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
import { type SummaryAuthor } from '../../models/author'
import router from '@/router'
import { useAuthor } from '@/hooks/useAuthor'

const store = useEditStore()
const { getAuthorPhoto } = { ...useAuthor() }

const selectAuthor = async (author: SummaryAuthor) => {
  if (!author) return
  const authorPhoto = await getAuthorPhoto(author.key, 'L')
  if (authorPhoto) author.photo = URL.createObjectURL(authorPhoto)
  store.setCurrentEditAuthor(author)
  // route to the route with name edit_author_id id: author.key
  router.push(`/edit/author/${author.key}`)
}

watch(store.authorList, (newVal) => {
  console.log(newVal)
})
</script>

<style lang="scss">
.loader {
  --w: 10ch;
  font-weight: bold;
  line-height: 1.4em;
  letter-spacing: var(--w);
  width: var(--w);
  overflow: hidden;
  white-space: nowrap;
  color: white;
  text-shadow:
    calc(0 * var(--w)) 0 white,
    calc(-1 * var(--w)) 0 white,
    calc(-2 * var(--w)) 0 white,
    calc(-3 * var(--w)) 0 white,
    calc(-4 * var(--w)) 0 white,
    calc(-5 * var(--w)) 0 white,
    calc(-6 * var(--w)) 0 white,
    calc(-7 * var(--w)) 0 white,
    calc(-8 * var(--w)) 0 white,
    calc(-9 * var(--w)) 0 white;
  animation: l20 2s infinite linear;
}
.loader:before {
  content: 'Loading...';
}

@keyframes l20 {
  9.09% {
    text-shadow:
      calc(0 * var(--w)) -10px white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) 0 white;
  }
  18.18% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) -10px white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) 0 white;
  }
  27.27% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) -10px white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) 0 white;
  }
  36.36% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) -10px white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) 0 white;
  }
  45.45% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) -10px white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) 0 white;
  }
  54.54% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) -10px white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) 0 white;
  }
  63.63% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) -10px white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) 0 white;
  }
  72.72% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) -10px white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) 0 white;
  }
  81.81% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) -10px white,
      calc(-9 * var(--w)) 0 white;
  }
  90.90% {
    text-shadow:
      calc(0 * var(--w)) 0 white,
      calc(-1 * var(--w)) 0 white,
      calc(-2 * var(--w)) 0 white,
      calc(-3 * var(--w)) 0 white,
      calc(-4 * var(--w)) 0 white,
      calc(-5 * var(--w)) 0 white,
      calc(-6 * var(--w)) 0 white,
      calc(-7 * var(--w)) 0 white,
      calc(-8 * var(--w)) 0 white,
      calc(-9 * var(--w)) -10px white;
  }
}
</style>
