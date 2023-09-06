<template>
  <div class="mt-11">
    <div class="w-full min-h-[120px] bg-kitchen flex items-center">
      <div class="w-full mx-[10%] text-white flex items-center justify-between">
        <div class="flex flex-col items-center gap-3">
          <p class="text-sm md:text-xl lg:text-2xl xl:text-4xl">
            Free consultation with exceptional quality
          </p>
          <div
            class="text-white text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl"
          >
            <span>Just one call away: </span>
            <span class="underline">+84 1102 2703</span>
          </div>
        </div>
        <div
          class="border border-white px-2 py-1 text-sm md:text-xl lg:text-2xl xl:text-4xl"
        >
          Get your consultation
        </div>
      </div>
    </div>
    <div class=" min-h-[500px] w-full">
      <div class="mx-[10%] py-[10%] flex justify-between">
        <div class="flex flex-col flex-3 gap-4">
          <h3 class="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">Projects</h3>
          <div class="flex flex-col items-start">
            <ul class="flex flex-col gap-4">
              <li
                class="text-[#2947A9] text-base md:text-xl lg:text-2xl xl:text-3xl pl-2 font-bold border-l-2 border-l-[#2947A9]"
              >
                All
              </li>
              <li class="text-[#C2C7D6] text-base md:text-xl lg:text-2xl xl:text-3xl pl-2">Commercial</li>
              <li class="text-[#C2C7D6] text-base md:text-xl lg:text-2xl xl:text-3xl pl-2">Residential</li>
              <li class="text-[#C2C7D6] text-base md:text-xl lg:text-2xl xl:text-3xl pl-2">Other</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="grid grid-cols-2 gap-x-4 gap-y-24">
            <div v-for="slider in sliders[sliderIndex]" class="relative" :key="slider.title">
              <img :src="slider.image" alt="Project card 1" class="md:w-[200px]"/>
              <div
                class="bg-[#2947A9] absolute -bottom-[49px] w-full p-2 min-h-[50px]"
              >
                <p class="text-white font-bold text-base">{{ slider.title }}</p>
                <p class="text-white text-sm">{{ slider.subtitle }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-center w-full justify-between mt-[80px]">
            <div
              @click="backSlider"
              class="bg-black py-4 px-14 flex items-center justify-center"
            >
              <img src="@/assets/back.png" alt="Back" class="text-base" />
              <p class="text-white ml-4">Back</p>
            </div>
            <div class="flex items-center justify-between gap-x-2">
              <div
                v-for="(sliderDot, index) in maximumSliderIndex"
                :key="sliderDot"
                :class="{ 'slider--active': sliderIndex === index }"
                class="w-[6.4px] h-[6.4px] rounded-full bg-[#cccccc]"
              ></div>
            </div>
            <div
              @click="nextSlider"
              class="bg-black py-4 px-14 flex items-center justify-center"
            >
              <p class="text-white mr-4">Next</p>
              <img src="@/assets/next.png" alt="Next" class="text-base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderIndex: 0,
      maximumSliderIndex: 4,
      miniumSliderIndex: 0,
      sliders: [
        [
          {
            image: new URL("@/assets/project_card_1.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          {
            image: new URL("@/assets/project_card_1.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          {
            image: new URL("@/assets/project_card_1.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          {
            image: new URL("@/assets/project_card_1.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
        ],
        [
          {
            image: new URL("@/assets/project_card_2.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          {
            image: new URL("@/assets/project_card_2.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          {
            image: new URL("@/assets/project_card_2.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          {
            image: new URL("@/assets/project_card_2.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
        ],
        [
          {
            image: new URL("@/assets/project_card_3.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          { 
            image: new URL("@/assets/project_card_3.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          { 
            image: new URL("@/assets/project_card_3.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          { 
            image: new URL("@/assets/project_card_3.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
        ],
        [
          {
            image: new URL("@/assets/project_card_4.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          { 
            image: new URL("@/assets/project_card_4.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          { 
            image: new URL("@/assets/project_card_4.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
          { 
            image: new URL("@/assets/project_card_4.png", import.meta.url),
            title: "Wildstone Infra Hotel",
            subtitle: "2715 Ash Dr. San Jose, South Dakota"
          },
        ] 
      ]
    };
  },
  methods: {
    nextSlider() {
      if (this.sliderIndex === this.maximumSliderIndex - 1) return;

      this.sliderIndex++;
    },
    backSlider() {
      if (this.sliderIndex === this.miniumSliderIndex) return;

      this.sliderIndex--;
    },
  },
};
</script>

<style>
.slider--active {
  background-color: #2947a9 !important;
}
</style>
