<script>
import { onMounted, ref } from 'vue';
import Avatar from '@/components/Profile/Avatar.vue';
import TextInput from '@/components/Forms/TextInput.vue';
import SubmitButton from '@/components/Forms/SubmitButton.vue';
import ProfileForm from '@/components/Profile/ProfileForm.vue';
import { supabase } from "@/utils/supabase";
import { store } from "@/utils/store";
import { setLoading } from "@/utils/loading";
import { setNotification } from "@/utils/notification";

export default {
  name: 'ProfileView',
  components: {
    ProfileForm,
    SubmitButton,
    TextInput,
    Avatar,
  },
  setup() {
    const username = ref('');
    const website = ref('');
    const avatar_url = ref('');
    const password = ref('');
    const passwordConfirmation = ref('');

    const getProfile = async () => {
      try {
        setLoading(true);

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, website, avatar_url`)
          .eq("id", store.user.id)
          .single();

        if (error && status !== 406) throw error;

        if (data) {
          username.value = data.username;
          website.value = data.website;
          avatar_url.value = data.avatar_url;
        }

      } catch (e) {
        setNotification({
          title: "Error obteniendo perfil",
          message: e.message,
        });
      } finally {
        setLoading(false);
      }
    };

    const updateProfile = async () => {};

    const updatePassword = async () => {};

    onMounted(async () => {
      await getProfile();
    });

    return {
      avatar_url,
      username,
      website,
      password,
      passwordConfirmation,
      updateProfile,
      updatePassword,
    };
  },
};
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <Avatar v-model:path="avatar_url" @upload="updateProfile" />
          </div>

          <div
            class="
              sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l
              border-gray-200
              sm:border-t-0
              border-t
              mt-4
              pt-4
              sm:mt-0
              text-center
              sm:text-left
            "
          >
            <ProfileForm
              v-model:username="username"
              v-model:website="website"
              v-model:password="password"
              v-model:password-confirmation="passwordConfirmation"
              @updatePassword="updatePassword"
              @updateProfile="updateProfile"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
