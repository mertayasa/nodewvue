<script setup>
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue"

</script>

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      </a>
      <div class="nav-link">
        <RouterLink to="/" class="p-2">Home</RouterLink>
        <RouterLink to="/about" class="ps-3">About</RouterLink>
        <RouterLink to="/user" class="ps-3">User</RouterLink>
        <RouterLink to="/anime" class="ps-3">Anime</RouterLink>
        <RouterLink to="/login" class="ps-3">Login</RouterLink>
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <RouterView />
  </div>
</template>