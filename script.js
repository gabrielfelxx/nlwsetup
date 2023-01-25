const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("section button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("DAY ALREADY INCLUDED ❌")
    return
  }

  alert("successfully added ✔")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("habitsControl", JSON.stringify(nlwSetup.data))
}

//
//const data = {
//  html5: ["01-25", "01-26", "01-27", "01-28", "01-29", "01-30"],
//  css3: ["01-25"],
//  javascript: ["01-25"],
//  reactjs: ["01-25"],
//  logica: ["01-25"],
//}

const data = JSON.parse(localStorage.getItem("habitsControl")) || {}
nlwSetup.setData(data)
nlwSetup.load()