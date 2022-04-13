import { defineStore } from 'pinia';

import type { INote } from '@/types/INote';

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          text: 'Lorem ipsum dolor is common placecholder text',
        },
      ],
    };
  },
  actions: {
    addNote(note: INote) {
      this.$state.notes.unshift(note);
    },
    editNote(noteId: string, text: string) {
      const existingNoteIndex = this.$state.notes.findIndex(
        (note) => note.id === noteId
      );

      if (existingNoteIndex !== -1) {
        this.$state.notes.splice(existingNoteIndex, 1, { id: noteId, text });
      }
    },
    deleteNote(noteId: string) {
      this.$state.notes = this.$state.notes.filter(
        (note) => note.id !== noteId
      );
    },
  },
});
