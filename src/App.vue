<script>
import GuestNavigation from '@/components/Navigations/GuestNavigation.vue';
import AuthNavigation from '@/components/Navigations/AuthNavigation.vue';
import Loading from '@/components/Global/Loading.vue';
import Notification from '@/components/Global/Notification.vue';

export default {
  components: {
    Notification,
    Loading,
    AuthNavigation,
    GuestNavigation,
  },
  setup() {

  },
}
</script>

<template>
  <loading />
  <notification />
  <guest-navigation />
  <hr />
  <router-view />
</template>