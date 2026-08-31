const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Kubernetes + Harness + Datadog Project is Running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
