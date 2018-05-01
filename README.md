# Introduction
For the brave souls who get this far: You are the chosen ones,
the valiant knights of programming who toil away, without rest,
fixing our most awful code. To you, true saviors, kings of men,
I say this: never gonna give you up, never gonna let you down,
never gonna run around and desert you. Never gonna make you cry,
never gonna say goodbye. Never gonna tell a lie and hurt you.



# Install and Run appliaction

* Copy all requied files
* install all project dependencies with `npm install`
* start the development server with `npm start`

# Shortly about files
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now. Contener for all routes and place where are located all function for managment book's shelfs
    |── HomeList.component.js - contener for all shelfs
    |── Book.component.js - book model caintains redirect to preview book, book look and menu to move beetween bookshelfs
    |── CurrentlyReading.component.js - currently reading shelf
    |── Read.component.js - rad shelf
    |── WantToRead.component.js - WantToRead shelf
    |── SearchPage.component.js - Page with searching new books.
    |── BookPreview.component.js - it's book preview, view wchickh you get when you click on book
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.

#my question
I added some question in component's comment
* BookPreview line 10
* App.js lines 79-83