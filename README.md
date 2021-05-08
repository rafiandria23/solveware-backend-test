# Solveware Test

Backend Test for Solveware.

## Environtment Variables

Environment variables are availabel in .env.template file.

## Getting Started

Make sure you have filled out all environment variables listed in .env.template file.

```sh
git clone https://github.com/rafiandria23/solveware-test.git
npm install

# Production
npm start

# Development
npm run dev
```

## User Features

### Register User

Endpoint: /users/register  
Method: POST

Request Body

```json
{
  "email": "john@gmail.com",
  "password": "password123"
}
```

Response Body

```json
{
  "message": "Successfully registered!",
  "user": {
    "name": "John Doe",
    "email": "john@gmail.com
  },
  "accessToken": "exampleAccessToken"
}
```

### Login User

Endpoint: /users/login  
Method: POST

Request Body

```json
{
  "email": "john@gmail.com",
  "password": "password123"
}
```

Response Body

```json
{
  "message": "Successfully logged in!",
  "user": {
    "name": "John Doe",
    "email": "john@gmail.com
  },
  "accessToken": "exampleAccessToken"
}
```

### Add to Cart

Endpoint: /carts/:productId  
Method: POST

Response Body

```json
{
  "message": "Successfully added to cart!",
  "cart": {
    "userId": 1,
    "productId": 1,
    "qty": 1
  }
}
```

### Payment

Endpoint: /transactions/:cartId  
Method: POST

Response Body

```json
{
  "message": "Successfully created transaction!",
  "transaction": {
    "userId": 1,
    "productId": 1,
    "datetime": "2021-05-08T20:49:38.274Z",
    "paid": true
  }
}
```

### View Transaction

#### View All Transactions

Endpoint: /transactions  
Method: GET

Response Body

```json
{
  "transactions": [
    {
      "userId": 1,
      "productId": 1,
      "datetime": "2021-05-08T20:49:38.274Z",
      "paid": true
    },
    ...
  ]
}
```

#### View A Transaction

Endpoint: /transactions/:transactionId  
Method: GET

Response Body

```json
{
  "transaction": {
    "userId": 1,
    "productId": 1,
    "datetime": "2021-05-08T20:49:38.274Z",
    "paid": true
  }
}
```
