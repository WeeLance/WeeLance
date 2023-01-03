const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


 const clientRoute = require("./routes/clientRoutes");
// const adminRoute = require("./routes/admin.js");
// const productRoute = require("./routes/product.js");
// const cartRoute = require("./routes/cart.js");  

app.use("/client", clientRoute);
// app.use("/admin", adminRoute);
// app.use("/products", productRoute);
// app.use("/carts", cartRoute);

module.exports = app;