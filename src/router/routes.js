const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
    children: [
      {
        path: "/login",
        component: () => import("src/pages/CredentialBee.vue"),
      },
    ],
  },
  {
    path: "/oil-products",
    component: () => import("pages/landing-one.vue"),
  },
  // {
  //   path: "/login",
  //   component: () => import("pages/Credential.vue"),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
