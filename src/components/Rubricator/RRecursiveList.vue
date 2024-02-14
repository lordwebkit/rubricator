<script setup>
import { ref } from 'vue'
import GArrowToggle from '../Global/GArrowToggle.vue'

const props = defineProps(['rubric', 'level'])

const recursiveThree = ref(true)

const toggle = () => {
  recursiveThree.value = !recursiveThree.value
}
</script>
<template>
  <div class="recursive">
    <div class="recursive__inner">
      <div class="recursive__content">
        <GArrowToggle
          :open="recursiveThree"
          @toggle="toggle"
          v-show="rubric.children && rubric.children.length"
        />
        <h2
          class="recursive__title"
          :class="[
            { 'recursive__title--root': props.level === 1 },
            {
              'recursive__title--empty-root':
                rubric.children && !rubric.children.length && props.level === 1
            },
            {
              'recursive__title--empty':
                rubric.children && !rubric.children.length && props.level !== 1
            }
          ]"
        >
          {{ rubric.title }}
        </h2>
      </div>
      <ul
        class="recursive__list"
        :style="{ 'margin-left': props.level * 15 + 'px' }"
        v-if="rubric.children && rubric.children.length"
        v-show="recursiveThree"
      >
        <r-recursive-list
          v-for="child in rubric.children"
          :key="child.id"
          :rubric="child"
          :level="props.level + 1"
        ></r-recursive-list>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.recursive {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    &--root {
      font-weight: 500;
    }

    &--empty {
      padding-left: 6px;
    }

    &--empty-root {
      padding-left: 21px;
    }
  }
}
</style>
