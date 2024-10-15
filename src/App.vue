<script setup>
import CustomHeader from "@/components/CustomHeader.vue";
</script>

<template>
  <custom-header />
  <main class="main">
    <RouterView />
  </main>
  <footer class="footer section">
    <div class="shape-small"></div>
    <div class="shape-big"></div>

    <div class="footer-container container grid">
      <div>
        <a href="#" class="footer-logo">
          <img src="https://i.postimg.cc/3w79mb3Z/logo-skull.png" alt="logo" />
          Halloween
        </a>

        <p class="footer-description">
          Disfruta de lo más <br />espeluznante noche de tu vida
        </p>
      </div>

      <div class="footer-content">
        <div>
          <h3 class="footer-title">Social Media</h3>

          <ul class="footer-social">
            <a
              href="https://github.com/JonathanQuishpe"
              target="_blank"
              class="footer-social-link"
            >
              <i class="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-quishpe-ab0228188/"
              target="_blank"
              class="footer-social-link"
            >
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </ul>
        </div>
      </div>

      <img
        src="https://i.postimg.cc/Qd9Pn3JX/footer-tree1.png"
        alt="image"
        class="footer-tree1"
      />
      <img
        src="https://i.postimg.cc/HLCN21GJ/footer-tree2.png"
        alt="image"
        class="footer-tree2"
      />
    </div>

    <span class="footer-copy">
      &#169; Copyright Andrés Quishpe. All rights reserved
    </span>
  </footer>
</template>
