<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginMagicLinkForm from '@/components/Auth/LoginMagicLinkForm.vue';

export default {
  name: 'LoginMagicLinkView',
  components: {
    LoginMagicLinkForm,
  },
  setup() {
    const router = useRouter();

    const email = ref('app@gmail.com');

    const login = async () => {};

    return {
      email,
      login,
    };
  },
};
</script>

<template>
  <login-magic-link-form v-model:email="email" @onSubmit="login" />
</template>
