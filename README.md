<h1 align="center"> Social Network API-noSQL </h1>  
  
<h3 align="center">::exploration of MongoDB:: </h3>

  # Description
  A NoSQL database application, created with MongoDB and Mongoose, that allows users to interact by creating,updating,removing users and friends and allowing for reactions and thought comments.

  # Table of Contents
  * [Site](#site)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  # Site 
  [Social-Network-API Github](https://github.com/Jessiferizzo/noSQL-social-network-API.git)
  
  ### Video Demos
  ---

  * [User Routes and starting server](https://drive.google.com/file/d/1KBSV5fAGo9aCmSA5q8Xk0Td2alc_nek7/view)
  * [Thoughts Routes](https://drive.google.com/file/d/1jAti_YoNEauRkV2cvAww67EE8Qauzplm/view)
  * [Reaction Routes](https://drive.google.com/file/d/1B7zdynN8cHAh9rzakuI3i_bVYe1z0sWC/view)
  * [Friend Routes](https://drive.google.com/file/d/1kgAuY36zjlgHsYK4yniwrBi3q9U3mhZB/view)



  ## Built With:
  Node JS, Express, NoSQL-MongoDB, Mongoose, Javascript
  
  # Installation
  💾 
  `npm install`
  
  # Usage
  1. First user must clone the repo, then run `npm install`

  2. Install mongoDB first. 
  
  3. Start the server using `npm start` at terminal.

# Tests
Test restful API calls with Insomnia using the following routes:

---
**`/api/users`**
* `GET` all users
* `POST` a new user:
    ```json
    // example data
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    }
    ```
---
**`/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
    ```json
    // example data
    {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
    }
    ```
---
**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
    ```json
    // example data
    {
    "reactionBody":"That is amazing, fabulous, spectacular!!",
    "username":"lernantino"
    }
    ```
---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId` 
---
📷 
Picture of GET all users ![picture of app](./public/assets/images/Screen%20Shot%202022-07-03%20at%2011.20.49%20PM.png)

  ## Contributing
   no contributions at this time.
  
  ## Questions
  Please contact me using the following links:

  :octocat: Github [Jessiferizzo](https://github.com/jessiferizzo) 

  ✉️ [My Email](mailto:jsisavath2@gmail.com)

  ## Acknowledgments
 MIT licensing, our great instructors and TAs, graders, and classmates

  ## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  Read more about MIT here:
  [MIT](https://opensource.org/licenses/MIT)

  Copyright (c) 2022 