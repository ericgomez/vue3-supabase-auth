<script>
export default {
  name: 'SubmitButton',
  props: ['text'],
};
</script>

<template>
  <button
    @click="$emit('onSubmit')"
    class="
      text-white
      bg-indigo-500
      border-0
      py-2
      px-8
      focus:outline-none
      hover:bg-indigo-600
      rounded
      text-lg
    "
  >
    {{ text }}
  </button>
</template>
