<script setup>
import { onMounted, ref } from "vue";
const isDisabled = ref(false);
const uploadedImages = ref([]);
const cloudName = import.meta.env.VITE_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

const uploadWidget = () => {
  isDisabled.value = true;
  console.log({ cloudName, uploadPreset });
};
</script>

<template>
  <div class="row mb-3 text-center justify-content-center">
    <div class="col-md-4">
      <div class="card mb-4 rounded-3 shadow-sm border-primary">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Cargar Fotos</h4>
        </div>
        <div class="card-body">
          <button
            type="button"
            :class="{
              'w-100': true,
              'btn-primary': true,
              btn: true,
              'btn-sm': true,
              'btn-disabled': isDisabled,
            }"
            :disabled="isDisabled"
            @click="uploadWidget"
          >
            Subir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
