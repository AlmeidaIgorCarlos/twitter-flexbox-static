module.exports.applyArrowImageClickEvent = function(arrowComponents, floatingComponents) {
    if (typeof arrowComponents === 'undefined')
        throw new Error('Parameter "components" must not be undefined')
    if (arrowComponents === null)
        throw new Error('Parameter "components" must not be null')

    arrowComponents.forEach((component, index) => {
        component.addEventListener("click", () => {
            this.showFloatComponent(floatingComponents, index, true)
        })

        floatingComponents[index].addEventListener("mouseover", () => {
            this.showFloatComponent(floatingComponents, index, true)
        })

        floatingComponents[index].addEventListener("mouseout", () => {
            this.showFloatComponent(floatingComponents, index, false)
        })

    })
}

module.exports.showFloatComponent = function(components, index, showFloatingComponent) {
    if (components.length < 1)
        throw new Error('there must be at least one component')
    if (index < 0)
        throw new Error('index must not be negative')

    const component = components[index]

    if (typeof component === 'undefined')
        throw new Error('ul component must be valid')

    if (typeof component.style === 'undefined')
        throw new Error('Component must have style property')

    if (typeof component.style != 'object')
        throw new Error('Component property style must be an object')

    component.style.display = showFloatingComponent === true ? 'inline-block' : 'none'

    return component
}