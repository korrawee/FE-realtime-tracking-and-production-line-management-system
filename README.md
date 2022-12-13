# RTPLMS project [front-end]

## Features

- Coming soon.

## Requirements

- [Node.js](https://nodejs.org/) version **18**
    ##### Android
- [Java Developement Kit](https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html) version **18**
- [Android Studio](https://developer.android.com/studio?gclid=CjwKCAiAv9ucBhBXEiwA6N8nYC4Y5wD8EkZmOJOeR-YW-yM9dnLe6KA6YPotUP1lqa6kSqYnmid5XBoCO4YQAvD_BwE&gclsrc=aw.ds#downloads) and [follow this](https://medium.com/@dreamtery/%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A-react-native-setup-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9E%E0%B8%B2%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2-905c0e6ce750)
    ##### IOS
- [Ruby](https://www.ruby-lang.org/en/news/2021/11/24/ruby-2-7-5-released/) version **2.7.5** 
## Installation

Install the dependencies and devDependencies and start the server.
```sh
cd FE-realtime-tracking-and-production-line-management-system
npm i
# run this if you want to run ios emulator
cd ios
pod install
```

## Running App

cd FE-realtime-tracking-and-production-line-management-system
```sh
# for ios device
npm run ios
# for android device
npm run android
```

## Can't run app in android enulator? Try this.
- Delete ```node modules``` folder in your project.
- Delete build folder in ```android/build```
- Close all running terminals.
- Make sure you have installed adb drivers in your environment. If not install ```adb``` drivers. ([For macOS](https://stackoverflow.com/a/32314718/7867613) / [For Windows](https://adb.clockworkmod.com/))
- Open new terminal window and in your project folder run ```npm cache clean --force ; npm install``` to re-install node modules.
- Finally run your app using ```npm run android ```
