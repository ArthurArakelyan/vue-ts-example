import { createRouter, createWebHistory } from 'vue-router';

// Pages
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import SignupPage from '@/pages/SignupPage.vue';

// Store
import store from '@/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { auth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: { auth: false },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
      meta: { auth: false },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters['auth/isAuth']) {
    return next('/login');
  }

  if (to.meta.auth === false && store.getters['auth/isAuth']) {
    return next('/');
  }

  next();
});

export default router;
