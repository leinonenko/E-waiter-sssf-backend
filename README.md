# E-waiter-sssf-backend
 Repository for the Server-side Scripting Frameworks course project - E-waiter
 
The E-waiter app is a web-based platform that allows restaurant clients to place orders using a mobile device. The app is built on node.js with typescript.

## Problem Statement
The app aims to solve the problem of long waiting times and human contact with the waiter by providing a seamless and contactless way to place orders in a restaurant.

## How it Works
The app works by allowing clients to scan a QR code from their table, which is already configured with a table number. Upon registering, the table number is automatically added to their order. Clients can choose between two categories - FOOD and DRINKS, and view all necessary information, such as the item's view, description, ingredients, weight, and price. They can add multiple quantities of the same menu item, provide comments to their order, and view the total price for their entire order.

## Technologies Used
- Node.js v18.12.0
- TypeScript v5.0.4
- Express.js v4.18.2
- MongoDB v6.0.5
- Vite v4.3.4 (frontend)
- Vue 3 v5.0.8 (frontend)


## Installation
- Clone the repository
```bash
https://github.com/leinonenko/E-waiter-sssf-project.git
```
- Install dependencies using npm
```bash
npm install
```
- Set up the environment variables by creating a `.env` file
- Start the app using 
```bash
npm run start
``` 
or 
```bash
npm run dev
``` 
for development purpose

## License
This project is licensed under the MIT License.

