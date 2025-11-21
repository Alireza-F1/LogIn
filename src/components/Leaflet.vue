<script setup>
import 'leaflet/dist/leaflet.css'
import { onMounted, ref } from 'vue'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import { useUserData } from '@/stores/UserStore'

const userStore = useUserData()
const { setUserLatLang, getUserLatLang } = userStore

const zoom = ref(4)
const center = ref([32.4279, 53.688]) // Center on Iran
const userLocation = ref(null)

// Set user's selected location to variables
function onMapClick(e) {
  const { lat, lng } = e.latlng

  // userLocation is a local variable that shows users' location in their dashboard
  userLocation.value = [lat, lng]

  // setUserLatLang is a global variable (PINIA)
  setUserLatLang([lat, lng])
}

// When users come to their dashboards, they should see their selected location
// If they have selected before
onMounted(() => {
  if (getUserLatLang) {
    userLocation.value = getUserLatLang
  }
})
</script>

<template>
  <div style="height: 200px" class="w-full">
    <l-map
      v-model:zoom="zoom"
      :center="center"
      style="height: 100%; width: 100%"
      @click="onMapClick"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <!-- Show marker only if user has selected a location -->
      <l-marker v-if="userLocation" :lat-lng="userLocation" />
    </l-map>
  </div>
</template>
