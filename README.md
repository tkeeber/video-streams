# video-streams

## Initially thoughts braindump


A RESTFul API seems to be the most obvious choice for exposing and updating the watch streams.

What will the API look like? How to model and structure the request. 

How to store the streams being watched? Keeping inmemory will work for a very simple app with no scaling requirements. But we will need to have a presistant mechanism out of the App to allow scaling and retaining functionality. 

Need to think about handling multiple request coming for example, a request to watch a 4 stream while still the third is still be processed.

## Application Architecture. 
Simple as possible for this small app.
Will introduce a DAO module to seperate implementation of data store from interface. This will allow me to swap in a persistant store in the future as long as get my interfaces correct. 

## Testing. 
Unit testing a must. 
Integretino testing. Drawing the boundaries around the whole application. 
