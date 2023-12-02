function loadSchedule() {
  let scheduleArr = JSON.parse(localStorage.getItem("schedulleLesson"));
  if (scheduleArr == null) {
    scheduleArr = [
      {
        id: 1,
        name: "Йога",
        time: "10:00 - 11:00",
        maxParticipants: 15,
        currentParticipants: 8,
      },
      {
        id: 2,
        name: "Пилатес",
        time: "11:30 - 12:30",
        maxParticipants: 10,
        currentParticipants: 5,
      },
      {
        id: 3,
        name: "Кроссфит",
        time: "13:00 - 14:00",
        maxParticipants: 20,
        currentParticipants: 15,
      },
      {
        id: 4,
        name: "Танцы",
        time: "14:30 - 15:30",
        maxParticipants: 12,
        currentParticipants: 10,
      },
      {
        id: 5,
        name: "Бокс",
        time: "16:00 - 17:00",
        maxParticipants: 8,
        currentParticipants: 6,
      },
    ];
  }
  return scheduleArr;
}
let scheduleArr = loadSchedule();

const tbody = document.querySelector("tbody");

function viewContent(arr) {
  let content = "";
  arr.forEach((el) => {
    content += `
        <tr>
          <td class="id" name = ${el.id}>${el.name}</td>
          <td>${el.time}</td>
          <td class="maxPart">${el.maxParticipants}</td>
          <td class="currPart">${el.currentParticipants}</td>
          <td><button class="addRecord">Записаться</button></td>
          <td><button class="delRecord">Отменить запись</button></td>
        </tr>
        `;
  });
  return content;
}
tbody.innerHTML = viewContent(scheduleArr);
const addRecord = document.querySelectorAll(".addRecord");
const delRecord = document.querySelectorAll(".delRecord");

addRecord.forEach((el) => {
  el.addEventListener("click", (e) => {
    changeParticipants(e, true);
  });
});
delRecord.forEach((el) => {
  el.addEventListener("click", (e) => {
    changeParticipants(e, false);
  });
});

function changeParticipants(e, up) {
  const currRow = e.target.parentNode.parentNode;
  const id = currRow.querySelector(".id").getAttribute("name");
  const maxPart = currRow.querySelector(".maxPart");
  const currPart = currRow.querySelector(".currPart");
  const curPartRow = Number(currPart.textContent);
  const maxPartRow = Number(maxPart.textContent);
  if (up) {
    if (curPartRow < maxPartRow) {
      currPart.textContent = curPartRow + 1;
      scheduleArr = changeArr(scheduleArr, id, curPartRow + 1);
      localStorage.setItem("schedulleLesson", JSON.stringify(scheduleArr));
    }
  } else {
    if (curPartRow > 0) {
      currPart.textContent = curPartRow - 1;
      scheduleArr = changeArr(scheduleArr, id, curPartRow - 1);
      localStorage.setItem("schedulleLesson", JSON.stringify(scheduleArr));
    }
  }
}

function changeArr(arr, id, currentParticipants) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      arr[i].currentParticipants = currentParticipants;
    }
  }
  return arr;
}
