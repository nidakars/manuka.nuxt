<template>
  <div id="app">
    <Liste></Liste>
    <LeftMenu></LeftMenu>
    <ProductButton> </ProductButton>
  </div>
</template>
<script>
import LeftMenu from '@/components/leftMenu.vue'
import ProductButton from '@/components/ProductButtons/ProductButton.vue'
import Liste from '@/components/list.vue'

export default {
  name: 'app',
  components: {
    LeftMenu,
    ProductButton,
    Liste,
  },
}
</script>
