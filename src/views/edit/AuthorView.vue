<template>
  <div class="h-screen mt-10 divide-y divide-primary/25">
    <div class='mt-4 flex flex-col'>
      <label class="text-sm"> Name </label>
      <div class="text-xl font-semibold capitalize">This is an about page</div>
    </div>

    <div class='mt-4 flex flex-col'>
      <label class="text-sm mt-4"> Description </label>
      <div class="text-base">This is an about page</div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
