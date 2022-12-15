<script>
import SubmitButton from '@/components/Forms/SubmitButton.vue';
import TextInput from '@/components/Forms/TextInput.vue';

export default {
  name: 'ProfileForm',
  components: {
    TextInput,
    SubmitButton,
  },
  props: ['username', 'website', 'password', 'passwordConfirmation'],
  emits: [
    'updatePassword',
    'updateProfile',
    'update:website',
    'update:password',
    'update:passwordConfirmation',
  ],
};
</script>

<template>
  <div>
    <p class="leading-relaxed text-lg mb-4">
      Más información acerca de ti en tu perfil de Supabase con Vue 3.
    </p>

    <TextInput id="username" label="Tu usuario" :value="username" />

    <TextInput
      id="website"
      label="Tu website"
      :value="website"
      @input="$emit('update:website', $event.target.value)"
    />

    <SubmitButton
      text="Actualizar perfil"
      @onSubmit="$emit('updateProfile', $event)"
    />

    <div class="mt-5 mb-2"><hr /></div>

    <TextInput
      id="password"
      label="Contraseña"
      type="password"
      :value="password"
      @input="$emit('update:password', $event.target.value)"
    />

    <TextInput
      id="passwordConfirmation"
      label="Confirma tu contraseña"
      type="password"
      :value="passwordConfirmation"
      @input="$emit('update:passwordConfirmation', $event.target.value)"
    />

    <SubmitButton
      text="Actualizar contraseña"
      @onSubmit="$emit('updatePassword', $event)"
    />
  </div>
</template>
