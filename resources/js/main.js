import screenInfo from './screenInfo.js';
import uiController from './uiController.js';

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