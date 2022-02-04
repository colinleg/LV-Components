<template>
  <div class="lvBtn">
    <button ref="btn"
      class="btn text-white font-medium p-2 px-4 rounded hover:bg-myRed-600 shadow-xxl"
    >
    {{ text }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'lvBtn',
  data() {
    return {
      bgColor: {
        red: '#bd1e51',
        blue: '#4893bd',
        green: '#95d978',
        yellow: '#f1b814',
        black: '#2c3135'
      }
    }
  },
  props: {
    color: String,
    text: String
  },
  computed: {

  },
  methods: {

  },
  mounted(){
    let btn = this.$refs.btn
    btn.style.backgroundColor = this.bgColor[this.color]
    btn.classList.add(this.color)
  }
}) 

</script>

<style scoped>

.btn{
  min-width: 30px;
}
.btn:hover {
  filter: brightness(0.7);
  transform: translateY(2px);
  transition: .2s ease;
}

</style>
