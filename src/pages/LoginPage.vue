<template>
  <auth-container title="Login">
    <form class="login" @submit.prevent="handleSubmit">
      <div class="login__input-wrapper">
        <input
          type="email"
          class="login__input"
          placeholder="email"
          v-model="fields.email"
        />

        <span class="login__error" v-if="v$.email.$errors[0]?.$message">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>

      <div class="login__input-wrapper">
        <input
          type="password"
          class="login__input"
          placeholder="password"
          v-model="fields.password"
        />

        <span class="login__error" v-if="v$.password.$errors[0]?.$message">
          {{ v$.password.$errors[0].$message }}
        </span>
      </div>

      <div class="login__actions">
        <button type="submit">
          Login
        </button>

        <router-link to="/signup">
          Sign up
        </router-link>
      </div>
    </form>
  </auth-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, maxLength } from '@vuelidate/validators';

// Components
import AuthContainer from '@/components/auth/AuthContainer.vue';

const fields = reactive({
  email: '',
  password: '',
});

const fieldsRules = {
  email: { required, email, maxLength: maxLength(256) },
  password: { required, minLength: minLength(6), maxLength: maxLength(256) },
};

const v$ = useVuelidate(fieldsRules, fields);

const router = useRouter();

const store = useStore();

async function handleSubmit() {
  if (!(await v$.value.$validate())) {
    return;
  }

  const response = await store.dispatch('auth/login', {
    email: fields.email,
    password: fields.password,
  });

  if (response) {
    router.replace('/');
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  margin-top: 1rem;
  row-gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login__input-wrapper {
  width: 100%;
}
.login__input {
  width: 100%;
}
.login__error {
  color: red;
  margin-top: 0.2rem;
}
.login__actions {
  width: 100%;
  column-gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
