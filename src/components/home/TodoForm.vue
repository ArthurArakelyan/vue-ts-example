<template>
  <form @submit.prevent="handleSubmit" class="todo-form">
    <div class="todo-form__input-wrapper">
      <input
        type="text"
        class="todo-form__input"
        placeholder="Todo name"
        v-model="fields.name"
      />

      <span class="todo-form__input-error" v-if="v$.name.$errors[0]?.$message">
        {{ v$.name.$errors[0].$message }}
      </span>
    </div>

    <button type="submit">
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { maxLength, required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { useStore } from 'vuex';

const fields = reactive({
  name: '',
});

const fieldsRules = {
  name: { required, maxLength: maxLength(256) },
};

const v$ = useVuelidate(fieldsRules, fields);

const store = useStore();

async function handleSubmit() {
  if (!(await v$.value.$validate())) {
    return;
  }

  await store.dispatch('todo/addTodo', fields.name);

  v$.value.$reset();
  fields.name = '';
}
</script>

<style scoped>
.todo-form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.todo-form__input-wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
}
.todo-form__input {
  width: 100%;
}
.todo-form__input-error {
  color: red;
}
</style>
