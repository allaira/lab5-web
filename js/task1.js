const today = new Date();
const d = String(today.getDate()).padStart(2, "0");
const m = String(today.getMonth() + 1).padStart(2, "0");

const friends = [
  { name: "Олександр", bday: `${d}.${m}`, phone: "+380501112233" }, 
  { name: "Марія",     bday: `${d}.${m}`, phone: "" },              
  { name: "Дмитро",    bday: `${Number(d)+3}.${m}`, phone: "+380672223344" }, 
  { name: "Олена",     bday: `${Number(d)+3}.${m}`, phone: "" },              
  { name: "Іван",      bday: "15.01",     phone: "+380934445566" }
];


function getDays(bdayStr) {
  const parts = bdayStr.split(".");
  const bDate = new Date(today.getFullYear(), parts[1] - 1, parts[0]);
  const diffTime = bDate.getTime() - today.setHours(0, 0, 0, 0);
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

function checkBirthdays() {
  let html = `<table class="data-table">
    <tr><th>Ім'я</th><th>Дата</th><th>Телефон</th><th>Повідомлення</th></tr>`;

  for (let f of friends) {
    let days = getDays(f.bday);
    let msg = "";
    let style = "";

    if (days === 0) {
      msg = "<strong>Сьогодні ДН!</strong> Зателефонувати особисто.";
      style = "background: #5c1d1d;";
    } else if (days === 3) {
      msg = "<strong>Залишилось 3 дні!</strong> Відправити листівку.";
      style = "background: #5c4d1d;";
    } else {
      msg = `До свята ще днів: ${days}`;
    }

    if (!f.phone) {
      msg += " <br><span style='color: #ff8787;'>(Номер телефону не вказано!)</span>";
    }

    html += `<tr style="${style}">
      <td>${f.name}</td><td>${f.bday}</td><td>${f.phone || "—"}</td><td>${msg}</td>
    </tr>`;
  }

  html += "</table>"; //додає новий сформований рядок до загальної таблиці
  document.getElementById("result").innerHTML = html;//виводить в блок всю таблицю
}