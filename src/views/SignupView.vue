<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SignupForm from '@/components/Auth/SignupForm.vue';

import { supabase } from "@/utils/supabase";
import { setLoading } from "@/utils/loading";
import { setNotification } from "@/utils/notification";

export default {
  name: 'SignupView',
  components: { SignupForm },
  setup() {
    const router = useRouter();

    const email = ref('app@gmail.com');
    const password = ref('password');

    const signup = async () => {
      try {
        setLoading(true);

        const { data } = await supabase
            .from('profiles')
            .select('id')
            .eq('username', email.value)
            .single()

        if(data) {
          throw Error('¡El usuario ya está registrado!');
        }

        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value
        });

        if(error) throw error;

        // ok
        await router.push('/profile');

        setNotification({
          title: 'Cuenta creada',
          message: '¡Tu cuenta se ha creado con éxito! Revisa tu correo y confirma'
        });

      } catch (e) {
        setNotification({
          title: '¡Error creando cuenta!',
          message: e.message
        });
      } finally {
        setLoading(false);
      }
    };

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
