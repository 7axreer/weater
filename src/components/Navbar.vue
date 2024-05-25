<template>
    <nav class="nav">
        <a href="" class="logo">
            <img src="@/assets/img/logo.svg" alt="" />
            <span>vue weather</span>
        </a>
        <div class="nav__search">
            <img src="@/assets/img/kaplya.svg" alt="" />
            <input type="text" 
            v-model="city" 
            @keydown.enter="getWeather(city), city = ''" 
            placeholder="Выбрать город"/>
        </div>
    </nav>
</template>

<script>

import {mapActions} from 'vuex'
export default {
    data() {
        return {
            city: "",
        };
    },
    methods: {
        ...mapActions(['getWeather'])
    }
};
</script>
