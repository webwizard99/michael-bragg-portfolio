import screenInfo from './screenInfo';
import uiController from './uiController';

const main = (function(){
  return {
    init: function() {
      screenInfo.init();
      uiController.initNavbar();
    }
  }
}());

main.init();

export default main;