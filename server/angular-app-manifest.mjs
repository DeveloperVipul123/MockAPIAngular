
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://developervipul123.github.io/MockAPIAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/MockAPIAngular/login",
    "route": "/MockAPIAngular"
  },
  {
    "renderMode": 2,
    "route": "/MockAPIAngular/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/MockAPIAngular/main/total",
    "route": "/MockAPIAngular/main"
  },
  {
    "renderMode": 2,
    "route": "/MockAPIAngular/main/total"
  },
  {
    "renderMode": 2,
    "route": "/MockAPIAngular/main/upcoming"
  },
  {
    "renderMode": 2,
    "route": "/MockAPIAngular/main/completed"
  },
  {
    "renderMode": 2,
    "route": "/MockAPIAngular/main/budget"
  },
  {
    "renderMode": 2,
    "redirectTo": "/MockAPIAngular/login",
    "route": "/MockAPIAngular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5306, hash: '18fe93c0b8a2c593226b357a86d154f50689207a4b9e05ebe25e53824a0c25dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: 'e997195f1d6c4e5a4da483bd7dde50346995d39eec36e190f917fd85796b69fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main/total/index.html': {size: 5529, hash: 'fac74c08e6d8b5849d4e6bb335387dc0991a0d5285a18df3eca61aab61e9052c', text: () => import('./assets-chunks/main_total_index_html.mjs').then(m => m.default)},
    'main/budget/index.html': {size: 5529, hash: 'fac74c08e6d8b5849d4e6bb335387dc0991a0d5285a18df3eca61aab61e9052c', text: () => import('./assets-chunks/main_budget_index_html.mjs').then(m => m.default)},
    'main/upcoming/index.html': {size: 5529, hash: 'fac74c08e6d8b5849d4e6bb335387dc0991a0d5285a18df3eca61aab61e9052c', text: () => import('./assets-chunks/main_upcoming_index_html.mjs').then(m => m.default)},
    'main/completed/index.html': {size: 5529, hash: 'fac74c08e6d8b5849d4e6bb335387dc0991a0d5285a18df3eca61aab61e9052c', text: () => import('./assets-chunks/main_completed_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13642, hash: '03e894cfc0b730ed06a78da0790cfadf87d6a2302049b4ffd7d8e26059a0c6df', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-JOMVXLOU.css': {size: 180010, hash: 'AtgvFYbozRU', text: () => import('./assets-chunks/styles-JOMVXLOU_css.mjs').then(m => m.default)}
  },
};
