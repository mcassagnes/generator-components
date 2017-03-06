class <%= upCaseName %>Controller {
  constructor () {
    'ngInject'
  }

  $onInit () {
    this.name = '<%= name %>'
  }
}

export default <%= upCaseName %>Controller
