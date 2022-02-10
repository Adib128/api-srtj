const express = require("express");
const bodyParser = require("body-parser");
const agencyRoute = require("./routes/agency.js");
const lineRoute = require("./routes/line.js");
const routeRoute = require("./routes/route.js");
const stopRoute = require("./routes/stop.js");
const tripRoute = require("./routes/trip.js");
const db = require("./config/db.config.js");
const swaggerConfigs = require("./config/swagger.config.js");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Swagger configuration
swaggerOptions = swaggerJsDoc(swaggerConfigs);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerOptions)); // Swagger setup and url
app.use("/agencies", agencyRoute); // Agency routes
app.use("/routes", routeRoute); // Agency route
app.use("/lines", lineRoute); // Agency route
app.use("/stops", stopRoute); // Agency route
app.use("/trips", tripRoute); // Agency route

const port = process.env.PORT || 3000;
app.listen(port);

