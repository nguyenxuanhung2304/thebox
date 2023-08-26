<template>
  <header class="px-[4.813vw] py-[1.875vw]">
    <div class="flex relative">
      <div class="flex items-center flex-1 cursor-pointer">
        <img class="mr-2" src="../assets/logo.png" alt="Logo">
        <h1 class="text-[#2947A9] font-bold text-[2.2rem]">TheBox</h1>
      </div>
      <div class="hidden md:flex md:items-center md:flex-1">
        <ul class="flex justify-between flex-wrap w-full text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
          <li class="cursor-pointer hover:underline">Home</li>
          <li class="cursor-pointer hover:underline">About Us</li>
          <li class="cursor-pointer hover:underline">Projects</li>
          <li class="cursor-pointer hover:underline">Services</li>
          <li class="text-[#F9995D] cursor-pointer hover:underline">Contact Us</li>
        </ul>
      </div>
      <div @click="switchHamburgerMenu" class="absolute flex-1 right-0 md:hidden w-16 h-16 rotate-0 transition ease-in-out duration-500 cursor-pointer">
        <div class="absolute right-0 w-16 h-1 rounded-lg bg-black transition ease-in-out duration-250" :class="{'rotate-135 !top-[9px]': isVisibleHamburgerMenu}"></div>
        <div class="absolute top-[9px] w-16 h-1 rounded-lg bg-black transition ease-in-out duration-250" :class="{'opacity-0 -left-10': isVisibleHamburgerMenu}"></div>
        <div class="absolute top-[18px] w-16 h-1 rounded-lg bg-black transition ease-in-out duration-250" :class="{'-rotate-135 !top-[9px]': isVisibleHamburgerMenu}"></div>
      </div>
    </div>
    <div v-if="isVisibleHamburgerMenu" class="md:hidden relative bg-[#3559C7] w-full -top-[5vh] h-[31.250vw] transition-all mt-5 ease-in-out duration-250" :class="{'!top-0': isVisibleHamburgerMenu}">
      <ul class="flex flex-col items-start justify-around flex-wrap w-full h-full px-[2vw] text-sm text-white">
        <li class="w-full cursor-pointer hover:underline border-white border-b">Home</li>
        <li class="w-full cursor-pointer hover:underline border-white border-b">About Us</li>
        <li class="w-full cursor-pointer hover:underline border-white border-b">Projects</li>
        <li class="w-full cursor-pointer hover:underline border-white border-b">Services</li>
        <li class="w-full cursor-pointer hover:underline border-white border-b">Contact Us</li>
      </ul>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';

  const isVisibleHamburgerMenu = ref(false);

  function switchHamburgerMenu() {
    isVisibleHamburgerMenu.value = !isVisibleHamburgerMenu.value;
  }
</script>

<style scoped>
</style>
