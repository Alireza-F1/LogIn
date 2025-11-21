<script setup lang="ts">
import SignInForm from '@/components/signin/SignInForm.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center ">
    <div class="w-[50%] flex flex-col items-center justify-center md:max-w-[425px]">
      <h1
        class="uppercase font-bold leading-[100%] tracking-[0px] sm:text-[62px] lg:text-[77.71px] mb-5"
      >
        Log in
      </h1>
      <SignInForm :user-journey-status="'login'"/>

      <div class="mt-5 font-bold text-[10px] text-[#B6B6B6] tracking-[8%] leading-[100%]">
        <p>You Don't Have an Account? <RouterLink to="/signin"> <span class="text-[#8d63c8]">Sign Up</span></RouterLink> </p>
      </div>
    </div>
  </div>
</template>
