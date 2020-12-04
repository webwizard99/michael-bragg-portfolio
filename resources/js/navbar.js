import uiController from './uiController.js';
import screenInfo from './screenInfo.js';
import main from './main.js';

const navbar = (function(){
  const menuItems = ['About Me', 'Projects', 'Media'];

  const getPcNavItem = function(item, num) {
    let navClass = "pc-nav-item";
    if (num === main.getActiveMenu()) {
      navClass += " active";
    }
    return `
      <li class=${navClass} menuNumber=${num}>
        <a class="nav-link" href="#">${item}</a>
      </li>`
  }

  const pcNavbar = `
    <nav class="dark-background light-text no-radius">
      <div class="navbar-content">
        <ul class="pc-nav-menu">
          %menuItems
        </ul>
      </div>
    </nav>`

  const setPcNavbar = function() {
    const domStrings = uiController.getDomStrings();
    const navContainerDOM = document.querySelector(domStrings.navContainer);
    let newNavbar = pcNavbar;
    let menuItemsDOM = menuItems.map((item, itemNum) => {
      return getPcNavItem(item, itemNum)
    });
    menuItems = menuItems.replace(',', '');
    newNavbar = newNavbar.replace('%menuItems', menuItemsDOM);
    navContainerDOM.innerHTML = newNavbar;

  }

  return {
    getPcNavbar: function() {
      return pcNavbar;
    },
    initNavbar: function() {
      if (screenInfo.getIsPc()) {
        setPcNavbar();
      }
    }
  }
}());

export default navbar;