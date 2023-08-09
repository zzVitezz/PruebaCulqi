<template>
    <main>  
        <div>
            Nombre de Usuario: {{ user.names }}
        </div>
    </main>
</template>
<script setup lang="ts">
import { userStore } from "../stores/userStore.ts";
import { storeToRefs } from "pinia";

const user = storeToRefs(userStore())
</script>