<template>
    <q-page class="row justify-center items-center">
        <q-card class="q-pa-md" style="width: 300px">
            <q-card-section>
                <div class="text-h6">Авторизация</div>
            </q-card-section>
    
            <q-card-section>
                <q-input
                    v-model="login"
                    label="Логин"
                    outlined
                    dense
                    :error="loginError"
                    :error-message="loginErrorMessage"
                />
        
                <q-input
                    v-model="password"
                    label="Пароль"
                    type="password"
                    outlined
                    dense
                    :error="passwordError"
                    :error-message="passwordErrorMessage"
                    class="q-mt-sm"
                />
            </q-card-section>
            <q-card-actions align="center">
                <q-btn color="primary" label="Войти" @click="onAuthenticate" />
            </q-card-actions>
            <q-card-section @click="createAccount" class="text-negative">
                Создать аккаунт
            </q-card-section>
            <q-card-section v-if="error" class="text-negative">
                {{ error }}
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAccountStore } from '../../../TheAccount/Functional/State/accounts.js';

const router = useRouter();
const store = useAccountStore();

const  login = ref(null);
const  password = ref(null);
const  error = ref(null);
const  loginError = ref(false);
const  loginErrorMessage = ref(null);
const  passwordError = ref(false);
const  passwordErrorMessage = ref(null);

const onAuthenticate = () => {   
    error.value = null;
    loginError.value = false;
    passwordError.value = false;

    if (!login.value) {
        loginError.value = true;
        loginErrorMessage.value = 'Введите логин';
        return;
    }

    if (!password.value) {
        passwordError.value = true;
        passwordErrorMessage.value = 'Введите пароль';
        return;
    }

    const account = store.accounts.find(account => account.login === login.value);

    if (account && account.password === password.value) {
        localStorage.setItem('auth', 1);
        router.push({ name: 'home-page' });
    } else {
        error.value = 'Неверный логин или пароль';
    }
};

const createAccount = () => {
    router.push({ name: 'create-account-page' });
}
</script>

<style lang="scss">

</style>