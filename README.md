# :metal::musical_keyboard:  super-awesome-final-project :guitar::metal:
Netlify link: https://zingy-sundae-58fa67.netlify.app/

Heroku link: https://my-artists-api.herokuapp.com/artist

The super-awesome-final-project app, aka Groov-e, is a wikipedia for music. That's it.

P.S. It does full CRUD

## Technologies used :computer:
- Node.js
- MongoDB/Mongoose
- Express
- React
  
## Wireframe
![Screenshot 2022-04-25 155748](https://user-images.githubusercontent.com/97997227/165165540-5a0edda8-80b7-4efc-a1c1-4f850e056329.png)

![Screenshot 2022-04-26 160349](https://user-images.githubusercontent.com/97997227/165391672-de56ad57-6810-4679-8f34-37ded9bd6328.png)

![Screenshot 2022-04-26 160415](https://user-images.githubusercontent.com/97997227/165391680-58839ad3-473a-411d-a721-71c320d4ce0e.png)

## Component Heirarchy

![Screenshot 2022-04-26 170058](https://user-images.githubusercontent.com/97997227/165391737-1976242e-1fd2-49eb-8872-c7f4b5b41ba0.png)


## Dependencies
#### Backend
- dotenv
- nodemon
- cors
- morgan
#### Frontend
 - react-router-dom
 - react-bootstrap
 - axios


## Features (MVP)
- React router
- Boostrap (a little)
- Full CRUD operation

## Upcoming Features(Post MVP)
- Authorization
- Concert finder (third party API)
- Authorization (signup/login)

## Endpoints for CRUD
1. GET  all artist: https://my-artists-api.herokuapp.com/artist
2. GET  artist by genre: https://my-artists-api.herokuapp.com/artist-genre/:genre
3. GET  artist by ID: https://my-artists-api.herokuapp.com/artist-genre/:id
4. POST  Create an artist: https://my-artists-api.herokuapp.com/artist
5. PUT  Update artist: https://my-artists-api.herokuapp.com/artist/:id
6. DELETE  artist by ID: https://my-artists-api.herokuapp.com/artist/:id
7. DELETE  artist by name: https://my-artists-api.herokuapp.com/artistbyname/:name

## Schema
```
const Artist = new Schema( {
    name: { type: String, required: true },
    genre:{type: String, required: true},
    years_active:{type:String, required: true},
    members:{type:String, required: false},
    labels:{type:String, required: false},
    bio:{type:String, required: false},
},

{timestamps: true},
)
```
