<script>
import { onMounted, reactive, ref, toRefs } from 'vue';
import TodoForm from '@/components/Todos/TodoForm.vue';
import TodoItem from '@/components/Todos/TodoItem.vue';
export default {
  name: 'Todos',
  components: {
    TodoForm,
    TodoItem,
  },
  setup() {
    const todo = ref('');
    const todoData = reactive({
      todos: [],
    });

    const getTodos = async () => {};

    const addTodo = async (e) => {
      e.preventDefault();
    };

    const doneTodo = async (id) => {};

    const undoneTodo = async (id) => {};

    const removeTodo = async (id) => {};

    onMounted(() => {
      getTodos();
    });

    return {
      todo,
      ...toRefs(todoData),
      addTodo,
      doneTodo,
      undoneTodo,
      removeTodo,
    };
  },
};
</script>

<template>
  <section class="text-gray-600 body-font">
    <div
      class="
        h-100
        w-full
        flex
        items-center
        justify-center
        bg-teal-lightest
        font-sans
      "
    >
      <div class="bg-white rounded shadow p-6 m-4 w-full container max-w-3xl">
        <div class="mb-4">
          <h1 class="text-gray-800 font-extrabold text-3xl text-center">
            Lista de tareas
          </h1>
          <div class="mt-2 mb-2">
            <TodoForm v-model:todo="todo" @addTodo="addTodo" />
          </div>
        </div>

        <div v-if="todos.length">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @done="doneTodo(todo.id)"
            @undone="undoneTodo(todo.id)"
            @remove="removeTodo(todo.id)"
          />
        </div>

        <div class="w-full z-50" v-else>
          <div
            class="
              bg-red-100
              border border-red-400
              text-gray-700
              px-4
              py-3
              rounded
              relative
            "
            role="alert"
          >
            <strong class="font-bold">No hay tareas</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
