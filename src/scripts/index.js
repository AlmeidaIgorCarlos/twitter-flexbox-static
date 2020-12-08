//Requiring css in order to be detected by webpack
require('../style/main.css')

//seach-subject lib
const search_subject = require('./search-subject')

//Getting all arrow images elements from DOM
const arrowComponents = document.querySelectorAll('.first-line>img')

//Getting the all hidden elements from DOM
const floatingComponents = document.querySelectorAll('.first-line>ul')

//Applying events to arrow and floating components
search_subject.applyArrowImageClickEvent(arrowComponents, floatingComponents)