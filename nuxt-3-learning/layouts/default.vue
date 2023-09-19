<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" active-class="layout__active-link">
          Dummy shop
        </NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/" class="btn" active-class="layout__active-link"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="btn"
              active-class="layout__active-link"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/products"
              class="btn"
              active-class="layout__active-link"
            >
              Products
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout__active-link {
  color: #12b488;
}
</style>
