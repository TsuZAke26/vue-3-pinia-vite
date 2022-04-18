<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="deleteModalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(id)">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside, onKeyUp } from '@vueuse/core';
import { useStoreNotes } from '@/stores/notes';

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  id: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['update:modelValue']);

const storeNotes = useStoreNotes();

const deleteModalCardRef = ref(null);
const closeModal = () => {
  emits('update:modelValue', false);
};
onClickOutside(deleteModalCardRef, (event) => {
  closeModal();
});

/*
  Respond to keyboard input
*/
const handleKeyboard = (event: any) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};
onKeyUp('Escape', handleKeyboard);
</script>
