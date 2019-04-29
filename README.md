# FirebaseNotification

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

    POST  https://fcm.googleapis.com/fcm/send
    Content-Type : application/json
    Authorization: key=YOUR-SECERETKEY
    {
        "to": "dS-C3_L5Ws0:APA91bGNNiUjP1yx5_ePjNsWv7ByzaKY1XaBZq-haySXMFVeWXJfNPq8bKIajeBZfzj2u6OD4Zp_WgnMrGvyUhPvJtt1s1d4-zp2gIiMTe7YgkNm7pSIqa4BS9CSDOSFq7o3l0VCmThV",
        "notification": {
            "title": "Nagajuna Yadav",
            "body": "No matter what just keep going buddy!"
        },
        "data": {
            "message": "Message ",
            "notification_type": "test_type"
        }
    }

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

