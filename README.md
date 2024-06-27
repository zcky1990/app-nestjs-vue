## Description
This project utilizes NestJS as the backend framework, integrated with the Handlebars templating engine for server-side rendering, and VueJS for the frontend to create a dynamic and interactive user experience. The combination of these technologies provides a robust and scalable solution for developing modern web applications.

## Installation
```bash
$ npm install
```

## Development
To set up your NestJS and Vue.js application with Webpack such that both NestJS and Webpack run simultaneously during development
you can use command : 
```bash
$ npm run develop
```
This command will help you streamline your development workflow by running both the backend and the frontend together or you can running in seperate instance with command below :

Running NestJS
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Running Webpack to build vue

```bash
# development mode
$ npm run build:dev

# production mode
$ npm run build:prod
```

# Running StoryBook
You can check how to use vue components in this project by running this command below:
````bash
$ npm run storybook
````
