const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

console.log("🚀 Server is starting...");

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan routes
app.use("/api", userRoutes);

// Menampilkan semua rute yang terdaftar di server
app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    console.log(`Route: ${middleware.route.path}`);
  } else if (middleware.name === 'router') {
    middleware.handle.stack.forEach((handler) => {
      if (handler.route) {
        console.log(`Route: ${handler.route.path}`);
      }
    });
  }
});

// Memulai server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
