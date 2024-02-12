import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "@components/test/MainComponent.vue";
import ListComponent from "@components/test/ListComponent.vue";
import UploadComponent from "@components/test/UploadComponent.vue";
// import DetailComponent from "@components/test/DetailComponent.vue";
import store from "./store.js";

const ErrorPage = {
  template: `<div><h3>404 Page</h3></div>`,
};

const userAuthenticationGuard = (to, from, next) => {
  // to: 이동할 url 정보가 담긴 라우터 객체
  // from: true를 보낸 현재 url 정보가 담긴 라우터 객체
  // next: to로 보내기 전에 반드시 호출되어야 하는 함수

  if (store.state.user) next();
  else next({ name: "Main" });
};

const routes = [
  { path: "/", name: "Main", component: MainComponent },
  { path: "/list", name: "List", component: ListComponent },
  {
    path: "/upload",
    name: "Upload",
    component: UploadComponent,
    beforeEnter: [userAuthenticationGuard],
  },
  // {
  //   path: "/post/:id",
  //   name: "Detail",
  //   component: DetailComponent,
  //   props: true,
  // },
  { path: "/:pathMatch(.*)", name: "No-match", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
