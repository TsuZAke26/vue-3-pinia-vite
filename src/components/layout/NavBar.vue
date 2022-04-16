<template>
  <nav class="navbar is-info" aria-label="main navigation" role="navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <!-- Hamburger Button -->
        <a
          :class="{ 'is-active': showMobileNav === true }"
          class="navbar-burger"
          @click.prevent="showMobileNav = !showMobileNav"
          aria-expanded="false"
          aria-label="menu"
          data-target="navbarBasicExample"
          role="button"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        :class="{ 'is-active': showMobileNav === true }"
        class="navbar-menu"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            class="navbar-item"
            active-class="is-active"
            :to="{ name: 'Notes' }"
            @click="showMobileNav = false"
          >
            Notes
          </RouterLink>
          <RouterLink
            class="navbar-item"
            active-class="is-active"
            :to="{ name: 'Stats' }"
            @click="showMobileNav = false"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const showMobileNav = ref(false);

const navbarMenuRef: Ref<HTMLElement | null> = ref(null);
const navbarBurgerRef: Ref<HTMLElement | null> = ref(null);
onClickOutside(
  navbarMenuRef,
  (event) => {
    if (showMobileNav) {
      showMobileNav.value = false;
    }
  },
  { ignore: [navbarBurgerRef] }
);
</script>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
