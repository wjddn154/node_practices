## mysite powered by node.js(express)

#### 설치패키지

```bash
[mysite] $ npm i express
[mysite] $ npm i ejs
[mysite] $ npm i mysql2
[mysite] $ npm i express-session
[mysite] $ npm i sequelize
[mysite] $ npm i dotenv
[mysite] $ npm i multer
[mysite] $ npm i winston
[mysite] $ npm i winston-daily-rotate-file
[mysite] $ npm i moment

[mysite] $ npm -D nodemon
[mysite] $ npm -D mocha
[mysite] $ npm -D chai

```

#### scripts in package.json

```json
  "scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js",
    "test" : "npx mocha"
  }
```

#### project structure
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- [node-moudles]
    |--- test
    |--- logging
    |--- [logs]
    |     |--- [error]
    |--- [multer-temporary-store]
    |--- config
    |--- public
    |       |--- assets
    |              |--- [upload-images]
    |              |--- css
    |              |--- images
    |              |--- js
    |--- routes
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
            |--- main
            |--- user
            |--- board
            |--- guestbook
            |--- gallery
            |--- indclude
            |--- admin
                    |--- includes



</pre>




