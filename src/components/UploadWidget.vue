<script setup>
import { onMounted, ref } from "vue";

const emit = defineEmits(["photo-upload"]);
const isDisabled = ref(false);
const uploadedImages = ref([]);

const scriptLoaded = ref(false);

const processResults = (error, result) => {
  if (result.event === "close") {
    isDisabled.value = false;
  }
  if (result && result.event === "success") {
    const secureUrl = result.info.secure_url;
    const previewUrl = secureUrl.replace(
      "/upload/",
      "/upload/w_400/f_auto,q_auto/"
    );
    emit("photo-upload", result);
    uploadedImages.value.push(previewUrl);
    isDisabled.value = false;
  }
  if (error) {
    isDisabled.value = false;
  }
};

const cloudName = import.meta.env.VITE_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

const uploadWidget = () => {
  isDisabled.value = true;
  window.cloudinary.openUploadWidget(
    {
      cloudName,
      uploadPreset,
      sources: ["local"],
      secure: false,
      clientAllowedFormats: ["image"],
      resourceType: "image",
      language: "es",
      multiple: false,
      tags: ["myphotoalbum-vue"],
      text: {
        es: {
          menu: {
            files: "Mis archivos",
          },
          or: "O",
          local: {
            browse: "Navegar",
            dd_title_single: "Arrastre y suelte recursos aquí",
          },
        },
      },
    },
    processResults
  );
};

onMounted(async () => {
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", "uw");
  script.src = "https://upload-widget.cloudinary.com/global/all.js";
  script.addEventListener("load", () => (scriptLoaded.value = true));

  script.onerror = () => {
    console.error("Failed to load third-party script.");
  };
  document.head.appendChild(script);
});
</script>

<template>
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
    Generar portada
  </button>
</template>
