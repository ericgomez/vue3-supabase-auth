<script>
import AuthFormLayout from '@/layouts/AuthFormLayout.vue';
import TextInput from '@/components/Forms/TextInput.vue';
import SubmitButton from '@/components/Forms/SubmitButton.vue';

export default {
  name: 'LoginForm',
  components: {
    SubmitButton,
    TextInput,
    AuthFormLayout,
  },
  props: ['email', 'password'],
  emits: ['onSubmit', 'update:email', 'update:password'],
};
</script>

<template>
  <AuthFormLayout>
    <template #title> Desde aquí puedes acceder a tu cuenta </template>
    <template #subtitle>
      Simplemente rellena el formulario y accede a tus datos
    </template>
    <template #formTitle> Iniciar sesión </template>

    <template #form>
      <TextInput
        id="email"
        label="Correo electrónico"
        type="email"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
      />

      <TextInput
        id="password"
        label="Contraseña"
        type="password"
        :value="password"
        @input="$emit('update:password', $event.target.value)"
      />

      <SubmitButton text="Acceder" @onSubmit="$emit('onSubmit')" />
    </template>
  </AuthFormLayout>
</template>
