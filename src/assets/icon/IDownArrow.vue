<script setup>
import { ref, withDefaults } from 'vue'

const props = defineProps(['size'])
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    :width="`${props.size ?? 16}px`"
    :height="`${props.size ?? 16}px`"
    viewBox="0 0 512 512"
    style="
      shape-rendering: geometricPrecision;
      text-rendering: geometricPrecision;
      image-rendering: optimizeQuality;
      fill-rule: evenodd;
      clip-rule: evenodd;
    "
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <path
        fill="#000"
        d="M 89.5,159.5 C 95.1052,158.908 100.439,159.741 105.5,162C 155.347,212.014 205.347,261.847 255.5,311.5C 305.653,261.847 355.653,212.014 405.5,162C 412.167,158.667 418.833,158.667 425.5,162C 432.069,168.945 433.236,176.778 429,185.5C 374.5,240 320,294.5 265.5,349C 258.833,352.333 252.167,352.333 245.5,349C 191,294.5 136.5,240 82,185.5C 76.6773,174.374 79.1773,165.707 89.5,159.5 Z"
      />
    </g>
  </svg>
</template>
