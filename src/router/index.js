import { createRouter, createWebHistory } from 'vue-router';
import { setNotification } from '@/utils/notification';
import { setLoading } from '@/utils/loading';
import { store } from '@/utils/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/login-magic-link',
      name: 'LoginMagicLink',
      component: () => import('../views/LoginMagicLinkView.vue'),
    },
    {
      path: '/register',
      name: 'Signup',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        requiresAuth: true, // validate by guards
      },
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import('../views/TodosView.vue'),
      meta: {
        requiresAuth: true, // validate by guards
      },
    },
  ],
});

// guards of vue router
router.beforeEach((to, from, next) => {
  setLoading(true);
  setNotification(null);

  const { user } = store;
  if (!user) {
    if (to.meta.requiresAuth) {
      return next('/login');
    }
  } else {
    if (!to.meta.hasOwnProperty('requiresAuth')) {
      return next('/profile');
    }
  }

  next();
});

router.beforeResolve(() => {
  setLoading(false);
});

export default router;
