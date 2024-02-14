<script setup>
import { useRubricatorStore } from '@/stores/rubricator'
import RRecursiveList from '@/components/Rubricator/RRecursiveList.vue'

const rubricator = useRubricatorStore()

rubricator.fetchRubric()
</script>
<template>
  <ul class="rubric">
    <li class="rubric__item" v-for="rubric in rubricator.rubric">
      <RRecursiveList :rubric="rubric" :level="1" />
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.rubric {
  
}
</style>
