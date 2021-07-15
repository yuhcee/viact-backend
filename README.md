## Description
A simple NESTJS application that authenticates users, verifies token and allows users that has access to update their profile.

## Features
### Authentication Module 
  - Should use any of the Identity providers for authentication. (Autho, Amazon Cognito, Firebase Auth) 
  - Should contain register and login endpoints. lauth/login lauth/register 

### User Module 
  - Should verify the users who logged in and have token and return the user details `/api/me`

  - Upload user profile picture to local directory and save the information in database, in memory-database or variable also validate if it's png or jpg `/api/upload`

  - When accessing below url with user id render the image with public access (should not require authentication) `/public/images/{userld}` 

## How to set up project
Clone this repo to your local folder
git clone https://github.com/yuhcee/viact_backend.git <your_folder>

## Installation
```bash
$ yarn install
```

## Run the project

```bash
# development
$ yarn start

# watch mode
$ yarn dev
```
## Future Enhancements
 - Add Documentaion
 - Add Tests
 - Implement Design Patterns