const arrowImages = document.querySelectorAll('.first-line>img')
const floatingComponents = document.querySelectorAll('.first-line>ul')

function applyArrowImageClickEvent(components) {
    components.forEach(function(component, index) {
        component.addEventListener("click", function() {
            showFloatComponent(index)
        })

        floatingComponents[index].addEventListener("mouseover", function() {
            showFloatComponent(index)
        })

        floatingComponents[index].addEventListener("mouseout", function() {
            clearFloatingComponents(index)
        })

    })
}

function showFloatComponent(index) {
    try {
        const component = floatingComponents[index]
        if (typeof component === 'undefined')
            throw new Error('ul component must be valid')

        component.style.display = 'inline-block'
    } catch (error) {
        if (error.message === 'ul component must be valid')
            console.error('Was found an unvalid UL component')
        else console.error(error.message)
    }
}

function clearFloatingComponents(index) {
    try {
        const component = floatingComponents[index]
        if (typeof component === 'undefined')
            throw new Error('ul component must be valid')

        component.style.display = 'none'
    } catch (error) {
        if (error.message === 'ul component must be valid')
            console.error('Was found an unvalid UL component')
        else console.error(error.message)
    }
}


applyArrowImageClickEvent(arrowImages)