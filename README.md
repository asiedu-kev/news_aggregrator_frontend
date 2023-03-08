# News Aggregrator App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Welcome to the take-home challenge response for the FullStack web developer position. I'm excited to demonstrate my
skills and experience in action. The challenge is to build a news aggregator website that pulls articles from various
sources and displays them in a clean, easy-to-read format.

These are guidelines for how to set up the project on local

## Available Scripts

First of all you must clone the project and add env file based on
env.example file.

To have the REACT_APP_API_BASE_URL, you must clone [this repo](https://github.com/asiedu-kev/news_aggregrator_api.git)
Follow the README, launch the api and use your local-ip address concatenate with the
port 80 and the api route. You will get come thing like
this : <p style="color: aquamarine">http://your-ip-address:80/api</p>

To build the poject you have two choices :

### Without Docker

In the project directory, you can run:

To install dependencies used in the project

### `yarn install`

To start the server to display the app

### `yarn start`

To build the project

### `yarn build`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### With Docker

Before run any command, update the REACT_APP_API_BASE_URL in env file or in
docker_compose file.

In the project directory, you can run:

To install dependencies and environment used in the project

### ` docker-compose build`

To start the server to display the app

### ` docker-compose up`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

![](../../Screenshot 2023-03-08 at 12.43.28.png)
Thanks

