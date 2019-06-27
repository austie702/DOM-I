const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"])

const banner = document.getElementById('middle-img');
banner.setAttribute('src', siteContent['main-content']['middle-img-src'])

const navBar = document.querySelectorAll('a');

navBar[0].innerText = siteContent.nav["nav-item-1"];
navBar[0].innerText = siteContent.nav["nav-item-1"];
navBar[1].innerText = siteContent.nav["nav-item-1"];
navBar[2].innerText = siteContent.nav["nav-item-1"];
navBar[3].innerText = siteContent.nav["nav-item-1"];
navBar[4].innerText = siteContent.nav["nav-item-1"];
navBar[5].innerText = siteContent.nav["nav-item-1"];

const header01 = document.querySelector('h1');
header01.innerText = siteContent.cta.h1;

const headerButt = document.querySelector('button');
headerButt.innerText = siteContent.cta.button;

const main_H = document.querySelectorAll('h4');
main_H[0].innerText = siteContent['main-content']['features-h4'];
main_H[1].innerText = siteContent['main-content']['about-h4'];
main_H[2].innerText = siteContent['main-content']['services-h4'];
main_H[3].innerText = siteContent['main-content']['product-h4'];
main_H[4].innerText = siteContent['main-content']['vision-h4'];
main_H[5].innerText = siteContent['contact']['contact-h4'];

const main_P = document.querySelectorAll('p');
main_P[0].innerText = siteContent['main-content']['features-content'];
main_P[1].innerText = siteContent['main-content']['about-content'];
main_P[2].innerText = siteContent['main-content']['services-content'];
main_P[3].innerText = siteContent['main-content']['product-content'];
main_P[4].innerText = siteContent['main-content']['vision-content'];
main_P[5].innerText = siteContent['contact']['address'];
main_P[6].innerText = siteContent['contact']['phone'];
main_P[7].innerText = siteContent['contact']['email'];
main_P[8].innerText = siteContent['footer']['copyright'];
