const btnMenu = document.querySelector('#menu-link');
function displayMenu() {
  const menu = document.querySelector('#menu-mobile');
  menu.classList.remove('display-off');
  menu.classList.add('slide-in-animation');
  menu.classList.remove('slide-out-animation');
}
btnMenu.addEventListener('click', displayMenu);

const btnclose = document.querySelector('#btn-close');
const links_close = document.querySelectorAll('.close');
function closeMenu() {
  const menu = document.querySelector('#menu-mobile');
  menu.classList.add('slide-out-animation');
  menu.classList.remove('slide-in-animation');
}

links_close.forEach((link) => {
  link.addEventListener('click', closeMenu);
});


btnclose.addEventListener('click', closeMenu);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const allData = [
  {
    data1: {
      title: 'My Recent Works',
      subtitle: 'Damian Sastré Presenta',
      tools: {
        0: 'React',
        1: 'Redux',
        2: 'JavaScript',
        3: 'Bootstrap',
      },
      image: './Images/last_show.png',
      description:
        "Minimalistic page displaying the most recent narratives of writer-actor Damián Sastré, directly sourced from the Spotify API. In the Podcast section, you will find a list of all his episodes. You can search to see if he has narrated your favorite story or anything by a writer you admire using the search bar.",
      fullDescription:
        "<p class='mt-0'>Damián Sastré Presents is a Single Page Application (SPA) designed to promote Damian's Spotify podcast. On this page, you can learn more about the writer and actor, Damián Sastré, and discover why he decided to embark on this awesome project.</p> <p>This application offers the following features:</p> <ul> <li>View the latest story published on his podcast.</li><li>Explore the most recent 'Rapidín' episode released on his podcast.</li> <li>Access the complete list of chapters.</li> <li>Discover all the platforms where you can find his content.</li> <li>Filter and search for a specific episode by title or author.</li> <li>Connect with Damian by using a form to send him a message.</li></ul>",
      source: 'https://github.com/sambeck87/damian_sastre_presenta',
      live: 'https://damian-sastre-presenta.onrender.com/',
    },
  },
  {
    data2: {
      title: 'My Salary Manager App',
      tools: {
        0: 'Ruby',
        1: 'Rails',
        2: 'PostgreSQL',
        3: 'Bootstrap',
      },
      image: './Images/RoR.png',
      description:
        "This app allows you to manage your budget. You have a list of transactions associated with categories, and you'll be able to see how much money you have spent.",
      fullDescription: "<p class='mt-0'>The Salary Manager app enables you to effectively manage your budget. You can access a list of transactions categorized by different categories, allowing you to track your expenses and understand where your money is being spent.</p><p>Key features of this project include:</p><ul> <li>User creation</li><li>Category creation</li><li>Deletion of categories</li><li>Displaying a list of categories</li><li>Tracking the total amount spent</li><li>Analyzing the amount spent per category</li><li>Transaction creation</li><li>Displaying a list of transactions</li><li>Analyzing the amount spent per transaction</li></ul> <p>With the Salary Manager app, you can take control of your finances and gain valuable insights into your spending habits.</p>",
      source: 'https://github.com/sambeck87/Budget_app',
      live: 'https://salary-manager.onrender.com',
    },
  },
  {
    data3: {
      title: 'Crypto Currency',
      mobileTitle: 'SPA Crypto Currency',
      tools: {
        0: 'React',
        1: 'Redux',
        2: 'JavaScript',
      },
      image: './Images/project3.png',
      description:
        '"Crypto Currency" is a Single Page Application (SPA) that retrieves information on the top 100 most significant cryptocurrencies worldwide and displays it for viewing.',
      fullDescription:
        "<p class='mt-0'>'Crypto Currency' is a Single Page Application(SPA) that fetches information on the top 100 most important cryptocurrencies worldwide and displays it for viewing.This application offers the following features:</p><ul><li>Displaying the name, symbol, icon, and current dollar price of each cryptocurrency on the main page.</li><li>Performing a search for specific cryptocurrencies using a text entry.</li><li>Clicking on a desired cryptocurrency opens another page where you can explore more detailed information about it.</li></ul><p>With 'Crypto Currency', you can easily stay updated on the latest information and trends in the world of cryptocurrencies.</p>",
      source: 'https://github.com/sambeck87/React_capstone',
      live: 'https://crypto-currency-zbah.onrender.com/',
    },
  },
  {
    data4: {
      title: 'Space Travelers',
      mobileTitle: "Space Travelers' Hub",
      tools: {
        0: 'React',
        1: 'Redux',
        2: 'JavaScript',
      },
      image: './Images/project4.png',
      description:
        'This is a website that contains various ships and missions that you can join and reserve.',
      fullDescription: "<p class='mt-0'>Space Travelers' Hub is a website that features various ships and missions that you can join and reserve. Each ship and mission comes with its own description, providing you with detailed information to learn more about them. This project offers the following functionalities:</p><ul><li>Displaying a list of available ships.</li><li>Presenting a list of joinable missions.</li><li>Allowing you to reserve ships and join missions.</li><li>Providing the option to cancel reservations and leave missions.</li></ul><p>With Space Travelers' Hub, you can explore exciting opportunities in space travel and actively participate in interstellar adventures.</p>",
      source: 'https://github.com/sambeck87/react_redux_project',
      live: 'https://space-travelers-fm7x.onrender.com/',
    },
  },
  {
    data5: {
      title: 'Math Magicians',
      mobileTitle: 'A website for mathematics fans',
      tools: {
        0: 'React',
        1: 'JavaScript',
        2: 'Jest',
      },
      image: './Images/project5.png',
      description:
        'Math Magicians is a Single Page Application (SPA) designed for all mathematics enthusiasts.',
      fullDescription: "<p class='mt-0'>Math Magicians is a website created for all mathematics enthusiasts. It serves as a Single Page Application (SPA) that provides users with the following features:</p> <ul><li>Perform simple calculations.</li><li>Explore random math-related quotes.</li></ul><p>With Math Magicians, users can enjoy engaging in mathematical calculations and gain inspiration from insightful quotes related to the world of mathematics.</p>",
      source: 'https://github.com/sambeck87/Math-magicians',
      live: 'https://calculator-ipex.onrender.com/',
    },
  },
  {
    data6: {
      title: 'Pokedex',
      mobileTitle: 'A pokemon lovers app',
      tools: {
        0: 'JavaScript',
        1: 'WebPack',
        2: 'Jest',
      },
      image: './Images/project6.png',
      description:
        'The Pokédex project is an application that retrieves data from a Pokémon API and displays it. You can like Pokémon and obtain more information about them.',
      fullDescription: "<p class='mt-0'>This group capstone project focuses on utilizing the Pokémon API to showcase the first 20 Pokémon on the main page. Each Pokémon is displayed with its name and image.</p><p>We have implemented a 'like' function that stores the information in the 'Involvement API'. Later, this API is called to retrieve the stored information and display it, including the number of likes for each Pokémon.</p><p>Furthermore, we have added a button that opens a popup, providing a more detailed view of the selected Pokémon's characteristics. Within this popup, users can read comments from others and create their own comments, all thanks to the integration of the Involvement API.</p><p>To ensure proper functionality, we have created two tests. These tests verify the accuracy of the comment count and the display of Pokémon within the Document Object Model (DOM).</p><p>This capstone project aims to provide an engaging and interactive experience for Pokémon enthusiasts, allowing them to explore and interact with Pokémon data in a user-friendly manner.</p>",
      source: 'https://github.com/sambeck87/group-capstone-project',
      live: 'https://sambeck87.github.io/group-capstone-project/',
    },
  },
  {
    data7: {
      title: 'THE BEST OF GHIBLI STUDIO',
      mobileTitle: 'THE BEST OF GHIBLI STUDIO 2023',
      tools: {
        0: 'JavaScript',
        1: 'CSS3',
        2: 'HTML5',
      },
      image: './Images/ghibli.png',
      description:
        "'The_Best_Ghibli' is a project created in honor of Studio Ghibli. This project implements best practices for HTML, CSS, and JavaScript.",
      fullDescription: "<p class='mt-0'>'The_Best_Ghibli' is a project that showcases the knowledge I have acquired over the course of four weeks. It incorporates best practices for HTML, CSS, and JavaScript, and incorporates various typographies, colors, and background images in its sections. The project is designed to be accessible on both mobile and desktop devices. Its content is responsive and adapts to different screen sizes, with a breakpoint at 768px to reposition elements as needed.</p><p>Users can interact with links and buttons throughout the project, which feature hover effects for enhanced interactivity. Additionally, 'The_Best_Ghibli' includes a mobile menu window, enabling seamless interaction on smaller screens.</p><p>The 'speakers' section is dynamically created using JavaScript, utilizing an object to retrieve content and populate the information.</p><p>This project serves as a demonstration of my skills and understanding of web development, showcasing my ability to implement various techniques and features in a responsive and interactive manner.</p>",
      source: 'https://github.com/sambeck87/The_best_ghibli',
      live: 'https://sambeck87.github.io/The_best_ghibli/',
    },
  },
];

