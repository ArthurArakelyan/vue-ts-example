<template>
  <form @submit.prevent="handleSubmit" class="todo-item-edit">
    <input
      type="text"
      class="todo-item-edit__input"
      autofocus
      v-model="fields.name"
    />

    <button type="submit" class="todo-item-edit__submit">Edit</button>

    <button type="button" @click="emit('close')" class="todo-item-edit__submit_close">Close</button>
  </form>
</template>

<script setup lang="ts">
import { reactive, defineProps, defineEmits, onMounted } from 'vue';
import { maxLength, required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { useStore } from 'vuex';

const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
});

const emit = defineEmits(['close']);

const fields = reactive({
  name: '',
});

const fieldsRules = {
  name: { required, maxLength: maxLength(256) },
};

const v$ = useVuelidate(fieldsRules, fields);

const store = useStore();

onMounted(() => {
  fields.name = props.todo.name;
});

async function handleSubmit() {
  if (!(await v$.value.$validate())) {
    return emit('close');
  }

  await store.dispatch('todo/editTodo', {
    ...props.todo,
    name: fields.name,
  });

  emit('close');
}
</script>

<style scoped>
.todo-item-edit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.todo-item-edit__input {
  width: 60%;
}
.todo-item-edit__submit {
  margin-left: auto;
}
.todo-item-edit__submit_close {
  margin-left: 0.5rem;
}
</style>
