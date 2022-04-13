<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ props.note.text }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ noteLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" href="#"> Edit </a>
      <a class="card-footer-item" @click.prevent="deleteNote(note.id)" href="#">
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';

import type { INote } from '@/types/INote';

import { useNotesStore } from '@/stores/notes';

const props = defineProps({
  note: {
    type: Object as PropType<INote>,
    required: true,
  },
});

const notesStore = useNotesStore();

const noteLength = computed(() => {
  const noteLength = props.note.text.length;
  const lengthDescription = noteLength > 1 ? 'characters' : 'character';

  return `${noteLength} ${lengthDescription}`;
});

const deleteNote = (id: string) => {
  notesStore.deleteNote(id);
};
</script>
