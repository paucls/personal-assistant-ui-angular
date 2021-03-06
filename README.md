# Personal Assistant UI - Angular 4+
[![Build Status](https://travis-ci.org/paucls/personal-assistant-ui-angular.svg?branch=master)](https://travis-ci.org/paucls/personal-assistant-ui-angular)

This is a simple pet project application that shows how to implement Angular 4+ apps with unit tests, e2e tests against 
a stub backend, configuration for deployment in Heroku, etc.

It uses Bootstrap 4 css framework, and components from [ng-bootstrap](https://ng-bootstrap.github.io)
and [ngx-toastr](https://github.com/scttcper/ngx-toastr) projects.

Some of the things that demo the app are: 
- Modular application, defines feature modules to simplify main app.module.
- Router navigation for routes and child routes.
- Use of fixture factories based in Rosie + Faker to generate random data for stub backend and unit test purposes.
- Example of CRUD feature with modals for adding, editing and deleting items and toast notifications.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Demo
https://paucls-assistant-ngx-bootstrap.herokuapp.com
![Demo](app-demo.gif)

## Version History

## Documentation
Links to some of the articles and documentation used to implement this project:

- Issue testing ngx-toastr with protractor
https://github.com/scttcper/ngx-toastr/issues/109

