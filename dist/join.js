!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t){e.exports=mui},function(e,t){e.exports=Vue},function(e,t){e.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((e,t)=>{this.web3.eth.getAccounts((n,i)=>{i.length>0?e(i):t(n)})}))().then(e=>(this.account=e[0],new Promise((e,t)=>{this.web3.eth.getBalance(this.account,function(n,i){null!==n?t(n):e(i)})}))).then(e=>{this.balance=this.web3.fromWei(e).toFixed(2)}).catch(e=>{this.loaded=!0}):this.loaded=!0}}}},function(e,t){e.exports={Q3D:{addr:"0x57365a44F8358e24B4AFa11be59e7689657d6412",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x5fd76274D0B9A36c824E3b58A785F16dC9dee423",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0x4A71C7116B851b410e784d46c18261f2Ff00B2d1",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0xdEEAfb0AE272a082cF6853ECcd3B5A229A5a07a9",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},function(e,t){e.exports=function(e){this.config=e,this.scheme="trust://open?";var t=this.config.mui;this.run=function(){if(t.os.wechat)this.mask();else if(!0!==this.isWeb3()){var e=this;this.callBranch(function(n,i){null===n&&(e.scheme+="link_click_id="+i,t("#chipIn")[0].href=e.scheme,e.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(e){!1===e&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(e){var t=null,n=!1,i=0;t=window.setInterval(function(){i++,((n=document.hidden||document.webkitHidden)||i>40)&&(e(n),clearInterval(t))},50)},this.tryCallApp=function(){(t.os.android||t.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){t.createMask(function(){return!1}).show(),t(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(e){!function(e,t,n,i,o,a,r,s,d,c){if(!e[i]||!e[i]._q){for(;s<r.length;)o(a,r[s++]);(d=t.createElement(n)).async=1,d.src="https://cdn.branch.io/branch-latest.min.js",(c=t.getElementsByTagName(n)[0]).parentNode.insertBefore(d,c),e[i]=a}}(window,document,"script","branch",function(e,t){e[t]=function(){e._q.push([t,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(e,t)=>{document.createElement("img").src=t+"?src=img"}),branch.getBrowserFingerprintId(e)}}},function(e){e.exports=[{constant:!0,inputs:[{name:"name",type:"address"}],name:"refer",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"num",type:"string"},{name:"mul",type:"uint256"}],name:"chipIn",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"code",type:"uint256"}],name:"reg",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getAddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"customerAddress",type:"address"},{indexed:!1,name:"seq",type:"uint256"},{indexed:!1,name:"num",type:"string"},{indexed:!1,name:"mul",type:"uint256"}],name:"onChip",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"seq",type:"uint256"},{indexed:!1,name:"num",type:"string"}],name:"onDraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"agentAddress",type:"address"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"onDividend",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customerAddress",type:"address"},{indexed:!1,name:"seq",type:"uint256"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"onBonus",type:"event"}]},function(e,t){e.exports=function(e){var t=document.getElementById(e);if(null===t)return!1;var n=document.createElement("input");return n.readonly=!0,n.type="text",n.value=t.innerText,n.style.position="absolute",n.style.zIndex=-99,n.style.top="-30px",document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),!1===document.execCommand("copy",!1,null)?(document.body.removeChild(n),!1):(document.body.removeChild(n),!0)}},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(1),r=n.n(a);const s=n(3),d=(n(4),n(6)),c=n(5),u=n(2),l=new r.a({mixins:[u],data:{code:void 0,refer:"",reged:!1},watch:{account:function(){this.ins=this.web3.eth.contract(c).at(s.Team),this.ins.getId(this.account,{from:this.account},(e,t)=>{this.code=t.toNumber(),this.loaded=!0,this.code&&localStorage.removeItem("reged")})}},methods:{copy:function(){d("refercode")?o.a.toast("复制成功",2e3):o.a.toast("请手动复制",2e3)},reg:function(){this.refer?new Promise((e,t)=>{this.ins.getAddr(this.refer,{from:this.account},(n,i)=>{"0x0000000000000000000000000000000000000000"==i?t("此邀请码不存在"):e("邀请码正确")})}).then(()=>new Promise((e,t)=>{this.ins.reg(this.refer,{from:this.account},(n,i)=>{n?t(n):e(i)})})).then(e=>{localStorage.setItem("reged",(new Date).getTime()),o.a.alert("登记成功，正在为您生成邀请码。2分钟后刷新此页面")}).catch(e=>{"string"==typeof e?o.a.alert(e):e.message.indexOf("User denied")>=0?o.a.toast("已取消"):o.a.alert("注册失败")}):o.a.alert("请填写邀请码")}}}).$mount("#app");window.addEventListener("load",function(){l.freshAccount(),o.a.init(),o()("#bottomNav").on("tap","a",function(){window.location.href=this.href}),l.reged=localStorage.getItem("reged"),"1"==l.reged&&(l.reged=(new Date).getTime(),localStorage.setItem("reged",l.reged)),parseInt(l.reged)<(new Date).getTime()-6e4&&localStorage.removeItem("reged")})}]);