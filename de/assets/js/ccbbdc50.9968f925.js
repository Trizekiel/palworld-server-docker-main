"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[989],{8326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(4848),i=n(8453);const s={sidebar_position:5},d="Automatische Updates",o={id:"guides/automatic-updates",title:"Automatische Updates",description:"Konfiguration von automatischen Updates mit Cron",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/guides/automatic-updates.md",sourceDirName:"guides",slug:"/guides/automatic-updates",permalink:"/de/guides/automatic-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/automatic-updates.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Automatische Neustarts",permalink:"/de/guides/automatic-reboots"},next:{title:"Ausf\xfchren ohne Root-Rechte",permalink:"/de/guides/running-without-root"}},a={},c=[{value:"Konfiguration von automatischen Updates mit Cron",id:"konfiguration-von-automatischen-updates-mit-cron",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"automatische-updates",children:"Automatische Updates"}),"\n",(0,r.jsx)(t.h2,{id:"konfiguration-von-automatischen-updates-mit-cron",children:"Konfiguration von automatischen Updates mit Cron"}),"\n",(0,r.jsxs)(t.p,{children:["Um automatische Updates mit diesem Server verwenden zu k\xf6nnen, ",(0,r.jsx)(t.strong,{children:"m\xfcssen"})," die folgenden Umgebungsvariablen auf\n",(0,r.jsx)(t.code,{children:"true"})," gesetzt werden:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"RCON_ENABLED"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"UPDATE_ON_BOOT"})}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.p,{children:["Wenn der Docker-Neustart nicht auf die Richtlinie ",(0,r.jsx)(t.code,{children:"always"})," oder ",(0,r.jsx)(t.code,{children:"unless-stopped"})," gesetzt ist, wird der Server\nheruntergefahren und muss manuell neu gestartet werden."]}),(0,r.jsxs)(t.p,{children:["Der Beispiel-Docker-Befehl und die Docker-Compose-Datei in\n",(0,r.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/de/",children:"der Schnellstartanleitung"})," verwenden bereits die ben\xf6tigte Richtlinie."]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{children:"Info"}),(0,r.jsx)(t.th,{children:"Standardwerte"}),(0,r.jsx)(t.th,{children:"Erlaubte Werte"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AUTO_UPDATE_CRON_EXPRESSION"}),(0,r.jsx)(t.td,{children:"Einstellung beeinflusst die H\xe4ufigkeit automatischer Updates."}),(0,r.jsx)(t.td,{children:"0 * * * *"}),(0,r.jsxs)(t.td,{children:["Erfordert einen Cron-Ausdruck - Siehe ",(0,r.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/de/guides/backup/automated-backup",children:"Konfiguration automatischer Backups mit Cron"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AUTO_UPDATE_ENABLED"}),(0,r.jsx)(t.td,{children:"Aktiviert automatische Updates"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"true/false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AUTO_UPDATE_WARN_MINUTES"}),(0,r.jsx)(t.td,{children:"Wie lange gewartet werden soll, bis der Server nach dem Informieren der Spieler aktualisiert wird. (Dies wird ignoriert, wenn keine Spieler verbunden sind)"}),(0,r.jsx)(t.td,{children:"30"}),(0,r.jsx)(t.td,{children:"!0"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Dieses Image verwendet Supercronic f\xfcr Cron-Jobs.\nSiehe ",(0,r.jsx)(t.a,{href:"https://github.com/aptible/supercronic#crontab-format",children:"Supercronic"}),"\noder ",(0,r.jsx)(t.a,{href:"https://crontab-generator.org",children:"Crontab Generator"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["Setzen Sie ",(0,r.jsx)(t.code,{children:"AUTO_UPDATE_CRON_EXPRESSION"}),", um den Standardzeitplan zu \xe4ndern."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);