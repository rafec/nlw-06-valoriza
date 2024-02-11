# Next Level Week #06 (NLW Valoriza)

### `#Description`

This project was build following the NLW#06 by Rocketseat, an event where you pick a stack and can develop an entire application together with the experts from Rocketseat and the community of developers, in a matter of days.

This project has the objective of creating something like a virtual mural, for the users to post compliments to the other users. This application can be used in a team of developers, with work colleagues, etc.

You can select a user to compliment, select the tags that you want to highlight (like leadership, focus, comradeship) and write a message to the other user. Simple like that.

### `#Technologies`

This project was developed using `Nodejs` and `Express`. `JsonWebToken` was used for the authentication matters, and `TypeORM` was used as the ORM to communicate with the database (`SQLite` was used). Some other libs were used to encrypt data (`bcryptjs`), generate unique identifiers (`uuid`), and etc.

### `#How to Install`

To run this project, you need Nodejs at version 16 or higher. You can clone this repository to a folder in your pc, or you can download the `.zip` package and extract it in your desired folder.

When you have the files ready, run the following command:

```properties
npm install
```

This command will install all the needed dependencies to the project. Then you can run the following command:

```properties
npm run dev
```

This will start the server at the port `3000`. Make sure you don't have any application using this port.

Then, you can use any client to send HTTP requests to the application, such as Insomnia, Postman, Thunderclient, etc. The routes are specified at the `routes.js` file.

### `#Routes`

The following routes were created:

- `GET /users` - List all the users registered. **You need to be authenticated to acess this route.**
  <br/>

- `GET /tags` - List all the tags registered. **You need to be authenticated to acess this route.**
  <br/>

- `POST /login` - Used to authenticate a user and generate its token. To authenticate an user, you first will need a existing user from the database (or you can just create one at the `POST /users` route), and then, you can send a json object at the body of the request following this example:
  `json
{
"email": "user@email",
"password": "userpassword"
}
`
  Remember that this two values need to match the ones of the user you want to authenticate. If you just created the user, you need to use the `email` and `password` that you created.
  <br/>

- `POST /users` - Create a new user. To create a new user, you just need to include at the body of the request the following json object:

  ```json
  {
  	"name": "Example Name",
  	"email": "example@mail.com",
  	"password": "yourpassword",
  	"admin": true
  }
  ```

  Note that when creating the user, you can opt for it to be an admin including `"admin": true`, but if you dont want it to be an admin, you can either remove the `admin` key, or set it to false.
  <br/>

- `POST /tags` - Create a new tag. To create a new tag, you just only need to include the following json object at the body of the request:

  ```json
  {
  	"name": "Tag name"
  }
  ```

  **You need to be authenticated and be an admin to create tags.**
  <br/>

- `POST /compliments` - Create a new compliment. To create a new compliment, you just need to include the following json object at the body of the request:

  ```json
  {
  	"tag_id": "uuid-of-the-tag",
  	"user_receiver": "uuid-of-the-user-receiver",
  	"message": "Your message."
  }
  ```

  For this request, `user_receiver` will be the user that you will be sending the compliment to. For now, the only id that the application gets automatically is the `user_sender`, that is the user that is sending the compliment. Thats the reason that **you need to be authenticated to acces this route.**
  <br/>

- `GET /users/sent-compliments` - List all the compliments sent by the user. **You need to be authenticated to acess this route.**
  <br/>

- `GET /users/received-compliments` - List all the compliments received by the user. **You need to be authenticated to acess this route.**

### `#Go beyond`

This project was developed to improve my knowledge and skills in the used technologies, but if you want to contribute somehow, or for exemple, develop the `front-end` of this project, you can create an `issue`, `pull-request`, or you can contact me through [Linkedin](https://www.linkedin.com/in/rafael-brizuena/). I would love to help!
