const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Routes and Routers
app.get("/", (req, res) => {
  res.send("test to see if server if working");
});

// Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
