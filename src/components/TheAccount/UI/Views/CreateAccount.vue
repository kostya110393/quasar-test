<template>
    <q-page class="row justify-center items-center">
        <q-card class="q-pa-md" style="width: 300px">
            <q-card-section>
                <div class="text-h6">Создание нового аккаунта</div>
            </q-card-section>
    
            <q-card-section>
                <q-input
                    v-model="login"
                    label="Введите логин"
                    outlined
                    dense
                    :error="loginError"
                    :error-message="loginErrorMessage"
                />
        
                <q-input
                    v-model="password"
                    label="Введите пароль"
                    type="password"
                    outlined
                    dense
                    :error="passwordError"
                    :error-message="passwordErrorMessage"
                    class="q-mt-sm"
                />
            </q-card-section>
            <q-card-actions align="center">
                <q-btn color="primary" label="Создать" @click="onCreate" />
            </q-card-actions>
            <q-card-section @click="authAccount" class="text-negative">
                Авторизироваться
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
import { useAccountStore } from '../../Functional/State/accounts.js';

const router = useRouter();
const store = useAccountStore();

const  login = ref(null);
const  password = ref(null);
const  error = ref(null);
const  loginError = ref(false);
const  loginErrorMessage = ref(null);
const  passwordError = ref(false);
const  passwordErrorMessage = ref(null);

const onCreate = () => {   
    loginError.value = false;
    passwordError.value = false;

    const checkAccount = store.accounts.find(account => account.login === login.value);

    if(checkAccount){
        loginError.value = true;
        loginErrorMessage.value = 'Такой логин уже существует';
        return;
    }

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
    store.addUser({
        login: login.value, 
        password: password.value
    });

    authAccount();
};

const authAccount = () => {
    router.push({ name: 'auth-page' });
}
</script>
<style lang="scss">

</style>