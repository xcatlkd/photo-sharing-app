# Snapagram - Photo Sharing Application
A group project between [@samirdhebar](https://github.com/samirdhebar) and [@GabeSArn](https://github.com/GabeSArn). A photo sharing application that allows users to comment on, like and upload pictures.

## Installation Instructions


## Data Models
### 'users'

| Column                | Type                 |
|-----------------------|----------------------|
|`id`                   | INTEGER (PRIMARY KEY)|
|`user`                 | STRING (NOT NULL)    |
|`password`             | STRING (NOT NULL)    |

### 'photos'

| Column                | Type                 |
|-----------------------|----------------------|
|`id`                   | INTEGER (PRIMARY KEY)|
|`user`                 | STRING (NOT NULL)    |
|`password`             | STRING (NOT NULL)    |



## routes
### GET '/'
| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `No argument`         | No argument                                                                                 |

* If a user is logged in, it displays a page with the photos of other users that they can like or comment on
* If no user is logged in, redirects to home page

## Project Organization

```
.
├── app.js                    # Main entry point of the app
├── assets                    # Where public-access static files live
│   ├── css                   #   Where site styles live
│   └── images                #  Where user uploaded files live
├── middleware                # Where all reusable middleware live
│   └──                       #
├── models                    # Where all of the Sequelize models live
│   └──                       #                
├── routes                    # Where router files live
│   ├──snapagram.js           # All routes dealing with    
├── util                      # Common use functioniality lives here
│   ├── renderTemplate.js     #   Helper function for rendering template.ejs
│   └── sql.js                #   Sequelize instance and configuration
├── views                     # EJS files for rendering live here
│    └── pages                #   Where each individual page is kept
│     └── 404.ejs             #   Where the error page is kept
│     ├── docs.ejs            #   Where the uploaded pics page is kept              
│     ├── home.ejs            #   Where the home page is kept
│     ├── login.ejs           #   Where the login page is kept
│     ├── upload.ejs           #   Where the upload page is kept
│     └── signup.ejs          #   Where the signup page is kept
│    └── template.ejs         #   Main template file
```


### Stuff used to make this:

 * [Markdown Editor](https://github.com/jbt/markdown-editor) for Github-flavored Markdown editing

### Inspiration:
* [Instagram](https://www.instagram.com)
