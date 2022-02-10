// Swagger configuration 
const configs = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "SRTJ open data API",
        description: "The SRTJ open data API is a REST API for the public transportation company SRTJ Société Regionale de Transport de Jendouba. It allows interested developers to build their own applications using the transportation data whether they're on the web, the desktop or mobile devices.",
      },
      servers: [
        {
          url: "https://api-srtj.herokuapp.com",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
module.exports = configs ;
