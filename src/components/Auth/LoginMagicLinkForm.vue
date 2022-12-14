<script>
import AuthFormLayout from '@/layouts/AuthFormLayout.vue';
import TextInput from '@/components/Forms/TextInput.vue';
import SubmitButton from '@/components/Forms/SubmitButton.vue';

export default {
  name: 'LoginMagicLinkForm',
  components: {
    SubmitButton,
    TextInput,
    AuthFormLayout,
  },
  props: ['email'],
  emits: ['onSubmit', 'update:email'],
};
</script>

<template>
  <AuthFormLayout>
    <template #title>
      Desde aquí puedes acceder a tu cuenta con MagicLink
    </template>
    <template #subtitle>
      Simplemente introduce tu correo electrónico y te enviaremos un enlace a tu
      correo electrónico
    </template>
    <template #formTitle> Acceso con MagicLink </template>

    <template #form>
      <TextInput
        id="email"
        label="Correo electrónico"
        type="email"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
      />

      <SubmitButton text="Solicitar acceso" @onSubmit="$emit('onSubmit')" />
    </template>
  </AuthFormLayout>
</template>
