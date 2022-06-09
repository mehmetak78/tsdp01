
- npm init
- Create folders
    dist, src
- Manuel Compile
    tsc ./src/test.ts --outDir ./dist
- Manuel Run
    node ./dist/test.js
- To generate tsconfig.json
    tsc --init
- In the tsconfig.json
    "outDir": "./dist",
    "rootDir": "./src",
    "moduleResolution": "node"
    "noEmitOnError": true,

    "exclude": [
    "node_modules" // would be the default
    ]

- auto run in changes
    npm install --save-dev nodemon
- start script
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon ./dist/test.js"
      },
- tsc -w
- npm start

- for different patterns change "start": "nodemon ./dist/test.js" in package.json.
