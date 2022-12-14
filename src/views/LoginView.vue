<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginForm from '@/components/Auth/LoginForm.vue';

export default {
  name: 'LoginView',
  components: {
    LoginForm,
  },
  setup() {
    const router = useRouter();

    const email = ref('app@gmail.com');
    const password = ref('prueba123');

    const login = async () => {};

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
