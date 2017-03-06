/* eslint-env jasmine */
/* globals inject */
import _ from 'lodash'

import <%= upCaseName %>Module from './<%= name %>'
import <%= upCaseName %>Controller from './<%= name %>.controller'
import <%= upCaseName %>Component from './<%= name %>.component'
import <%= upCaseName %>Template from './<%= name %>.pug'

describe('<%= upCaseName %>', () => {
  // let $rootScope
  let controller, $componentController

  beforeEach(window.module(<%= upCaseName %>Module))
  beforeEach(inject((_$rootScope_, _$componentController_) => {
    // $rootScope = _$rootScope_
    $componentController = _$componentController_
    controller = $componentController(<%= upCaseName %>Module)
  }))

  describe('Module', () => {
    it('has a camelCase name', () => {
      expect(<%= upCaseName %>Module).toEqual(_.camelCase(<%= upCaseName %>Module))
    })
  })

  describe('Controller', () => {
    it('Missing [REMOVE]', () => {
      fail('Missing test')
      controller.fail()
    })
  })

  describe('Template', () => {
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('Missing [REMOVE]', () => {
      fail('Missing test')
    })
  })

  describe('Component', () => {
    let component = <%= upCaseName %>Component

    it('includes the intended template', () => {
      expect(component.template).toEqual(<%= upCaseName %>Template())
    })

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(<%= upCaseName %>Controller)
    })
  })
})
