# Project Consultation
## Cinema Movies Reservation System <br/>

## How to Start
### You can either use npm or yarn to install packages or the following
- Check if you have node installed first
    ```
    node --version
    ```
- Install packages if not installed
    ```
    npm install
    ```
- To start the server use
    ```
    npm start
    ```


### pages:
- `Website Home page` (All with conditions)
    - Movies Posters
- `Login Page` (All)
    - Register
    - Login
- `Reservation Page` (All)
    - Reserve places 
- `Extra page` : (Site administrator) 'BONUS'
    - User Management

## Functionalities:
- `Manager`
    - Home Page
        - Add Movie -> with modal
        - Modal -> Edit
        - Modal -> movies details (common)
        - Modal View Only (reserved/vacant)
        - Logout Functionality (common)
- `Customers`
    - Home Page
        - Modal -> Movie details (common)
        - Logout functionality (common)
    - Reservation Page
        - Reserves a movie seat
        - Cancel Reservation (if reserved)

- `Guests` (Default)
    - Login Page (Tab page)
        - Login
        - Register
    - Home Page
        - Modal -> View movie details (as Customer)
    - Reservation Page
        - View Reservation without reserving
        - Asked to return to Login page or stay

## Components:

- `Poster`
    - Button -> has details
    - Manager/Customer functionalities 
- `Top Bar`
    - Home button
    - Page Name
    - Login/Logout
- `Grid`
    - 2 Kinds of seats (Reserved/Vacant)
    - Legend
    - Movie Id
    - Buttons (MATRIX 1 and 0)
- `Detail Modal`
    - Movie details
    - Editable/Not (manager/customer)
    - Reservation status

## Theme:
### Colors:
- Background -> #ffffff
- Button -> #ff0066/#000000
- TextBox/DropDown -> #a3a375

### styles:
- `Font`
    - details size: 25px
    - Title: 40px
    
`ps: Add later`

## General:
- `Reservation conflicts` (BONUS)
## File Structure:
- `Components`
- `Pages/Screens`
- `Styles`
- `readme`
- `Server`
    - Requests-> send data to server
        -       getmovies(){
                json = db.collection('movie').get()
                json.title
                json.time
                }
    - Responses-> get data from server
        -       setReservation(){
                db.collection('reservation').set({
                matrix:[0000111000]
                })
                }
## ScreenShots:
![](./ScreenShots/1.png)
![](./ScreenShots/2.png)
![](./ScreenShots/3.png)
![](./ScreenShots/4.png)
![](./ScreenShots/5.png)
![](./ScreenShots/6.png)
![](./ScreenShots/7.png)
![](./ScreenShots/8.png)
![](./ScreenShots/9.png)
![](./ScreenShots/10.png)
![](./ScreenShots/11.png)
![](./ScreenShots/12.png)
![](./ScreenShots/13.png)
![](./ScreenShots/14.png)
![](./ScreenShots/15.png)
![](./ScreenShots/16.png)
![](./ScreenShots/17.png)
![](./ScreenShots/18.png)
![](./ScreenShots/19.png)
![](./ScreenShots/20.png)
![](./ScreenShots/21.png)