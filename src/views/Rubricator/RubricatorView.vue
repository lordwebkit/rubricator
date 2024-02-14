<script setup>
import { ref } from 'vue'
import RList from '@/components/Rubricator/RList.vue'
import GArrowToggle from '@/components/Global/GArrowToggle.vue'

const rubricatorThree = ref(true)

const toggle = () => {
  rubricatorThree.value = !rubricatorThree.value
}
</script>
<template>
  <main class="rubricator r-container">
    <div class="rubricator__inner r-inner">
      <div class="rubricator__header">
        <GArrowToggle :open="rubricatorThree" @toggle="toggle" :size="22" />
        <h1 class="rubricator__title r-title">Рубрикатор</h1>
      </div>
      <div class="rubricator__list" v-show="rubricatorThree">
        <RList />
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.rubricator {
  &__inner {
    flex-direction: column;
    display: flex;
    gap: 20px;
  }

  &__header {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  &__list {
    padding-left: 10px;
  }
}
</style>
