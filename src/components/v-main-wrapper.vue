<template>
  <div class="v-main-wrapper">
    <h1>{{ title }}</h1>

    <vCatalog />

    <vCart />
  </div>
</template>

<script>
import vCatalog from "../components/v-catalog.vue";
import vCart from "../components/v-cart.vue";

export default {
  name: "v-main-wrapper",
  data() {
    return { title: "main wrapper" };
  },
  mounted() {
    // console.log("Hello i am alive!");
  },
  components: {
    vCatalog,
    vCart,
  },
};
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
