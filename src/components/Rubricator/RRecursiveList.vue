<script setup>
import { ref } from 'vue'
import GArrowToggle from '../Global/GArrowToggle.vue'
import { useRubricatorStore } from '@/stores/rubricator'

const props = defineProps(['rubric', 'level'])
const store = useRubricatorStore()

const recursiveThree = ref(true)

const toggle = () => {
  recursiveThree.value = !recursiveThree.value
}

const calculateRecursiveCount = (rubric) => {
  let recursiveCount = rubric.count

  if (rubric.children && rubric.children.length) {
    rubric.children.forEach((child) => {
      recursiveCount += calculateRecursiveCount(child)
    })
  }

  return recursiveCount
}
</script>
<template>
  <div class="recursive">
    <div class="recursive__inner">
      <div class="recursive__content">
        <div class="recursive__preview">
          <GArrowToggle
            :is-checked="recursiveThree"
            @toggle="toggle"
            v-show="rubric.children && rubric.children.length"
          />
          <input
            class="recursive__checkbox"
            type="checkbox"
            @change="
              (e) => {
                if (e.target.checked) {
                  store.rubricCheckedItems = [...store.rubricCheckedItems, rubric.id]
                } else {
                  store.rubricCheckedItems = store.rubricCheckedItems.filter((id) => {
                    return id !== rubric.id
                  })
                }
              }
            "
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
            <a :href="`https://www.klerk.ru${rubric.url}`" target="_blank" class="recursive__link">
              {{ rubric.title }}
            </a>
          </h2>
        </div>
        <p class="recursive__count recursive-count">
          (<span class="recursive-count__self"> {{ rubric.count }} </span>,
          <span class="recursive-count__total">{{ calculateRecursiveCount(rubric) }}</span
          >)
        </p>
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
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
  }

  &__preview {
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
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 5px;

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

  &__link {
    color: var(--text-primary);
    text-decoration: none;
  }

  &__checkbox {
    cursor: pointer;
  }

  &__count {
    font-size: 14px;
    display: flex;
  }
}
</style>
