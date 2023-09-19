<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product of data as IProduct[]" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IProduct } from "~/pages/products/ProductTypes";

definePageMeta({
  layout: "custom",
});

const { data } = await useFetch("/api/getProductList");
</script>
