const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


 const clientRoute = require("./routes/clientRoutes");
 const freelancerRoute = require("./routes/freelancerRoutes"); 
 const projectRoute = require("./routes/projectRoutes")
 const skillsRoute = require("./routes/skillsRoutes")
// const productRoute = require("./routes/product.js");
// const cartRoute = require("./routes/cart.js");  

app.use("/client", clientRoute);
 app.use("/freelancer", freelancerRoute); 
 app.use("/project" ,projectRoute);
 app.use("/skills",skillsRoute)
// app.use("/products", productRoute);
// app.use("/carts", cartRoute);

module.exports = app;