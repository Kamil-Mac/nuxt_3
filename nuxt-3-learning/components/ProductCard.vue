<template>
  <div class="card text-center">
    <img :src="product.image" :alt="product.description" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface IProduct {
  id: number;
  price: number;
  category: string;
  description: string;
  image: string;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
}
defineProps<{
  product: IProduct;
}>();
</script>

<style scoped lang="scss">
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
