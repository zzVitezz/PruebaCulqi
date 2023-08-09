<template>
  <OvPage>
    <OvWrapper>
      <section class="hidden flex-col w-3/4 lg:flex lg:block">
        <div class="w-full">
          <img
            src="../assets/images/loginImg.png"
            alt="loginImage"
            class="w-full"
          />
        </div>
        <!--Separador-->
        <div class="bg-culqi-green w-full h-4 max-h-4"></div>
        <!--Separador-->
        <div class="flex flex-col p-7 justify-between bg-culqi-blue h-full">
          <img src="../assets/iconCulqi.svg" alt="logoCulqi" class="w-20" />
          <div class="text-5xl text-culqi-white font-semibold">
            Dale más power ⚡ a tus empleados hoy 💪
          </div>
          <div class="text-xs text-culqi-white">
            Te ayudamos a gestionarlos de manera más sencilla
          </div>
        </div>
      </section>
      <section
        class="flex flex-col items-center justify-between py-8 w-full px-8 lg:px-32"
      >
        <div>
          <img
            src="../assets/logoCulqi.svg"
            alt="logoCulqi"
            class="w-20 lg:hidden"
          />
        </div>
        <div class="flex flex-col items-center w-full">
          <div class="text-xl text-culqi-blue font-semibold mb-8">
            Inicia sesión
          </div>
          <div class="mb-8 w-full">
            <OvTextField
              required
              v-model="email"
              type="email"
              label="Correo electrónico"
              placeholder="Ingresa el correo electrónico"
              class="mb-6"
            ></OvTextField>
            <OvTextField
              required
              type="password"
              label="Contraseña"
              placeholder="Ingresa la contraseña"
            ></OvTextField>
          </div>
          <OvButton text="Iniciar sesión" @click="her()" class="w-full mb-8" />
          <div>
            <span>¿Eres nuevo aquí?</span
            ><OvButton variant="text" text="Crea una cuenta" href="https://afiliate.culqi.com/online/step1" class="text-culqi-green ml-1"></OvButton>
          </div>
        </div>
        <div>2023 Culqi. Todos los derechos reservados</div>
      </section>
    </OvWrapper>
  </OvPage>
</template>

<script setup lang="ts">
import OvButton from "../components/OvButton.vue";
import OvPage from "../components/OvPage.vue";
import OvWrapper from "../components/OvWrapper.vue";
import OvTextField from "../components/OvTextField.vue";
import { userStore } from "../stores/userStore.ts";
import { ref } from "vue";

const email = ref("")
const workers = userStore()
const her = () =>{
  
  workers.addUser(email.value)
  console.log(workers.names)
  
}

</script>
