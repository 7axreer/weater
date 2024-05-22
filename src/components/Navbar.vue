<template>
    <nav class="nav">
        <a href="" class="logo">
            <img src="@/assets/img/logo.svg" alt="" />
            <span>vue weather</span>
        </a>
        <div class="nav__search">
            <img src="@/assets/img/kaplya.svg" alt="" />
            <input type="text" v-model="city" 
            placeholder="Выбрать город"/>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            city: "",
        };
    },
};
</script>

<style></style>
