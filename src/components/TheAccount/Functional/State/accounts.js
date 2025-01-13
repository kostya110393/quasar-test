import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAccountStore = defineStore('Accounts', () => {
    const accounts = ref(JSON.parse(localStorage.getItem('users')) ?? []);

    const addUser = (data) => {
        accounts.value.push(data);
        localStorage.setItem('users', JSON.stringify(accounts.value));
    };

    return {
        accounts, addUser,
    };
});