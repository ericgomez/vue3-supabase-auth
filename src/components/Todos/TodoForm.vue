<script>
import TextInput from '@/components/Forms/TextInput.vue';

export default {
  name: 'TodoForm',
  components: { TextInput },
  props: ['todo'],
  emits: ['addTodo', 'update:todo'],
};
</script>

<template>
  <form @submit="$emit('addTodo', $event)">
    <TextInput
      id="todo"
      label="Tarea"
      :value="todo"
      @input="$emit('update:todo', $event.target.value)"
    />
  </form>
</template>
