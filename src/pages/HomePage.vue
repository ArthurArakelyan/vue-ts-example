<template>
  <div class="home">
    <div class="home__content">
      <todo-form></todo-form>

      <todo-list></todo-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TodoForm from '@/components/home/TodoForm.vue';
import TodoList from '@/components/home/TodoList.vue';
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.home__content {
  margin-top: 2rem;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
