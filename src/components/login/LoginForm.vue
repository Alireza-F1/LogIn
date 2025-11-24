<script setup>
import { ref } from 'vue'
import { useUserData } from '@/stores/UserStore'
import { useRouter } from 'vue-router'
import InputComponent from '@/components/InputComponent.vue'

const userStore = useUserData()
const router = useRouter()
const userPhone = ref('')
const userPassword = ref('')

const { logInUser } = userStore

const submitHandler = (phone, pass) => {
  logInUser(phone, pass)

  if (userStore.isLoggedIn) {
    router.push('/')
  } else {
    alert('Your information is not correct. Please make sure you insert them right.')
  }
}
</script>

<template>
  <form @submit.prevent="submitHandler(userPhone, userPassword)" class="flex flex-col w-full">
    <InputComponent v-model="userPhone" status="phone" />
    <InputComponent v-model="userPassword" status="password" />

    <div>
      <button
        class="btn input bg-linear-to-r from-[#501794] to-[#3E70A1] rounded-[18.8px] hover:cursor-pointer sm:h-[50px] lg:h-10"
        type="submit"
      >
        Sign up
      </button>
    </div>
  </form>
</template>
