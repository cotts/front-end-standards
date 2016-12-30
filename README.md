# Front-End Coding Standards

This project was build to be used as a faster way to start a fron-end development with a stanrdard template 

## Prerequisites

- Node.js
- NPM Package Manager
- Bower (require git)

#
- ### Deployment Mode Features:
    > - After tasks finishes, will be creates a */public* directory 
    > - Minified and also concatenated **css** and **js** files setted at ```<-- build-->``` inside index.html
    > - Hint for SASS and CSS compilation
    > - Hint for JS files (With ES6 Support)
    > - AutoPrefixer for CSS files
    

## Getting Started


Since you have Node.js installed, you have to clone this repository

```
$ git clone https://github.com/cotts/front-end-standards
```

### Directory Layout created



```
.
├── /src/                        # To include all the files to use on the project
│   ├── /css                     # CSS files will be auto-compiled from the SASS files
│   ├── /fonts                   # The fonts that will be used 
│   ├── /img                     # Images to be used
│   ├── /js                      # Scripts directory
│   └── /sass                    # SASS source files
│   └── /index.html              # Main file
│── .bowerrc                     # Bower configuration file (Redirect packages to /src/vendor)
│── .gitignore                   # Git Ignore list
│── bower.json                   # List of 3rd party Bower packages and utilities
│── gulpfile.js                  # List of Gulp Dependencies
│── package.json                 # List of 3rd party NPM packages and utilities
└── README.md                    # README file with instructions

```

### Installing the dependencies from the NPM Package Manager


```
$ npm install
```

After finish to install npm packages, install bower (if you don´t have installed yet)

```
$ npm install bower
```

After bower installed, install the package that was set in bower.json

```
$ bower install
```

End with an example of getting some data out of the system or using it for a little demo

# 

## Running the project in Develop Mode

To run the project in Development mode, run the command in the project folder

> The Development Mode includes Normalize.css   
```
$ gulp develop
```
After run, the BrowserSync will open a browser window automatically at http://localhost:3000

On this mode, the development mode compiles SASS files every saved file and put the file at /src/css

#

## Deployment

To Deploy the website developed, you just run into the project folder


```
$ gulp
```

# 
## Built With

* [Node.JS](https://nodejs.org) - The runtime build
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Bower](https://bower.io/) - Front-end Dependency Management
* [Gulp](http://gulpjs.com/) - Development Task Manager

#
## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/cotts/21622acf2c974b789e6f6f17c91bbef4) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/cotts/front-end-standards/tags). 

#
## Author

* **Thadeu Cotts** - *Initial work* - [Thadeu Cotts](https://github.com/cotts)

See also the list of [contributors](https://github.com/cotts/front-end-standards/contributors) who participated in this project.

## License

This project is licensed under the MIT License

## Acknowledgments

* [Alura Cursos Online](https://www.alura.com.br) for the amazing way of teach development
* [@sergiolopes](https://github.com/sergiolopes), [@filipedeschamps](https://github.com/filipedeschamps) for the useful tips
