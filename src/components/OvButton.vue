<template>
  <Component
    class="ov-btn"
    :is="component"
    :class="[
    `ov-btn--${variant}`,
    `ov-btn--${size}`, 
    `ov-btn--${color}`, 
    ]"
    :disabled="isDisabled"
    :to="route">
    {{ text }}
  </Component>
</template>
<script setup lang="ts">
import { PropType, computed, useAttrs  } from 'vue'

const { href, to } = useAttrs()

type Variant = 'default' | 'outline' | 'text'
type Size = 'sm' | 'md' | 'lg'
type Color = 'primary' | 'secondary' | 'danger'

const props = defineProps({
  text: { type: String, default: "Default" },
  route: {type: String},
  variant: { 
    type: String as PropType<Variant>, 
    default: "default",
  },
  size: { 
    type: String as PropType<Size>, 
    default: "md",
  },
  color: { 
    type: String as PropType<Color>, 
    default: "primary",
  },
  disableShadow: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const isDisabled = computed(() =>{
  return props.disabled ? true : false
})

const component = computed(() => {
  if (href) return 'a'
  else {
    if (to) return 'router-link'
    else return 'button'
  }
})
</script>
<style scoped>
.ov-btn {
  @apply rounded-md ;
}
.ov-btn--sm{
  @apply px-2 py-1 text-sm;
}
.ov-btn--md{
  @apply px-5 py-2 text-base;
}
.ov-btn--lg{
  @apply px-4 py-2 text-lg;
}
.ov-btn--default{
  @apply bg-culqi-blue text-culqi-white
}
.ov-btn--default:disabled{
  @apply bg-slate-300 text-slate-500 shadow-none outline-0
}
.ov-btn--outline{
  @apply outline bg-white outline-culqi-blue text-culqi-blue outline-2 
}
.ov-btn--outline:disabled{
  @apply bg-slate-300 text-slate-500 shadow-none outline-slate-400 
}
.ov-btn--text{
  @apply p-0 text-culqi-blue shadow-none;
}


/*
  @media (min-width: 1024px) {
    .ov-button {
      @apply px-4 py-3 rounded-xl text-base font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500;
    }
  }*/
</style>
