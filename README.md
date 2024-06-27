## Description
This project utilizes NestJS as the backend framework, integrated with the Handlebars templating engine for server-side rendering, and VueJS for the frontend to create a dynamic and interactive user experience. The combination of these technologies provides a robust and scalable solution for developing modern web applications. 

## Installation
To get started, install the project dependencies:
```bash
$ npm install
```

## Development
To streamline your development workflow, you can run both the NestJS server and the Webpack dev server simultaneously. This setup ensures that changes in the backend or frontend code are reflected immediately.

Run the following command to start both servers:
```bash
$ npm run develop
```
Alternatively, you can run the NestJS and Webpack servers separately using the commands below:

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
To explore and test your Vue components in isolation, you can use Storybook. Run the following command to start Storybook:
````bash
$ npm run storybook
````
This setup is ideal for developing, testing, and documenting your Vue components in a visual and interactive manner.

# Additional Context
* Backend: NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript by default and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

* Templating Engine: Handlebars is a simple templating language that allows you to create HTML templates with embedded expressions. It's used here for server-side rendering to improve SEO and initial load performance.

* Frontend: VueJS is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, making it easy to integrate with other projects and libraries.

* Build Tool: Webpack is a static module bundler for modern JavaScript applications. It helps in bundling your JavaScript files for usage in a browser and is highly configurable.

* Component Library: Storybook is an open-source tool for developing UI components in isolation. It makes building and testing UI components faster and easier.
With this setup, you can efficiently develop a modern web application that takes advantage of both server-side rendering and dynamic client-side interactions.