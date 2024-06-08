const itemsPerPage = 10;
let currentPage = 1;
let data = [];

// 페이지 데이터 표시
function displayPage(page) {
  currentPage = page;
  const tbody = document.querySelector("#board tbody");
  tbody.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = data.slice(start, end);
  pageData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td class="table-number">${item.no}</td>
                    <td class="table-title"><a href="view.html?no=${item.no}">${item.title}</a></td>
                    <td class="table-time">${item.date}</td>
                    <td class="table-manage"><button onclick="deletePost(${item.no})">삭제</button></td>
                `;
    tbody.appendChild(row);
  });
  setActivePageButton();
}

// 페이지 버튼 설정
function setupPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const firstPage = document.createElement("button");
  firstPage.innerHTML = "<<";
  firstPage.classList.add("arrow");
  firstPage.onclick = () => {
    currentPage = Math.max(1, currentPage - 10);
    displayPage(currentPage);
    setupPagination();
  };
  pagination.appendChild(firstPage);

  const prevPage = document.createElement("button");
  prevPage.innerHTML = "<";
  prevPage.classList.add("arrow");
  prevPage.onclick = () => {
    currentPage = Math.max(1, currentPage - 1);
    displayPage(currentPage);
    setupPagination();
  };
  pagination.appendChild(prevPage);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement("button");
    button.classList.add("page");
    button.innerText = i;
    button.onclick = () => {
      currentPage = i;
      displayPage(currentPage);
      setupPagination();
    };
    pagination.appendChild(button);
  }

  const nextPage = document.createElement("button");
  nextPage.innerHTML = ">";
  nextPage.classList.add("arrow");
  nextPage.onclick = () => {
    currentPage = Math.min(pageCount, currentPage + 1);
    displayPage(currentPage);
    setupPagination();
  };
  pagination.appendChild(nextPage);

  const lastPage = document.createElement("button");
  lastPage.innerHTML = ">>";
  lastPage.classList.add("arrow");
  lastPage.onclick = () => {
    currentPage = Math.min(pageCount, currentPage + 10);
    displayPage(currentPage);
    setupPagination();
  };
  pagination.appendChild(lastPage);

  setActivePageButton();
}

function setActivePageButton() {
  const buttons = document.querySelectorAll(".pagination button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  buttons[currentPage + 1].classList.add("active");
}

function deletePost(no) {
  if (confirm("정말 삭제하시겠습니까?")) {
    data = data.filter((item) => item.no !== no);
    saveData();
    setupPagination();
    displayPage(currentPage);
  }
}

function saveData() {
  localStorage.setItem("boardData", JSON.stringify(data));
}

function loadData() {
  const savedData = localStorage.getItem("boardData");
  if (savedData) {
    data = JSON.parse(savedData);
    data.sort((a, b) => b.no - a.no); // 데이터 최신순 정렬
  }
}

loadData();
setupPagination();
displayPage(currentPage);

// JSON 데이터 로딩 및 정렬
// fetch("data.json")
//   .then((response) => response.json())
//   .then((jsonData) => {
//     data = jsonData.sort((a, b) => b.no - a.no);
//     setupPagination();
//     displayPage(currentPage);
//   })
//   .catch((error) => console.error("Error loading JSON data:", error));
