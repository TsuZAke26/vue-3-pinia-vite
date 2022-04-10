import { createRouter, createWebHashHistory } from 'vue-router';

import NotesView from '@/views/NotesView.vue';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: NotesView,
  },
  {
    path: '/stats',
    name: 'stats',
    component: () => import('../views/StatsView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
