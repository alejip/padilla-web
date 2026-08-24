import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B5pNRDMH.mjs';
import { manifest } from './manifest_DMARZDku.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/antes-de-comprar.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/averias-mecanicas.astro.mjs');
const _page5 = () => import('./pages/aviso-legal.astro.mjs');
const _page6 = () => import('./pages/contacto.astro.mjs');
const _page7 = () => import('./pages/gracias.astro.mjs');
const _page8 = () => import('./pages/landing-page.astro.mjs');
const _page9 = () => import('./pages/perito-judicial.astro.mjs');
const _page10 = () => import('./pages/politica-de-cookies.astro.mjs');
const _page11 = () => import('./pages/politica-de-privacidad.astro.mjs');
const _page12 = () => import('./pages/reparacion-mal-realizada.astro.mjs');
const _page13 = () => import('./pages/siniestro-total.astro.mjs');
const _page14 = () => import('./pages/sobre-mi.astro.mjs');
const _page15 = () => import('./pages/valoracion-danos.astro.mjs');
const _page16 = () => import('./pages/vicios-ocultos.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/antes-de-comprar.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/averias-mecanicas.astro", _page4],
    ["src/pages/aviso-legal.astro", _page5],
    ["src/pages/contacto.astro", _page6],
    ["src/pages/gracias.astro", _page7],
    ["src/pages/landing-page.astro", _page8],
    ["src/pages/perito-judicial.astro", _page9],
    ["src/pages/politica-de-cookies.astro", _page10],
    ["src/pages/politica-de-privacidad.astro", _page11],
    ["src/pages/reparacion-mal-realizada.astro", _page12],
    ["src/pages/siniestro-total.astro", _page13],
    ["src/pages/sobre-mi.astro", _page14],
    ["src/pages/valoracion-danos.astro", _page15],
    ["src/pages/vicios-ocultos.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0c267d0e-496f-41de-ae3a-a12016f89057",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
