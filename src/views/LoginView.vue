<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from '@/components/Auth/LoginForm.vue';

import { supabase } from "@/utils/supabase";
import { setLoading } from "@/utils/loading";
import { setNotification } from "@/utils/notification";

export default {
  name: 'LoginView',
  components: {
    LoginForm,
  },
  setup() {
    const router = useRouter();

    const email = ref('app@gmail.com');
    const password = ref('password');

    const login = async () => {
      try {
        setLoading(true);

        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });

        if (error) throw error;

        await router.push("/profile");

        setNotification({
          title: "¡Bienvenid@",
          message: "¡Hola de nuevo!"
        });
      } catch (e) {
        setNotification({
          title: "Error autenticando",
          message: e.message,
        });
      } finally {
        setLoading(false);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<template>
  <login-form
    v-model:email="email"
    v-model:password="password"
    @onSubmit="login"
  />
</template>
