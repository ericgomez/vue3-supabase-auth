<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginMagicLinkForm from '@/components/Auth/LoginMagicLinkForm.vue';
import { supabase } from '@/utils/supabase';
import { setLoading } from '@/utils/loading';
import { setNotification } from '@/utils/notification';

export default {
  name: 'LoginMagicLinkView',
  components: {
    LoginMagicLinkForm,
  },
  setup() {
    const router = useRouter();

    const email = ref('app@gmail.com');

    const login = async () => {
      try {
        setLoading(true);

        const { error } = await supabase.auth.signIn({
          email: email.value,
        });

        if (error) throw error;

        setNotification({
          title: "¡Revisa tu correo!",
          message: "¡Te hemos enviado un enlace para iniciar sesión!"
        });
      } catch (e) {
        setNotification({
          title: "Error autenticando",
          message: e.message,
        });
      } finally {
        setLoading(false);
      }
    }

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
