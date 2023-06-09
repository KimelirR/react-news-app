# React Front end news-aggregator

## Installation

* clone this project into your machine

```bash
  git clone https://github.com/KimelirR/react-news-app.git
```

* clone this project into your machine

```bash
  cd react-news-app
```

* Build the Docker Image: name is react-news-app

```bash
   docker build -t react-news-app .
```

* Run the Docker Container: On port 5173 you will even check on your terminal

```bash
   docker run -p 5173:5173 my-react-app
```

> OR

* create the docker container using docker-compose. We are going to use .yml file

```bash
  docker-compose up -d
```

> OR

Then, on the other way manually

* Install project dependencies

```javascript
    npm install
```

* Install project dependencies

```javascript
    npm run dev
```

* On your Browser run .

```javascript
    http://localhost:5173
```

* To kill or Stop Docker running, first of all check if status of our app 'react-news-app' is up

```bash
 docker ps
```

> Then stop id

```bash
docker stop id-of-image
```
