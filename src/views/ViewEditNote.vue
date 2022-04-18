<template>
  <AddEditNote
    v-model="noteText"
    bgColor="info"
    label="Edit Note"
    placeholder="Edit note text"
  >
    <template #buttons>
      <button
        :disabled="noteText === initialNoteText"
        class="button is-link has-background-info mr-2"
        @click.prevent="handleEditNote"
      >
        Save Changes
      </button>

      <button class="button is-link is-light" @click.prevent="$router.back()">
        Cancel
      </button>
    </template>
  </AddEditNote>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AddEditNote from '@/components/notes/AddEditNote.vue';

import { useStoreNotes } from '@/stores/notes';

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

const noteId = <string>route.params.id;
const initialNoteText = storeNotes.getNoteById(noteId)?.text;
const noteText = ref(initialNoteText ?? '');
const handleEditNote = () => {
  storeNotes.editNote({ id: noteId, text: noteText.value ?? '' });
  router.push({ name: 'Notes' });
};
</script>
