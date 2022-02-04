<template>
    <div class="logo">
        <a :href="redirection">
            <img src="https://le-vietnamien.fr/logo.svg"
                alt="logo"
                @click="redirect"
            >
        </a>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'lv_logo',
    props: {
        link: String
    },
    data(){
        return {
            redirection: false
        }
    },
    mounted(){
        this.redirection = this.link
    }
})
    

</script>