<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="'/images/' + product_data.image"
      alt="img"
    />
    <!-- можно и так
       :src="require('../assets/images/' + product_data.image)" -->
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
    <button class="v-catalog-item__add-to-cart-btn btn">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "vCatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 2rem;
  margin-bottom: 2rem;

  &__image {
    width: 100px;
  }
}
</style>
