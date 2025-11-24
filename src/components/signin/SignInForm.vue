<script setup>
import { useUserData } from '@/stores/UserStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputComponent from '@/components/InputComponent.vue'

const router = useRouter()

const userPhone = ref('')
const userEmail = ref('')
const userPassword = ref('')

const userStore = useUserData()
const { setUser } = userStore

const submitHandler = (phone, email, pass) => {
  const LowerEmail = email.toLowerCase()
  setUser(phone, LowerEmail, pass)
  router.push('/')
}
</script>

<template>
  <form
    @submit.prevent="submitHandler(userPhone, userEmail, userPassword)"
    class="flex flex-col w-full"
  >
    <InputComponent v-model="userPhone" status="phone" />
    <InputComponent v-model="userEmail" status="email" />
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
