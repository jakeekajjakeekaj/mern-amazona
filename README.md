# MERN AMAZONA

# Lessons

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. Add routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
6. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. Create server.js
   6. Add start command as node backend/server.js
   7. Require express
   8. Create route for / return backend is ready
   9. Move products.js from frontend to backend
   10. Create route for /api/products
   11. Return products
   12. run npm start
7. Fetch Products From Backend
   1. Set proxy in package.json
   2. npm install axios
   3. Use state hook
   4. Use effect hook
   5. Use reducer hook
8. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from usReducer
9. Add Bootstrap UI Framework (Es un Bootstrap para React, no es el convencional)
   1. npm install react-bootstrap bootstrap
   2. update App.js
10. Create Product and Rating Component
    1 create rating component
    2 create product component
    3 use rating component in Product component
11. Create Product Details Screen
    1 fetch product from backend
    2 create 3 columns for image, info and action
12. Create Loading and Message Component
    1 Create loading component
    2 Use spinner component
    3 Create message component
    4 Create utils.js to define getError function
13. Implement Add to Cart
    1 Create react context (more information at the web reackjs.org/docs/context.html)
    2 Define reducer
    3 Create store provider
    4 Implement add to cart button click handler
14. Complete Add To Cart
    1 Check exist item in the cart
    2 Check count in stock in backend
15. Create cart screen
    1 Create 2 columns
    2 Display items list
    3 Create action column
16. Complete cart screen
    1 Click handler for inc/dec item
    2 Click handler for remove item
    3 Click handler for checkout
17. Create signin screen
    1 Create sign in form
    2 Add email and password
    3 Add signin button
18. Connect to MongoDB Database
    1 Create atlas mongodb databas <!-- Existen 2 maneras, haciéndolo mediante la web a través de atlas -->
    2 install local mongodb database <!-- O instalándolo de manera local que es la manera que en este caso estará activa, sin embargo en cualquier momento se puede cambiar le variable MONGODB_URI ubicado en backend/.env para así trabajar a través de la web -->
    3 npm install mongoose
    4 connect to mongodb database
19. Seed sample data
    1 Create product model
    2 Create user model
    3 Create seed route
    4 Use route in server.js
    5 seed sample product
20. Seed Sample Users
    1 create user model
    2 seed sample user
    3 create user routes
21. Create Signin Backend API
    1 Create signin API
    2 Npm install jsonwebtocken
    3 define generateToken
22. Complete Signin Screen
    1 Handle submit action
    2 Save token in store and local storage
    3 Show user name in header
23. Create Shipping Screen
    1 Create from inputs
    2 Handle save shipping address
    3 Add checkout wizard bar
24. Create Sign Up Screen
    1 Create input forms
    2 Handle submit
    3 Create backend api
