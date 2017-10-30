# MongoDB-Scraper

I created a web app that lets users view and leave comments on the latest news. I flexed my Mongoose and Cheerio muscles to scraped news from the New York Times website.

## How app works

When the user opens the app you can scrape the new articles.

![1](https://user-images.githubusercontent.com/28790452/32194613-eb98fe20-bd88-11e7-9597-809fca1680d3.gif)

Also, the user can save the articles (all articles will be stored in the MongoDB).

![2](https://user-images.githubusercontent.com/28790452/32194524-a2a6d462-bd88-11e7-9f5c-7c0da10aef41.gif)

When an article was saved the user can add a note to it.

![3](https://user-images.githubusercontent.com/28790452/32194772-56d1fb7e-bd89-11e7-8522-dd57f16d9573.gif)

## Project Installation

There are two methods to download the repository.

#### Method I: Familiar with Git?

Clone this repository, install dependencies, then run the project with the following:

```
> git clone git@github.com:artprofi91/MongoDB-Scraper.git
> cd MongoDB-Scraper
> npm install
> node server.js
> go to localhost:8080
```

#### Not Familiar with Git?

Click [here](https://github.com/artprofi91/MongoDB-Scraper) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory and:

```
> npm install
> node server.js
> go to localhost:8080
```

#### Hint

Don't forget to start your `mongod` command in the seperate terminal window