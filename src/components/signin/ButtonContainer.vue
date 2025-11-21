<script setup lang="ts">
import FacebookSVG from '@/components/svg/FacebookSVG.vue'
import GoogleSVG from '@/components/svg/GoogleSVG.vue'
</script>

<template>
  <div
    class="block w-full rounded-2xl max-w-[460px] bg-[#727272] sm:border-[0.5px] sm:mt-[33px] sm:mb-[27px] lg:mb-[33.84px] lg:border-[0.63px] lg:mt-[30px]"
  ></div>

  <p
    class="font-semibold tracking-[0%] sm:text-[10px] lg:mb-4 sm:mb-[13px] lg:text-[12.53px] lg:leading-[100%]"
  >
    Or continue with
  </p>
  <div class="flex gap-[8.77px] w-full max-w-[460px]">
    <button
      class="btn flex items-center w-[225.61px] flex-1 bg-[#3B2063] rounded-[11px] sm:h-9 lg:h-[45px]"
    >
      <GoogleSVG />
      Google
    </button>
    <button
      class="btn lg:h-[45px] sm:h-9 flex items-center bg-[#3B2063] rounded-[11px] w-[225.61px] flex-1"
    >
      <FacebookSVG />
      Facebook
    </button>
  </div>
</template>
