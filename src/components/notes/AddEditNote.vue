<template>
  <div :class="`has-background-${bgColor}-dark`" class="card p-4 mb-5">
    <!-- Card Label -->
    <label v-if="label" class="label has-text-white">{{ label }}</label>

    <!-- Textarea -->
    <div class="field">
      <div class="control">
        <textarea
          ref="textareaRef"
          v-model="modelValue"
          :placeholder="placeholder"
          class="textarea"
          @input="$emit('update:modelValue', modelValue)"
          maxlength="140"
          v-autofocus
        />
      </div>
    </div>

    <!-- Button -->
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: 'success',
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    default: 'Enter note text here...',
  },
});

const emits = defineEmits(['update:modelValue']);

const textareaRef: Ref<HTMLElement | null> = ref(null);
const focusTextArea = () => {
  textareaRef.value?.focus();
};

defineExpose({
  focusTextArea,
});
</script>
