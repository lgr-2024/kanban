import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "@components/test/MainComponent.vue";
// import ListComponent from "@components/test/ListComponent.vue";
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
  // option 1 : name
  // option 2 : props로 데이터 전달하기(라우팅될 때 전달되는 데이터, url을 직접 바꾸어도 데이터가 전달됨)
  // option 3 : params로 데이터 전달하기(props: true) (클릭 이벤트될 때, 전달되는 데이터, url을 직접 바꾸어도 데이터가 전달되지 않음, ListComponent에서 직접 보내는 것으로 해결할 수 있음)
  { path: "/", name: "Main", component: MainComponent, props: { foo: "bar" } },
  { path: "/list", name: "List", component: ListComponent, props: false },
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
  // {
  //   path: "/:pathMatch(.*)",
  //   name: "No-match",
  //   redirect: "/",
  // },
  {
    path: "/:pathMatch(.*)",
    name: "No-match",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
