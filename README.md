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


### Stuff used to make this:

 * [Markdown Editor](https://github.com/jbt/markdown-editor) for Github-flavored Markdown editing

### Inspiration:
* [Instagram](https://www.instagram.com)
