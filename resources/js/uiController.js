// import screenInfo from './screenInfo.js';

const uiController = (function(){
  const DOMStrings = {
    mainContainer: 'body',
    navContainer: '.nav-container',
    pcNavItem: 'pc-nav-item'
  }

  return {
    getDomStrings: function() {
      return DOMStrings;
    }
  }
}());

export default uiController;