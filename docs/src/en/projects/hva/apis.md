---
title: APIs
description: A course about building a server-side rendered Progressive Web App (PWA) with several (Web) API's.
---

# Application Programming Interfaces

Application Programming Interfaces (APIs) was the fourth course of the minor Web Design & Development at the HvA. The course was about building a server-side rendered Progressive Web App (PWA) with several (Web) API's.

## Assignment

For this course, Manoah had to create a server-side rendered Progressive Web App (PWA) that uses several (Web) API's. It should talk to at least one external API for data and at least two Web APIs for functionality. The app should have a main page and a detail page.

- [See the code](https://github.com/mtdvlpr/API-2324)
- [See the result](https://api-2324.onrender.com/)

::: info Note

The app is hosted on a free server, so it may take a while to load.

:::

## Features

Manoah went above and beyond the requirements and added the following features to his app:

- A homepage with a grid of popular movies and a trending movies section that can be toggled between today and this week
- A search page to search for movies
- A detail page for each movie with a trailer
- A global chatroom
- Toast notifications for unread chat messages and errors

Manoah implemented the following Web APIs:

- **Service Worker API** for PWA support and Push Notifications
- **Web Share API** for sharing movies
- **Document Picture-in-Picture API** for the chatroom
- **Web Speech API** for voice search
- **Server Sent Events** for the chatroom
- **View Transition API** for animating the trending and search list change
- **History API** for intercepting the form submission of trending toggle and search and loading the new list without refreshing the page
- **Notification API**, **Badging API**, and **Push API** for notifications of unread chat messages

## Skills

Git • HTML5 • CSS3 • Sass • JavaScript • Node.js • Express.js • NoSQL • MongoDB
