require('../style/main.css')
const search_subject = require('./search-subject')

const arrowComponents = document.querySelectorAll('.first-line>img')
const floatingComponents = document.querySelectorAll('.first-line>ul')
search_subject.applyArrowImageClickEvent(arrowComponents, floatingComponents)