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
          //url: "https://api-srtj.herokuapp.com",
          url: "http://127.0.0.1:3000/"
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  module.exports = configs ;
