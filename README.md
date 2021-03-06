# Meteor && Angular demo

This is a demo blog to demonstrate the awesome coorperation between Angular and Meteor.

### Installation

First you need to download Meteor. Only for Linux and OSX.

```sh
$ curl https://install.meteor.com | /bin/sh
```

Clone my repo.
```sh
$ git clone https://github.com/janekkkk/angular-meteor-demo.git
```
Install packages.
```sh
$ cd angular-meteor-demo
```

Combined
```sh
$ meteor add urigo:angular fourseven:scss matthew:foundation5-sass underscore jquery urigo:angular-ui-router accounts-password accounts-ui accounts-facebook accounts-twitter
$ meteor remove insecure
```

Separate
```sh
$ meteor add urigo:angular
$ meteor add fourseven:scss
$ meteor add matthew:foundation5-sass
$ meteor add underscore
$ meteor add jquery
$ meteor add urigo:angular-ui-router
$ meteor remove insecure
$ meteor add accounts-password
$ meteor add accounts-ui
$ meteor add accounts-facebook
$ meteor add accounts-twitter
```

Start Meteor
```sh
$ meteor run
```

### Packages
You can find more packages on  [Athmosphere](https://atmospherejs.com/  "Athmosphere").
- [Angular-Meteor](https://github.com/Urigo/angular-meteor  "Angular-Meteor")
- [SASS/SCSS](https://atmospherejs.com/matthew/foundation5-sass "SASS/SCSS")
- [Foundation with Sass](https://atmospherejs.com/matthew/foundation5-sass   "Foundation with Sass")
- [Underscore](https://atmospherejs.com/meteor/underscore "Underscore")
- [jQuery](https://atmospherejs.com/meteor/jquery  "jQuery")
