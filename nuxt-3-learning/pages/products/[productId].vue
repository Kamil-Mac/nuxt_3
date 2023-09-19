<template>
  <div><ProductDetails :product="product" /></div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

definePageMeta({
  layout: "custom",
});

const { productId } = useRoute().params;
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${productId}`,
);
</script>
