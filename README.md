# New York Times Article Search and Save

This project is a full-stack web app using MERN stack. Mern uses the 4 main libraries of:

* MongoDB
* Express.js
* React
* Node.js

In addition to those powerful libraries, this app also uses smaller ones to help with the routing process of a full-stack website.

These include: axios, ajax, mongoose, nodemon, concurrently, react-router-dom, awesome-fonts, and bootstrap.

It is a simple app to use, and an inportant one if someone is an avid reader of the New York Newspaper or a student looking to cite specific articles on a specific topic. This is a quick run down of how it works.

## Start

![start](https://i.imgur.com/2fLdnFq.png)

So the first thing we will do is find a topic to search for. In this case, we will look for any topics on broken eyeglasses. Because I just broke mine. Remarkable...

Soon after, our page will be populated with articles, depending on the range of dates that you searched for.

And look at that we have a query of items! Let's see what the first one is.

![results](https://i.imgur.com/DUdtnjU.png)

oh...

That's not a very delightful news article. Ruin my day with a hard truth.

Meanwhile, some interesting things are happenign in the backend. With the help of mongoose, we were able to automatically add all the information from the New York Times API, and from our decision to save the article, to the Mongo Database.

![database](https://i.imgur.com/QDriYdK.png)

This will happen every time we add a new article to our saved ones. This is incredibly important so as to save the state of our saved articles every time. 

In addition to this, we can look at the saved article on our front end.

![savedarticle](https://i.imgur.com/RFoyWiH.png) 

As you can see, we can also delete an article from our saved list. This will also delete the entry from our database. 

## Conclusion

I use this app on my own occasion sometimes when I want to cite something from a news article. I'm hoping to add more functionality to this app to include a multitude of different API's for sourcing purposes. I think it would turn out to be an incredibly wonderful app once everything is finished in my eyes.



