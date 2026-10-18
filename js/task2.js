// Завдання 2.1: Розбиття рядка на теги <li>
function makeList() {
  const str = document.getElementById("countryInput").value;
  const arr = str.split(",");
  const list = document.getElementById("countryList");
  
  list.innerHTML = ""; 
  for (let country of arr) {
    if (country.trim() !== "") {
      list.innerHTML += `<li>${country.trim()}</li>`;
    }
  }
}

// Завдання 2.2: Пошук максимуму в таблиці
function findMax() {
  const table = document.getElementById("numTable");
  let max = -Infinity;
  let maxCell = null;

  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      let cell = table.rows[i].cells[j];
      cell.style.background = ""; 
      
      let val = Number(cell.innerText);
      if (val > max) {
        max = val;
        maxCell = cell;
      }
    }
  }
  if (maxCell) {
    maxCell.style.background = "#e03131";
    maxCell.style.color = "#fff";
    maxCell.style.fontWeight = "bold";
  }
}