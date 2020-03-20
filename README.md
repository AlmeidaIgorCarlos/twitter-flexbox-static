# twitter-flexbox-static

## Motivation
This project was built for me in order to improve my css flexbox skills. As a backend software enginner I have always focused on software architecture, data modeling, unit tests, cloud computing and databases. But since I've gone through many situations that were expected from me to deliver a complete solution, including the interface, I've decided that it's time to study my weakest ability, CSS.

## Goal
The best way to improve the css skils is to code as much as possible css. I decided to get a finished interface and reimplement it was codde without looking at its original implementation.

The choosen interface is the *twitter feed* interface, as follows:

![alt text](https://github.com/AlmeidaIgorCarlos/twitter-flexbox-static/blob/master/images/twitter-inteface.PNG)

## Technical Architecture
This topic is dedicated to explain the technologies involved and the architecture/context that they are applied in this project.

### Used technologies

- Html5
- CSS3 - Flexbox
- Javascript
- Webpack
- node.js
    - Chai - assert library
    - Sinon - mocks
    - Mocha - unit tests
    
All the structure of the page is built in html5, so it has the semantic tags and all the structure elements and content of the page.

The visualization and the stylization was made throw css3 flexbox. I've got really surprised during the development of this project by the way, the last time that i had coded some css, i was trying to structure my website using things like float and clearfix. Flexbox get shit done easily.

I also implemented some media queries in order to adjust some layout details to look good in all devices possible. But I had some limitations beacause according to the Twitter interface, it was not design using a *mobile first* methodology.

I had to use some javascript to code the functionality that controls when the floating menu shows itself by the time that the right menu is clicked. As the picture bellow shows:
