import { allData } from './modules/allData.js';

const btnMenu = document.querySelector('#menu-link');
function displayMenu() {
  const menu = document.querySelector('#menu-mobile');
  menu.classList.toggle('display-off');
}

btnMenu.addEventListener('click', displayMenu);
document.querySelectorAll('.close').forEach((l) => {
  l.addEventListener('click', displayMenu);
});

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