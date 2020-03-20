const assert = require('chai').assert
const search_subject = require('./../src/scripts/search-subject')

describe('search-subject unit tests', () => {
    it('applyArrowImageClickEvent - Since the parameter "components" is null, an exception must be thrown', () => {
        try {
            search_subject.applyArrowImageClickEvent(null)
            assert.fail('An exception must have been thrown')
        } catch (error) {
            assert.equal(error.message, 'Parameter "components" must not be null')
        }
    })

    it('applyArrowImageClickEvent - Since the parameter "components" is undefined, an exception must be thrown', () => {
        try {
            search_subject.applyArrowImageClickEvent(undefined)
            assert.fail('An exception must have been thrown')
        } catch (error) {
            assert.equal(error.message, 'Parameter "components" must not be undefined')
        }
    })

    it('showFloatComponent - The "components" parameter must has at least one element', () => {
        try {
            search_subject.showFloatComponent([], 1, true)
            assert.fail('An exception must have been thrown')
        } catch (error) {
            assert.equal(error.message, 'there must be at least one component')
        }
    })

    it('showFloatComponent - The "index" must not be negative', () => {
        try {
            search_subject.showFloatComponent([{}], -1, true)
            assert.fail('An exception must have been thrown')
        } catch (error) {
            assert.equal(error.message, 'index must not be negative')
        }
    })

    it('showFloatComponent - The selected component must no be undefined', () => {
        try {
            search_subject.showFloatComponent([{}], 10, true)
            assert.fail('An exception must have been thrown')
        } catch (error) {
            assert.equal(error.message, 'ul component must be valid')
        }
    })

    it('showFloatComponent - The component must have a style property', () => {
        try {
            search_subject.showFloatComponent([{}], 0, true)
            assert.fail('An exception must have been thrown')
        } catch (error) {
            assert.equal(error.message, 'Component must have style property')
        }
    })

    it('showFloatComponent - The component property style must be a valid object', () => {
        try {
            search_subject.showFloatComponent([{ style: false }], 0, true)
            assert.fail('An exception must have been thrown')
        } catch (error) {
            assert.equal(error.message, 'Component property style must be an object')
        }
    })

    it('showFloatComponent - Since the parameter "showFloatingComponent" is true, the display property must be "inline-block"', () => {
        try {
            const component = search_subject.showFloatComponent([{ style: {} }], 0, true)
            assert.equal(component.style.display, 'inline-block')
        } catch (error) {
            assert.fail(error)
        }
    })

    it('showFloatComponent - Since the parameter "showFloatingComponent" is false, the display property must be "none"', () => {
        try {
            const component = search_subject.showFloatComponent([{ style: {} }], 0, false)
            assert.equal(component.style.display, 'none')
        } catch (error) {
            assert.fail(error)
        }
    })
})