<script>
import { ref, toRefs, watch } from 'vue';

export default {
  name: 'Avatar',
  props: {
    path: String,
  },
  emits: ['upload', 'update:path'],

  setup(prop, { emit }) {
    const { path } = toRefs(prop);
    const src = ref('');
    const files = ref();

    const downloadImage = async () => {};

    const uploadAvatar = async (evt) => {};

    watch(path, () => {
      path.value ? downloadImage() : '';
    });

    return {
      path,
      src,
      files,
      uploadAvatar,
    };
  },
};
</script>

<template>
  <div>
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="
        w-40
        h-40
        rounded-full
        inline-flex
        items-center
        justify-center
        bg-gray-100
      "
    />
    <div v-else>
      <div
        class="
          w-32
          h-32
          rounded-full
          inline-flex
          items-center
          justify-center
          bg-gray-100
        "
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-20 h-20"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="flex flex-col items-center text-center justify-center">
        <h2 class="font-medium title-font mt-4 text-gray-900 text-lg"></h2>
        <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
      </div>
    </div>

    <div class="w-full items-center justify-center mt-6">
      <label
        for="single"
        class="
          bg-indigo-500
          hover:bg-indigo-400
          text-white
          font-bold
          py-2
          px-4
          border-b-4 border-indigo-700
          hover:border-indigo-500
          rounded
        "
      >
        Subir
      </label>
      <input
        style="visibility: hidden; position: absolute"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar($event)"
      />
    </div>
  </div>
</template>
