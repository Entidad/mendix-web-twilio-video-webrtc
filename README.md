## Mendix React Web Twilio Video WebRtc
Modifications [ObjectivityLtd/Mendix.TwilioVideoChat](https://github.com/ObjectivityLtd/Mendix.TwilioVideoChat) widget. Modifications include:

* Test for non-existent functions
* ...

## Features
TODO

## Usage
For the widget, download one of the [releases](https://github.com/Entidad/mendix-react-web-twilio-video-webrtc/releases) or build from source as follows

```
cd ./mendix-react-web-video-webrtc
nvm use v14.17.5
npm install node-sass
npm install
npm run build
```

Deploy `entidad.TwilioVideoChat.mpk` to `$PROJ/widgets`, execute `Synchronize App Directory` in Mendix IDE (`alt-f4` or invoke `Menu/App/Synchronize App Directory`. Place the widget in some context passing component like a `DataView` and configure the widget attributes.


## Demo project
A test project is provided under `./test`.

## Issues, suggestions and feature requests
[GitHub](https://github.com/Entidad/mendix-react-web-twilio-video-webrtc/issues)


## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Contributions in terms of features, bug listings, and improvements would be appreciated
