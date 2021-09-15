const configs = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API Open Data SRTJ",
        version: "1.0.0",
        description: "SRTJ Open Data API",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  module.exports = configs ;
