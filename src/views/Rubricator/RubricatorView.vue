<script setup>
import { computed, ref } from 'vue'
import { useRubricatorStore } from '@/stores/rubricator'

import RList from '@/components/Rubricator/RList.vue'
import GArrowToggle from '@/components/Global/GArrowToggle.vue'
import GSwitchToggle from '@/components/Global/GSwitchToggle.vue'
import GSpinnerPreloader from '@/components/Global/GSpinnerPreloader.vue'

const store = useRubricatorStore()
const rubricatorTrees = ref(true)
const isRubricWithEmptyRubric = computed(() => (store.isRubricWithEmptyRubric === 1 ? true : false))

const handleToggleRubricatorTrees = () => {
  rubricatorTrees.value = !rubricatorTrees.value
}

const debounce = (func, delay) => {
  let timeoutId

  return (...args) => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const debounceFetchRubric = debounce(() => store.fetchRubric(), 400)

const handleToggleSwitchEmptyRubric = () => {
  store.isRubricWithEmptyRubric = isRubricWithEmptyRubric.value ? 0 : 1

  debounceFetchRubric()
}
</script>
<template>
  <main class="rubricator r-container">
    <div class="rubricator__inner r-inner">
      <div class="rubricator__header">
        <div class="rubricator-header__preview preview">
          <GArrowToggle
            v-if="!store.isRubricLoad"
            :is-checked="rubricatorTrees"
            @toggle="handleToggleRubricatorTrees"
            :size="22"
          />
          <GSpinnerPreloader v-else />
          <h1 class="preview__title r-title">Рубрикатор</h1>
        </div>
        <div class="rubricator-header__empty-rubric">
          <div class="empty-rubric">
            <p class="empty-rubric__description">пустые рубрики</p>
            <GSwitchToggle
              :is-checked="isRubricWithEmptyRubric"
              @switch="handleToggleSwitchEmptyRubric"
            />
          </div>
        </div>
      </div>
      <div class="rubricator__list" v-show="rubricatorTrees">
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
    align-items: center;
    justify-content: space-between;
  }

  &__list {
    padding-left: 10px;
  }
}

.preview {
  display: flex;
  gap: 5px;
  align-items: center;
}

.empty-rubric {
  display: flex;
  align-items: center;
  gap: 5px;

  &__description {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
}
</style>