btnMenu.addEventListener('click', () => {
  btnMenu.classList.add('active');
});

const menuMobile = document.querySelector('#menu-mobile');
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
  item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
});

window.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('.main-content');
  mainContent.style.opacity = 0;
  mainContent.style.animation = 'fadeIn 1s forwards';
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
  <button class="projects desktitbut" type="button" onclick="project${number}()">
  </button>
  <div class="cont_rest">
    <h3 class="tproj1 mobile">${mobileTitl}</h3>
    <h3 class="tproj1 desktop" id="h3_2">${titleCards}</h3>
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
container.innerHTML = `<div class="resent_project white_back_groud">
<div class="title1">
  <h1 id="tit">${allData[0].data1.title}</h1>
  <div id="separator1"></div>
</div>
<div class="recent_content">
  <div class="contain_rp">
    <img id="placehold" src="./Images/last_main.png" alt="placeholder">
  </div>
  <div id="text_resent">
    <div id="subtitle1">
      <h5>${allData[0].data1.subtitle}</h5>
    </div>
    <div id="description1">
      <p class="last_project_description">${allData[0].data1.description}</p>
    </div>
    <div id="tools1">
      <ul id="media3">
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
    lis += `<li class="lenguajes">${allData[numberCard][project].tools[j]}</li>`;
  }
  const popCard = document.querySelector('.card');
  popCard.innerHTML = `<div class="header-card">
  <h3 class="title-card">${allData[numberCard][project].title}</h3>
  <button id="close-card" class="btn-menu-pop" type="button"><img id="x-close" src="./Images/Icon.png" alt="close"></button>
  <div class="tools-card">
    <ul class="list_tools_card">
    ${lis}
    </ul>
  </div>
  <div class="img-card">
    <p class="text-center">
      <img class="desktop_image" src="${allData[numberCard][project].image}" alt="Image-card">
    </p>
  </div>
