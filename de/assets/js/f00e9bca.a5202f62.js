"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[133],{5168:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=n(4848),i=n(8453);const s={sidebar_position:4},d="Serverbefehle (RCON)",l={id:"getting-started/configuration/server-commands",title:"Serverbefehle (RCON)",description:"Wie man RCON verwendet, um mit dem Server zu interagieren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/configuration/server-commands.md",sourceDirName:"getting-started/configuration",slug:"/getting-started/configuration/server-commands",permalink:"/de/getting-started/configuration/server-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/getting-started/configuration/server-commands.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Engine-Einstellungen",permalink:"/de/getting-started/configuration/engine-settings"},next:{title:"Guides",permalink:"/de/category/guides"}},c={},a=[{value:"RCON",id:"rcon",level:2},{value:"Liste der Serverbefehle",id:"liste-der-serverbefehle",level:3}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"serverbefehle-rcon",children:"Serverbefehle (RCON)"}),"\n",(0,t.jsx)(r.p,{children:"Wie man RCON verwendet, um mit dem Server zu interagieren."}),"\n",(0,t.jsx)(r.h2,{id:"rcon",children:"RCON"}),"\n",(0,t.jsx)(r.p,{children:"RCON ist standardm\xe4\xdfig f\xfcr das palworld-server-docker-Image aktiviert.\nDas \xd6ffnen der RCON-CLI ist ziemlich einfach:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'docker exec -it palworld-server rcon-cli "<Befehl> <Wert>"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Sie k\xf6nnen beispielsweise eine Nachricht an alle im Server mit dem folgenden Befehl senden:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'docker exec -it palworld-server rcon-cli "Broadcast Hallo zusammen"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Dies \xf6ffnet eine CLI, die RCON verwendet, um Befehle an den Palworld-Server zu senden."}),"\n",(0,t.jsx)(r.h3,{id:"liste-der-serverbefehle",children:"Liste der Serverbefehle"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Befehl"}),(0,t.jsx)(r.th,{children:"Info"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Shutdown (Sekunden) (Text)"}),(0,t.jsx)(r.td,{children:"Der Server wird nach der Anzahl der Sekunden heruntergefahren"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DoExit"}),(0,t.jsx)(r.td,{children:"Server erzwingt das Beenden."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Broadcast"}),(0,t.jsx)(r.td,{children:"Senden Sie eine Nachricht an alle Spieler im Server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"KickPlayer (SteamID)"}),(0,t.jsx)(r.td,{children:"Spieler vom Server kicken."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"BanPlayer (SteamID)"}),(0,t.jsx)(r.td,{children:"Spieler vom Server verbannen."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TeleportToPlayer (SteamID)"}),(0,t.jsx)(r.td,{children:"Teleportieren Sie sich zur aktuellen Position des Zielspielers."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TeleportToMe (SteamID)"}),(0,t.jsx)(r.td,{children:"Zielspieler teleportiert sich an Ihre aktuelle Position"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ShowPlayers"}),(0,t.jsx)(r.td,{children:"Zeigt Informationen zu allen verbundenen Spielern an."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Info"}),(0,t.jsx)(r.td,{children:"Zeigt Serverinformationen an."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Save"}),(0,t.jsx)(r.td,{children:"Speichern Sie die Weltendaten."})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["F\xfcr eine vollst\xe4ndige Liste der Befehle gehen Sie zu: ",(0,t.jsx)(r.a,{href:"https://tech.palworldgame.com/settings-and-operation/commands",children:"https://tech.palworldgame.com/settings-and-operation/commands"})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>l});var t=n(6540);const i={},s=t.createContext(i);function d(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);