<template>
    <q-layout>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const initAuth = () => {
    const stateAuth = localStorage.getItem('auth') ?? 0;
    if(stateAuth == 1){
      router.push({ name: 'home-page' });
    }else{
      router.push({ name: 'auth-page' });
    }
}

onMounted(initAuth)
</script>

<style lang="scss">

</style>
