(function(e){function t(t){for(var o,p,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)p=i[l],Object.prototype.hasOwnProperty.call(n,p)&&n[p]&&d.push(n[p][0]),n[p]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(o=!1)}o&&(a.splice(t--,1),e=p(p.s=r[0]))}return e}var o={},n={app:0},a=[];function p(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,p),r.l=!0,r.exports}p.m=e,p.c=o,p.d=function(e,t,r){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(p.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)p.d(r,o,function(t){return e[t]}.bind(null,o));return r},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/dictao/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"089d":function(e,t,r){},"1cb4":function(e,t,r){"use strict";r("089d")},3699:function(e){e.exports=JSON.parse('[{"p":"agora","e":"now, nowadays"},{"p":"aí","e":"there"},{"p":"alí","e":"there"},{"p":"ainda","e":"still"},{"p":"amanhã","e":"tomorrow"},{"p":"antes","e":"before"},{"p":"aqui","e":"here"},{"p":"assim","e":"so, this way"},{"p":"bastante","e":"enough"},{"p":"bem","e":"well"},{"p":"cá","e":"here"},{"p":"cedo","e":"early"},{"p":"depressa","e":"quickly"},{"p":"devagar","e":"slowly"},{"p":"enfim","e":"anyway"},{"p":"hoje","e":"today"},{"p":"já","e":"now, already"},{"p":"já não","e":"no longer"},{"p":"lá","e":"over there"},{"p":"logo","e":"soon"},{"p":"mais","e":"more"},{"p":"mal","e":"bad, wrong"},{"p":"melhor","e":"better"},{"p":"menos","e":"less"},{"p":"muito","e":"very"},{"p":"nunca","e":"never"},{"p":"ontem","e":"yesterday"},{"p":"pior","e":"worse"},{"p":"pouco","e":"little bit"},{"p":"primeiro","e":"first"},{"p":"sempre","e":"always, ever"},{"p":"talvez","e":"maybe"},{"p":"também","e":"also"},{"p":"tanto","e":"too much"},{"p":"tarde","e":"late"}]')},"3b23":function(e,t,r){"use strict";r("849a")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/nouns"}},[e._v("Substantivos")]),e._v(" | "),r("router-link",{attrs:{to:"/verbs"}},[e._v("Verbos")]),e._v(" | "),r("router-link",{attrs:{to:"/adjectives"}},[e._v("Adjetivos")]),e._v(" | "),r("router-link",{attrs:{to:"/adverbs"}},[e._v("Advérbios")]),e._v(" | "),r("router-link",{attrs:{to:"/conjunctions"}},[e._v("Conjunções")])],1),r("router-view")],1)},a=[],p=(r("034f"),r("2877")),i={},s=Object(p["a"])(i,n,a,!1,null,null,null),u=s.exports,c=r("8c4f"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Welcome to Dictão")]),r("div",[r("router-link",{attrs:{to:"/nouns"}},[e._v("Substantivos")])],1),r("div",[r("router-link",{attrs:{to:"/verbs"}},[e._v("Verbos")])],1),r("div",[r("router-link",{attrs:{to:"/adjectives"}},[e._v("Adjetivos")])],1),r("div",[r("router-link",{attrs:{to:"/adverbs"}},[e._v("Advérbios")])],1),r("div",[r("router-link",{attrs:{to:"/conjunctions"}},[e._v("Conjunções")])],1)])},d=[],f={name:"Home"},m=f,h=(r("3b23"),Object(p["a"])(m,l,d,!1,null,"2b39918c",null)),v=h.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Adjectives • Adjetivos")]),r("Practice",{attrs:{data:e.adjectives,portuguese:e.portuguese}}),r("List",{attrs:{data:e.adjectives,portuguese:e.portuguese}})],1)},g=[],_=(r("a15b"),r("d81d"),r("b64b"),r("a821")),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.data,(function(t,o){return r("div",{key:o},[e._v(" "+e._s(e.english(t))+" | "+e._s(e.portuguese(t))+" ")])})),r("p",[e._v("Total "+e._s(e.data.length))])],2)},w=[],j={name:"List",props:{data:Array,english:{type:Function,default:function(e){return e.e}},portuguese:{type:Function,default:function(e){return e.p}}}},k=j,x=Object(p["a"])(k,y,w,!1,null,null,null),O=x.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("hr"),r("div",{on:{click:function(t){return e.click()}}},[r("p",[e._v(e._s(e.counter)+" / "+e._s(e.data.length))]),r("h1",[e._v(e._s(e.english(e.data[e.index])))]),e.answer?r("h1",[e._v(e._s(e.portuguese(e.data[e.index])))]):e._e()]),r("hr")])},S=[],A=(r("caad"),r("2532"),{name:"Practice",data:function(){return{counter:0,used:[],answer:!1}},props:{data:Array,english:{type:Function,default:function(e){return e.e}},portuguese:{type:Function,default:function(e){return e.p}}},methods:{next:function(){this.used.length==this.data.length?(this.used=[],this.counter=1):this.counter++;do{this.index=Math.floor(Math.random()*this.data.length)}while(this.used.includes(this.index));this.used.push(this.index)},click:function(){this.answer&&this.next(),this.answer=!this.answer}},created:function(){this.next()}}),L=A,$=(r("1cb4"),Object(p["a"])(L,P,S,!1,null,"32bae7e6",null)),E=$.exports,q={components:{List:O,Practice:E},data:function(){return{adjectives:_}},methods:{portuguese:function(e){return"string"===typeof e.p?e.p+" (u)":Object.keys(e.p).map((function(t){return e.p[t]+" ("+t+")"})).join(" ")}}},J=q,N=Object(p["a"])(J,b,g,!1,null,null,null),z=N.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Adverbs • Advérbios")]),r("Practice",{attrs:{data:e.adverbs}}),r("List",{attrs:{data:e.adverbs}})],1)},M=[],V=r("3699"),F={components:{List:O,Practice:E},data:function(){return{adverbs:V}}},T=F,H=Object(p["a"])(T,C,M,!1,null,null,null),D=H.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Conjunctions • Conjunções")]),r("Practice",{attrs:{data:e.conjunctions}}),r("List",{attrs:{data:e.conjunctions}})],1)},B=[],G=r("f892"),I={components:{List:O,Practice:E},data:function(){return{conjunctions:G}}},K=I,Q=Object(p["a"])(K,W,B,!1,null,null,null),R=Q.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Nouns • Substantivos")]),r("Practice",{attrs:{data:e.nouns,portuguese:e.portuguese}}),r("List",{attrs:{data:e.nouns,portuguese:e.portuguese}})],1)},X=[],Y=r("8805"),Z={components:{List:O,Practice:E},data:function(){return{nouns:Y}},methods:{portuguese:function(e){function t(e,t){return e+" ("+t+")"}return"b"==e.g?Object.keys(e.p).map((function(r){return t(e.p[r],r)})).join(" "):t(e.p,e.g)}}},ee=Z,te=Object(p["a"])(ee,U,X,!1,null,null,null),re=te.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Verbs • Verbos")]),r("Practice",{attrs:{data:e.verbs}}),r("List",{attrs:{data:e.verbs}})],1)},ne=[],ae=r("f6e6"),pe={components:{List:O,Practice:E},data:function(){return{verbs:ae}}},ie=pe,se=Object(p["a"])(ie,oe,ne,!1,null,null,null),ue=se.exports;o["a"].use(c["a"]);var ce=[{path:"/",name:"Home",component:v},{path:"/adjectives",name:"Adjectives",component:z},{path:"/adverbs",name:"Adverbs",component:D},{path:"/conjunctions",name:"Conjunctions",component:R},{path:"/nouns",name:"Nouns",component:re},{path:"/verbs",name:"Verbs",component:ue}],le=new c["a"]({mode:"history",base:"/dictao/",routes:ce}),de=le;o["a"].config.productionTip=!1,new o["a"]({router:de,render:function(e){return e(u)}}).$mount("#app")},"849a":function(e,t,r){},"85ec":function(e,t,r){},8805:function(e){e.exports=JSON.parse('[{"g":"f","p":"água","e":"water"},{"g":"m","p":"ano","e":"year"},{"g":"m","p":"banheiro","e":"bathroom"},{"g":"m","p":"café","e":"coffee"},{"g":"f","p":"cama","e":"bed"},{"g":"f","p":"caneta","e":"pen"},{"g":"b","p":{"f":"cantora","m":"cantor"},"e":"singer"},{"g":"f","p":"casa","e":"home"},{"g":"f","p":"cerveja","e":"beer"},{"g":"u","p":"cliente","e":"client"},{"g":"f","p":"cozinha","e":"kitchen"},{"g":"f","p":"criança","e":"child"},{"g":"m","p":"dia","e":"day"},{"g":"f","p":"esposa","e":"wife"},{"g":"m","p":"esposo","e":"husband"},{"g":"u","p":"estudante","e":"student"},{"g":"f","p":"filha","e":"daughter"},{"g":"m","p":"filho","e":"son"},{"g":"m","p":"frango","e":"chicken"},{"g":"m","p":"homem","e":"man"},{"g":"f","p":"hora","e":"hour"},{"g":"m","p":"livro","e":"book"},{"g":"f","p":"mãe","e":"mother"},{"g":"b","p":{"f":"médica","m":"médico"},"e":"doctor"},{"g":"f","p":"menina","e":"girl"},{"g":"m","p":"menino","e":"boy"},{"g":"m","p":"minuto","e":"minute"},{"g":"f","p":"mulher","e":"woman"},{"g":"m","p":"pai","e":"father"},{"g":"m","p":"pão","e":"bread"},{"g":"f","p":"semana","e":"week"},{"g":"f","p":"vez","e":"turn, time"}]')},a821:function(e){e.exports=JSON.parse('[{"e":"beautiful","p":{"m":"bonito","f":"bonita"}},{"e":"big","p":"grande"},{"e":"brown","p":{"m":"castanho","f":"castanha"}},{"e":"cold","p":{"m":"frio","f":"fria"}},{"e":"crazy","p":{"m":"louco","f":"louca"}},{"e":"dead","p":{"m":"morto","f":"morta"}},{"e":"delicious","p":{"m":"delicioso","f":"deliciosa"}},{"e":"easy","p":"fácil"},{"e":"fast","p":{"m":"rápido","f":"rápida"}},{"e":"first","p":{"m":"primeiro","f":"primeira"}},{"e":"good","p":{"m":"bom","f":"boa"}},{"e":"honest","p":{"m":"honesto","f":"honesta"}},{"e":"hot","p":"quente"},{"e":"inteligent","p":"inteligente"},{"e":"last","p":{"m":"último","f":"última"}},{"e":"long","p":{"m":"longo","f":"longa"}},{"e":"low","p":{"m":"baixo","f":"baixa"}},{"e":"new","p":{"m":"novo","f":"nova"}},{"e":"old","p":{"m":"velho","f":"velha"}},{"e":"poor","p":"pobre"},{"e":"responsible","p":"responsável"},{"e":"rich","p":{"m":"rico","f":"rica"}},{"e":"sad","p":"triste"},{"e":"small","p":{"m":"pequeno","f":"pequena"}},{"e":"second","p":{"m":"segundo","f":"segunda"}},{"e":"strong","p":"forte"},{"e":"tall","p":{"m":"alto","f":"alta"}},{"e":"tired","p":{"m":"cansado","f":"cansada"}},{"e":"ugly","p":{"m":"feio","f":"feia"}},{"e":"weak","p":{"m":"fraco","f":"fraca"}},{"e":"yello","p":{"m":"amarelo","f":"amarela"}},{"e":"young","p":"jovem"}]')},f6e6:function(e){e.exports=JSON.parse('[{"p":"abrir","e":"to open"},{"p":"acabar","e":"to end"},{"p":"afirmar","e":"to claim"},{"p":"ajudar","e":"to help"},{"p":"anunciar","e":"to announce"},{"p":"aprender","e":"to learn"},{"p":"beber","e":"to drink"},{"p":"chegar","e":"to arrive"},{"p":"começar","e":"to start"},{"p":"comer","e":"to eat"},{"p":"comprar","e":"to buy, to purchase"},{"p":"conseguir","e":"to get"},{"p":"considerar","e":"to consider"},{"p":"contar","e":"to count"},{"p":"continuar","e":"to continue"},{"p":"criar","e":"to create"},{"p":"dar","e":"to give"},{"p":"deixar","e":"to leave"},{"p":"dizer","e":"to say"},{"p":"dormir","e":"to sleep"},{"p":"dress","e":"to dress"},{"p":"encontrar","e":"to find"},{"p":"entrar","e":"to enter"},{"p":"enviar","e":"to send"},{"p":"escrever","e":"to write"},{"p":"esperar","e":"to wait, to expect"},{"p":"estudar","e":"to study"},{"p":"exercer","e":"to exercise"},{"p":"explicar","e":"to explain"},{"p":"falar","e":"to speak"},{"p":"fazer","e":"to make"},{"p":"ganhar","e":"to win"},{"p":"incluir","e":"to include"},{"p":"ir","e":"to go"},{"p":"jogar","e":"to play"},{"p":"levar","e":"to take"},{"p":"marcar","e":"to mark"},{"p":"mostrar","e":"to show"},{"p":"pagar","e":"to pay"},{"p":"partilhar","e":"to share"},{"p":"parecer","e":"to seem"},{"p":"pedir","e":"to ask for"},{"p":"pensar","e":"to think"},{"p":"perder","e":"to lose"},{"p":"perguntar","e":"to ask"},{"p":"permitir","e":"to allow, to permit"},{"p":"poder","e":"can, to be able to"},{"p":"praticar","e":"to practice"},{"p":"precisar","e":"to need"},{"p":"publicar","e":"to publish"},{"p":"querer","e":"to want"},{"p":"receber","e":"to receive"},{"p":"saber","e":"to know"},{"p":"sair","e":"to leave"},{"p":"seguir","e":"to follow"},{"p":"ser","e":"to be"},{"p":"tentar","e":"to try"},{"p":"ter","e":"to have"},{"p":"trabalhar","e":"to work"},{"p":"usar","e":"to use"},{"p":"ver","e":"to see"},{"p":"vir","e":"to come"},{"p":"viver","e":"to live"},{"p":"voltar","e":"to return"}]')},f892:function(e){e.exports=JSON.parse('[{"p":"com","e":"with"},{"p":"como","e":"as, how to"},{"p":"e","e":"and"},{"p":"então","e":"so, then, therfore"},{"p":"embora","e":"although"},{"p":"ou","e":"or"},{"p":"onde","e":"where"},{"p":"mas","e":"but, yet"},{"p":"nem","e":"nor"},{"p":"pois","e":"because"},{"p":"porque","e":"because"},{"p":"porém","e":"although, however"},{"p":"que","e":"that"},{"p":"se","e":"if"},{"p":"sem","e":"without"}]')}});
//# sourceMappingURL=app.04bad5b6.js.map