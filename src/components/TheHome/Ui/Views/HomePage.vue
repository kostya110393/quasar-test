<template>
    <q-page class="row  items-center">
        <q-btn type="submit" label="Выход из аккаунта" color="primary" @click="exitAccount"/>
        <q-card class="full-width">
            <q-card-section>
                <div class="text-h6">Добавление элементов в таблицу</div>
            </q-card-section>
            <q-card-section>
                <div class="q-gutter-md">
                    <q-date v-model="filters.date" range />

                    <q-select
                        v-model="filters.param1"
                        :options="param1Options"
                        label="Параметр 1"
                        outlined
                    />
                    <q-select
                        v-model="filters.param2"
                        :options="param2Options"
                        label="Параметр 2"
                        outlined
                    />
                    <q-select
                        v-model="filters.param3"
                        :options="param3Options"
                        label="Параметр 3"
                        outlined
                    />
                    <q-btn type="submit" label="Добавить" color="primary" @click="applyFilters"/>
                </div>
            </q-card-section>
        </q-card>

        <q-card  class="full-width">
            <q-card-section>
                <div class="text-h6">Результаты</div>
            </q-card-section>
            <q-table
                :rows="tableData"
                :columns="columns"
                row-key="id"
                dense
                flat
                bordered
            />
        </q-card>
    </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const filters = ref({
    date: {},
    param1: null,
    param2: null,
    param3: null,
})
const param1Options = ref(["Опция 1", "Опция 2", "Опция 3"]);
const param2Options = ref(["Опция A", "Опция B", "Опция C"]);
const param3Options = ref(["Вариант X", "Вариант Y", "Вариант Z"]);
const tableData = ref(JSON.parse(localStorage.getItem("reportData")) ?? []);

const columns =ref([
    { name: "id", label: "ID", field: "id", align: "left" },
    { name: "date", label: "Дата", field: "date", align: "left" },
    { name: "param1", label: "Параметр 1", field: "param1", align: "left" },
    { name: "param2", label: "Параметр 2", field: "param2", align: "left" },
    { name: "param3", label: "Параметр 3", field: "param3", align: "left" },
    { name: "value", label: "Значение", field: "value", align: "right" },
]);

const applyFilters = () => {
    console.log(filters.value.date.from)
    tableData.value.push({
        id: tableData.value.length + 1,
        date: `${filters.value.date.from} - ${filters.value.date.to}`,
        param1: filters.value.param1,
        param2: filters.value.param2,
        param3: filters.value.param3,
        value: Math.random().toFixed(2),
    });
    saveToLocalStorage();
};

const saveToLocalStorage = () => {
    localStorage.setItem("reportData", JSON.stringify(tableData.value));
};

const exitAccount = () => {
    localStorage.removeItem('auth');
    router.push({ name: 'auth-page' });
}
</script>