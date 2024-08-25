const repos = [
    { file: "iCodeThis-Challenges", URL: "https://github.com/Benjihunt97/iCodeThis-Challenges" },
    { file: "Sass-Page", URL: "https://github.com/Benjihunt97/Sass-Page" },
    { file: "Groups", URL: "https://github.com/Benjihunt97/Groups" },
    { file: "Fylo-New", URL: "https://github.com/Benjihunt97/Fylo-New" },
    { file: "Inbox-Message", URL: "https://github.com/Benjihunt97/Inbox-Message" },
    { file: "Chat-system-UI", URL: "https://github.com/Benjihunt97/Chat-system-UI" },
    { file: "Projects-for-Portfolio", URL: "https://github.com/Benjihunt97/Projects-for-Portfolio" },
    { file: "Navbar-ReactJS-TailwindCSS", URL: "https://github.com/Benjihunt97/Navbar-ReactJS-TailwindCSS" },
    { file: "Christmas-Shopping-Store", URL: "https://github.com/Benjihunt97/Christmas-Shopping-Store" },
    { file: "Facebook-log-in-clone", URL: "https://github.com/Benjihunt97/Facebook-log-in-clone" },
    { file: "iCodeThis---Portfolio", URL: "https://github.com/Benjihunt97/iCodeThis---Portfolio" },
    { file: "Base-Appearal", URL: "https://github.com/Benjihunt97/Base-Appearal" },
    { file: "REST-counry-API", URL: "https://github.com/Benjihunt97/REST-counry-API" },
    { file: "COD-mobile-gun-card", URL: "https://github.com/Benjihunt97/COD-mobile-gun-card" },
    { file: "Todo-list", URL: "https://github.com/Benjihunt97/Todo-list" },
    { file: "Newsletter-Email", URL: "https://github.com/Benjihunt97/Newsletter-Email" },
    { file: "Calculator", URL: "https://github.com/Benjihunt97/Calculator" },
    { file: "Todo-List-0.1", URL: "https://github.com/Benjihunt97/Todo-List-0.1" },
    { file: "Sidebar-0.2", URL: "https://github.com/Benjihunt97/Sidebar-0.2" },
    { file: "QR-codecard", URL: "https://github.com/Benjihunt97/QR-codecard" },
    { file: "Accordian-02", URL: "https://github.com/Benjihunt97/Accordian-02" },
    { file: "Custom-slider", URL: "https://github.com/Benjihunt97/Custom-slider" },
    { file: "Product-Page", URL: "https://github.com/Benjihunt97/Product-Page" },
    { file: "Equilibrium-3429", URL: "https://github.com/Benjihunt97/Equilibrium-3429" },
    { file: "Simple-Shopping-products", URL: "https://github.com/Benjihunt97/Simple-Shopping-products" },
    { file: "Product-List-with-Cart", URL: "https://github.com/Benjihunt97/Product-List-with-Cart" },
    { file: "Year-selector", URL: "https://github.com/Benjihunt97/Year-selector" },
    { file: "Data-Resume", URL: "https://github.com/Benjihunt97/Data-Resume" },
    { file: "News-Homepage", URL: "https://github.com/Benjihunt97/News-Homepage" },
    { file: "Jos-Burgers-Landing-Page", URL: "https://github.com/Benjihunt97/Jos-Burgers-Landing-Page" },
    { file: "Google-Search-Page", URL: "https://github.com/Benjihunt97/Google-Search-Page" },
    { file: "Pricing-Cards", URL: "https://github.com/Benjihunt97/Pricing-Cards" },
    { file: "Social-media-dashboard-with-theme-switcher", URL: "https://github.com/Benjihunt97/Social-media-dashboard-with-theme-switcher" },
    { file: "Product-Card-0.1", URL: "https://github.com/Benjihunt97/Product-Card-0.1" },
    { file: "Time-Tracker", URL: "https://github.com/Benjihunt97/Time-Tracker" },
    { file: "Intro-section-with-dropdown-navigation", URL: "https://github.com/Benjihunt97/Intro-section-with-dropdown-navigation" },
    { file: "HangMan-Game", URL: "https://github.com/Benjihunt97/HangMan-Game" },
    { file: "Quotes-Generator", URL: "https://github.com/Benjihunt97/Quotes-Generator" },
    { file: "Blog-preview-card", URL: "https://github.com/Benjihunt97/Blog-preview-card" },
    { file: "Order-App", URL: "https://github.com/Benjihunt97/Order-App" },
    { file: "Contact-Us-Form", URL: "https://github.com/Benjihunt97/Contact-Us-Form" },
    { file: "Image-picker", URL: "https://github.com/Benjihunt97/Image-picker" },
    { file: "Sign-in-up-form", URL: "https://github.com/Benjihunt97/Sign-in-up-form" },
    { file: "Accordian", URL: "https://github.com/Benjihunt97/Accordian" },
    { file: "User-Authentication", URL: "https://github.com/Benjihunt97/User-Authentication" },
    { file: "Payment-card", URL: "https://github.com/Benjihunt97/Payment-card" },
    { file: "News-Letter", URL: "https://github.com/Benjihunt97/News-Letter" },
    { file: "Christmas-Countdown", URL: "https://github.com/Benjihunt97/Christmas-Countdown" },
    { file: "faq-accordian", URL: "https://github.com/Benjihunt97/faq-accordian" },
    { file: "Rating-componant", URL: "https://github.com/Benjihunt97/Rating-componant" },
    { file: "Maths-Learning-Programme", URL: "https://github.com/Benjihunt97/Maths-Learning-Programme" },
    { file: "Incident-Report", URL: "https://github.com/Benjihunt97/Incident-Report" }
];

