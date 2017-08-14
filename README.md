# Simple Blog

A simple blog.

This project utilizes the latest JavaScript syntax available in NodeJS.

## Concepts Covered

- [x] REST API Architecture.
- [x] Promises using `async/await` syntax.
- [x] Dry code by creating middlewares.
- [x] noSQL Database (`mongodb`)
- [x] `ejs` templating

## REST API Architecture

Name   | Endpoint             | Verb    | Description                                                       |
-------|----------------------|---------|-------------------------------------------------------------------|
INDEX  | /                    | GET     | Redirect to `/posts`.                                             |
NEW    | /posts               | GET     | Render view for *all* posts.                                      |
GET    | /posts/new           | GET     | Render view for adding new post.                                  |
CREATE | /posts               | POST    | Add a post to the database.                                       |
SHOW   | /posts/:id           | GET     | Render view for *single* post.                                    |
EDIT   | /posts/:id/edit      | GET     | Render view for editing a post.                                   |
UPDATE | /posts/:id           | PUT     | Render view *after* updating a post with updated post.            |
REMOVE | /posts/:id           | DELETE  | Render view *after* removing a post with list of remaining posts. |

## TODO

- [ ] Clean up Styling
- [ ] Handle error cases better.
