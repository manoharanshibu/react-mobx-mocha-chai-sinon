import { jsdom } from 'jsdom';

const exposedProperties = ['window', 'navigator', 'document'];

//
// Dom
//
global.document = jsdom('<html><body><div id="root"></div></body></html>', {
  url: 'http://localhost:8080',
});
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
global.navigator = {
  userAgent: 'node.js',
};
global.navigator = global.navigator;
