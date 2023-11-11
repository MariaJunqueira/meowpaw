export type Route = {
  path: string; // Path of the route
  view?: (params?: any) => Promise<string>; // The view function that returns the component as a string
  redirectTo?: string; // URL to redirect to (for fallback routes)
  kitties?: Route[]; // Subroutes
};

const routes: Route[] = [
  {
    path: "",
    view: () =>
      import("./app.component").then(() => `<app-component></app-component>`), // Assuming HomeComponent is already defined
    kitties: [
      {
        path: "/",
        view: () =>
          import("./home/home.component").then(
            () => `<home-component></home-component>`
          ), // Assuming HomeComponent is already defined
      },
      {
        path: "/contact",
        view: () =>
          import("./contact/contact.component").then(
            () => `<contact-component></contact-component>`
          ), // Assuming AboutComponent is already defined
        kitties: [
          {
            path: "/email",
            view: () =>
              import("./contact/email/email.component").then(
                () => `<email-component></email-component>`
              ), // Assuming AboutComponent is already defined
          },
        ],
      },
      {
        path: "/about/:id",
        view: () =>
          import("./about/about.component").then(
            () => `<about-component></about-component>`
          ),
      },
      {
        path: "/404",
        view: () =>
          import("./not-found/not-found.component").then(
            () => `<not-found-component></not-found-component>`
          ),
      },
      {
        path: "*", // Fallback route
        redirectTo: "/404",
      },
      // ... other routes
    ],
  },
];

export default routes;