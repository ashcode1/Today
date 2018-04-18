# Today i have...

CRUD apllication consisting of:
'express-server' - Express & MongoDB
'today-react-app' - React & Redux UI

To run this locally install MongoDB and Node.js
```
$git clone https://github.com/ashcode1/Today.git
```

Open both directories in serperate shells and for both install dependencies and run server:

```
$npm install
```
```
$npm start
```

### Routes

| Route |   |
| ------|---|
| `GET /api/` | Get all updates |
| `POST /api/` | Create a new update |
| `PUT /api/` | Update an update |
| `GET /api/tags/:tag` | Get all updates related to input tag |
| `GET /api/tags` | Get all tags |
| `GET /api/:id` | Get update by id | 
| `DELETE /api` | Deletes update by id 
| `GET /api/users` | Get all users |
| `POST /api/users/signup` | Create a new user |
| `POST /api/users/signin` | Validate user signin |
