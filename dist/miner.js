!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e){t.exports=mui},function(t,e){t.exports=Vue},function(t,e){t.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((t,e)=>{this.web3.eth.getAccounts((n,i)=>{i.length>0?t(i):e(n)})}))().then(t=>(this.account=t[0],new Promise((t,e)=>{this.web3.eth.getBalance(this.account,function(n,i){null!==n?e(n):t(i)})}))).then(t=>{this.balance=this.web3.fromWei(t).toFixed(3,1)}).catch(t=>{this.loaded=!0}):this.loaded=!0}}}},function(t,e){t.exports={Q3D:{addr:"0x57365a44F8358e24B4AFa11be59e7689657d6412",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x5fd76274D0B9A36c824E3b58A785F16dC9dee423",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0x4A71C7116B851b410e784d46c18261f2Ff00B2d1",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0xdEEAfb0AE272a082cF6853ECcd3B5A229A5a07a9",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},function(t,e){t.exports=function(t){this.config=t,this.scheme="trust://open?";var e=this.config.mui;this.run=function(){if(e.os.wechat)this.mask();else if(!0!==this.isWeb3()){var t=this;this.callBranch(function(n,i){null===n&&(t.scheme+="link_click_id="+i,e("#chipIn")[0].href=t.scheme,t.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(t){!1===t&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(t){var e=null,n=!1,i=0;e=window.setInterval(function(){i++,((n=document.hidden||document.webkitHidden)||i>40)&&(t(n),clearInterval(e))},50)},this.tryCallApp=function(){(e.os.android||e.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){e.createMask(function(){return!1}).show(),e(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(t){!function(t,e,n,i,a,s,o,r,c,u){if(!t[i]||!t[i]._q){for(;r<o.length;)a(s,o[r++]);(c=e.createElement(n)).async=1,c.src="https://cdn.branch.io/branch-latest.min.js",(u=e.getElementsByTagName(n)[0]).parentNode.insertBefore(c,u),t[i]=s}}(window,document,"script","branch",function(t,e){t[e]=function(){t._q.push([e,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(t,e)=>{document.createElement("img").src=e+"?src=img"}),branch.getBrowserFingerprintId(t)}}},,function(t,e){t.exports=function(t){var e=document.getElementById(t);if(null===e)return!1;var n=document.createElement("input");return n.readonly=!0,n.type="text",n.value=e.innerText,n.style.position="absolute",n.style.zIndex=-99,n.style.top="-30px",document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),!1===document.execCommand("copy",!1,null)?(document.body.removeChild(n),!1):(document.body.removeChild(n),!0)}},,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(1),o=n.n(s);n(3),n(4),n(6);const r=n(2),c=n(20),u=new o.a({mixins:[r],data:{mineraddr:"0x96ed8225fac69b3bd9387676ceef3a2fb81dca90",teamaddr:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",principal:0,chunked:0,profits:0,fromtime:0,status:-1,power:0,score:0,pool:0,unreg:!1,logs:[],lQuery:{page:0,pages:1,limit:10}},watch:{account:function(){this.ins=this.web3.eth.contract(c).at(this.mineraddr);var t=this.web3.eth.contract(c).at(this.teamaddr);new Promise((e,n)=>{t.getId(this.account,(t,i)=>{null===t&&i>0?e(i):n("unreg")})}).then(()=>this.stats(1)).then(t=>([this.principal,this.fromtime,this.score]=t.map((t,e)=>e%2==1?t.toNumber():this.web3.fromWei(t).toNumber()),this.calcStatus(),1!=this.status||this.stats(2))).then(t=>(!0!==t&&([this.power,this.chunked,this.profits]=t.map((t,e)=>this.web3.fromWei(t).toNumber())),this.loaded=!0,Promise.resolve(!0))).catch(t=>{"unreg"==t&&(this.unreg=!0,this.status=5),this.loaded=!0}),this.getLog()}},methods:{stats:function(t){return new Promise((e,n)=>{this.ins.stats(this.account,t,(t,i)=>{null===t?e(i):n("stats")})})},calcStatus:function(){0==this.fromtime?this.status=0:this.principal>0?this.status=1:0==this.principal&&this.score>0?this.status=2:0==this.principal&&0==this.score&&(this.status=3),1==this.status&&(this.principal>=27e3?this.pool=5*this.principal:this.principal>=9e3?(this.pool=4*this.principal,this.score*=.8):(this.pool=3*this.principal,this.score*=.6))},getLog:function(){this.lQuery.address=this.mineraddr.toLowerCase(),this.lQuery["topics.1"]=this.account.replace("0x","0x"+"0".repeat(24)),a.a.post("https://explorer.hadeschain.org/events",this.lQuery,t=>{t.docs.forEach(t=>{this.logs.push(this.logFilter(t))}),this.lQuery.pages=t.pages},"json")},logFilter:function(t){let e={};return e.event=t.topics[0].substr(2,6),e.value=this.web3.fromWei(t.data.substr(0,66)),e.time=new Date(1e3*parseInt("0x"+t.data.substr(66,64))),e}}}).$mount("#app");new o.a({el:"#bottomNav",data:{app:u,mod:"n",mer:0,cln:0},methods:{buy:function(){if(this.mer>this.app.balance)a.a.toast("余额不足");else{var t=this.app.web3.toWei(this.mer);this.app.ins.buy({value:t},(t,e)=>{null!==t||(a.a.alert("购买成功"),this.mod="n",this.app.principal+=1*this.mer,this.app.power+=1*this.mer,this.app.fromtime=parseInt((new Date).getTime()/1e3),this.app.calcStatus(),this.mer=0)})}},withdraw:function(){if(this.app.profits<=0)return a.a.toast("暂无收益"),!1;this.app.ins.withdraw((t,e)=>{null===t&&(a.a.alert("领取成功"),this.mod="n",this.app.chunked+=this.app.profits,this.app.profits=0)})},closed:function(){if(1!=this.app.status)return a.a.toast("非法操作"),!1;0==this.cln&&setTimeout(()=>{this.cln=0},1e3),this.cln+=1,this.cln<4||a.a.confirm("中止挖矿,清退算力?","毁约",["是","否"],t=>{0===t.index&&this.app.ins.close((t,e)=>{null===t&&(a.a.alert("已中止挖矿"),this.app.chunked+=this.app.profits,this.app.profits=0,this.app.status=2)})})},backd:function(){if(2!=this.app.status)return a.a.toast("非法操作"),!1;var t=this.app.fromtime+2592e3,e=parseInt((new Date).getTime()/1e3);if(e<t){var n=new Date(1e3*t).toLocaleString().slice(5,-3);return a.a.toast("下次赎回时间:<br>"+n),!1}this.app.ins.back((t,n)=>{null===t&&(a.a.alert("赎回成功"),this.app.fromtime=e)})}}});window.addEventListener("load",function(){u.freshAccount(),a.a.init()})},function(t){t.exports=[{constant:!1,inputs:[],name:"back",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"buy",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"close",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"customer",type:"address"},{name:"seq",type:"uint256"}],name:"stats",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]}]);