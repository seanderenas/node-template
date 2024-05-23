# Node.js template
Using Node.js and Express.js you can easily make a website. It uses additional dependencies listed here:
- [body-parser](https://www.npmjs.com/package/body-parser)
- [chalk](https://www.npmjs.com/package/chalk) (version: 4.1.2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [express-ejs-layouts](https://www.npmjs.com/package/express-ejs-layouts)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [serve-favicon](https://www.npmjs.com/package/serve-favicon)
- [Bootstrap](https://getbootstrap.com/) (Not a dependency)

## How to make it run?
- Install a code editor like [VScode](https://code.visualstudio.com/download).
- Download the latest version of [Node.js](https://nodejs.org/en/download/prebuilt-installer/current).
- If you don't already have [Git](https://git-scm.com/downloads) install it too.
- Make a folder and clone this repository into it with
``` 
git clone git@github.com:seanderenas/node-template.git
```
> This copies the code from the repository for you to use and change.
- Once you have all the files open up the terminal and run
```
npm init
```
> This will intialize all the node modules and create a folder for them.
- Lastly, to run the server and load the website on your browser
```
nodemon .\src\server.js
```
or 
```
node .\src\server.js
```
> Note, using nodemon filename will restart the server.js file automatically on save but when just using node filename you will have to close the server and rerun the command.

## Where is my website?
- Once starting the server and getting the green message in the terminal navigate to **localhost:3000**
