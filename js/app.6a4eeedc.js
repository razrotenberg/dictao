(function(e){function o(o){for(var t,i,p=o[0],c=o[1],s=o[2],h=0,l=[];h<p.length;h++)i=p[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);u&&u(o);while(l.length)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,o=0;o<r.length;o++){for(var n=r[o],t=!0,p=1;p<n.length;p++){var c=n[p];0!==a[c]&&(t=!1)}t&&(r.splice(o--,1),e=i(i.s=n[0]))}return e}var t={},a={app:0},r=[];function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,o,n){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)i.d(n,t,function(o){return e[o]}.bind(null,t));return n},i.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/dictao/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=o,p=p.slice();for(var s=0;s<p.length;s++)o(p[s]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("56d7")},"034f":function(e,o,n){"use strict";n("85ec")},"2e31":function(e,o,n){"use strict";n("a3dd")},"30d9":function(e,o,n){},3699:function(e){e.exports=JSON.parse('[{"p":"agora","e":"now, nowadays","pronunciation":"ah-goh-rah"},{"p":"aí","e":"there","pronunciation":"ah-ee"},{"p":"alí","e":"there"},{"p":"ainda","e":"still, yet","pronunciation":"ah-een-dah"},{"p":"amanhã","e":"tomorrow"},{"p":"antes","e":"before"},{"p":"aqui","e":"here","pronunciation":"ah-kee"},{"p":"assim","e":"so, this way","pronunciation":"ah-sing"},{"p":"bastante","e":"enough"},{"p":"bem","e":"well","pronunciation":"bah-ing"},{"p":"cá","e":"here"},{"p":"cedo","e":"early"},{"p":"depressa","e":"quickly","pronunciation":"deh-pray-sah"},{"p":"devagar","e":"slowly","pronunciation":"deh-vah-gahr"},{"p":"enfim","e":"anyway"},{"p":"hoje","e":"today","pronunciation":"ohjeh"},{"p":"já","e":"now, already","pronunciation":"jah"},{"p":"já não","e":"no longer"},{"p":"lá","e":"over there","pronunciation":"lah"},{"p":"logo","e":"later, promptly, soon","pronunciation":"loh-goo"},{"p":"mais","e":"more","pronunciation":"mah-eesh"},{"p":"mal","e":"bad, wrong","pronunciation":"mal"},{"p":"melhor","e":"better"},{"p":"menos","e":"less","pronunciation":"meh-noosh"},{"p":"mesmo","e":"really, even (so)","pronunciation":"maysh-moo"},{"p":"muito","e":"very","pronunciation":"mooing-too"},{"p":"nada","e":"nothing","pronunciation":"nah-dah"},{"p":"não","e":"no, don\'t","pronunciation":"nahong"},{"p":"nunca","e":"never","pronunciation":"nung-kah"},{"p":"ontem","e":"yesterday","pronunciation":"on-teng"},{"p":"pior","e":"worse"},{"p":"pouco","e":"little bit","pronunciation":"paw-coo"},{"p":"primeiro","e":"first"},{"p":"pronto","e":"ready","pronunciation":"pron-too"},{"p":"sempre","e":"always, ever","pronunciation":"seng-pray"},{"p":"sim","e":"yes","pronunciation":"sing"},{"p":"só","e":"only","pronunciation":"soh"},{"p":"talvez","e":"maybe"},{"p":"também","e":"also","pronunciation":"tam-baying"},{"p":"tanto","e":"too much","pronunciation":"tahn-too"},{"p":"tarde","e":"late","pronunciation":"tar-deh"}]')},3770:function(e,o,n){},"497f":function(e,o,n){"use strict";n("82eb")},"4d54":function(e,o,n){"use strict";n("3770")},"4d7d":function(e,o,n){"use strict";n("30d9")},"56d7":function(e,o,n){"use strict";n.r(o);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),a=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/nouns"}},[e._v("Substantivos")]),e._v(" | "),n("router-link",{attrs:{to:"/verbs"}},[e._v("Verbos")]),e._v(" | "),n("router-link",{attrs:{to:"/adjectives"}},[e._v("Adjetivos")]),e._v(" | "),n("router-link",{attrs:{to:"/adverbs"}},[e._v("Advérbios")]),e._v(" | "),n("router-link",{attrs:{to:"/conjunctions"}},[e._v("Conjunções")])],1),n("router-view")],1)},r=[],i=(n("034f"),n("2877")),p={},c=Object(i["a"])(p,a,r,!1,null,null,null),s=c.exports,u=n("8c4f"),h=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"home"},[n("h1",{staticClass:"title"},[e._v("Welcome to Dictão")]),n("div",[n("router-link",{attrs:{to:"/nouns"}},[e._v("Substantivos")])],1),n("div",[n("router-link",{attrs:{to:"/verbs"}},[e._v("Verbos")])],1),n("div",[n("router-link",{attrs:{to:"/adjectives"}},[e._v("Adjetivos")])],1),n("div",[n("router-link",{attrs:{to:"/adverbs"}},[e._v("Advérbios")])],1),n("div",[n("router-link",{attrs:{to:"/conjunctions"}},[e._v("Conjunções")])],1)])},l=[],d={name:"Home"},f=d,m=(n("4d7d"),Object(i["a"])(f,h,l,!1,null,"0ff8581a",null)),g=m.exports,b=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("Page",e._b({attrs:{en:"Adjectives",pt:"Adjetivos"}},"Page",e.$data,!1))},v=[],y=(n("a15b"),n("d81d"),n("b64b"),function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("h2",{staticClass:"title"},[e._v(e._s(e.en)+" • "+e._s(e.pt))]),n("b-tabs",{attrs:{position:"is-centered",type:"is-toggle",animated:!1},model:{value:e.tab,callback:function(o){e.tab=o},expression:"tab"}},[n("b-tab-item",{attrs:{label:"Practice"}},[n("Practice",e._b({},"Practice",e.$props,!1))],1),n("b-tab-item",{attrs:{label:"List"}},[n("List",e._b({},"List",e.$props,!1))],1)],1)],1)}),w=[],_=n("5530"),k=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("section",[n("p",[e._v("Total "+e._s(e.data.length))]),n("b-table",{attrs:{data:e.data,"mobile-cards":!1,striped:!0,narrowed:!0}},[n("b-table-column",{attrs:{label:"Portuguese",centered:!0},scopedSlots:e._u([{key:"default",fn:function(o){return[n("Word",{attrs:{word:e.portuguese(o.row),pronunciation:e.pronunciation(o.row)}})]}}])}),n("b-table-column",{attrs:{label:"English",centered:!0},scopedSlots:e._u([{key:"default",fn:function(o){return[n("Word",{attrs:{word:e.english(o.row)}})]}}])})],1)],1)},j=[],x=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("span",{staticClass:"word"},[e._v(" "+e._s(e.word)+" "),e.pronounced&&e.pronunciation?n("span",{staticClass:"pronunciation"},[e._v(" "+e._s(e.pronunciation))]):e._e(),e.newline?n("br"):e._e()])},O=[],P={name:"Word",props:{word:{type:String},pronunciation:{type:String,default:null},pronounced:{type:Boolean,default:!0},newline:{type:Boolean,default:!1}}},q=P,S=(n("497f"),Object(i["a"])(q,x,O,!1,null,"b58acfd2",null)),$=S.exports,z={name:"List",components:{Word:$},props:{data:Array,english:{type:Function,default:function(e){return e.e}},portuguese:{type:Function,default:function(e){return e.p}},pronunciation:{type:Function,default:function(e){return e.pronunciation}}}},A=z,E=(n("4d54"),Object(i["a"])(A,k,j,!1,null,"251d9acc",null)),C=E.exports,W=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("b-button",{on:{click:e.q_qa}},[e._v(e._s(e.show.answers?"Q+A":"Q"))]),n("b-button",{on:{click:e.en_pt}},[e._v(e._s(e.lang.q))]),n("span",{staticClass:"button"},[e._v(e._s(e.counter)+" / "+e._s(e.data.length))]),n("div",{on:{click:function(o){return e.click()}}},[n("Word",e._b({attrs:{newline:!0}},"Word",e.question,!1)),e.show.answer?n("Word",e._b({},"Word",e.answer,!1)):e._e()],1)],1)},J=[],N=(n("caad"),n("2532"),{name:"Practice",components:{Word:$},data:function(){return{counter:0,index:0,used:[],lang:{q:"en",a:"pt"},show:{answer:!1,answers:!0}}},props:{data:Array,english:{type:Function,default:function(e){return e.e}},portuguese:{type:Function,default:function(e){return e.p}},pronunciation:{type:Function,default:function(e){return e.pronunciation}}},methods:{next:function(){this.used.length==this.data.length?(this.used=[],this.counter=1):this.counter++;do{this.index=Math.floor(Math.random()*this.data.length)}while(this.used.includes(this.index));this.used.push(this.index)},click:function(){this.show.answers?this.show.answer?(this.next(),this.show.answer=!1):this.show.answer=!0:this.next()},en_pt:function(){var e=[this.lang.a,this.lang.q];this.lang.q=e[0],this.lang.a=e[1]},q_qa:function(){this.show.answers=!this.show.answers,this.show.answer=!1},props:function(e){var o=this.data[this.index];return"en"==e?{word:this.english(o)}:"pt"==e?{word:this.portuguese(o),pronunciation:this.pronunciation(o)}:void 0}},created:function(){this.next()},computed:{question:function(){return this.props(this.lang.q)},answer:function(){return this.props(this.lang.a)}}}),F=N,M=(n("2e31"),Object(i["a"])(F,W,J,!1,null,"360b811f",null)),L=M.exports,V={components:{List:C,Practice:L},data:function(){return{tab:0}},props:Object(_["a"])(Object(_["a"])({en:String,pt:String},C.props),L.props)},T=V,H=Object(i["a"])(T,y,w,!1,null,null,null),B=H.exports,Q=n("a821"),D={components:{Page:B},data:function(){return{data:Q,portuguese:function(e){return"string"===typeof e.p?e.p+" (u)":Object.keys(e.p).map((function(o){return e.p[o]+" ("+o+")"})).join(" ")}}}},G=D,I=Object(i["a"])(G,b,v,!1,null,null,null),K=I.exports,R=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("Page",e._b({attrs:{en:"Adverbs",pt:"Advérbios"}},"Page",e.$data,!1))},U=[],X=n("3699"),Y={components:{Page:B},data:function(){return{data:X}}},Z=Y,ee=Object(i["a"])(Z,R,U,!1,null,null,null),oe=ee.exports,ne=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("Page",e._b({attrs:{en:"Conjunctions",pt:"Conjunções"}},"Page",e.$data,!1))},te=[],ae=n("f892"),re={components:{Page:B},data:function(){return{data:ae}}},ie=re,pe=Object(i["a"])(ie,ne,te,!1,null,null,null),ce=pe.exports,se=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("Page",e._b({attrs:{en:"Nouns",pt:"Substantivos"}},"Page",e.$data,!1))},ue=[],he=n("8805"),le={components:{Page:B},data:function(){return{data:he,portuguese:function(e){function o(e,o){return e+" ("+o+")"}return"b"==e.g?Object.keys(e.p).map((function(n){return o(e.p[n],n)})).join(" "):o(e.p,e.g)}}}},de=le,fe=Object(i["a"])(de,se,ue,!1,null,null,null),me=fe.exports,ge=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("Page",e._b({attrs:{en:"Verbs",pt:"Verbos"}},"Page",e.$data,!1))},be=[],ve=n("f6e6"),ye={components:{Page:B},data:function(){return{data:ve}}},we=ye,_e=Object(i["a"])(we,ge,be,!1,null,null,null),ke=_e.exports;t["a"].use(u["a"]);var je=[{path:"/",name:"Home",component:g},{path:"/adjectives",name:"Adjectives",component:K},{path:"/adverbs",name:"Adverbs",component:oe},{path:"/conjunctions",name:"Conjunctions",component:ce},{path:"/nouns",name:"Nouns",component:me},{path:"/verbs",name:"Verbs",component:ke}],xe=new u["a"]({mode:"history",base:"/dictao/",routes:je}),Oe=xe,Pe=n("77b4"),qe=n("7155"),Se=n("fe55");n("5abe");t["a"].config.productionTip=!1,t["a"].use(Pe["a"]),t["a"].use(qe["a"]),t["a"].use(Se["a"]),new t["a"]({router:Oe,render:function(e){return e(s)}}).$mount("#app")},"82eb":function(e,o,n){},"85ec":function(e,o,n){},8805:function(e){e.exports=JSON.parse('[{"g":"f","p":"água","e":"water","pronunciation":"ah-goo-ah"},{"g":"f","p":"ajuda","e":"help","pronunciation":"ah-joo-dah"},{"g":"m","p":"ano","e":"year"},{"g":"m","p":"apelido","e":"surname","pronunciation":"ah-peh-lee-doo"},{"g":"m","p":"artigo","e":"article"},{"g":"m","p":"autocarro","e":"bus","pronunciation":"aoo-toh-car-roo"},{"g":"f","p":"avenida","e":"avenue"},{"g":"m","p":"balcão","e":"balcony","pronunciation":"bahl-kaong"},{"g":"m","p":"banco","e":"bank"},{"g":"m","p":"banheiro","e":"bathroom"},{"g":"m","p":"banho","e":"bath","pronunciation":"bah-nyioo"},{"g":"m","p":"bilhete","e":"ticket","pronunciation":"bee-lyieh-teh"},{"g":"m","p":"bolo","e":"cake"},{"g":"m","p":"café","e":"coffee"},{"g":"f","p":"cama","e":"bed"},{"g":"f","p":"caneta","e":"pen"},{"g":"b","p":{"f":"cantora","m":"cantor"},"e":"singer"},{"g":"m","p":"cartão","e":"card","pronunciation":"cahr-taong"},{"g":"f","p":"casa","e":"home","pronunciation":"kah-sah"},{"g":"m","p":"casal","e":"couple","pronunciation":"kah-zahl"},{"g":"f","p":"cenoura","e":"carrot"},{"g":"f","p":"cerveja","e":"beer"},{"g":"f","p":"cidade","e":"city"},{"g":"u","p":"cliente","e":"client"},{"g":"f","p":"coisa","e":"thing","pronunciation":"koee-zah"},{"g":"f","p":"conta","e":"bill","pronunciation":"kong-tah"},{"g":"m","p":"conto","e":"tale, story"},{"g":"m","p":"copo","e":"glass","pronunciation":"koh-poo"},{"g":"f","p":"cozinha","e":"kitchen"},{"g":"f","p":"criança","e":"child"},{"g":"f","p":"desculpa","e":"excuse","pronunciation":"dsh-cool-pah"},{"g":"m","p":"destino","e":"destination"},{"g":"m","p":"dia","e":"day","pronunciation":"deer"},{"g":"f","p":"dica","e":"tip"},{"g":"m","p":"dinheiro","e":"money","pronunciation":"dee-nyieh-ee-roh"},{"g":"m","p":"edifício","e":"building"},{"g":"f","p":"entrada","e":"entrance"},{"g":"f","p":"escola","e":"school"},{"g":"m","p":"espaço","e":"space"},{"g":"f","p":"esposa","e":"wife"},{"g":"m","p":"esposo","e":"husband"},{"g":"f","p":"esquina","e":"corner","pronunciation":"sh-keen-ah"},{"g":"f","p":"estação","e":"station"},{"g":"m","p":"estado","e":"state"},{"g":"f","p":"estrada","e":"road"},{"g":"u","p":"estudante","e":"student"},{"g":"m","p":"estudo","e":"study"},{"g":"m","p":"favor","e":"favor","pronunciation":"fah-vohr"},{"g":"f","p":"filha","e":"daughter"},{"g":"m","p":"filho","e":"son"},{"g":"m","p":"fim","e":"end","pronunciation":"feeng"},{"g":"m","p":"frango","e":"chicken"},{"g":"f","p":"frente","e":"front","pronunciation":"frayn-tt"},{"g":"m","p":"frio","e":"cold","pronunciation":"free-oo"},{"g":"f","p":"garrafa","e":"bottle"},{"g":"m","p":"gelo","e":"ice"},{"g":"f","p":"história","e":"story"},{"g":"m","p":"homem","e":"man","pronunciation":"oh-mayeen"},{"g":"f","p":"hora","e":"hour","pronunciation":"oh-rah"},{"g":"f","p":"ideia","e":"idea"},{"g":"f","p":"igreja","e":"church"},{"g":"f","p":"janela","e":"window"},{"g":"o","p":"jardim","e":"garden"},{"g":"m","p":"lado","e":"side","pronunciation":"lah-doo"},{"g":"f","p":"licença","e":"permission, license","pronunciation":"lee-sayn-sah"},{"g":"m","p":"livro","e":"book"},{"g":"f","p":"loja","e":"store"},{"g":"m","p":"lugar","e":"place"},{"g":"f","p":"mãe","e":"mother"},{"g":"f","p":"maioria (de)","e":"most, majority (of)","pronunciation":"may-oo-ree-ah"},{"g":"b","p":{"f":"médica","m":"médico"},"e":"doctor"},{"g":"m","p":"meio","e":"middle"},{"g":"f","p":"menina","e":"girl"},{"g":"m","p":"menino","e":"boy"},{"g":"m","p":"mês","e":"month","pronunciation":"may-sh"},{"g":"m","p":"milagre","e":"miracle"},{"g":"m","p":"minuto","e":"minute","pronunciation":"mee-noo-too"},{"g":"f","p":"montanha","e":"mountain"},{"g":"f","p":"mulher","e":"woman","pronunciation":"moo-lyier"},{"g":"f","p":"noite","e":"night","pronunciation":"noh-ee-teh"},{"g":"m","p":"nome","e":"name","pronunciation":"noh-meh"},{"g":"m","p":"número","e":"number","pronunciation":"noo-may-roh"},{"g":"f","p":"onda","e":"wave"},{"g":"m","p":"pai","e":"father"},{"g":"m","p":"país","e":"country"},{"g":"f","p":"palavra","e":"word","pronunciation":"pah-lah-vrah"},{"g":"m","p":"parque","e":"park"},{"g":"m","p":"pão","e":"bread"},{"g":"f","p":"pé","e":"foot","pronunciation":"peh"},{"g":"b","p":{"f":"pescadora","m":"pescador"},"e":"fisherman"},{"g":"f","p":"pessoa","e":"person"},{"g":"f","p":"ponte","e":"bridge"},{"g":"f","p":"porta","e":"door","pronunciation":"pohr-tah"},{"g":"f","p":"praça","e":"square"},{"g":"m","p":"prato","e":"plate, dish","pronunciation":"prah-too"},{"g":"f","p":"pressa","e":"hurry, rush","pronunciation":"pray-sah"},{"g":"m","p":"princípio","e":"beginning","pronunciation":"preen-cee-peeoh"},{"g":"m","p":"problema","e":"problem","pronunciation":"proh-blay-mah"},{"g":"m","p":"quarto","e":"bedroom","pronunciation":"kwar-too"},{"g":"f","p":"razão","e":"reason"},{"g":"m","p":"recado","e":"message","pronunciation":"ray-kah-doo"},{"g":"f","p":"rua","e":"street","pronunciation":"roo-ah"},{"g":"f","p":"saída","e":"exit"},{"g":"f","p":"semana","e":"week","pronunciation":"say-mah-nah"},{"g":"f","p":"semáforo","e":"traffic light"},{"g":"m","p":"sol","e":"sun"},{"g":"f","p":"sorte","e":"luck","pronunciation":"sohr-tt"},{"g":"m","p":"trem","e":"train"},{"g":"f","p":"vez","e":"turn, time","pronunciation":"vaysh"},{"g":"f","p":"viagem","e":"journey, trip","pronunciation":"vee-ah-jaying"},{"g":"f","p":"vila","e":"village"},{"g":"f","p":"volta","e":"return","pronunciation":"vohl-tah"},{"g":"m","p":"vôo","e":"flight","pronunciation":"voh-oo"}]')},a3dd:function(e,o,n){},a821:function(e){e.exports=JSON.parse('[{"e":"beautiful","p":{"m":"bonito","f":"bonita"},"pronunciation":"boo-nee-too"},{"e":"big","p":"grande","pronunciation":"gran-deh"},{"e":"brown","p":{"m":"castanho","f":"castanha"}},{"e":"better","p":"melhor","pronunciation":"may-lyiohr"},{"e":"cheap","p":{"m":"barato","f":"barata"},"pronunciation":"bah-rah-too"},{"e":"closed","p":{"m":"fechado","f":"fechada"},"pronunciation":"fay-shah-doo"},{"e":"cold","p":{"m":"frio","f":"fria"},"pronunciation":"free-oo"},{"e":"crazy","p":{"m":"louco","f":"louca"}},{"e":"dead","p":{"m":"morto","f":"morta"}},{"e":"delicious","p":{"m":"delicioso","f":"deliciosa"}},{"e":"direct","p":{"m":"directo","f":"directa"},"pronunciation":"dee-reh-too"},{"e":"easy","p":"fácil"},{"e":"expensive","p":{"m":"caro","f":"cara"},"pronunciation":"kah-roo"},{"e":"fast","p":{"m":"rápido","f":"rápida"}},{"e":"first","p":{"m":"primeiro","f":"primeira"},"pronunciation":"pree-mahee-roh"},{"e":"good","p":{"m":"bom","f":"boa","ms":"bons","fs":"boas"},"pronunciation":"bong"},{"e":"honest","p":{"m":"honesto","f":"honesta"}},{"e":"hot","p":"quente","pronunciation":"kayn-teh"},{"e":"inteligent","p":"inteligente"},{"e":"last","p":{"m":"último","f":"última"},"pronunciation":"ool-tee-moo"},{"e":"long","p":{"m":"longo","f":"longa"},"pronunciation":"lon-gah"},{"e":"long (in length)","p":{"m":"comprido","f":"comprida"},"pronunciation":"coom-pree-doo"},{"e":"low","p":{"m":"baixo","f":"baixa"}},{"e":"married","p":{"m":"casado","f":"casada"},"pronunciation":"kah-zah-doo"},{"e":"new","p":{"m":"novo","f":"nova"},"pronunciation":"noh-voo"},{"e":"next, following","p":{"m":"próximo","f":"próxima"},"pronunciation":"pro-see-moo"},{"e":"old","p":{"m":"velho","f":"velha"},"pronunciation":"vay-lyioo"},{"e":"open","p":{"m":"aberto","f":"aberta"},"pronunciation":"ah-bayr-too"},{"e":"poor","p":"pobre"},{"e":"responsible","p":"responsável"},{"e":"rich","p":{"m":"rico","f":"rica"}},{"e":"sad","p":"triste"},{"e":"serious","p":{"m":"sério","f":"séria"},"pronunciation":"say-ree-oo"},{"e":"short (in height)","p":{"m":"baixo","f":"baixa"},"pronunciation":"bah-ee-shoo"},{"e":"short (in length)","p":{"m":"curto","f":"curta"},"pronunciation":"coor-too"},{"e":"small","p":{"m":"pequeno","f":"pequena"},"pronunciation":"pay-kay-noo"},{"e":"second","p":{"m":"segundo","f":"segunda"}},{"e":"strong","p":"forte"},{"e":"tall","p":{"m":"alto","f":"alta"},"pronunciation":"ahl-too"},{"e":"tired","p":{"m":"cansado","f":"cansada"}},{"e":"ugly","p":{"m":"feio","f":"feia"},"pronunciation":"fay-eeoo"},{"e":"weak","p":{"m":"fraco","f":"fraca"}},{"e":"yello","p":{"m":"amarelo","f":"amarela"}},{"e":"young","p":"jovem"}]')},f6e6:function(e){e.exports=JSON.parse('[{"p":"abrir","e":"to open","pronunciation":"ah-breer"},{"p":"achar","e":"to find","pronunciation":"ah-shahr"},{"p":"acabar","e":"to end"},{"p":"afirmar","e":"to claim"},{"p":"ajudar","e":"to help","pronunciation":"ah-joo-darh"},{"p":"andar","e":"to walk","pronunciation":"an-darh"},{"p":"anunciar","e":"to announce"},{"p":"apanhar","e":"to take, to catch, to get","pronunciation":"an-pah-nyiarh"},{"p":"aprender","e":"to learn","pronunciation":"ah-prayn-dayrh"},{"p":"assinar","e":"to sign","pronunciation":"ah-see-narh"},{"p":"atravessar","e":"to cross"},{"p":"beber","e":"to drink"},{"p":"chegar","e":"to arrive","pronunciation":"shay-garh"},{"p":"começar","e":"to start"},{"p":"comer","e":"to eat"},{"p":"comprar","e":"to buy, to purchase"},{"p":"confrontar","e":"to confront"},{"p":"conseguir","e":"to get"},{"p":"considerar","e":"to consider"},{"p":"contar","e":"to count"},{"p":"continuar","e":"to continue"},{"p":"criar","e":"to create"},{"p":"dar","e":"to give"},{"p":"deixar (de)","e":"to leave","pronunciation":"day-sharh"},{"p":"descer","e":"to go down, to descend","pronunciation":"desh-sayrh"},{"p":"desculpar-se","e":"to forgive","pronunciation":"daysh-cool-parr-say"},{"p":"dizer","e":"to say","pronunciation":"dee-zayhr"},{"p":"dormir","e":"to sleep","pronunciation":"door-meer"},{"p":"encarar","e":"to stare"},{"p":"encontrar","e":"to find"},{"p":"enfrentar","e":"to face"},{"p":"entrar","e":"to enter"},{"p":"enviar","e":"to send"},{"p":"escrever","e":"to write","pronunciation":"aysh-cray-vehr"},{"p":"esperar","e":"to wait, to expect"},{"p":"estar","e":"to be (temporary)","pronunciation":"eesh-tahr"},{"p":"estudar","e":"to study","pronunciation":"ees-too-dahr"},{"p":"exercer","e":"to exercise"},{"p":"explicar","e":"to explain"},{"p":"falar","e":"to speak","pronunciation":"fah-lahr"},{"p":"fazer","e":"to do, to make","pronunciation":"fah-zayhr"},{"p":"fechar","e":"to close","pronunciation":"fay-shahr"},{"p":"ficar","e":"to be located, to become, to stay","pronunciation":"fee-kahr"},{"p":"ganhar","e":"to win"},{"p":"gostar (de)","e":"to like","pronunciation":"goosh-tahr"},{"p":"incluir","e":"to include"},{"p":"ir","e":"to go","pronunciation":"eerh"},{"p":"jogar","e":"to play"},{"p":"levar","e":"to take"},{"p":"ler","e":"to read","pronunciation":"layrh"},{"p":"marcar","e":"to mark"},{"p":"manter","e":"to keep, to maintain"},{"p":"melhorar","e":"to improve, to better","pronunciation":"may-lyio-rahr"},{"p":"morar","e":"to live","pronunciation":"moh-rahr"},{"p":"mostrar","e":"to show"},{"p":"mudar","e":"to move"},{"p":"olhar","e":"to look (at)","pronunciation":"oh-lyiahr"},{"p":"ousar","e":"to dare"},{"p":"ouvir","e":"to hear"},{"p":"pagar","e":"to pay"},{"p":"partilhar","e":"to share"},{"p":"parecer","e":"to seem","pronunciation":"pah-ray-cehr"},{"p":"passar","e":"to pass"},{"p":"pedir","e":"to ask (for)","pronunciation":"peh-deer"},{"p":"pensar","e":"to think"},{"p":"perceber","e":"to understand","pronunciation":"payr-seh-behr"},{"p":"perder","e":"to lose"},{"p":"perguntar","e":"to ask (questions)","pronunciation":"pehr-goon-tahr"},{"p":"permitir","e":"to allow, to permit"},{"p":"poder","e":"can, to be able to","pronunciation":"poh-dehr"},{"p":"pôr","e":"to put","pronunciation":"pohr"},{"p":"praticar","e":"to practice"},{"p":"precisar","e":"to need","pronunciation":"pray-cee-zahr"},{"p":"preferir","e":"to prefer","pronunciation":"pray-fay-reehr"},{"p":"publicar","e":"to publish"},{"p":"querer","e":"to want"},{"p":"receber","e":"to receive"},{"p":"respeitar","e":"to respect"},{"p":"responder","e":"to answer","pronunciation":"raysh-pohn-dehr"},{"p":"saber","e":"to know (skills)","pronunciation":"sah-behr"},{"p":"sair","e":"to leave","pronunciation":"sah-eehr"},{"p":"seguir","e":"to follow"},{"p":"ser","e":"to be (permanent)","pronunciation":"sayhr"},{"p":"sentir","e":"to feel","pronunciation":"sayn-teehr"},{"p":"subir","e":"to go up, to climb","pronunciation":"soo-beehr"},{"p":"surfar","e":"to surf"},{"p":"surgir","e":"to arise, to emerge"},{"p":"tentar","e":"to try"},{"p":"ter (de)","e":"to have (to)","pronunciation":"tay-rh"},{"p":"trabalhar","e":"to work","pronunciation":"trah-bah-lyiahr"},{"p":"tratar","e":"to treat"},{"p":"trazer","e":"to being","pronunciation":"trah-zehr"},{"p":"trocar","e":"to change, to exchange","pronunciation":"tro-kahr"},{"p":"usar","e":"to use","pronunciation":"oo-sahr"},{"p":"ver","e":"to see","pronunciation":"vayrr"},{"p":"vestir","e":"to dress"},{"p":"viajar","e":"to travel, to commute","pronunciation":"vee-ah-jar"},{"p":"vir","e":"to come","pronunciation":"veerr"},{"p":"virar","e":"to turn"},{"p":"viver","e":"to live (in)"},{"p":"voltar","e":"to return","pronunciation":"vohl-tahr"},{"p":"voar","e":"to fly","pronunciation":"voo-ahr"}]')},f892:function(e){e.exports=JSON.parse('[{"p":"até","e":"up to, until","pronunciation":"ah-tay"},{"p":"com","e":"with","pronunciation":"con"},{"p":"como","e":"as, how to","pronunciation":"komo"},{"p":"e","e":"and","pronunciation":"ee"},{"p":"então","e":"so, then, therfore","pronunciation":"eing-taung"},{"p":"embora","e":"although"},{"p":"enquanto","e":"while","pronunciation":"eng-kwantoh"},{"p":"já que","e":"once, given that","pronunciation":"jah"},{"p":"ou","e":"or","pronunciation":"oh-oo"},{"p":"onde","e":"where"},{"p":"mas","e":"but, yet","pronunciation":"mash"},{"p":"nem","e":"nor","pronunciation":"naying"},{"p":"para","e":"in order to","pronunciation":"pah-rah"},{"p":"pois","e":"because"},{"p":"por isso","e":"therefore","pronunciation":"poor-ee-soh"},{"p":"porque","e":"because"},{"p":"porém","e":"although, however"},{"p":"que","e":"that","pronunciation":"kay"},{"p":"se","e":"if","pronunciation":"seh"},{"p":"senão","e":"otherwise","pronunciation":"seh-naung"},{"p":"sem","e":"without","pronunciation":"seng"},{"p":"sobre","e":"about","pronunciation":"soh-bray"}]')}});
//# sourceMappingURL=app.6a4eeedc.js.map