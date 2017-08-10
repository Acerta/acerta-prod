## Description

The source files for the company website, Acerta.ca

Acerta is a dynamic machine learning platform for detecting anomalies and predicting vehicle failures.

## Prerequisites for build

Unix system is preferred, but it will work on Windows.

[Install node and npm](https://nodejs.org/en/download/) (if not already installed)
[Install ruby](https://www.ruby-lang.org/en/downloads/) (if not already installed)

### Packages

Install the grunt cli globally using npm

```
npm install -g grunt-cli
```
Install sass using ruby

```
gem install sass
```

## Installation

Open terminal/shell and clone the repo to the preferred directory

```
git clone https://github.com/Acerta/acerta-prod.git
```
Run `npm install` in the project directory to download all the node modules

You are ready to start making changes now!

## Making updates

The structure of the source files is as follows

js -> javascript functions inside main.js

layout -> the format and template for all html files to be based from

pages -> the body text for every page

partials -> the reusable code snippets that can be added to any page

sass -> the sass code used for styling, which will be converted to css

To add a new page/make a change to any of the webpages, simply create/edit the content of the given .hbs file inside the pages directory.

## Build process

The build directory is the docs folder. This is where the finished files will reside.

Run `grunt dev` to build the files for testing and debugging
Run `grunt h` to only build the html files (if no changes are made to css/js)
Run `grunt css` to only compile the css

Run `grunt` to build and compile all files (Use this command when ready to deploy)

See the gruntFile.js for more options.

## Deployment

### Testing

Since this is a static website, you can open any of the html files from the docs folder in your browser and view the complete website locally.

A temporary website can also be deployed to get feedback from others without affecting the main site.

Commit and push the changes to the repo

```
git commit -m "commit message here"
git push origin master
```

Turn on Github Pages

1. Navigate to the project page on Github and go to settings
2. Scroll down the Github Pages section and select source as master/docs folder
3. Your new website will be live at the url specified on the settings page

Since this testing site will be live on the main domain, it is recommended to turn off the hosting when it is not needed.

### Production

Once the files are finalized, they are ready to be moved to the main repo hosting the live website.

Clone the main repo

```
git clone https://github.com/Acerta/Acerta.github.io.git
```

Copy all the files from the docs folder to replace the files from the Acerta.github.io repo.

Commit and push the files to the repo.

The changes will be reflected in the main website shortly.






