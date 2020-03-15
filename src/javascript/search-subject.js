const arrowImages = document.querySelectorAll('.first-line>img')
const floatComponents = document.querySelectorAll('.first-line>ul')

function applyArrowImageClickEvent(components) {
    components.forEach(function(component, index) {
        component.addEventListener("mouseover", function() {
            showFloatComponent(index)
        })

    })
}

function showFloatComponent(index) {
    try {
        const component = floatComponents[index]
        if (typeof component === 'undefined')
            throw new Error('ul component must be valid')

        component.style.display = 'inline-block'
    } catch (error) {
        if (error.message === 'ul component must be valid')
            console.error('Was found an unvalid UL component')
        else console.error(error.message)
    }
}

function clearFloatingComponents() {
    const allComponents = document.getElementsByTagName('*')
    for (let component of allComponents) {
        if (component.tagName.toLowerCase() !== 'img') {
            component.addEventListener('click', function() {
                floatComponents.forEach(function(floatComponent) {
                    floatComponent.style.display = 'none'
                })
            })
        }

    }
}


clearFloatingComponents()
applyArrowImageClickEvent(arrowImages)