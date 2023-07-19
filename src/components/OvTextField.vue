<template>
  <div
    class="text-field"
    :class="[`text-field--${size}`, $attrs.class]"
  >
    <label v-if="label" class="text-field__label">{{
      computedLabel
    }}</label>
    <div
      class="text-field__input-wrapper"
      
      :class="[
        { 'text-field__input-wrapper--focused': isFocused },
      ]"
    >
      <input
        ref="input"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :aria-label="label || placeholder"
        :readonly="readonly"
        :required="required"
        class="text-field__input"
        v-on="{
          focus,
          blur
        }"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, computed, ref } from "vue";

const emit = defineEmits([
  'focus',
  'blur'
])

type TextFieldSize = "sm" | "md" | "lg";

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<
      string | number | null | undefined | boolean
    >,
    default: undefined,
  },
  placeholder: { type: String, default: undefined },
  label: { type: String, default: undefined },
  name: { type: String, default: "input" },
  type: {
    type: String,
    default: "text",
    validator: (value: string) => {
      return [
        "text",
        "date",
        "number",
        "tel",
        "search",
        "url",
        "password",
        "month",
        "time",
        "week",
        "email",
      ].includes(value);
    },
  },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  size: {
    type: String as PropType<TextFieldSize>,
    default: "md",
    validator: (value: string) => {
      return ["sm", "md", "lg"].includes(value);
    },
  },
});

const isFocused = ref(false);
const hasPasswordVisible = ref(false)
const input = ref<HTMLElement | undefined>()


const inputType = computed(() =>
  hasPasswordVisible.value ? 'text' : props.type
)
const focus = (event: Event) => {
  emit('focus', event)
  isFocused.value = true
}
const blur = (event: Event) => {
  emit('blur', event)
  isFocused.value = false
}
const computedLabel = computed(() => {
  const { required, label } = props
  if (!label) return undefined
  return required ? `${label} *` : label
})
</script>
<style scoped>
.text-field {
  min-width: 200px;
}
.text-field__label {
  @apply text-culqi-blue inline-block mb-2;
  font-size: 14px;
}
.text-field__input-wrapper {
  @apply border rounded-lg flex items-center;
  padding: 0 12px;
}
.text-field__input-wrapper--focused{
  @apply border rounded-lg border-culqi-green flex;
  
}
.text-field__input {
  @apply w-full h-full text-culqi-blue font-normal px-2 py-4 focus:outline-none;
}
</style>
