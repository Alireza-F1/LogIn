<script setup lang="ts">
import { useUserData } from '@/stores/UserStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

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
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <g fill="none">
            <path
              d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
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
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
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
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
            ></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
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
