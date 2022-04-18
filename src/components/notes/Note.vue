<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.text }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ noteLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <!-- Edit Button -->
      <RouterLink class="card-footer-item" :to="`/note/edit/${note.id}`">
        Edit
      </RouterLink>

      <!-- Delete Button -->
      <a
        class="card-footer-item"
        @click.prevent="handleDelete(note.id)"
        href="#"
      >
        Delete
      </a>
    </footer>
  </div>

  <ModalDeleteNote
    v-if="modals.deleteNote"
    v-model="modals.deleteNote"
    :id="note.id"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { computed, type PropType } from 'vue';

import ModalDeleteNote from './ModalDeleteNote.vue';

import type { INote } from '@/types/INote';

const props = defineProps({
  note: {
    type: Object as PropType<INote>,
    required: true,
  },
});

const noteLength = computed(() => {
  const noteLength = props.note.text.length;
  const lengthDescription = noteLength > 1 ? 'characters' : 'character';

  return `${noteLength} ${lengthDescription}`;
});

const handleDelete = () => {
  modals.deleteNote = true;
};

const modals = reactive({
  deleteNote: false,
});
</script>
