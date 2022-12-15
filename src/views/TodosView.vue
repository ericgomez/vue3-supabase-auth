<script>
import { onMounted, ref, toRefs } from 'vue';
import TodoForm from '@/components/Todos/TodoForm.vue';
import TodoItem from '@/components/Todos/TodoItem.vue';
import { store } from '@/utils/store';
import { supabase } from '@/utils/supabase';
import { setLoading } from '@/utils/loading';
import { setNotification } from '@/utils/notification';

export default {
  name: 'Todos',
  components: {
    TodoForm,
    TodoItem,
  },
  setup() {
    const todo = ref('');
    const todos = ref([]);

    const getTodos = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("todos")
          .select(`id, task, is_complete, inserted_at`);

        if (error) throw error;

        todos.value = [];

        if (data.length) {
          data.forEach(todo => {
            todos.value.push(todo);
          });
        }
      } catch (e) {
        setNotification({
          title: "Error obteniendo tareas",
          message: e.message
        });
      } finally {
        setLoading(false);
      }
    };

    const addTodo = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);

        const { error } = await supabase
          .from("todos")
          .insert({
            user_id: store.user.id,
            task: todo.value,
            inserted_at: new Date(),
          });

        if (error) throw error;

        todo.value = "";

        await getTodos();
      } catch (e) {
        setNotification({
          title: "Error creando tarea",
          message: e.message
        });
      } finally {
        setLoading(false);
      }
    };

    const doneTodo = async (id) => {
      try {
        setLoading(true);

        const { error } = await supabase
          .from("todos")
          .update({
            is_complete: true,
          })
          .match({ id });

        await getTodos();
      } catch (e) {
        setNotification({
          title: "Error actualizando tarea",
          message: e.message
        });
      } finally {
        setLoading(false);
      }
    };

    const undoneTodo = async (id) => {
      try {
        setLoading(true);

        const { error } = await supabase
            .from("todos")
            .update({
              is_complete: false,
            })
            .match({ id });

        await getTodos();
      } catch (e) {
        setNotification({
          title: "Error actualizando tarea",
          message: e.message
        });
      } finally {
        setLoading(false);
      }
    };

    const removeTodo = async (id) => {
      try {
        setLoading(true);

        const { error } = await supabase
          .from("todos")
          .delete()
          .match({ id });

        if (error) throw error;

        await getTodos();
      } catch (e) {
        setNotification({
          title: "Error eliminando tarea",
          message: e.message
        });
      } finally {
        setLoading(false);
      }
    };

    onMounted(() => {
      getTodos();
    });

    return {
      todo,
      todos,
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
