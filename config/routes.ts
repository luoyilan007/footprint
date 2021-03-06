export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',

    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: './Welcome',
      },
      {
        path: '/playground',
        name: 'playground',
        routes: [
          {
            path: '/playground/pdf',
            name: 'pdf',
            component: './playground/PDFReview',
          },
        ],
      },

      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
