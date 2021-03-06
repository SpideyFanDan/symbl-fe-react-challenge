## Create a React file "uploader"

See uploader.png in root directory
Create a single page react application for uploading and displaying a list of images
Image(s) can be "uploaded" on the righthand side form ("upload" = just read into a data url and saved locally https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)
Images are then automatically displayed in a list to the right with their file name.
Images in the list to the right can be removed via clicking a delete button. Only the deleted image should be removed from the list.
Additional image(s) can be added through the form once the last has been "uploaded" (the form resets)
State does NOT need to be maintained between page refresh.

## Project Info

Project is an already configured Gatsby project (you don't need to know Gatsby, its just the boilerplate for serving the webpage)
Start project by running `yarn develop` or `npm run develop` (don't worry about `build` and `serve`. FWIW `clean` will remove node modules and cache, but shouldn't be necessary)
Project will automatically be served at http://localhost:8000/ with automatic refresh on.

Choose your preferred technology.

- Supports javascript / typescript
- Supports styled-components / css (examples given, use one or the other)
- Has eslint & prettier

## General rules

Use React. React components should be added in App.js
Apply basic CSS, make it usuable.
If you have time show off a responsive design is a nice to have but not necessary.
Try not to use any additional libraries.
Don't overwork it, take no more than 1 hour.

## Submit

Delete `.cache`, `node_modules` and `public` directories, compress and return entire directory.