let maxLength = 13;  // Initial number of items to show

const repoItem = (file, url) => {
  return `
    <li class="relative flex items-center flex-wrap gap-4 rounded-lg p-4 bg-neutral-900 text-white shadow-md w-full overflow-hidden">
      <h3 class="text-lg font-bold">${file}</h3>
            
      <div class="z-10 flex items-center justify-end gap-4 w-full text-lg">
        <a href="${url}" class="hover:text-indigo-500">
          <i class="fa fa-link"></i>
        </a>
        <a href="" class="hover:text-indigo-500">
          <i class="fa fa-book"></i>
        </a>
        <a href="" class="hover:text-indigo-500">
          <i class="fa fa-bookmark-o"></i>
        </a>
      </div>
      <i class="absolute -top-0 -right-0 sm:-right-2.5 [&>svg>path]:fill-white/15">
        <svg width="120" height="120" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" />
        </svg>
      </i>
    </li>
  `;
}

const list = document.getElementById('list');

const generateRepo = () => {
  list.innerHTML = '';  // Clear the list before generating items
  const itemsToShow = Math.min(maxLength, repos.length);  // Calculate number of items to show based on maxLength

  for (let i = 0; i < itemsToShow; i++) {
    list.innerHTML += repoItem(repos[i].file, repos[i].URL);
  }
}

generateRepo();

const showMore = document.getElementById('show-more');
const refresh = document.getElementById('refresh');

showMore.addEventListener('click', () => {
  maxLength += 4;  // Increase maxLength to show more items
  generateRepo(); // Regenerate the repo list

  // Check if we've shown all items
  if (maxLength >= repos.length) {
    showMore.classList.add('hidden');
    refresh.classList.remove('hidden');
  }
});

refresh.addEventListener('click', () => {
  location.reload();
});

const search = document.getElementById('search');

search.addEventListener('input', () => {
  const searchValue = search.value.toLowerCase();

  list.innerHTML = ''; // Clear the list before applying search filter
  repos
    .filter(repo => repo.file.toLowerCase().includes(searchValue))
    .slice(0, maxLength)
    .forEach(repo => {
      list.innerHTML += repoItem(repo.file, repo.URL);
    });

  if (list.innerHTML === '') {
    list.innerHTML = '<li>No results found</li>';
  }

  // Show or hide the 'Show More' button based on search results
  if (repos.filter(repo => repo.file.toLowerCase().includes(searchValue)).length > maxLength) {
    showMore.classList.remove('hidden');
  } else {
    showMore.classList.add('hidden');
  }
});


