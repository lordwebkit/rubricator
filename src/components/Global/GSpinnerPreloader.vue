<script setup></script>

<template>
  <svg class="spinner-preloader" viewBox="0 0 50 50">
    <circle
      class="spinner-preloader__svg"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke-width="2"
    ></circle>
  </svg>
</template>

<style scoped lang="scss">
.spinner-preloader {
  animation: rotate 2s linear infinite;
  width: 30px;
  height: 30px;

  &__svg {
    stroke: var(--btn-primary);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
