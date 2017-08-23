import RoutedService from '../services/routed';

const initializer = {
  name: 'routed',
  initialize: function (app) {
    var container = app.__container__;
    RoutedService.setOwner(container.owner);
  }
}

export default initializer;
