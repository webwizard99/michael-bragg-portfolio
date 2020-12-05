// import screenInfo from './screenInfo.js';
import navbar from './navbar.js';

const uiController = (function(){
  const DOMStrings = {
    mainContainer: 'body',
    navContainer: '.nav-container',
    pcNavItem: 'pc-nav-item'
  }

  return {
    getDomStrings: function() {
      return DOMStrings;
    },
    init: function(payload) {
      const { activeMenu } = payload;
      navbar.initNavbar(activeMenu);
    }
  }
}());

export default uiController;