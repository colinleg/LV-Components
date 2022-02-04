<template>
    <div class="lvFadeTitle">
      <transition appear name="fade">
        <h1 class="hidden md:flex justify-center items-center 
            w-full text-4xl font-thin text-myBlue-500"
        >
        {{ title }}
        </h1>
      </transition>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'lvFadeTitle',
  props: {
    title: String
  },
}) 

</script>