# graphql-bootstrap
This project aims to demonstrate GraphQL capabilities through a simple node/Express server exposing music recordings data.
This repository is the result of a live coding session during the first ever GraphQL meetup in Paris https://www.meetup.com/fr-FR/GraphQL-Paris/events/231911562/

## Install
```sh
npm i
```

## Start
```sh
npm start
# or, for dev mode
npm run watch
```

## Try
Go to https://graphql-music.herokuapp.com/graphql and start introspecting/querying :)

Or, to see all the recordings : https://graphql-music.herokuapp.com/graphql?query=%7B%0A%20%20recordings%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D
