<script>
export default {
  name: 'TextInput',
  props: ['id', 'label', 'value', 'type'],
};
</script>

<template>
  <div class="relative mb-4">
    <label :for="id" class="leading-7 text-sm text-gray-600">
      {{ label }}
    </label>
    <input
      :value="value"
      autocomplete="off"
      :type="type"
      :id="id"
      class="
        w-full
        bg-white
        rounded
        border border-gray-300
        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
        text-base
        outline-none
        text-gray-700
        py-1
        px-3
        leading-8
        transition-colors
        duration-200
        ease-in-out
      "
    />
  </div>
</template>
