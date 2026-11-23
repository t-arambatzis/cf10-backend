import express from "express";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import { setupSwagger } from "./swagger";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
});

setupSwagger(app);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// app.use('/api/roles', roleRoutes);

export default app;
