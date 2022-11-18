const btnMenu = document.querySelector('#menu-link');
function displayMenu() {
  const menu = document.querySelector('#menu-mobile');
  menu.classList.toggle('display-off');
}
btnMenu.addEventListener('click', displayMenu);

function closeMenu() {
  const menu = document.querySelector('#menu-mobile');
  menu.classList.toggle('display-off');
}

document.querySelectorAll('.close').forEach((l) => {
  l.addEventListener('click', closeMenu);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const allData = [
  {
    data1: {
      title: 'My Recent Works',
      subtitle: 'Multi-Post Stories',
      tools: {
        0: 'css',
        1: 'html',
        2: 'bootstrap',
        3: 'Ruby',
      },
      image: './Images/Snapshoot Portfolio.png',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      source: 'https://www.google.com/',
      live: 'https://www.facebook.com/',
    },
  },
  {
    data2: {
      title: 'Profesional Art Printing Data',
      tools: {
        0: 'html',
        1: 'Bootstrap',
        2: 'Ruby',
      },
      image: './Images/project1.jpeg',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      source: '#',
      live: '#',
    },
  },
  {
    data3: {
      title: 'Data Dashboard Healthcare',
      mobileTitle: 'Profesional Art Printing Data',
      tools: {
        0: 'html',
        1: 'Bootstrap',
        2: 'Ruby',
      },
      image: './Images/project2.png',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      source: '#',
      live: '#',
    },
  },
  {
    data4: {
      title: 'Website Protfolio ',
      mobileTitle: 'Profesional Art Printing Data',
      tools: {
        0: 'html',
        1: 'Bootstrap',
        2: 'Ruby',
      },
      image: './Images/project3.png',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      source: '#',
      live: '#',
    },
  },
  {
    data5: {
      title: 'Profesional Art Printing Data',
      mobileTitle: 'Profesional Art Printing Data',
      tools: {
        0: 'html',
        1: 'Bootstrap',
        2: 'Ruby',
      },
      image: './Images/project4.jpg',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      source: '#',
      live: '#',
    },
  },
  {
    data6: {
      title: 'Data Dashboard Healthcare',
      mobileTitle: 'Profesional Art Printing Data',
      tools: {
        0: 'html',
        1: 'Bootstrap',
        2: 'Ruby',
      },
      image: './Images/project5.png',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      source: '#',
      live: '#',
    },
  },
  {
    data7: {
      title: 'Website Protfolio',
      mobileTitle: 'Profesional Art Printing Data',
      tools: {
        0: 'html',
        1: 'Bootstrap',
        2: 'Ruby',
      },
      image: './Images/project6.jpeg',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      source: '#',
      live: '#',
    },
  },
];

let restProjects = '';
let cardNumber = 0;
let number = 0;
for (let i = 2; i <= 6; i += 1) {
  number = i + 1;
  cardNumber = `data${number}`;
  const titleCards = allData[i][cardNumber].title;
  const mobileTitl = allData[i][cardNumber].mobileTitle;
  const descriptionCards = allData[i][cardNumber].description;
  const firstTool = allData[i][cardNumber].tools[0];
  const secondTool = allData[i][cardNumber].tools[1];
  const thirdTool = allData[i][cardNumber].tools[2];

  restProjects += `<div class="pj11" id="n${i}">
  <div class="cont_rest">
    <h3 class="tproj1 mobile">${mobileTitl}</h3>
    <button class="projects desktitbut" type="button" onclick="project${number}()">
    <h3 class="tproj1 desktop" id="h3_2">${titleCards}</h3>
  </button>
    <p class="desproj1">${descriptionCards}</p>
    <ul class="media2">
      <li>
        <div class="cont1">${firstTool}</div>
      </li>
      <li>
        <div class="cont1">${secondTool}</div>
      </li>
      <li>
        <div class="cont1">${thirdTool}</div>
      </li>
    </ul>
    <div class="no_button">
      <button class="bigbutton1 button21 projects" onclick='project${number}()' type="button">See Project</button>
    </div>
  </div>
</div>`;
}

const container = document.getElementById('works');
container.innerHTML = `<div class="resent_project">
<div class="title1">
  <h1 id="tit">${allData[0].data1.title}</h1>
  <div id="separator1"></div>
</div>
<div class="recent_content">
  <div class="contain_rp">
    <img id="placehold" src="./Images/Img Placeholder.png" alt="placeholder">
  </div>
  <div id="text_resent">
    <div id="subtitle1">
      <h5>${allData[0].data1.subtitle}</h5>
    </div>
    <div id="description1">
      <p>${allData[0].data1.description}</p>
    </div>
    <div id="tools1">
      <ul class="media3">
        <li>
          <div class="cont1">${allData[0].data1.tools[0]}</div>
        </li>
        <li>
          <div class="cont1">${allData[0].data1.tools[1]}</div>
        </li>
        <li>
          <div class="cont1">${allData[0].data1.tools[2]}</div>
        </li>
        <li>
          <div class="cont1">${allData[0].data1.tools[3]}</div>
        </li>
      </ul>
    </div>
    <div id="resBut">
      <button class="button11 projects" onclick="recentProject()" type="button">See Project</button>
    </div>
  </div>
</div>
</div>

<div class="rest">
        <div class="pj11" id="n1">
          <div class="cont_rest">
            <h3 class="tproj1 mobile">${allData[1].data2.title}</h3>
            <p class="desproj1">${allData[1].data2.description}</p>
            <ul class="media2">
              <li>
                <div class="cont1">${allData[1].data2.tools[0]}</div>
              </li>
              <li>
                <div class="cont1">${allData[1].data2.tools[1]}</div>
              </li>
              <li>
                <div class="cont1">${allData[1].data2.tools[2]}</div>
              </li>
            </ul>
            <div id="contbut">
              <button class="bigbutton1 button21 projects" onclick='project2()' type="button">See Project</button>
            </div>
          </div>
        </div>
        ${restProjects}
  </div>
`;

restProjects.innerHTML = `${restProjects}`;

let project = '';
let numberCard;
// eslint-disable-next-line no-unused-vars
function recentProject() {
  project = 'data1';
  numberCard = 0;
}
// eslint-disable-next-line no-unused-vars
function project2() {
  project = 'data2';
  numberCard = 1;
}
// eslint-disable-next-line no-unused-vars
function project3() {
  project = 'data3';
  numberCard = 2;
}
// eslint-disable-next-line no-unused-vars
function project4() {
  project = 'data4';
  numberCard = 3;
}
// eslint-disable-next-line no-unused-vars
function project5() {
  project = 'data5';
  numberCard = 4;
} // eslint-disable-next-line no-unused-vars
function project6() {
  project = 'data6';
  numberCard = 5;
}
// eslint-disable-next-line no-unused-vars
function project7() {
  project = 'data7';
  numberCard = 6;
}

function filling() {
  let lis = '';
  for (
    let j = 0;
    j < Object.keys(allData[numberCard][project].tools).length;
    j += 1
  ) {
    lis += `<li class="cont2 margin">${allData[numberCard][project].tools[j]}</li>`;
  }
  const popCard = document.querySelector('.card');
  popCard.innerHTML = `<div class="header-card">
  <h3 class="title-card">${allData[numberCard][project].title}</h3>
  <button id="close-card" class="btn-menu-pop" type="button"><img src="./Images/Icon.png" alt="close"></button>
  <div class="tools-card">
    <ul class="list_tools_card">
    ${lis}
    </ul>
  </div>
</div>
<img id="img-card" src="${allData[numberCard][project].image}" alt="Image-card">
<div class="text-card">
  <p class="description-card">${allData[numberCard][project].description}</p>
  <a href="${allData[numberCard][project].live}" class="live button11">See Live<img src="./Images/livebut.png" alt="live-icon"></a>
  <a href="${allData[numberCard][project].source}" class="source button11">See Source <img src="./Images/gitbut.png" alt="git-icon"></a>
</div>`;
  const projectCard = document.querySelector('#pop-card');
  projectCard.classList.toggle('display-off');

  const close = document.querySelector('#close-card');
  function closePop() {
    const projectCard = document.querySelector('#pop-card');
    projectCard.classList.toggle('display-off');
  }
  close.addEventListener('click', closePop);
}

document.querySelectorAll('.projects').forEach((btn) => {
  btn.addEventListener('click', filling);
});

const capLetters = 'ABCDEFGHIJKLMNOPQRDSTUVWXYZ';
const submit = document.getElementById('lastBotton');
const email = document.getElementById('mail');
const errorMessage = document.getElementById('error_message');
const form = document.getElementById('nform');

submit.addEventListener('click', (a) => {
  const mail = email.value;
  for (let i = 0; i < mail.length; i += 1) {
    if (capLetters.includes(mail[i])) {
      errorMessage.classList.remove('display-off');
      a.preventDefault();
      break;
    } else {
      errorMessage.classList.add('display-off');
      localStorage.clear();
    }
  }
});

const names = document.getElementById('name');
const formMail = document.getElementById('mail');
const text = document.getElementById('formMessage');

form.addEventListener('input', () => {
  const formData = {};
  formData.userName = names.value;
  formData.userMail = formMail.value;
  formData.userMessage = text.value;
  const userData = JSON.stringify(formData);
  localStorage.setItem('allData', userData);
});

let getData = localStorage.getItem('allData');
getData = JSON.parse(getData);

if (getData != null) {
  names.value = getData.userName;
  formMail.value = getData.userMail;
  text.value = getData.userMessage;
}
