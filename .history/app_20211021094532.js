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

swaggerOptions = swaggerJsDoc(swaggerConfigs);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerOptions));
app.use("/agencies", agencyRoute);
app.use("/routes", routeRoute);
app.use("/lines", lineRoute);
app.use("/stops", stopRoute);
app.use("/trips", tripRoute);

const port = process.env.PORT || 8080;
app.listen(3000);

