# SRTJ open data API

The SRTJ open data API is a REST API for the public transportation company SRTJ [Société Regionale de Transport de Jendouba](https://srtj.com.tn/En/). It allows interested developers to build their own applications using the transportation data whether they're on the web, the desktop or mobile devices.

If you are looking for an officially supported source or need to download all data in GTFS or CSV format, please check teh official website for the open transport data [http://data.transport.tn/](http://data.transport.tn/dataset?q=soci%C3%A9t%C3%A9+r%C3%A9gionale+de+transport+jendouba&sort=score+desc%2C+metadata_modified+desc&ext_bbox=&ext_prev_extent=-6.767578125%2C26.27371402440643%2C25.6640625%2C40.84706035607122).


## Overview

The API contains a list of endpoints returning all the essential informations about the public transportation service provided by the company SRTJ.
* Routes and lines lists with flexible search
* Trips list with prices, departure and arrival time
* Stops list with geographic position longitude and latitude
* Near by stops list by sending the longitude and latitude

### No API Key
You can just use the API without authentication.

### CORS
This API has CORS enabled, so you can query it from any webpage.

## Installation

### Installation with docker
Install docker on Mac, Windows or Linux [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

For Linux you need to install docker compose separately here [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

```bash
# Get the latest snapshot
$ git clone https://github.com/Adib128/api-srtj

# Change directory
$ cd api-srtj

# Runing the docker container
$ docker-compose up

```
Now if you go to http://127.0.0.1:3000/lines, you'll get

### Installation without docker

You can install the project on your own server.
```bash
# Get the latest snapshot
$ git clone https://github.com/Adib128/api-srtj

# Change directory
$ cd api-srtj

# Install NPM dependencies
$ npm install

# Then simply start the project
$ npm start
```
Now if you go to http://127.0.0.1:3000/lines, you'll get

## Documentation

You'll find the documentation here [https://api-srtj.herokuapp.com/api-docs](https://api-srtj.herokuapp.com/api-docs).
