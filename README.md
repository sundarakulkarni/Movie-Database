# Movie-Database

## Description
This a movie browser application. The user can view list of movies.

## Features
1) View top 100 trending movies.
2) Add/Remove movies to/from watchlist.
3) Search movies based on title.

## Prerequisites 
Must have node installed in the device

## Getting Started
To Run the project on your device, run the following commands: 
1) git clone https://github.com/sundarakulkarni/Movie-Database.git
2) npm i

The project uses IMBD apis to fetch and display data, in this project the apis have been used from rapidapi.com.

To generate api key on rapidapi.com do the following steps: 
1) Go to https://rapidapi.com and login
2) subscribe to "https://rapidapi.com/DataCrawler/api/imdb188/playground/apiendpoint_70d49aa4-89ef-4b04-bcc2-e13820b961ab" api
3) copy the generated api key and paste it in "src/constants/apiKeys.tsx" file inside the "imdb" property of the "apiKeys" object.

   
