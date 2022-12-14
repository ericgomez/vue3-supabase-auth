<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
};
</script>

<template>
  <div class="flex mb-4 items-center">
    <p class="w-full line-through text-green-500" v-if="todo.is_complete">
      {{ todo.task }}
    </p>
    <p class="w-full text-gray-500" v-else>{{ todo.task }}</p>
    <button
      v-if="!todo.is_complete"
      class="
        flex-no-shrink
        p-2
        ml-4
        mr-2
        border-2
        rounded
        hover:text-white
        text-gray-500
        border-gray-500
        hover:bg-gray-500
      "
      @click="$emit('done')"
    >
      Hacer
    </button>
    <button
      v-else
      class="
        flex-no-shrink
        p-2
        ml-4
        mr-2
        border-2
        rounded
        hover:text-white
        text-gray-500
        border-gray-500
        hover:bg-gray-500
      "
      @click="$emit('undone')"
    >
      Deshacer
    </button>
    <button
      class="
        flex-no-shrink
        p-2
        ml-2
        border-2
        rounded
        text-red-500
        border-red
        hover:text-white hover:bg-red-500
      "
      @click="$emit('remove')"
    >
      Eliminar
    </button>
  </div>
</template>
