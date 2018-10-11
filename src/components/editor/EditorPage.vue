<template>
  <div class="EditorPage">
    <header-component></header-component>
    <area-component clas="content"></area-component>
  </div>
</template>

<script>
import area from './EditorArea.vue'
import header from '@/components/Header.vue'

export default {
  name: 'EditorPage',
  data () {
  },
  components: {
    'area-component': area,
    'header-component': header,
  }
}
</script>

<style scoped>
.EditorPage {
  position: relative;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.content {
  width: 900px;
  min-height: 100%;
}

</style>
