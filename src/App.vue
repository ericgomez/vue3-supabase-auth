<script>
import GuestNavigation from '@/components/Navigations/GuestNavigation.vue';
import AuthNavigation from '@/components/Navigations/AuthNavigation.vue';
import Notification from '@/components/Global/Notification.vue';
import Loading from '@/components/Global/Loading.vue';

import { supabase } from "@/utils/supabase"
import { store } from "@/utils/store"

export default {
  components: {
    Loading,
    Notification,
    AuthNavigation,
    GuestNavigation,
  },
  setup() {
    // retrieve a user of supabase
    store.user = supabase.auth.user()
    // listen to auth events of supabase
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        store.user = session.user
      } else {
        store.user = null
      }
    })

    return {
      store
    }
  },
}
</script>

<template>
  <loading />
  <auth-navigation v-if="store.user" :user="store.user" />
  <guest-navigation v-else />
  <hr />
  <router-view />
</template>