<script setup>
import RList from '@/components/Rubricator/RList.vue'
</script>
<template>
  <section class="rubricator r-container">
    <div class="rubricator__inner r-inner">
      <h1 class="rubricator__title r-title">Рубрикатор</h1>
      <RList />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.rubricator {
  &__inner {
    flex-direction: column;
    display: flex;
    gap: 20px;
  }
}
</style>
