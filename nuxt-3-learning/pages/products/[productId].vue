<template>
  <div>
    <!--    instead of useHead-->
    <Head>
      <Title>{{ product.title }}</Title>
      <Meta name="description" content="content"></Meta>
    </Head>
    <ProductDetails :product="product" />
  </div>
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
