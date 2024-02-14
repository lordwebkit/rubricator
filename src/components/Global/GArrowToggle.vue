<script setup>
import IDownArrow from '@/assets/icon/IDownArrow.vue'

const props = defineProps(['isChecked', 'size'])
const emit = defineEmits(['toggle'])

const toggle = () => {
  emit('toggle')
}
</script>
<template>
  <button class="arrow-toggle" :class="{ 'arrow-toggle--close': !props.isChecked }" @click="toggle">
    <IDownArrow :size="props.size ?? 16" />
  </button>
</template>
<style lang="scss" scoped>
.arrow-toggle {
  display: flex;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &--close {
    transform-origin: center;
    transform: rotate(-90deg) translateY(2px);
  }
}
</style>
