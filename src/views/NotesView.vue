<template>
  <div class="card has-background-info p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          ref="newNoteTextRef"
          v-model="noteText"
          class="textarea"
          placeholder="Add a new note"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          :disabled="!noteText"
          class="button is-link has-background-info-dark"
          @click.prevent="addNewNote"
        >
          Add New Note
        </button>
      </div>
    </div>
  </div>

  <Note
    v-for="note in notes"
    :key="note.id"
    :note="note"
    @delete-note="deleteNote(note.id)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import type { INote } from '@/types/INote';

import Note from '@/components/notes/Note.vue';

const newNoteTextRef: Ref<HTMLElement | null> = ref(null);
const noteText = ref('');

const notes: Ref<INote[]> = ref([]);
const addNewNote = () => {
  const date = new Date().getTime();
  const id = date.toString();

  notes.value.unshift({
    id,
    text: noteText.value,
  });

  noteText.value = '';
  newNoteTextRef.value?.focus();
};
const deleteNote = (id: string) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
</script>
