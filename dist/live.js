!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t){e.exports=mui},function(e,t){e.exports=Vue},function(e,t){e.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((e,t)=>{this.web3.eth.getAccounts((n,i)=>{i.length>0?e(i):t(n)})}))().then(e=>(this.account=e[0],new Promise((e,t)=>{this.web3.eth.getBalance(this.account,function(n,i){null!==n?t(n):e(i)})}))).then(e=>{this.balance=this.web3.fromWei(e).toFixed(2)}).catch(e=>{this.loaded=!0}):this.loaded=!0}}}},function(e,t){e.exports={Q3D:{addr:"0x57365a44F8358e24B4AFa11be59e7689657d6412",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x5fd76274D0B9A36c824E3b58A785F16dC9dee423",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0x4A71C7116B851b410e784d46c18261f2Ff00B2d1",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0xdEEAfb0AE272a082cF6853ECcd3B5A229A5a07a9",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},function(e,t){e.exports=function(e){this.config=e,this.scheme="trust://open?";var t=this.config.mui;this.run=function(){if(t.os.wechat)this.mask();else if(!0!==this.isWeb3()){var e=this;this.callBranch(function(n,i){null===n&&(e.scheme+="link_click_id="+i,t("#chipIn")[0].href=e.scheme,e.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(e){!1===e&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(e){var t=null,n=!1,i=0;t=window.setInterval(function(){i++,((n=document.hidden||document.webkitHidden)||i>40)&&(e(n),clearInterval(t))},50)},this.tryCallApp=function(){(t.os.android||t.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){t.createMask(function(){return!1}).show(),t(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(e){!function(e,t,n,i,a,o,s,r,u,c){if(!e[i]||!e[i]._q){for(;r<s.length;)a(o,s[r++]);(u=t.createElement(n)).async=1,u.src="https://cdn.branch.io/branch-latest.min.js",(c=t.getElementsByTagName(n)[0]).parentNode.insertBefore(u,c),e[i]=o}}(window,document,"script","branch",function(e,t){e[t]=function(){e._q.push([t,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(e,t)=>{document.createElement("img").src=t+"?src=img"}),branch.getBrowserFingerprintId(e)}}},,function(e,t){e.exports=function(e){var t=document.getElementById(e);if(null===t)return!1;var n=document.createElement("input");return n.readonly=!0,n.type="text",n.value=t.innerText,n.style.position="absolute",n.style.zIndex=-99,n.style.top="-30px",document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),!1===document.execCommand("copy",!1,null)?(document.body.removeChild(n),!1):(document.body.removeChild(n),!0)}},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(1),s=n.n(o);n(3),n(4),n(6);const r=n(2),u=n(17),c=new s.a({mixins:[r],data:{contaddr:"0xb583c24d322004f5f23966a12f3c6cc9155e5f3a",principal:0,chunked:0,profits:0,fromtime:0,logs:[],lQuery:{page:0,pages:1,limit:10}},watch:{account:function(){this.ins=this.web3.eth.contract(u).at(this.contaddr),this.loaded=!0,this.stats(),this.getLog()}},methods:{stats:function(){this.ins.stats(this.account,(e,t)=>{[this.chunked,this.profits,this.principal]=t.map(e=>this.web3.fromWei(e).toNumber())})},getLog:function(){this.lQuery.address=this.contaddr,this.lQuery["topics.1"]=this.account.replace("0x","0x"+"0".repeat(24)),a.a.post("https://explorer.hadeschain.org/events",this.lQuery,e=>{e.docs.forEach(e=>{this.logs.push(this.logFilter(e))}),this.lQuery.pages=e.pages},"json")},logFilter:function(e){let t={};return t.event=e.topics[0].substr(2,6),t.value=this.web3.fromWei(e.data.substr(0,66)),t.time=new Date(1e3*parseInt("0x"+e.data.substr(66,64))),t}}}).$mount("#app");new s.a({el:"#bottomNav",data:{app:c,mod:"n",depnum:"",withnum:""},methods:{deposit:function(){if(0==this.depnum)return a.a.toast("输入数量"),!1;if(this.depnum>this.app.balance)a.a.toast("余额不足");else{var e=this.app.web3.toWei(this.depnum);this.app.ins.deposit({value:e},(e,t)=>{null!==e||(a.a.alert("转账完成"),this.mod="n",this.app.principal+=1*this.depnum,this.depnum="")})}},withdraw:function(){if(0==this.withnum)return a.a.toast("输入数量"),!1;if(this.withnum>this.app.principal+this.app.profits)a.a.toast("数量过大");else{var e=this.app.web3.toWei(this.withnum);this.app.ins.withdraw(e,(e,t)=>{null!==e||(a.a.alert("取款成功"),this.mod="n",this.app.profits>this.withnum?this.app.profits-=1*this.withnum:(this.app.profits=0,this.app.principal-=1*this.withnum-this.profits),this.withnum="")})}}}});window.addEventListener("load",function(){c.freshAccount(),a.a.init(),a()("#bottomNav").on("tap","a",function(){window.location.href=this.href})})},function(e){e.exports=[{constant:!1,inputs:[],name:"deposit",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"onDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"onWithdraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!1,name:"chunk",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"onLiquid",type:"event"},{constant:!0,inputs:[{name:"customer",type:"address"}],name:"stats",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]}]);