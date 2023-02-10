<template>
  <div class="auth-container">
    <div class="auth-container__content">
      <h1 class="auth-container__title">
        {{ props.title }}
      </h1>

      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.auth-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth-container__content {
  width: 500px;
  min-height: 70%;
  background-color: #ffffff;
  border-radius: 6.6px;
  padding: 1.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.auth-container__title {
  width: 100%;
  line-height: initial;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
}
</style>
