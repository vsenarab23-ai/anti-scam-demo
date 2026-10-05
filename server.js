const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/demo", (req, res) => {
  // Deliberately do not store, log, or forward submitted values.
  res.json({
    ok: true,
    message: "Демонстрация завершена: данные никуда не сохранены."
  });
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Demo server listening on port ${PORT}`);
});
