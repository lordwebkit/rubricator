<script setup>
import { useRubricatorStore } from '@/stores/rubricator'
import RRecursiveList from '@/components/Rubricator/RRecursiveList.vue'

const store = useRubricatorStore()

store.fetchRubric()
</script>
<template>
  <ul class="rubric">
    <li class="rubric__item" v-for="rubric in store.rubric">
      <RRecursiveList :rubric="rubric" :level="1" />
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.rubric {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
