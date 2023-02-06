const headerNav = document.getElementById("header-nav");
headerNav.innerHTML= 
  '<nav class="navbar">'+
    '<button id="bar-toggler"class="navbar-toggler" aria-controls="bar-collapse-l" aria-expanded="false"><span id="navbar-toggler-icon">X</span></button>'+
    '<ul id="bar-collapse-l"  class="bar left " data-visible="false">'+
      '<li><a href=""><span aria-hidden="true">Donde ir</span></a></li>'+
      '<li><a href=""><span aria-hidden="true">Comunidad</span></a></li>'+
    '</ul>'+
    '<div class="logo" ><img src="./assets/img/bug.png" alt="..." class="icono-nav"></a> </div>'+

    '<ul id="bar-collapse-r"class="bar right">'+
      '<li><a href="">Contacto</a></li>'+
      '<li><a href="./index.html"> <img src="./assets/img/lupa(2).png" alt="..." class="icono-nav"></a></li>'+
      // '<li><a href="">  <img src="./assets/img/perfil.png" alt="..." class="icono-nav"></a></li>'+
    '</ul>'+
 '</nav>'
;
const navbarLeft = document.getElementById("bar-collapse-l");
const barToggle = document.getElementById("bar-toggler");

barToggle.addEventListener("click", () => {
  const visibility = navbarLeft.getAttribute("data-visible");
  if(visibility === "false"){
    navbarLeft.setAttribute("data-visible", true);
  }
  else{
    navbarLeft.setAttribute("data-visible", false);
  }
});