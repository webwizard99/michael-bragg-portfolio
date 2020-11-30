import screenInfo from './screenInfo.js';

const uiController = (function(){
  const mainContainer = 'body';
  const navContainer = 'nav-container';

  let activeMenu = 1;

  const setActivePcMenu = function (num) {
    activeMenu = num;
  }

  const menuItems = ['About Me', 'Projects', 'Media'];

  const getPcNavItem = function(item, num) {
    let navClass = "pc-nav-item";
    if (num === activeMenu) {
      navClass += " active";
    }
    return `
      <li class=${navClass} onClick=${() => setActivePcMenu(num)}>
        <a class="nav-link" href="#">${item}</a>
      </li>`
  }

  let pcNavbar = `
    <nav class="dark-background light-text no-radius">
      <div class="navbar-content">
        <ul class="pc-nav-menu">
          ${menuItems.map((item, itemNum) => {
            return getPcNavItem(item, itemNum)
          })}
        </ul>
      </div>
    </nav>`

  const setPcNavbar = function() {
    const navContainerDOM = document.querySelector(navContainer);
    navContainerDOM.innerHTML = pcNavbar;
  }

  return {
    getMainContainer: function() {
      return mainContainer;
    },
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

export default uiController;