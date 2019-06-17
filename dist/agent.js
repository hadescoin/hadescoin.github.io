!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}({0:function(e,t){e.exports=mui},1:function(e,t){e.exports=Vue},2:function(e,t){e.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((e,t)=>{this.web3.eth.getAccounts((n,i)=>{i.length>0?e(i):t(n)})}))().then(e=>(this.account=e[0],new Promise((e,t)=>{this.web3.eth.getBalance(this.account,function(n,i){null!==n?t(n):e(i)})}))).then(e=>{this.balance=this.web3.fromWei(e).toFixed(2)}).catch(e=>{this.loaded=!0}):this.loaded=!0}}}},22:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(1),r=n.n(o);const s=n(3),d=(n(4),n(5),n(2)),c={};for(let e in s)s[e].addr&&(c[s[e].addr.toLowerCase()]=e);const u=new r.a({mixins:[d],data:{profits:[],code:1,loaded:!1,lQuery:{"topics.0":"0xa8e4cc8111678bf352c23d14b9bf013d0c954062aad3aaac2a6995cde5637551",page:0,pages:1,limit:10}},watch:{account:function(){this.lQuery["topics.1"]=this.account.replace("0x","0x"+"0".repeat(24)),a.a.post("https://explorer.hadeschain.org/events",this.lQuery,e=>{e.docs.forEach(e=>{this.profits.push(this.divFilter(e))}),this.lQuery.pages=e.pages,this.loaded=!0},"json")}},methods:{divFilter:function(e){let t={};return t.profit=this.web3.fromWei(e.data.substr(0,66)),t.timestamp=this.web3.toDecimal("0x"+e.data.substr(66,64)),t.product=c[e.address],t}}}).$mount("#app");window.addEventListener("load",function(){a.a.init(),a()("#bottomNav").on("tap","a",function(){window.location.href=this.href}),u.freshAccount()})},3:function(e,t){e.exports={Q3D:{addr:"0x57365a44F8358e24B4AFa11be59e7689657d6412",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x5fd76274D0B9A36c824E3b58A785F16dC9dee423",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0x4A71C7116B851b410e784d46c18261f2Ff00B2d1",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0xdEEAfb0AE272a082cF6853ECcd3B5A229A5a07a9",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},4:function(e,t){e.exports=function(e){this.config=e,this.scheme="trust://open?";var t=this.config.mui;this.run=function(){if(t.os.wechat)this.mask();else if(!0!==this.isWeb3()){var e=this;this.callBranch(function(n,i){null===n&&(e.scheme+="link_click_id="+i,t("#chipIn")[0].href=e.scheme,e.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(e){!1===e&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(e){var t=null,n=!1,i=0;t=window.setInterval(function(){i++,((n=document.hidden||document.webkitHidden)||i>40)&&(e(n),clearInterval(t))},50)},this.tryCallApp=function(){(t.os.android||t.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){t.createMask(function(){return!1}).show(),t(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(e){!function(e,t,n,i,a,o,r,s,d,c){if(!e[i]||!e[i]._q){for(;s<r.length;)a(o,r[s++]);(d=t.createElement(n)).async=1,d.src="https://cdn.branch.io/branch-latest.min.js",(c=t.getElementsByTagName(n)[0]).parentNode.insertBefore(d,c),e[i]=o}}(window,document,"script","branch",function(e,t){e[t]=function(){e._q.push([t,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(e,t)=>{document.createElement("img").src=t+"?src=img"}),branch.getBrowserFingerprintId(e)}}},5:function(e){e.exports=[{constant:!0,inputs:[{name:"name",type:"address"}],name:"refer",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"num",type:"string"},{name:"mul",type:"uint256"}],name:"chipIn",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"code",type:"uint256"}],name:"reg",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getAddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"customerAddress",type:"address"},{indexed:!1,name:"seq",type:"uint256"},{indexed:!1,name:"num",type:"string"},{indexed:!1,name:"mul",type:"uint256"}],name:"onChip",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"seq",type:"uint256"},{indexed:!1,name:"num",type:"string"}],name:"onDraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"agentAddress",type:"address"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"onDividend",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customerAddress",type:"address"},{indexed:!1,name:"seq",type:"uint256"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"onBonus",type:"event"}]}});