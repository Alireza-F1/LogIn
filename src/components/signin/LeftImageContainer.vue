<script setup lang="ts"></script>

<template>
  <p
    class="absolute font-bold text-[10px] text-[#B6B6B6] tracking-[8%] leading-[100%] top-10 left-10 z-50"
  >
    HAVE AN ACCOUNT? <RouterLink to="/login" class="text-white"> LOG IN </RouterLink>
  </p>
  <div class="left overflow-hidden sm:hidden lg:w-[45%] lg:relative lg:block xl:w-[55%]">
    <img
      src="../../assets/Background_Image.png"
      alt="login_img"
      class="object-fill w-full h-screen bg-transparent lg:block"
    />
    <div class="text lg:absolute lg:left-[62px] lg:top-[450px]">
      <p class="font-bold text-[50.68px] leading-[51.5px] tracking-[0px] uppercase">
        Sign in to your
      </p>
      <p
        class="font-bold text-[50.68px] leading-[51.5px] tracking-[0px] uppercase bg-linear-to-r from-[#501794] to-[#AE69FF] bg-clip-text text-transparent"
      >
        adventure!
      </p>
    </div>
  </div>
</template>
