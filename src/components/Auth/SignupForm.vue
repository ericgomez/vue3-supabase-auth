<script>
import AuthFormLayout from '@/layouts/AuthFormLayout.vue';
import TextInput from '@/components/Forms/TextInput.vue';
import SubmitButton from '@/components/Forms/SubmitButton.vue';

export default {
  name: 'SignupForm',
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
    <template #title> Desde aquí puedes crear una nueva cuenta </template>

    <template #subtitle>
      Simplemente rellena el formulario y automáticamente tendrás acceso a todos
      los servicios de la plataforma
    </template>

    <template #formTitle> Formulario de registro </template>

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

      <SubmitButton text="Crear cuenta" @onSubmit="$emit('onSubmit')" />
    </template>
  </AuthFormLayout>
</template>
