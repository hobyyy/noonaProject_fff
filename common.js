// add navbar and footer
// 여러페이지에서 사용하는 component(nav, footer)를 rendering 해주는 javascript code

// create navbar div container
const navbarContainer = document.getElementById('nav');     // key value : footer
const renderNavbar = (data) => {
    const navbarContent = document.createElement('div');    // div 로 감싸기
    navbarContent.innerHTML = data;
    navbarContainer.appendChild(navbarContent);
}

// create footer div container
const footerContainer = document.getElementById('footer');  // key value : footer
const renderFooter = (data) => {        
    const footerContent = document.createElement('div');    // div로 감싸기
    footerContent.innerHTML = data;
    footerContainer.appendChild(footerContent);
}

// rendering function
const renderPage = () => {  
    fetch('../nav.html')   // nav.html 요청한다. 
        // 이때, 요청에 성공하면 Promise 객체를 받아오는데 .then method를 사용해 text로 변경해준다.
        .then((Response) => Response.text())
        .then((data) => {
            renderNavbar(data);
        })
        .catch((error) => {
            console.error(error);
        });
    fetch('../footer.html')    // footer.html 요청한다.
        .then((Response) => Response.text())
        .then((data) => {
            renderFooter(data);
        })
        .catch((error) => {
            console.error(error);
    });
};

// load event가 발생할 때 renderPage function 실행
window.addEventListener('load', renderPage);