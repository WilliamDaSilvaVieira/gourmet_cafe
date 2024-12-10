<template>
  <ShopComponent />
</template>

<script>
import ShopComponent from "./components/ShopComponent.vue";

export default {
  name: "App",
  components: {
    ShopComponent,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  background: #222;
}

#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
