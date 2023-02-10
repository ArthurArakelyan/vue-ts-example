<template>
  <div class="todo-item">
    <p v-if="!isEdit" @click="handleEdit" class="todo-item__name">
      {{ todo.name }}
    </p>
    <todo-item-edit v-else :todo="todo" @close="handleEdit"></todo-item-edit>

    <div class="todo-item__actions" v-if="!isEdit">
      <button @click="handleEdit">Edit</button>
      <button @click="handleDelete">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useStore } from 'vuex';

// Components
import TodoItemEdit from '@/components/home/TodoItemEdit.vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const store = useStore();

const isEdit = ref(false);

function handleEdit() {
  isEdit.value = !isEdit.value;
}

function handleDelete() {
  store.dispatch('todo/deleteTodo', props.todo.id);
}
</script>

<style scoped>
.todo-item {
  padding: 1rem;
  border: 1px solid #000000;
  border-radius: 3px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.todo-item__name {
  width: 60%;
  cursor: pointer;
  word-break: break-word;
}
.todo-item__actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 0.5rem;
}
</style>
