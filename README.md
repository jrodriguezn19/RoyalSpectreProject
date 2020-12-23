## RoyalSpectre Social Network
![MainPage1.png](https://github.com/jrodriguez19/RoyalSpectreProject/blob/master/SpectreFrontEnd/screenshots/MainPage1.png?raw=true)
**Authors**
-   Jorge Rodriguez Nocua (George)
-   Jayden Pilling
-   Giovanni Tjahjono.
-   Yogesh Adhikari.

**Technologies Used**
- **Angular** and Bootstrap is used to develop the web app.
- Auth0 provides the login module to authenticate users.
- Firebase Storage provides the service to host the user's images.
- **MongoDB** is used to store the user's data except images.

**Vision**

-   The cultivation of an online space where visions are shared through the use of visual stimulus and no text.
-   A place where people and teams can showcase their creative projects using a single image or a series of images to conceptualise an idea or project which may be purely conceptual, in-flights, or finished. A way to get meaningful traffic to your project web sites.

**Mission**

-   What will the app try to achieve?
    
    -   Image based app for creatives to display their projects or vision using a single image or a series of images.
    -   Users can give images 'nods' which are like 'likes' to concepts/images are they like or that speaks to them.  _'If you nod at a piece of work, let them know, give them a Nod'_
    -   The image can be accompanied by only a single URL to find more about the project/concept/vision if they choose
    -   Uploads can be accompanied by 3 keywords to categorise the image(s) into broad topics
    -   There will be a tab with the most 'nods' for popular image(s), which can also be sorted by category.
    
    **Functions**
    
-   Image upload and storage (single and series)
    
-   Likes storage in the form of 'Nods'
    
-   Sorting through pre-determined 'tags' or 'keywords'
    
-   Sorting through 'most Nods'
    
-   Thread-like or feed-like structure which is updated on a single page application (SPA)
    

**Key principles of code style**

-   Modular code: separate key parts into separate directories which export modules back to the 'server.js'
-   Clean and commented code: readability of everyone in the team and all those who wish to audit
-   Proper indentation for readability
-   Branch, pull, and push often enough so we are all working on the cleanest up to date code
-   Remove all redundant code which may be commented out. Either use it or delete it
-   Outsouce functionality where practical: authorisation methods, fetch, bootstrap, etc
-   Keep things as simple and clean as possible. Readability and simplicity are better than fancy code
-   Don't repeat code. Where possible clean up any duplicate items and instanciate/reference once
-   Maintain proper scope. If a variable is only needed in a function it should be instanciated with proper scope inside
-   Single responsibility: Every module should only have one specific purpose/functionality
-   Refactor each code module 2 or 3 times before finalisation. It is likely the first time it is written is not the best (maybe it is though!)
-   Where possible implement promises and generators: i.e. implementation of ECMAScript6 libraries.
-   Plan new features end-to-end before coding
-   Use proper naming conventions: e.g. getUser(), function createUser()
-   Implement new constructor convention, EC6 syntax: Class Person { constructor(name) { this.name = name;}}

**How to install/run the app**

-   Right now you can run the front-end and back-end on separate servers.
-   Front-End:  `git pull`  >  `cd SpectreFrontEnd`  >  `npm install`  >  `ng serve`  == Server should now be running for Front-end
-   Back-End:  `git pull`  >  `cd SpectreBackEnd`  >  `npm install`  >  `npm run devstart`  == Server should now be running for Back-end
-   HTTP requests/Using Restful API: Open up postman > run get, post, put, delete as you will. NB: authorisation token required to run post, put, and delete requests. Access new token here:  [https://manage.auth0.com/dashboard/au/dev-q39f5c5h/apis/5d6b220375c40e076d471d4d/test](https://manage.auth0.com/dashboard/au/dev-q39f5c5h/apis/5d6b220375c40e076d471d4d/test)

**Team Member Roles**

-   George: Front-end/Back-end developer
-   Jayden: PM & Back-end
-   Ivan: Front-end & UI designer
-   Yogesh: Front-end/Back-end developer

**Git Protocols**

-   Branch early and often
-   Let the team know on trello discussion card what you're working on and when ;  [https://trello.com/b/J3xMvp6v/royal-spectre-assignment-3](https://trello.com/b/J3xMvp6v/royal-spectre-assignment-3)

