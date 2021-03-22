# pagantis front
Technical assignment. Frontend side.


## Making it run in our local machine 📋

_Having node installed, just clone the repo_

```
   git clone https://[user]@github.com/papamon1/pagantis-front.git
```   

_Checkout the master branch_

```
   git checkout master
```   

_Install dependencies_

```
   npm install
```   

_Run the project 🚀🚀_

```
   npm run start
```   



## Something to config 🔧

***The .env file*** contains the address where the backend is. Now it points to an address at Heroku, where it is also uploaded.
You can change it for the local address (usually http://localhost:3001) once you are running the backend in your machine.

***The start script*** is run with ***--host 0.0.0.0*** so it can be reached from the LAN




## ⚽ Start playing and small rules🎾 

Once you have the project running you can use any of the following email/pass sample couples to access to the work area.
It will just use the name of the account to identify yourself. As it is the admin panel, it doesn't have different roles or permissions that
__could have been added in the future__.

```
   admin@pagantis.com / admin
   jose.gil@pagantis.com / 1234
   elon.musk@pagantis.com / 1234
   doomguy@idsoftware.com / iddqd
   subzero@midway.com / chill
```   


There is a list of users in the area. We can check their wallets and their movements by clicking on their cards.

When making a transfer, the source account hash will be already filled, but we can change it. In the future, we can call the transfer component from somewhere
else, like a main menu, a list of operations etc.

We need to fill the hash of the destination account when making the transfer.



## 📝 Other notes ✏️

With the time I had (not all I wanted 😢) I tried to make something funny, that allow us to test react concepts while enjoying this aesthetic I wanted to give.

There are some things like a users search, a more compact list, transfers sorter (they don't work now) etc. Also managing the session, and a real 
authentication could have been done. For the kind of exercise we were doing, something more practical or visual was the option.

Hope you enjoy using the proyect while reviewing the exercise, as much I enjoyed doing it, and my excuses for the things I couldn't finish! 💪