</div>

<div class="text-card">
  <div class="description-card">${allData[numberCard][project].fullDescription}</div>
  <a href="${allData[numberCard][project].live}" class="live button11" target="_blank">See Live<img src="./Images/livebut.png" alt="live-icon"></a>
  <a href="${allData[numberCard][project].source}" class="source button11" target="_blank">See Source <img src="./Images/gitbut.png" alt="git-icon"></a>
</div>`;
  const projectCard = document.querySelector('#pop-card');
  projectCard.classList.remove('display-off');
  projectCard.classList.add('slide-in-animation');
  projectCard.classList.remove('slide-out-animation');

  const close = document.querySelector('#close-card');
  function closePop() {
    const projectCard = document.querySelector('#pop-card');
    projectCard.classList.add('slide-out-animation');
    projectCard.classList.remove('slide-in-animation');
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

submit.addEventListener('click', (e) => {
  const mail = email.value;
  for (let i = 0; i < mail.length; i += 1) {
    if (capLetters.includes(mail[i])) {
      errorMessage.classList.remove('display-off');
      e.preventDefault();
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const projects = entry.target.querySelectorAll('.pj11');
      projects.forEach((project) => {
        project.style.opacity = 0;
        project.style.animation = 'fadeIn 3s forwards';
      });
    }
  });
});

const sectionToObserve = document.querySelector('.rest');

observer.observe(sectionToObserve);

var formObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      startTypingAnimation();
      formObserver.unobserve(entry.target);
    }
  });
});

var formSection = document.getElementById("form_section");
formObserver.observe(formSection);

function startTypingAnimation() {
  var titleElement = document.getElementById("last_header");
  var text = "Got an exciting project in mind? Don't hold back! Shoot me a message and let's have a blast bringing it to life!";
  var index = 0;

  function typeText() {
    titleElement.textContent += text[index];
    index++;

    if (index < text.length) {
      setTimeout(typeText, 100);
    }
  }

  typeText();
}
