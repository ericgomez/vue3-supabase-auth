<script>
import { loading } from '@/utils/loading';

export default {
  name: 'Loading',
  setup() {
    return { loading };
  },
};
</script>

<template>
  <div
    class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
    v-if="loading"
  >
    <div
      class="
        text-indigo-800
        opacity-75
        top-1/2
        my-0
        mx-auto
        block
        relative
        w-0
        h-0
      "
      style="top: 50%"
    >
      <div
        class="
          inline-block
          animate-spin
          ease
          duration-300
          w-10
          h-10
          rounded
          mx-2
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-hp-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
