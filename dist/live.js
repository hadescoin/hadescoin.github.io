!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e){t.exports=mui},function(t,e){t.exports=Vue},function(t,e){t.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((t,e)=>{this.web3.eth.getAccounts((n,i)=>{i.length>0?t(i):e(n)})}))().then(t=>(this.account=t[0],new Promise((t,e)=>{this.web3.eth.getBalance(this.account,function(n,i){null!==n?e(n):t(i)})}))).then(t=>{this.balance=this.web3.fromWei(t).toFixed(3,1)}).catch(t=>{this.loaded=!0}):this.loaded=!0}}}},function(t,e){t.exports={Q3D:{addr:"0x2Aa57E9A76d53A814bd6b055C21B8E64E230e979",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x8bE4d9A46041017F1319bE12769cB5AaC3a6a774",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0xdeebcBbad22F82C658ec960CC92F70da4e65448f",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0x439943b6301B955De505A51f4Be9D46e010Cd434",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},function(t,e){t.exports=function(t){this.config=t,this.scheme="trust://open?";var e=this.config.mui;this.run=function(){if(e.os.wechat)this.mask();else if(!0!==this.isWeb3()){var t=this;this.callBranch(function(n,i){null===n&&(t.scheme+="link_click_id="+i,e("#chipIn")[0].href=t.scheme,t.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(t){!1===t&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(t){var e=null,n=!1,i=0;e=window.setInterval(function(){i++,((n=document.hidden||document.webkitHidden)||i>40)&&(t(n),clearInterval(e))},50)},this.tryCallApp=function(){(e.os.android||e.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){e.createMask(function(){return!1}).show(),e(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(t){!function(t,e,n,i,a,o,s,r,u,c){if(!t[i]||!t[i]._q){for(;r<s.length;)a(o,s[r++]);(u=e.createElement(n)).async=1,u.src="https://cdn.branch.io/branch-latest.min.js",(c=e.getElementsByTagName(n)[0]).parentNode.insertBefore(u,c),t[i]=o}}(window,document,"script","branch",function(t,e){t[e]=function(){t._q.push([e,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(t,e)=>{document.createElement("img").src=e+"?src=img"}),branch.getBrowserFingerprintId(t)}}},,function(t,e){t.exports=function(t){var e=document.getElementById(t);if(null===e)return!1;var n=document.createElement("input");return n.readonly=!0,n.type="text",n.value=e.innerText,n.style.position="absolute",n.style.zIndex=-99,n.style.top="-30px",document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),!1===document.execCommand("copy",!1,null)?(document.body.removeChild(n),!1):(document.body.removeChild(n),!0)}},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(1),s=n.n(o);n(3),n(4),n(6);const r=n(2),u=n(17),c=new s.a({mixins:[r],data:{contaddr:"0xb583c24d322004f5f23966a12f3c6cc9155e5f3a",principal:"0.00",chunked:"0.00",profits:"0.00",sum:"0.00",fromtime:0,logs:[],lQuery:{page:0,pages:1,limit:10}},watch:{account:function(){this.ins=this.web3.eth.contract(u).at(this.contaddr),this.loaded=!0,this.stats(),this.getLog()}},methods:{stats:function(){this.ins.stats(this.account,(t,e)=>{[this.chunked,this.profits,this.principal]=e.map(t=>this.web3.fromWei(t).toFixed(2,1)),this.sum=this.web3.fromWei(e[1].add(e[2])).toFixed(2,1)})},getLog:function(){this.lQuery.address=this.contaddr,this.lQuery["topics.1"]=this.account.replace("0x","0x"+"0".repeat(24)),a.a.post("https://explorer.hadeschain.org/events",this.lQuery,t=>{t.docs.forEach(t=>{this.logs.push(this.logFilter(t))}),this.lQuery.pages=t.pages},"json")},logFilter:function(t){let e={};return e.event=t.topics[0].substr(2,6),e.value=this.web3.toBigNumber(t.data.substr(0,66)).div(1e18).toFixed(2,1),e.time=new Date(1e3*parseInt("0x"+t.data.substr(66,64))),e}}}).$mount("#app");new s.a({el:"#bottomNav",data:{app:c,mod:"n",depnum:"",withnum:""},methods:{w:function(){this.mod="w",1*this.app.profits>0&&(this.withnum=this.app.profits)},deposit:function(){if(0==this.depnum)return a.a.toast("输入数量"),!1;if(1*this.depnum>1*this.app.balance)a.a.toast("余额不足");else{var t=this.app.web3.toWei(this.depnum);this.app.ins.deposit({value:t},(t,e)=>{null!==t||(a.a.alert("转账完成"),this.mod="n",this.app.principal=1*this.app.principal+1*this.depnum,this.depnum="")})}},withdraw:function(){if(0==this.withnum)return a.a.toast("输入数量"),!1;if(this.app.profits>0&&1*this.withnum>1*this.app.profits)return a.a.toast("请先提收益"),void(this.withnum=this.app.profits);if(0==this.app.profits&&1*this.withnum>1*this.app.principal)a.a.toast("金额过大");else{var t=this.app.web3.toWei(this.withnum);this.app.ins.withdraw(t,(t,e)=>{null!==t||(a.a.alert("取款成功"),this.mod="n",this.app.profits>0?this.app.profits=1*this.app.profits-1*this.withnum:this.app.principal=1*this.app.profits-1*this.withnum,this.withnum="")})}}}});window.addEventListener("load",function(){c.freshAccount(),a.a.init()})},function(t){t.exports=[{constant:!1,inputs:[],name:"deposit",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"onDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"onWithdraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customer",type:"address"},{indexed:!1,name:"chunk",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"onLiquid",type:"event"},{constant:!0,inputs:[{name:"customer",type:"address"}],name:"stats",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]}]);