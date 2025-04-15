<script setup>
import { ref, onMounted } from "vue";
import { getUsers } from "./service/api";

const users = ref([]);

onMounted(async () => {
  users.value = await getUsers();
});
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="produk in users.results" :key="produk.id">{{ produk.nama }}</li>
    </ul>
  </div>
</template>
