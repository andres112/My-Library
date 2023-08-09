<template>
  <header>
    <div class="flex items-center">
      <div class="mx-3 max-w-[75px] md:me-6 md:max-w-[100px] xl:max-w-[150px]">
        <BooksIcon />
      </div>
      <div class="greetings">
        <div class="green text-2xl md:text-5xl mb-3">{{ title }}</div>
        <button
          class="rounded-lg ring-2 ring-green-900 py-2 px-4 mt-2 hover:ring-4 hover:ring-green-700 ease-out duration-200 hover:font-semibold"
        >
          Add Author
        </button>
      </div>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import BooksIcon from './icons/IconBooks.vue'

const title = 'My Library'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
