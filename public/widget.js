(function(){function e(e){let t=e.replace(/[\s\-().]/g,``),n=t.startsWith(`+34`)?t.slice(3):t.startsWith(`34`)&&t.length===11?t.slice(2):t;return/^[6789]\d{8}$/.test(n)?null:`No he reconocido ese número. ¿Puedes escribirlo con 9 dígitos? Por ejemplo: 612 345 678.`}function t(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?null:`Ese email no parece correcto. ¿Puedes revisarlo? Por ejemplo: nombre@dominio.com.`}var n=[{id:`WELCOME`,getMessage:()=>`Hola 👋 Soy el asistente de Padilla Peritaciones.

Cuéntame brevemente qué le ha pasado al vehículo o qué necesitas valorar.`,ack:()=>`Entendido, gracias por la información.`,field:`descripcion`,nextStep:`VEHICLE_TYPE`},{id:`VEHICLE_TYPE`,getMessage:()=>`¿Qué tipo de vehículo es?`,ack:e=>`Anotado: ${e}.`,field:`vehiculo`,quickReplies:[{label:`🚗 Turismo`,value:`Turismo`},{label:`🚐 Furgoneta`,value:`Furgoneta`},{label:`🚛 Camión`,value:`Camión`},{label:`🏍️ Moto`,value:`Moto`},{label:`❓ Otro`,value:`Otro`}],nextStep:`REASON`},{id:`REASON`,getMessage:()=>`¿Para qué necesitas el peritaje?`,ack:()=>`Perfecto, lo tengo en cuenta.`,field:`motivo`,quickReplies:[{label:`💥 Siniestro total`,value:`Siniestro total`},{label:`🔍 Inspección antes de comprar`,value:`Inspección previa a compra`},{label:`🔧 Reparación mal realizada`,value:`Reparación mal realizada`},{label:`⚙️ Avería mecánica`,value:`Avería mecánica`},{label:`🕵️ Vicios ocultos`,value:`Vicios ocultos`},{label:`💰 Valoración de daños`,value:`Valoración de daños`},{label:`⚖️ Peritaje judicial`,value:`Peritaje judicial`}],nextStep:`NAME`},{id:`NAME`,getMessage:()=>`Para que José Ángel pueda revisar tu caso y contactarte, necesito algunos datos.

¿Cuál es tu nombre?`,ack:e=>`Encantado, ${e}. Solo un par de datos más.`,field:`name`,nextStep:`PHONE`},{id:`PHONE`,getMessage:()=>`¿Cuál es tu número de teléfono?`,field:`phone`,validate:e,nextStep:`EMAIL`},{id:`EMAIL`,getMessage:()=>`Y por último, ¿tu dirección de correo electrónico?`,field:`email`,validate:t,nextStep:`CONSENT`},{id:`CONSENT`,getMessage:()=>`Último paso: ¿Aceptas que Padilla Peritaciones trate tus datos para contactarte sobre tu solicitud?

(Conforme al RGPD, puedes ejercer tus derechos escribiendo a info@padillaperitaciones.com)`,field:`consentimiento`,quickReplies:[{label:`✅ Sí, acepto`,value:`Sí`},{label:`❌ No acepto`,value:`No`}],nextStep:e=>e===`Sí`?`DONE`:`CONSENT_DENIED`},{id:`CONSENT_DENIED`,getMessage:()=>`Sin problema. Si en algún momento cambias de opinión, puedes volver a contactarnos en padillaperitaciones.com o llamarnos directamente.

¡Que tengas un buen día!`,nextStep:`CONSENT_DENIED`},{id:`DONE`,getMessage:e=>`Perfecto, ${e.name}. Hemos recibido tu solicitud.\n\nJosé Ángel Padilla revisará tu caso y te contactará en menos de 2 horas. El informe pericial estará listo en 5-10 días.\n\n🔒 Tus datos están protegidos y son confidenciales.`,nextStep:`DONE`}],r=n[0].id;function i(e){let t=n.find(t=>t.id===e);if(!t)throw Error(`Step not found: ${e}`);return t}function a({onEvent:e}){let t=r,n={},a=!1,o=t=>e(t),s=e=>new Promise(t=>setTimeout(t,e));async function c(e){t=e;let r=i(e);if(o({type:`clear_quick_replies`}),o({type:`input_disabled`}),o({type:`typing_start`}),await s(700+Math.random()*300),o({type:`typing_end`}),e===`DONE`){a=!0,o({type:`assistant_message`,text:r.getMessage(n)}),o({type:`complete`,lead:{...n}});return}if(e===`CONSENT_DENIED`){a=!0,o({type:`assistant_message`,text:r.getMessage(n)});return}o({type:`assistant_message`,text:r.getMessage(n)}),r.quickReplies?.length?o({type:`quick_replies`,replies:r.quickReplies}):o({type:`input_enabled`,placeholder:`Escribe aquí tu respuesta...`})}return{async start(){await c(r)},async processInput(e){if(a)return;let r=e.trim();if(!r)return;let l=i(t);if(l.validate){let e=l.validate(r);if(e){o({type:`input_disabled`}),o({type:`typing_start`}),await s(420),o({type:`typing_end`}),o({type:`assistant_message`,text:e}),o({type:`input_enabled`,placeholder:`Escribe aquí tu respuesta...`});return}}l.field&&(n[l.field]=r),o({type:`user_message`,text:r}),o({type:`clear_quick_replies`}),o({type:`input_disabled`}),l.ack&&(o({type:`typing_start`}),await s(480+Math.random()*180),o({type:`typing_end`}),o({type:`assistant_message`,text:l.ack(r,n)}),await s(240)),await c(typeof l.nextStep==`function`?l.nextStep(r,n):l.nextStep)},isComplete:()=>a,getLeadData:()=>({...n})}}function o(e){return`
    *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* ── Botón flotante ── */
    #pw-fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${e};
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.25);
      transition: transform 0.2s, box-shadow 0.2s;
      z-index: 2147483647;
    }
    #pw-fab:hover { transform: scale(1.08); box-shadow: 0 6px 24px rgba(0,0,0,0.3); }
    #pw-fab svg { width: 28px; height: 28px; fill: #fff; transition: opacity 0.2s; }
    #pw-fab.open svg.icon-chat { display: none; }
    #pw-fab.open svg.icon-close { display: block !important; }
    #pw-fab svg.icon-close { display: none; }

    /* Badge de notificación */
    #pw-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 18px;
      height: 18px;
      background: #ef4444;
      border-radius: 50%;
      border: 2px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: #fff;
      font-weight: 700;
      font-family: system-ui, sans-serif;
    }

    /* ── Panel del chat ── */
    #pw-panel {
      position: fixed;
      bottom: 96px;
      right: 24px;
      width: 380px;
      max-height: 580px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.18);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 2147483646;
      font-family: 'Inter', system-ui, sans-serif;
      transform: translateY(16px) scale(0.97);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.25s ease, opacity 0.25s ease;
    }
    #pw-panel.visible {
      transform: translateY(0) scale(1);
      opacity: 1;
      pointer-events: all;
    }

    /* Header */
    #pw-header {
      background: ${e};
      padding: 14px 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }
    #pw-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
    }
    #pw-header-info { flex: 1; }
    #pw-header-name {
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.2;
    }
    #pw-header-status {
      color: rgba(255,255,255,0.8);
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    #pw-header-status::before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #4ade80;
      display: inline-block;
    }

    /* Mensajes */
    #pw-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      scroll-behavior: smooth;
    }
    #pw-messages::-webkit-scrollbar { width: 4px; }
    #pw-messages::-webkit-scrollbar-track { background: transparent; }
    #pw-messages::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }

    .pw-msg {
      max-width: 82%;
      padding: 10px 14px;
      border-radius: 16px;
      font-size: 13.5px;
      line-height: 1.5;
      word-wrap: break-word;
      white-space: pre-wrap;
      animation: pw-fadein 0.2s ease;
    }
    @keyframes pw-fadein { from { opacity:0; transform: translateY(6px); } to { opacity:1; transform: none; } }

    .pw-msg.assistant {
      background: #f1f5f9;
      color: #0f172a;
      border-bottom-left-radius: 4px;
      align-self: flex-start;
      text-align: left;
    }
    .pw-msg.user {
      background: ${e};
      color: #fff;
      border-bottom-right-radius: 4px;
      align-self: flex-end;
    }

    /* Typing indicator */
    #pw-typing {
      display: none;
      align-items: center;
      gap: 4px;
      padding: 10px 14px;
      background: #f1f5f9;
      border-radius: 16px;
      border-bottom-left-radius: 4px;
      align-self: flex-start;
    }
    #pw-typing.visible { display: flex; }
    #pw-typing span {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #94a3b8;
      animation: pw-bounce 1.2s infinite;
    }
    #pw-typing span:nth-child(2) { animation-delay: 0.2s; }
    #pw-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes pw-bounce {
      0%,60%,100% { transform: translateY(0); }
      30% { transform: translateY(-6px); }
    }

    /* Quick replies */
    #pw-quick-replies {
      padding: 6px 16px 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      flex-shrink: 0;
    }
    .pw-qr {
      background: #fff;
      border: 1.5px solid ${e};
      color: ${e};
      border-radius: 100px;
      padding: 6px 14px;
      font-size: 12.5px;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
      font-family: inherit;
    }
    .pw-qr:hover { background: ${e}; color: #fff; }

    /* Input */
    #pw-input-area {
      padding: 10px 12px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      gap: 8px;
      align-items: flex-end;
      flex-shrink: 0;
    }
    #pw-input {
      flex: 1;
      border: 1.5px solid #e2e8f0;
      border-radius: 12px;
      padding: 9px 12px;
      font-size: 13.5px;
      font-family: inherit;
      resize: none;
      min-height: 38px;
      max-height: 90px;
      line-height: 1.4;
      color: #0f172a;
      outline: none;
      transition: border-color 0.15s;
    }
    #pw-input:focus { border-color: ${e}; }
    #pw-input:disabled { background: #f8fafc; color: #94a3b8; }
    #pw-send {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: ${e};
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.15s;
    }
    #pw-send:hover { filter: brightness(1.1); }
    #pw-send:disabled { background: #cbd5e1; cursor: not-allowed; }
    #pw-send svg { width: 18px; height: 18px; fill: #fff; }

    /* Tarjeta resumen final */
    #pw-summary {
      display: none;
      flex-direction: column;
      align-items: center;
      padding: 24px 20px;
      text-align: center;
      gap: 10px;
    }
    #pw-summary.visible { display: flex; }
    #pw-summary .pw-check {
      width: 52px;
      height: 52px;
      background: #dcfce7;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
    }
    #pw-summary h3 { font-size: 15px; font-weight: 700; color: #0f172a; }
    #pw-summary p { font-size: 13px; color: #64748b; line-height: 1.5; }
    #pw-ref { font-size: 11px; color: #94a3b8; margin-top: 4px; }

    /* Formulario de captura de lead (modo IA) */
    #pw-lead-form {
      display: none;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      border-top: 1px solid #e2e8f0;
      flex-shrink: 0;
    }
    #pw-lead-form.visible { display: flex; }
    #pw-lead-form-title { font-size: 13px; color: #475569; margin: 0 0 2px; font-weight: 600; }
    #pw-lead-form input {
      border: 1.5px solid #e2e8f0;
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 13.5px;
      font-family: inherit;
      color: #0f172a;
      outline: none;
      transition: border-color 0.15s;
    }
    #pw-lead-form input:focus { border-color: ${e}; }
    #pw-lf-submit {
      background: ${e};
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      transition: filter 0.15s;
    }
    #pw-lf-submit:hover { filter: brightness(1.1); }
    #pw-lf-submit:disabled { background: #cbd5e1; cursor: not-allowed; }

    /* Responsive móvil */
    @media (max-width: 440px) {
      #pw-panel {
        width: calc(100vw - 20px);
        right: 10px;
        bottom: 80px;
      }
      #pw-fab { bottom: 16px; right: 16px; }
    }
  `}function s(e){let{accentColor:t,nombre:n,emoji:r,subtitulo:i,leadWebhookUrl:s,aiWebhookUrl:c}=e,l=document.createElement(`div`);l.id=`perito-widget-host`,document.body.appendChild(l);let u=l.attachShadow({mode:`open`}),d=document.createElement(`style`);d.textContent=o(t),u.appendChild(d);let f=document.createElement(`div`);f.innerHTML=`
    <button id="pw-fab" aria-label="Abrir chat">
      <div id="pw-badge">1</div>
      <svg class="icon-chat" viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>
      <svg class="icon-close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    </button>
    <div id="pw-panel" role="dialog" aria-label="Chat de valoración">
      <div id="pw-header">
        <div id="pw-avatar">${r}</div>
        <div id="pw-header-info">
          <div id="pw-header-name">${n}</div>
          <div id="pw-header-status">Disponible ahora</div>
        </div>
      </div>
      <div id="pw-messages">
        <div id="pw-typing"><span></span><span></span><span></span></div>
      </div>
      <div id="pw-quick-replies"></div>
      <div id="pw-summary">
        <div class="pw-check">✓</div>
        <h3>¡Solicitud recibida!</h3>
        <p>${i}</p>
        <div id="pw-ref"></div>
      </div>
      <div id="pw-input-area">
        <textarea id="pw-input" rows="1" placeholder="Escribe aquí..." disabled></textarea>
        <button id="pw-send" disabled aria-label="Enviar">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
      <div id="pw-lead-form">
        <p id="pw-lead-form-title">¿Quieres que te contactemos?</p>
        <input id="pw-lf-name"  type="text"  placeholder="Tu nombre *" />
        <input id="pw-lf-phone" type="tel"   placeholder="Teléfono *" />
        <input id="pw-lf-email" type="email" placeholder="Email (opcional)" />
        <button id="pw-lf-submit">Solicitar contacto</button>
      </div>
    </div>
  `,u.appendChild(f);let p=u.getElementById(`pw-fab`),m=u.getElementById(`pw-badge`),h=u.getElementById(`pw-panel`),g=u.getElementById(`pw-messages`),_=u.getElementById(`pw-typing`),v=u.getElementById(`pw-quick-replies`),y=u.getElementById(`pw-input`),b=u.getElementById(`pw-send`),x=u.getElementById(`pw-summary`),S=u.getElementById(`pw-ref`),C=u.getElementById(`pw-input-area`),w=u.getElementById(`pw-lead-form`),T=u.getElementById(`pw-lf-name`),E=u.getElementById(`pw-lf-phone`),D=u.getElementById(`pw-lf-email`),O=u.getElementById(`pw-lf-submit`),k=!1,A=!1;function j(e,t){let n=document.createElement(`div`);n.className=`pw-msg ${e}`,n.textContent=t,g.insertBefore(n,_),requestAnimationFrame(()=>{g.scrollTop=g.scrollHeight})}function M(e){v.innerHTML=``,e.forEach(({label:e,value:t})=>{let n=document.createElement(`button`);n.className=`pw-qr`,n.textContent=e,n.onclick=()=>R.processInput(t),v.appendChild(n)})}function N(e){C.style.display=`none`,v.style.display=`none`,x.classList.add(`visible`),S.textContent=`Referencia: ${e}`}let P=[];function F(){C.style.display=`none`,v.style.display=`none`,w.classList.add(`visible`),T.focus()}async function I(e){P.push({role:`user`,content:e}),j(`user`,e),_.classList.add(`visible`),g.scrollTop=g.scrollHeight,y.disabled=!0,b.disabled=!0;try{let t=await(await fetch(c,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({message:e,messages:P,pagina:window.location.href})})).json();_.classList.remove(`visible`),j(`assistant`,t.reply),P.push({role:`assistant`,content:t.reply}),t.captureLead?F():(y.disabled=!1,b.disabled=!1,y.focus())}catch{_.classList.remove(`visible`),j(`assistant`,`Lo siento, ha habido un problema. Inténtalo de nuevo.`),y.disabled=!1,b.disabled=!1}}async function L(){let e=T.value.trim(),t=E.value.trim();if(!e||!t){T.style.borderColor=e?``:`red`,E.style.borderColor=t?``:`red`;return}O.disabled=!0,O.textContent=`Enviando…`;let n=P.map(e=>`${e.role===`user`?`Cliente`:`Bot`}: ${e.content}`).join(`
`),r={nombre:e,telefono:t,email:D.value.trim()||``,servicio:`Chat IA — Padilla Peritaciones`,mensaje:n,pagina:window.location.href};try{s&&await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)})}catch{console.warn(`[PeritajeWidget] Error enviando lead`)}N(`lead_${Date.now()}_${Math.random().toString(36).slice(2,7)}`)}c&&(O.addEventListener(`click`,L),[T,E,D].forEach(e=>{e.addEventListener(`keydown`,e=>{e.key===`Enter`&&L()})}));let R=a({onEvent:e=>{switch(e.type){case`typing_start`:_.classList.add(`visible`),g.scrollTop=g.scrollHeight;break;case`typing_end`:_.classList.remove(`visible`);break;case`assistant_message`:j(`assistant`,e.text);break;case`user_message`:j(`user`,e.text);break;case`quick_replies`:M(e.replies);break;case`clear_quick_replies`:v.innerHTML=``;break;case`input_enabled`:y.disabled=!1,b.disabled=!1,y.placeholder=e.placeholder,y.focus();break;case`input_disabled`:y.disabled=!0,b.disabled=!0;break;case`complete`:z(e.lead);break}}});async function z(e){if(e.consentimiento!==`Sí`)return;let t=`lead_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,n={nombre:e.name||``,telefono:e.phone||``,email:e.email||``,servicio:`Peritaje de Autos`,mensaje:[e.descripcion?`${e.descripcion}`:``,e.vehiculo?`Vehículo: ${e.vehiculo}`:``,e.motivo?`Motivo: ${e.motivo}`:``].filter(Boolean).join(` | `),pagina:window.location.href};if(s)try{await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)})}catch{console.warn(`[PeritajeWidget] Error enviando lead`)}else{let e=`pw_leads_v1`,r=JSON.parse(localStorage.getItem(e)||`[]`);r.push({id:t,payload:n,submittedAt:new Date().toISOString()}),localStorage.setItem(e,JSON.stringify(r))}N(t)}function B(){let e=y.value.trim();!e||y.disabled||(y.value=``,y.style.height=`auto`,c?I(e):R.processInput(e))}b.addEventListener(`click`,B),y.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),B())}),y.addEventListener(`input`,()=>{y.style.height=`auto`,y.style.height=Math.min(y.scrollHeight,90)+`px`}),p.addEventListener(`click`,()=>{k=!k,h.classList.toggle(`visible`,k),p.classList.toggle(`open`,k),m.style.display=`none`,k&&!A&&(A=!0,c?(j(`assistant`,`Hola, soy el asistente de ${n}. ¿En qué puedo ayudarte?`),y.disabled=!1,b.disabled=!1,y.placeholder=`Escribe tu consulta…`,y.focus()):R.start())})}function c(){let e=document.querySelectorAll(`script[src]`),t=null;e.forEach(e=>{let n=e;(n.dataset.webhook||n.dataset.color||n.dataset.nombre)&&(t=n)}),s({accentColor:t?.dataset?.color||`#1a3a5c`,nombre:t?.dataset?.nombre||`Peritajes`,emoji:t?.dataset?.emoji||`🚗`,subtitulo:t?.dataset?.subtitulo||`Nos pondremos en contacto contigo pronto.`,leadWebhookUrl:t?.dataset?.webhook||null,aiWebhookUrl:t?.dataset?.aiWebhook||null})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,c):c()})();