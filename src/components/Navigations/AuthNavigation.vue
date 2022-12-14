<script>
import { useRouter } from 'vue-router';
import { supabase } from "@/utils/supabase";
import { setNotification } from "@/utils/notification";

export default {
  name: 'AuthNavigation',
  props: ['user'],
  setup() {
    const router = useRouter()

    const logout = async () => {
      await supabase.auth.signOut()
      await router.push("/login")

      setNotification({
        title: "Has cerrado sesión",
        message: "😢 Hasta la próxima..."
      })
    }

    return {
      logout,
    };
  },
};
</script>

<template>
  <header class="text-white bg-gray-900 body-font" v-if="user">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <a
        class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl">Vue 3 Supabase Auth</span>
        <small class="ml-1 text-indigo-400">(Hola {{ user.email }})</small>
      </a>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <router-link
          to="/todos"
          active-class="border-b-2 border-indigo-800"
          class="mr-5 hover:text-gray-400"
        >
          Tareas
        </router-link>
        <router-link
          to="/profile"
          active-class="border-b-2 border-indigo-800"
          class="mr-5 hover:text-gray-400"
        >
          Mi perfil
        </router-link>
        <a href="#" @click.prevent="logout" class="mr-5 hover:text-gray-400">
          Cerrar sesión
        </a>
      </nav>
    </div>
  </header>
</template>
