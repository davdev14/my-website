function display(){
  document.getElementById('drop-btn').classList.toggle('show')
}
window.onclick = function(e) {
  if (!e.target.matches('.dropdown-btn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content')
    let i 
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}