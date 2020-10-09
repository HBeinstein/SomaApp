# _Soma_

#### _A visual meditation app using React and Three.js , 10/1/20_

#### By _**Hannah Beinstein**_

## Description
Soma is a visual meditation/mindfulness web app that uses accelerometer data from a user's phone to track their breath rate and generate a responsive visual. To use the app, the user must first authorize the program to access the accelerometer in their phone. They can then lie down and place their phone on their chest, and the acceleromoter will track their breath rate by measuring acceleration along the z-axis (breaths in and out). By connecting the program graphics to the biometric information retrieved every few seconds, the program can alter the scene depending on how fast/slow the user’s heart/breath rate is. The goal is to create a visual that reacts in real-time to how relaxed the user is, and provide the user with a focus during their meditation.

## App Wireframe
See a component wireframe for this project below:

![Project Wireframe](./src/assets/img/wireframe.png)

## Already Achieved

## Stretch Goals/Further Development
* Panning/rotating abilities within each meditation. 
* Multiple mediation scenes to choose from
* Authentication to persist current authorization status so any logged in user can start a meditation from their computer instead of phone browser
* Development of mobile app to replace authenticate page and handle authorization functionality that currently happens in mobile browser. 

## Known Bugs
* Currently sensor misses measurement for every couple of breaths. Hoping to increase accuracy in the future by reworking the motion formula.

## Support and contact details
_Please contact me through my Github or at hannah.beinstein@gmail.com._

## Technologies Used
 
* _HTML_
* _CSS_
* _JavaScript_
* _Webpack_  
* _React_ 
* Firebase Realtime Database
* Three.js
* Blender

Copyright (c) 2020 **_Hannah Beinstein_**