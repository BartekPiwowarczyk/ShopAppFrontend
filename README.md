# Shop online frontend

---

## Online store application


The application is designed for **managing your online store**
and **online shopping for users** (both logged in and not logged in).

Administrator functions include:

* Add and edit products and categories
* Manage orders and export them to a .csv file
* Review order statistics
* Manage customers reviews 
 
User functions include:

* Registration and login
* Browse products categorized by type
* Add products to the shopping cart
* Edit the quantity of products to be ordered
* Place an order, provide personal information, choose a delivery method, and select a payment method
* Complete the purchase by making payments through a bank transfer or using a payment gateway

---
## Technologies:
<a href="https://angular.io/" target="_blank" rel="noreferrer"><img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png" alt="angular" width="80" height="50"/></a> 
<img src="https://banner2.cleanpng.com/20180730/ghy/kisspng-logo-cascading-style-sheets-html5-css3-prags-h-python-stickers-5b5ed2621e52c3.0848753715329408981242.jpg" alt="html and css" width="90" height="50"/> 
<a href="https://nodejs.org/en" target="_blank" rel="noreferrer"> <img src="https://www.h2database.com/html/images/h2-logo-2.png" alt="nodejs" width="70" height="40"/> </a>
<a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--5NzZEMLS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/7pryn9ls88giuc9m8cau.png" alt="liquibase" width="80" height="50"/> </a>

---
## Run application:

### You have 3 ways to run application:
#### 1. Run Dev profile on your local machine
* Download the repository using the link https://github.com/BartekPiwowarczyk/ShopAppFrontend
* In the folder with the application, open the command prompt (cmd)
* Run the application with `npm run dev`
* Try the application on localhost:4200 with https://github.com/BartekPiwowarczyk/ShopApp

#### 2. Run default profile with backend on Heroku
* Download the repository using the link https://github.com/BartekPiwowarczyk/ShopAppFrontend
* In the folder with the application, open the command prompt (cmd)
* Run the application with `npm start`
* Try the application on localhost:3000 with backend deployed on Heroku

#### 3. Run following links on Heroku:
Backend: https://shop-app-bpiw-b7a002c8bc28.herokuapp.com/ </br>
Frontend: https://shop-app-frontend-bpiw-87a4f4ccafaf.herokuapp.com/

Only with this option, you can use the Przelewy24 payment gateway, which uses an external API.

* You must log in if you want to try out admin endpoints *

---

## Authorization

baseUrl/login

username: admin

password: test

---