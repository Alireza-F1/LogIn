<script setup lang="ts">
import { useUserData } from '@/stores/UserStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputPhoneSVG from '@/components/svg/InputPhoneSVG.vue'
import InputEmailSVG from '@/components/svg/InputEmailSVG.vue'
import InputPassSVG from '@/components/svg/InputPassSVG.vue'

// We use this component in both Signin and Login page
// So we need to know which component the flow are coming from
// Using the following we can find out
const userStatus = defineProps({
  userJourneyStatus: String,
})

const router = useRouter()

const userPhone = ref('')
const userEmail = ref('')
const userPassword = ref('')

const userStore = useUserData()
const { setUser, logInUser } = userStore

const submitHandler = (phone, email, pass) => {
  // If the component called in Signin page
  const LowerEmail = email.toLowerCase()
  if (userStatus.userJourneyStatus === 'signin') {
    setUser(phone, LowerEmail, pass)
    router.push('/')
  }

  // If the component called in Login page
  if (userStatus.userJourneyStatus === 'login') {
    const LowerEmail = email.toLowerCase()
    logInUser(phone, LowerEmail, pass)

    // If the user's info was correct the userStore.isLoggedIn would be
    // true so the user can be directed to home
    if (userStore.isLoggedIn){
      router.push('/')
    }
    else{
      alert('Your information is not correct. Please make sure you insert them right.');
    }
  }
  
}
</script>

<template>
  <form
    @submit.prevent="submitHandler(userPhone, userEmail, userPassword)"
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

    <div class="EmailInput mb-2.5">
      <label class="input validator sm:h-[55px] lg:h-10">
        <InputEmailSVG />
        <input
          v-model="userEmail"
          type="email"
          placeholder="youremail@gmail.com"
          required
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)+$"
        />
      </label>
      <div class="validator-hint hidden">Enter valid email address</div>
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
