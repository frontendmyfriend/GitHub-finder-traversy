if (import.meta.env.DEV) {
  import("react-devtools-inline/dist/frontend").then(frontend => {
    frontend.initialize(window, {
      host: "localhost",
      port: 8097
    });
  });
}