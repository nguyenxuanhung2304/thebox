<template>
  <div class="bg-[#F6F8F7] flex flex-col w-full items-center py-10">
    <h3 class="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      What can us do for you?
    </h3>
    <p class="text-base">
      We are ready to work on a project of any complexity, whether it’s
      commercial or residential.
    </p>
    <form class="w-full mt-6">
      <div
        class="flex flex-col lg:flex-row justify-center items-center gap-y-4 lg:gap-x-8"
      >
        <input type="text" placeholder="Your name" class="p-2 min-w-[200px]" v-model="yourName"/>
        <input type="text" placeholder="Email" class="p-2 min-w-[200px]" v-model="email"/>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-center items-center gap-y-4 lg:gap-x-8 mt-4"
      >
        <input
          type="text"
          placeholder="Reason for Contacting"
          class="p-2 min-w-[200px]"
          v-model="reasonContact"
        />
        <input type="text" placeholder="Phone" class="p-2 min-w-[200px]" />
      </div>
      <div class="flex justify-center items-center mt-4">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          class="flex justify-center min-w-[200px] lg:min-w-[420px]"
          v-model="message"
        ></textarea>
      </div>
      <div class="flex justify-center items-center mt-4">
        <button class="bg-[#2947A9] px-8 py-2 text-white min-w-[120px]" @click.prevent="handleSubmitContactForm">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yourName: '',
      email: '',
      reasonContact: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    handleSubmitContactForm() {
      console.log(this.yourName)
    }
  }
};
</script>
