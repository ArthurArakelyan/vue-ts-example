<template>
  <div class="todo-list">
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></todo-item>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

// Components
import TodoItem from '@/components/home/TodoItem.vue';

const store = useStore();

const todos = computed(() => {
  return store.getters['todo/todos'];
});

onMounted(() => {
  store.dispatch('todo/getTodos');
});
</script>

<style scoped>
.todo-list {
  margin-top: 2rem;
  row-gap: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
