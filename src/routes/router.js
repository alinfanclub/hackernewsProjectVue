import { createWebHistory, createRouter } from "vue-router";
import NewsView from '@/views/NewsView.vue';
import JobsView from '@/views/JobsView.vue';
import AskView from '@/views/AskView.vue';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';
// import createListView from "@/views/createList";
const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    // component: createListView('NewsView')
    component : NewsView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component : JobsView
    // component : createListView('JobsView')
  },
  {
    path: '/ask',
    name: 'ask',
    // component : createListView('AskView')
    component : AskView
  },
  {
    path: '/user/:id',
    component : UserView
  },
  {
    path: '/item/:id',
    component : ItemView
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 