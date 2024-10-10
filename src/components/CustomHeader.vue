<template>
  <header>
    <div
      class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
    >
      <router-link
        :to="{ name: 'home' }"
        class="d-flex align-items-center link-body-emphasis text-decoration-none"
      >
        <span class="fs-4"> Cloudinary </span>
      </router-link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <router-link
          :to="{ name: 'home' }"
          class="me-3 py-2 link-body-emphasis text-decoration-none"
        >
          Inicio
        </router-link>
        <router-link
          :to="{ name: 'album' }"
          class="me-3 py-2 link-body-emphasis text-decoration-none"
        >
          Album
        </router-link>
      </nav>
    </div>
  </header>
</template>
