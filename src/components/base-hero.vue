<template>
  <div class="w-full h-[47.2rem] relative">
    <img src="../assets/hero.png" alt="Hero image" class="object-cover h-full w-full">
    <div class="md:block hidden text-4xl lg:text-5xl xl:text-7xl max-w-[300px] absolute left-[19%] top-[30%] font-semibold">Building things is our mission.</div>
    <div class="md:block hidden absolute bottom-0 right-0">
      <div class="bg-[#3559C7] px-[3.8rem] py-[1.5rem]">
        <div class="flex flex-col items-center text-white">
          <p class="font-bold text-sm lg:text-xl xl:text-2xl mb-3">Feature Projects</p>
          <p class="font-normal text-base lg:text-2xl xl:text-3xl">The National University of Architecture</p>
        </div>
      </div>
      <div class="bg-[#292E3D] flex justify-around text-white text-base">
        <div class="flex-1 flex items-center justify-center cursor-pointer py-2">
          <img src="../assets/back.png" alt="Back" class="w-[19px] h-[12px] mr-[5px]">
          <p class="text-sm lg:text-base xl:text-xl">Back</p>
        </div>
        <div class="flex-1 flex items-center justify-center cursor-pointer py-2">
          <p class="text-sm lg:text-base xl:text-xl">Next</p>
          <img src="../assets/next.png" alt="Next" class="w-[19px] h-[12px] ml-[5px]">
        </div>
      </div>
    </div>
  </div>
</template>
