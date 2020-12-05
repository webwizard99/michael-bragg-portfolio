import screenInfo from './screenInfo.js';
import uiController from './uiController.js';
// import navbar from './navbar.js';

const main = (function(){
  let activeMenu = 1;

  const setActivePcMenu = function (num) {
    activeMenu = num;
  }

  return {
    init: function() {
      screenInfo.init();
      uiController.init({ activeMenu: activeMenu });
    },
    getActiveMenu: function() {
      return activeMenu;
    },
    setActiveMenu: function(n) {
      if (screenInfo.getIsPc()) {
        setActivePcMenu(n);
      }
    }
  }
}());

main.init();

export default main;