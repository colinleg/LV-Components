<template>
  <div id="app" class="dark">
    <h1> Librairie Vue </h1>

    <h2 class=""> Les boutons le-vietnamien ( nom import : lvBtn )</h2>

    <div class="flex">
      <lv-btn color="red" text="Salut" />
      <lv-btn color="blue" text="Salut" />
      <lv-btn color="green" text="Salut" />
      <lv-btn color="yellow" text="Salut" />
    </div>

    <h2 class=""> Le Logo </h2>

    <div class="flex">
      <lv-logo link="https://le-vietnamien.fr" />
      <lv-logo-white link="https://forum.le-vietnamien.fr" />
      <lv-logo-black link="https://exercices.le-vietnamien.fr" />
    </div>

    <h2> Un titre en fade </h2>

    <lv-fade-title class="" title="un titre" />

    
  </div>
</template>

<script>
// Uncomment import and local "components" registration if library is not registered globally.
// import { Colinleg_libSample } from '@/entry.esm';

import { defineComponent } from 'vue';
import { lvLogo, lvLogoBlack, lvLogoWhite  } from '../src/entry.esm'
import {
  lvBtn,
  lvFadeTitle
} from '../src/entry.esm'


export default defineComponent({
  name: 'ServeDev',
  components: {
    lvBtn,
    lvFadeTitle,
    lvLogo,
    lvLogoBlack,
    lvLogoWhite,
  }
});
</script>

<style scoped>

@import './style-min.css';

h1 {
  font-size: 50px;
  text-align: center;
}

h2 {
  margin: 20px;
  font-weight: bold;
}
.flex{
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  width: 50vw;
}

</style>