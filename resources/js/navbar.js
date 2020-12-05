import uiController from './uiController.js';
import screenInfo from './screenInfo.js';

const navbar = (function(){
  const menuItems = ['About Me', 'Projects', 'Media'];

  const getPcNavItem = function(payload) {
    const { item, num, menu } = payload;
    let navClass = "pc-nav-item";
    if (num === menu) {
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

  const setPcNavbar = function(menu) {
    const domStrings = uiController.getDomStrings();
    const navContainerDOM = document.querySelector(domStrings.navContainer);
    let newNavbar = pcNavbar;
    let menuItemsDOM;
    menuItems.forEach((item, itemNum) => {
      menuItemsDOM += getPcNavItem({ item, itemNum, menu })
    });
    menuItemsDOM = menuItemsDOM.replace(',', '');
    newNavbar = newNavbar.replace('%menuItems', menuItemsDOM);
    navContainerDOM.innerHTML = newNavbar;

  }

  return {
    getPcNavbar: function() {
      return pcNavbar;
    },
    initNavbar: function(menu) {
      if (screenInfo.getIsPc()) {
        setPcNavbar(menu);
      }
    }
  }
}());

export default navbar;