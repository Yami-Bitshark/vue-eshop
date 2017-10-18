# README #

Simple Eshop Application built using Vue.js 2.

### Description ###

* This Application is divided into two sub-applictions: Backend API (Using Nodejs/Express and Postgresql as a database manager) and frontEnd (Using Vue js 2)
* This application contains three sections : 
	-Product list : Where we see the inventory and purchase items
	-Cart Manager : Where we manage the cart and commit the purchase.
	-Purchase History : Where we show the purchase history.
* The NavBar contains the main app routes and the number of the non committed items (items in the cart but not purchased yet).

### How do I get set up? ###

* run a simple npm install
* Isntall Postgresql
* create a new DB called shop
* run this command : psql shop -f 'backend/migrations/database.sql'
* run this command : 'node backend/load_db.js'
* run the Backend App : using 'node backend/app.js&'
* move to frontend folder and run : 'npm run dev'

### Specifications: ###

* Backend:
	-Developped using Node js and Express.
	-modules/ : this folder contains all the modules that interacts with Database
	-controllers/ : A folder that contains the application data processing functions
	-routes/ : contains the application main routes
	-migrations : DB migrations 
	-app.js : the application's intialization
	-app_init.js : the instance launcher
	-global_config.json : a file to configure the DB connection
* FrontEnd:
	-The local data are managed using the Vuex Local Data Manager
	-Routes are handled by vue-route
	-the api calls are managed by axios
	-styling and third party components are imported from ELEMENT UI 
	-src/: application's files
	-components/ : application's components
	-routes/ : routes
	-views/ : Application's main pages
### Who do I talk to? ###

* Tarik Moustaid

