# Solveware Test

Backend Test for Solveware.

## Environtment Variables

Environment variables are availabel in .env.template file.

## Getting Started

Make sure you have filled out all environment variables listed in .env.template file.

```sh
git clone https://github.com/rafiandria23/solveware-test.git

npm install

# DB Migration (Development Only)
npm run migrate

# DB Seed (Development Only)
npm run seed

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

### Log in User

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
    "qty": 1,
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T20:49:38.274Z"
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
    "paid": true,
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T20:49:38.274Z"
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
      "paid": true,
      "createdAt": "2021-05-08T20:49:38.274Z",
      "updatedAt": "2021-05-08T20:49:38.274Z"
    },
    ...
  ]
}
```

#### View a Transaction

Endpoint: /transactions/:transactionId  
Method: GET

Response Body

```json
{
  "transaction": {
    "userId": 1,
    "productId": 1,
    "datetime": "2021-05-08T20:49:38.274Z",
    "paid": true,
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T20:49:38.274Z"
  }
}
```

## Admin Features

### Log in Admin

Endpoint: /admins/login  
Method: POST

Request Body

```json
{
  "email": "john@admin.com",
  "password": "password123"
}
```

Response Body

```json
{
  "message": "Successfully logged in!",
  "user": {
    "name": "John Doe",
    "email": "john@admin.com
  },
  "accessToken": "exampleAccessToken"
}
```

### View All Products

Endpoint: /products  
Method: GET

Response Body

```json
{
  "products": [
    {
      "name": "MacBook Air - Apple M1 Chip with 8-Core CPU and 7-Core GPU 256 GB Storage",
      "price": 1449,
      "createdAt": "2021-05-08T20:49:38.274Z",
      "updatedAt": "2021-05-08T20:49:38.274Z"
    },
    ...
  ]
}
```

### View a Product

Endpoint: /products/:productId  
Method: GET

Response Body

```json
{
  "products": {
    "id:": 1,
    "name": "MacBook Air - Apple M1 Chip with 8-Core CPU and 7-Core GPU 256 GB Storage",
    "price": 1449,
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T20:49:38.274Z"
  }
}
```

### Add Product

Endpoint: /products  
Method: POST

Request Body

```json
{
  "name": "iPhone 12 Pro Max - 256 GB - Grey",
  "price": 1799
}
```

Response Body

```json
{
  "message": "Successfully added product!",
  "product": {
    "name": "iPhone 12 Pro Max - 256 GB - Grey",
    "price": 1799,
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T20:49:38.274Z"
  }
}
```

### Edit Product

Endpoint: /products/:productId  
Method: PUT

Request Body

```json
{
  "name": "iPhone 12 Pro Max - 512 GB - Grey",
  "price": 1799
}
```

Response Body

```json
{
  "message": "Successfully updated product!",
  "product": {
    "name": "iPhone 12 Pro Max - 512 GB - Grey",
    "price": 1799,
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T22:44:43.903Z"
  }
}
```

### Delete Product

Endpoint: /products/:productId  
Method: DELETE

Response Body

```json
{
  "product": {
    "name": "iPhone 12 Pro Max - 512 GB - Grey",
    "price": 1799,
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T22:44:43.903Z"
  }
}
```

### View All Users

Endpoint: /users  
Method: GET

```json
{
  "users": [
    {
      "name": "John Doe",
      "email": "john@gmail.com",
      "createdAt": "2021-05-08T20:49:38.274Z",
      "updatedAt": "2021-05-08T20:49:38.274Z"
    },
    ...
  ]
}
```

### View a User

Endpoint: /users/:userId  
Method: GET

```json
{
  "user": {
    "name": "John Doe",
    "email": "john@gmail.com",
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T20:49:38.274Z"
  }
}
```

#### View All Transactions (Admin)

Endpoint: /transactions/all
Method: GET

Response Body

```json
{
  "transactions": [
    {
      "userId": 1,
      "productId": 1,
      "datetime": "2021-05-08T20:49:38.274Z",
      "paid": true,
      "createdAt": "2021-05-08T20:49:38.274Z",
      "updatedAt": "2021-05-08T20:49:38.274Z"
    },
    ...
  ]
}
```

#### View a Transaction (Admin)

Endpoint: /transactions/:transactionId  
Method: GET

Response Body

```json
{
  "transaction": {
    "userId": 1,
    "productId": 1,
    "datetime": "2021-05-08T20:49:38.274Z",
    "paid": true,
    "createdAt": "2021-05-08T20:49:38.274Z",
    "updatedAt": "2021-05-08T20:49:38.274Z"
  }
}
```
