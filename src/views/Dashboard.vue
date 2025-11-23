<script setup lang="ts">
import { useUserData } from '@/stores/UserStore'
import { useRouter, RouterLink } from 'vue-router'
import Leaflet from '@/components/login/Leaflet.vue'

const router = useRouter()
const userStore = useUserData()
const { isUserLoggedIn, logout } = userStore
</script>

<template>
  <div v-if="isUserLoggedIn" class="w-full h-screen flex justify-center items-center">
    <div class="w-[35%] text-center px-3">
      <h1 class="bg-orange-500 p-3 mb-2 rounded-2xl">Welcome</h1>
      <div class="bg-orange-500 p-3 mb-2 rounded-2xl">
        <p>Your Email: {{ userStore.currentUserEmail }}</p>
        <p v-if="userStore.currentLatLang">
          Your Location: {{ Number(userStore.currentLatLang[0]).toFixed(5) }} ,
          {{ Number(userStore.currentLatLang[1]).toFixed(5) }}
        </p>
        <p>Your Phone: {{ userStore.currentUserPhone }}</p>
      </div>

      <div class="bg-orange-500 p-3 rounded-2xl mb-2">
        <p>You can enter your location to enhance user experience</p>
        <Leaflet />
      </div>
      <RouterLink to="/signin" class="inline-block bg-blue-500 p-3 rounded-2xl"
        ><span @click="logout()">Log Out</span></RouterLink
      >
    </div>
  </div>
</template>
