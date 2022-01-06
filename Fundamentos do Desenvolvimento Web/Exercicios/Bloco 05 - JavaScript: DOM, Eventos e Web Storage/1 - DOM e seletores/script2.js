document.querySelectorAll('#header-container')[0].style.background = '#00b069'

function styleColor(element,color){
  let variable = document.querySelectorAll(element);
for(let i = 0; i < variable.length; i += 1) {
variable[i].style.background = color;
}
}

styleColor('.emergency-tasks div','#ff9f84');
styleColor('.no-emergency-tasks div','#f9db5e');
styleColor('.emergency-tasks h3','#a500f3');
styleColor('.no-emergency-tasks h3','#232525');
styleColor('#footer-container','#003533');
