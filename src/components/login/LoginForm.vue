<script setup>
import { ref } from 'vue'
import { useUserData } from '@/stores/UserStore'
import InputPhoneSVG from '@/components/svg/InputPhoneSVG.vue'
import InputPassSVG from '@/components/svg/InputPassSVG.vue'
import { useRouter } from 'vue-router'

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
  <form
    @submit.prevent="submitHandler(userPhone, userPassword)"
    class="flex flex-col w-full"
  >
    <div class="PhoneInput mb-2.5">
      <label class="input validator sm:h-[55px] lg:h-10">
        <InputPhoneSVG />
        <input
          v-model="userPhone"
          type="tel"
          class="tabular-nums"
          required
          placeholder="Your Phone Number"
          pattern="[0-9]*"
          minlength="11"
          maxlength="11"
          title="Must be 11 digits"
        />
      </label>
      <p class="validator-hint hidden">Must be 11 digits</p>
    </div>

    <div class="PasswordInput sm-mb-[18px] mb-[22.56px]">
      <label class="input validator sm:h-[55px] lg:h-10">
        <InputPassSVG />
        <input
          v-model="userPassword"
          type="password"
          required
          placeholder="Password"
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
      </label>
      <p class="validator-hint hidden">
        Must be more than 8 characters, including 1) At least one number 2)At least one lowercase
        letter 3) At least one uppercase letter
      </p>
    </div>

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
