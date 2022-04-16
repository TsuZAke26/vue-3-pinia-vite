<template>
  <AddEditNote
    ref="addEditNoteRef"
    bgColor="info"
    v-model="noteText"
    placeholder="Add a new note"
  >
    <template #buttons>
      <button
        :disabled="!noteText"
        class="button is-link has-background-info"
        @click.prevent="addNewNote"
      >
        Add New Note
      </button>
    </template>
  </AddEditNote>

  <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

import AddEditNote from '@/components/notes/AddEditNote.vue';
import Note from '@/components/notes/Note.vue';
import type { INote } from '@/types/INote';
import { useStoreNotes } from '@/stores/notes';

import { useWatchCharacters } from '@/use/useWatchCharacters';

const storeNotes = useStoreNotes();

// https://stackoverflow.com/questions/71847421/vue3-how-to-type-a-component-instance-template-ref-with-exposed-methods/71849133
const addEditNoteRef: Ref<InstanceType<typeof AddEditNote> | null> = ref(null);

const noteText = ref('');
const addNewNote = () => {
  const id = new Date().getTime().toString();

  const newNote: INote = {
    id,
    text: noteText.value,
  };

  storeNotes.addNote(newNote);

  noteText.value = '';
  addEditNoteRef.value?.focusTextArea();
};
useWatchCharacters(noteText, 140);
</script>
