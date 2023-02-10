<template>
  <auth-container title="Sign up">
    <form class="signup" @submit.prevent="handleSubmit">
      <div class="signup__input-wrapper">
        <input
          type="email"
          class="signup__input"
          placeholder="email"
          v-model="fields.email"
        />

        <span class="signup__error" v-if="v$.email.$errors[0]?.$message">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>

      <div class="signup__input-wrapper">
        <input
          type="password"
          class="signup__input"
          placeholder="password"
          v-model="fields.password"
        />

        <span class="signup__error" v-if="v$.password.$errors[0]?.$message">
          {{ v$.password.$errors[0].$message }}
        </span>
      </div>

      <div class="signup__input-wrapper">
        <input
          type="password"
          class="signup__input"
          placeholder="confirm password"
          v-model="fields.confirmPassword"
        />

        <span class="signup__error" v-if="v$.confirmPassword.$errors[0]?.$message">
          {{ v$.confirmPassword.$errors[0].$message }}
        </span>
      </div>

      <div class="signup__actions">
        <button type="submit">
          Sign up
        </button>

        <router-link to="/login">
          Login
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
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators';

// Components
import AuthContainer from '@/components/auth/AuthContainer.vue';

const fields = reactive({
  email: '',
  password: '',
  confirmPassword: '',
});

const fieldsRules = {
  email: { required, email, maxLength: maxLength(256) },
  password: { required, minLength: minLength(6), maxLength: maxLength(256) },
  confirmPassword: {
    required,
    custom: helpers.withMessage(
      'Value should be the same as password',
      (value, fields) => value === fields.password,
    ),
  },
};

const v$ = useVuelidate(fieldsRules, fields);

const router = useRouter();

const store = useStore();

async function handleSubmit() {
  if (!(await v$.value.$validate())) {
    return;
  }

  const response = await store.dispatch('auth/signup', {
    email: fields.email,
    password: fields.password,
  });

  if (response) {
    router.replace('/');
  }
}
</script>

<style scoped>
.signup {
  width: 100%;
  margin-top: 1rem;
  row-gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.signup__input-wrapper {
  width: 100%;
}
.signup__input {
  width: 100%;
}
.signup__error {
  color: red;
  margin-top: 0.2rem;
}
.signup__actions {
  width: 100%;
  column-gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
