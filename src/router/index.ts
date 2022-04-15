import { createRouter, createWebHashHistory } from 'vue-router';

import NotesView from '@/views/ViewNotes.vue';

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: NotesView,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('../views/ViewStats.vue'),
  },
  {
    path: '/note/edit/:id',
    name: 'EditNote',
    component: () => import('../views/ViewEditNote.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
