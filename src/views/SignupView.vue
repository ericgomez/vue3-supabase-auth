<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SignupForm from '@/components/Auth/SignupForm.vue';

export default {
  name: 'SignupView',
  components: { SignupForm },
  setup() {
    const router = useRouter();

    const email = ref('app@gmail.com');
    const password = ref('password');

    const signup = async () => {};

    return {
      email,
      password,
      signup,
    };
  },
};
</script>

<template>
  <signup-form
    v-model:email="email"
    v-model:password="password"
    @onSubmit="signup"
  />
</template>
