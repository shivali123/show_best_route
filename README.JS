// A mobile application created using react native, redux, mongoDB for database and server.
// This folder deals with front-end code/
// Basic commads to run this application on  Android
// (considering linux is the OS)
//  Steps :
//  1. Get inside this folder using command cd .
//  2. run command on terminal - npm install
//  3. ON parallel terminal make sure to have mongoD service
//  4. To run mongo sever run command
//    - mongod
//    - inside the back-end code run command node server.js
//  5.  listening on ort 3003
//  6. succesfully connected to the database
//  7. Your back-end server is ready and ready to listen to request for api
//  8. Connect android device to your system.
//  9. Run command react-native run-android
//
// How to add location?
// 1.  by tapping to anyplace you want to give name to
// 2. to any random coordinate near to your location.
//
// How to add image and title?
// 1. For  particular location
//  - Tap on ay location
//  - a popup for text input will come, input the place name
//  - on succefully  addition of name , galery selection will open, slelect a image.
//  - a marker will be added to the map
//  2. For random location
//   - At the bottom view, input place name , or any name say 'restaurant'
//   - Tap on add image photo, gallery will open.
//   - on sucessfull addition, marker will be added to any random location.
//
// How to view marker details?
// 1. Tap on any marker.
// 2. popup view of image with place will open.
// 3. You can close by selecting close button.
//
// How to find nearest 5 places?
// 1. move map to any location.
// 2. click on Locate button at bottom.
// 3. it will show nearest five places on the map to your area
//
// How to change mode of the route displayed?
// 1. Top three buttons are differett routes walking, driving , bicyling respectively.
// 2. tap on any button to change route.
// 3. if route is not displayed, that means no such route exists.
// How to change my location?
// 1. go to app/containers/mapconstants
// Put longitude and latitude according to your need.
