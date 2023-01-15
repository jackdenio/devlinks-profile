function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img[alt]")
  

  

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    alt.setAttribute('alt', 'Foto do Denio músico')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    alt.setAttribute('alt', 'Foto do Denio codando em uma sexta à noite')
  }
}
