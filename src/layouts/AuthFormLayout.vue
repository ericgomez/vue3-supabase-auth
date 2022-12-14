<script>
export default {
  name: 'AuthFormLayout',
};
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-4 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          <slot name="title" />
        </h1>
        <p class="leading-relaxed mt-4">
          <!-- slot subtitle -->
          <slot name="subtitle" />
        </p>
      </div>

      <div
        class="
          lg:w-2/6
          md:w-1/2
          bg-gray-100
          rounded-lg
          p-8
          flex flex-col
          md:ml-auto
          w-full
          mt-10
          md:mt-0
        "
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          <!-- slot formTitle -->
          <slot name="formTitle" />
        </h2>

        <!-- slot form -->
        <slot name="form" />
      </div>
    </div>
  </section>
</template>
