const express = require("express");
const app = express();
const cors = require('cors');

const PORT = 5000;
app.use(cors());

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Merhaba, Dünya!" });
});

app.listen(PORT, () => {
  console.log(`Express server çalışıyor. Port: ${PORT}`);
});

app.use("/login", require("./users/users-router"));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});
