import uiController from './uiController.js';

const screenInfo = (function(){
  let isPc = true;
  let isMobile = false;
  let isFullscreen = true;

  let height = 0;
  let width = 0;
  console.log(height, width);

  const detectPc = function() {
    const notPc = window.orientation > -1;
    return !notPc;
    
  }

  const setFullScreen = function() {
    
    let App = document.querySelector('.App');
    if (App.requestFullscreen) {
      App.requestFullscreen();
      isFullscreen = true;
    }
    if (App.msRequestFullscreen) {
      App.msRequestFullscreen();
      isFullscreen = true;
    }
    if (App.mozRequestFullscreen) {
      App.mozRequestFullscreen();
      isFullscreen = true;
    }
    if (App.webkitRequestFullscreen) {
      App.webkitRequestFullscreen();
      isFullscreen = true;
    }
  }

  const exitFullScreen = function() {
    isFullscreen = false;
    document.exitFullscreen();
  }

  const setScreenInfo = function() {
    const app = document.querySelector(uiController.getMainContainer());
    const docDimensions = app.getBoundingClientRect();
    height = docDimensions.height;
    width = docDimensions.width;

    if (width < 768) {
      isMobile = true
    } 
  }

  return {
    init: function() {
      isPc = detectPc();
      setScreenInfo();
    },
    getIsPc: function() {
      return isPc;
    },
    getIsMobile: function() {
      return isMobile;
    },
    goFullScreen: function() {
      setFullScreen();
      dispatchFullscreen();
    },
    leaveFullScreen: function() {
      exitFullScreen();
      dispatchFullscreen();
    }
  }
}());

export default screenInfo;