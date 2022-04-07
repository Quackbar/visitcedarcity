# visitcedarcity

To get this project running you must first have an environment running ionic/cli and ideally both XCode and Android Studios but neither are completely necessary.

To install Ionic/cli: 
npm install -g @ionic/cli

Next clone the project and within the root of the project run:
npm i
-or-
yarn

Finally attempt to run:
ionic serve

This should launch the project in a localhost. When going to test changes in a project such as this which already contains both an iOS and Androi folder you simply need to run:
ionic build
+
ionic cap sync
+
ionic cap open android
-or-
ionic cap open ios

If you dont have android or ios directories simply run:
ionic cap add android
-or-
ionic cap add ios

Another command of note is:
capacitor-resources

You may need to install it first with:
npm i -g capacitor-resources

But it essentially takes the icon and splash files from the resources directory and propogates it through all the apps.

And thats it! For future questions and googling this is an ionic react project, not react-native and not angular. Also we are using mapboxgl-js, not regular mapbox. If theres any other confusion feel free to ask!
Happy Hacking.
