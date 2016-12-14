// ---- ROUTER FUNCTION ----
var currentTag = null;
var routes = {};
const titleSuffix = " | Sarah Plotkin";

function mountPage(tag, title, options) {
  currentTag && currentTag.unmount(true);
  currentTag = riot.mount('#content', tag, options)[0];
  document.title = title + titleSuffix;
}

function handler(collection, id, action) {
  var fn = routes[collection || 'home'];
  fn ? fn(id, action) : mountPage('not-found-page');
}

route(handler);
route.start(true);

// ---- PAGE ROUTES ----
'use strict'

routes.home = function(id, action) {
  mountPage('home-page', "Home");
}

routes.about = function(id, action) {
  mountPage('about-page', "About");
}

routes.contact = function(id, action) {
  mountPage('contact-page', "Contact");
}

routes.notfound = function(id, action) {
  mountPage('not-found-page', "404");
}



