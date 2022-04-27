#  Streaming for Social media

Netlify link: https://unrivaled-bombolone-432644.netlify.app/

Heroku link: https://netflix-community-app.herokuapp.com/



## Technologies used :computer:
- Node.js
- Mysql
- Express
- React
  
## Wireframe
![Main(1)](https://user-images.githubusercontent.com/97911806/165415908-55cc9a58-88f8-4e4d-91d9-7c9d31fae1f4.png)
<br />
![Main-Popup detail](https://user-images.githubusercontent.com/97911806/165415923-adbaf9c7-425e-4c61-a992-c5220267c67b.png)
![Social Page](https://user-images.githubusercontent.com/97911806/165415964-fd837b0e-da0f-4a8c-95b6-084be55781ae.png)
![Post](https://user-images.githubusercontent.com/97911806/165415976-a3cb84da-44b0-45c9-b11b-c7e0db6fcda1.png)



## Component Heirarchy![Uploading Social Page.png…]()


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
