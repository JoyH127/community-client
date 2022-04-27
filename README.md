#  Streaming for Social media

Netlify link: 

Heroku link: https://netflix-community-app.herokuapp.com/


# The Project..

The initial concept of the project is the combination with social media and streaming service. 
The social media app for streaming service will provide weekly brand new movie information and a Social page to talk about the contents. 

# Targeted user
 The targeted customers can be any range of age and race who uses streaming servicce.

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

## sql diagram 

![sql diagram drawio(1)](https://user-images.githubusercontent.com/97911806/165426252-82ae594f-f35b-43d1-b0d6-14a6186b288f.png)


## Component Heirarchy

```
APP        
Home\\ Posts\\ Login Register
Slider MovieCard \\ PostCard PostCreate \\ Post
Comment, CommentCreate CommentDelete, CommentEdit, PostDelete, PostEdit


```


## Dependencies
#### Backend
- dotenv
- nodemon
- cors
- morgan
#### Frontend
 - react-router-dom
 - react-hook-form
 - axios
#### API 
- The MovieDB
https://www.themoviedb.org/

## Features (MVP)
- React router
- Full CRUD operation for (Posts,Comment)
- READ weekly trend movie info

## Upcoming Features(Post MVP)
- Authorization (signup/login)
- Personal Feed (including My list, Review, Channel,Friend 

## Endpoints for CRUD
1. GET  all users: https://netflix-community-app.herokuapp.com/users
2. GET  all posts: https://netflix-community-app.herokuapp.com/posts
3. GET  all comments: https://netflix-community-app.herokuapp.com/comments
4. POST a new user : https://netflix-community-app.herokuapp.com/users
5. POST a new post: https://netflix-community-app.herokuapp.com/posts
6. POST a new comment: https://netflix-community-app.herokuapp.com/comments
7. PUT  Update a user: https://netflix-community-app.herokuapp.com/users:id
8. PUT  Update a post: https://netflix-community-app.herokuapp.com/posts:id
9. PUT  Update a comment: https://netflix-community-app.herokuapp.com/comments:id
10. DELETE  Update a user: https://netflix-community-app.herokuapp.com/users:id
11. DELETE  Update a post: https://netflix-community-app.herokuapp.com/posts:id
12. DELETE  Update a comment: https://netflix-community-app.herokuapp.com/comments:id


## Schema for Sql
```
CREATE TABLE Users(
User_id INT(10) PRIMARY KEY AUTO_INCREMENT,
User_name VARCHAR(20) NOT NULL, 
User_email VARCHAR(255) NOT NULL UNIQUE,
User_created_at DATETIME NOT NULL Default now()
);


CREATE TABLE Posts(
Post_id INT(10) PRIMARY KEY AUTO_INCREMENT,
FK_User_id INT(10) NOT NULL,
Post_title VARCHAR(100) NOT NULL,
likes INT NULL,
Post_content TEXT NOT NULL,
Post_img LONGBLOB NULL,
Post_Created_at DATETIME NOT NULL Default now()
);


CREATE TABLE Comments(
Comment_id INT(10) PRIMARY KEY AUTO_INCREMENT, 
FK_Commenter_id INT(10) NOT NULL,
FK_Post_id INT(10) NOT NULL,
Comment VARCHAR(100) NOT NULL,
Comment_Created_at DATETIME NOT NULL Default now()
);

// add foreign key
ALTER TABLE Comments ADD CONSTRAINT FK_Commenter_id FOREIGN KEY (FK_Commenter_id) REFERENCES Users(User_id);
ALTER TABLE Comments ADD CONSTRAINT FK_Post_id FOREIGN KEY (FK_Post_id) REFERENCES Posts(Post_id);

ALTER TABLE Comments ADD CONSTRAINT FK_Commenter_id FOREIGN KEY (FK_Commenter_id) REFERENCES Users(User_id);
ALTER TABLE Comments ADD CONSTRAINT FK_Post_id FOREIGN KEY (FK_Post_id) REFERENCES Posts(Post_id);


// How to change FK 
SET foreign_key_checks = 0;
UPDATE comments SET FK_Commenter_id=34 WHERE Comment_id=34;
UPDATE comments SET FK_Commenter_id=44 WHERE Comment_id=24;
UPDATE comments SET FK_Post_id = 104  WHERE Comment_id=24;
UPDATE comments SET FK_Post_id = 114  WHERE Comment_id=34;
SET foreign_key_checks = 1;

```
