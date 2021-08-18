# Party Up!

Party Up! is a mobile web app designed to help friends connect around the games they love. Keeping in touch with friends in a remote setting has become a significant part of our world. Party Up! creates an easy way to view what games your friends are currently enjoying and quickly set up a time to play together. 

**Party Up was designed mobile first and is currently only optimized for mobile devices. For the desired experience, please view Party Up in a iPhone 8-sized mobile frame.**

## Setup

Party Up can be easily run locally through setting up a database called `party_up` and running the SQL queries contained in `database.sql`. Heroku deployment will be available soon. 

## Features

Party Up's user experience revolves around the following 
1. Setting up a profile and linking your steam account through providing a valid steam id
2. Adding games to display on your playlist page via recently played games and through searching your existing Steam library
3. Searching for and adding other users to your party 
4. Upon adding a user to your party, you can access their profile page, and set up time to play on any games they've posted by clicking 'Party Up'
5. Scheduling and sending an event to a party member

User game libraries are made available through the steam API, and the steam id provided during registration. User details can be updated in the profile page by clicking on avatar on the top right of the page. 
