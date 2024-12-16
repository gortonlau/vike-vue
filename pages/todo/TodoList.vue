<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      {{ item.text }}
    </li>
    <li>
      <form @submit.prevent="submitNewTodo()">
        <input v-model="newTodo" type="text" :class="[inputClass]" />
        <button type="submit" :class="[buttonClass]">Add to-do</button>
      </form>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { onNewTodo } from "./TodoList.telefunc";
import { ref } from "vue";

const inputClass = ref("");
const buttonClass = ref("");

const props = defineProps<{ initialTodoItems: { text: string }[] }>();
const todoItems = ref(props.initialTodoItems);
const newTodo = ref("");

const submitNewTodo = async () => {
  // Optimistic UI update
  todoItems.value.push({ text: newTodo.value });
  try {
    await onNewTodo({ text: newTodo.value });
    newTodo.value = "";
  } catch (e) {
    console.error(e);
    // rollback
    todoItems.value.slice(0, -1);
  }
};
</script>
