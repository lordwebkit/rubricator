<script setup>
const props = defineProps(['isChecked'])
const emit = defineEmits(['switch'])

const toggle = () => {
  emit('switch')
}
</script>
<template>
  <label class="switch-toggle" @click="toggle">
    <input type="checkbox" :checked="props.isChecked" class="switch-toggle__checkbox" />
    <button class="switch-toggle__slider"></button>
  </label>
</template>
<style lang="scss" scoped>
.switch-toggle {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;

  &__checkbox {
    display: none;

    &:checked + .switch-toggle__slider {
      background-color: var(--btn-primary);
    }

    &:checked + .switch-toggle__slider::before {
      transform: translateX(16px);
    }
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    border: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dcdcdc;
    transition: 0.4s;
    border-radius: 20px;
    padding: 0;

    &::before {
      position: absolute;
      content: '';
      height: 14px;
      width: 14px;
      left: 1px;
      bottom: 1px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
}
</style>
