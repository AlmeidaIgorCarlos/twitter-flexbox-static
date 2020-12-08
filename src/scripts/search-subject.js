/**
 * @function applyArrowImageClickEvent
 * @param {Object[]} arrowComponents All arrow images recovered from DOM
 * @param {Object[]} floatingComponents All hidden lists recovered from DOM
 */
module.exports.applyArrowImageClickEvent = function(arrowComponents, floatingComponents) {
  //Validation of parameters
  if (typeof arrowComponents === 'undefined')
    throw new Error('Parameter "components" must not be undefined');
  if (arrowComponents === null)
    throw new Error('Parameter "components" must not be null');

  //Applying event listener for each arrow components and its correspondent hidden list
  arrowComponents.forEach((component, index) => {
    component.addEventListener('click', () => {
      this.showFloatComponent(floatingComponents, index, true);
    });

    floatingComponents[index].addEventListener('mouseover', () => {
      this.showFloatComponent(floatingComponents, index, true);
    });

    floatingComponents[index].addEventListener('mouseout', () => {
      this.showFloatComponent(floatingComponents, index, false);
    });

  });
};

/**
 * @function showFloatingComponent
 * @param {Object[]} components List of components recovered from the DOM
 * @param {Number} index Index from the list's element that will be shown or not
 * @param {Boolean} showFloatingComponent Boolean value to determine if the component of the index will be shown or not
 */
module.exports.showFloatComponent = function(components, index, showFloatingComponent) {
  //Validation of parameters
  if (components.length < 1)
    throw new Error('there must be at least one component');
  if (index < 0)
    throw new Error('index must not be negative');
    
  //Component from the list by index
  const component = components[index];
    
  //Validation of parameters
  if (typeof component === 'undefined')
    throw new Error('ul component must be valid');

  if (typeof component.style === 'undefined')
    throw new Error('Component must have style property');

  if (typeof component.style != 'object')
    throw new Error('Component property style must be an object');

  //Ternary operator to decide if it's going to be shown or not
  component.style.display = showFloatingComponent === true ? 'inline-block' : 'none';

  return component;
};