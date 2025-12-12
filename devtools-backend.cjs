const backend = require("react-devtools-inline/backend");

backend.listen({
  host: "localhost",
  port: 8097,
});

console.log("🔥 React DevTools backend running at http://localhost:8097");