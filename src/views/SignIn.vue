<script setup>
import SignInForm from '../components/signin/SignInForm.vue'
import LeftImageContainer from '../components/signin/LeftImageContainer.vue';
import ButtonContainer from '../components/signin/ButtonContainer.vue';

</script>

<template>
  <div class="flex bg-[#160430] relative">
    <LeftImageContainer />
    <div
      class="right sm:relative sm:w-full smmd:flex smmd:flex-col smmd:items-center lg:w-[55%] xl:w-[45%] bg-[#160430] lg:px-7 lg:py-8"
    >
      <img
        src="../assets/Background Image Mobile.png"
        alt="login_img"
        class="object- w-full h-[571px] bg-transparent z-0 lg:hidden"
      />
      <div
        class="w-full h-full flex flex-col sm:absolute sm:px-8 sm:top-[336px] smmd:w-[60%] lg:w-full lg:static 3xl:px-10 3xl:py-5"
      >
        <h1
          class="uppercase font-bold leading-[100%] tracking-[0px] sm:text-[62px] lg:text-[77.71px]"
        >
          Sign in
        </h1>
        <p
          class="font-bold z-30 leading-[100%] tracking-[0px] sm:text-[12px] sm:mt-[13px] sm:mb-3.5 lg:text-[15.04px] lg:mt-[15.86px] lg:mb-[17.11px]"
        >
          Sign in with email address
        </p>

        <SignInForm :user-journey-status="'signin'"/>

        <ButtonContainer />

        <p
          class="font-medium text-[#B6B6B6] leading-[100%] tracking-[0%] sm:mt-[18px] sm:text-[10px] lg:mt-[22.56px] lg:text-[12.53px]"
        >
          By registering you with our
          <a href="#" class="text-[#9D5CE9]"> Terms and Conditions </a>
        </p>
      </div>
    </div>
  </div>
</template>
