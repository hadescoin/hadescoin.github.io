!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t){e.exports=mui},function(e,t){e.exports=Vue},function(e,t){e.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((e,t)=>{this.web3.eth.getAccounts((n,o)=>{o.length>0?e(o):t(n)})}))().then(e=>(this.account=e[0],new Promise((e,t)=>{this.web3.eth.getBalance(this.account,function(n,o){null!==n?t(n):e(o)})}))).then(e=>{this.balance=this.web3.fromWei(e).toFixed(2)}).catch(e=>{this.loaded=!0}):this.loaded=!0}}}},function(e,t){e.exports={Q3D:{addr:"0x57365a44F8358e24B4AFa11be59e7689657d6412",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x5fd76274D0B9A36c824E3b58A785F16dC9dee423",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0x4A71C7116B851b410e784d46c18261f2Ff00B2d1",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0xdEEAfb0AE272a082cF6853ECcd3B5A229A5a07a9",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},function(e,t){e.exports=function(e){this.config=e,this.scheme="trust://open?";var t=this.config.mui;this.run=function(){if(t.os.wechat)this.mask();else if(!0!==this.isWeb3()){var e=this;this.callBranch(function(n,o){null===n&&(e.scheme+="link_click_id="+o,t("#chipIn")[0].href=e.scheme,e.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(e){!1===e&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(e){var t=null,n=!1,o=0;t=window.setInterval(function(){o++,((n=document.hidden||document.webkitHidden)||o>40)&&(e(n),clearInterval(t))},50)},this.tryCallApp=function(){(t.os.android||t.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){t.createMask(function(){return!1}).show(),t(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(e){!function(e,t,n,o,i,r,a,c,s,d){if(!e[o]||!e[o]._q){for(;c<a.length;)i(r,a[c++]);(s=t.createElement(n)).async=1,s.src="https://cdn.branch.io/branch-latest.min.js",(d=t.getElementsByTagName(n)[0]).parentNode.insertBefore(s,d),e[o]=r}}(window,document,"script","branch",function(e,t){e[t]=function(){e._q.push([t,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(e,t)=>{document.createElement("img").src=t+"?src=img"}),branch.getBrowserFingerprintId(e)}}},,,,,,,function(e,t){e.exports=function(e){var t=document.getElementById(e);if(null===t)return!1;var n=document.createElement("input");return n.readonly=!0,n.type="text",n.value=t.innerText,n.style.position="absolute",n.style.zIndex=-99,n.style.top="-30px",document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),!1===document.execCommand("copy",!1,null)?(document.body.removeChild(n),!1):(document.body.removeChild(n),!0)}},,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(1),a=n.n(r);n(3),n(4),n(11);const c=[{constant:!1,inputs:[{name:"orderId",type:"uint256"}],name:"pay",outputs:[],payable:!0,stateMutability:"payable",type:"function"}],s=n(2),d=new a.a({mixins:[s],data:{phone:"",contaddr:"0x674d690d07769576264a07eeb3c7d0e62176cc64",phoneapi:"https://risebox.applinzi.com/index.php"},watch:{account:function(){this.ins=this.web3.eth.contract(c).at(this.contaddr),this.loaded=!0}},methods:{inphone:function(){if(0!=/[\d ]/.test(this.phone.substr(-1,1))){for(var e=this.phone.replace(/\s*/g,""),t=[],n=0;n<e.length;n++)3==n||7==n?t.push(" "+e.charAt(n)):t.push(e.charAt(n));this.phone=t.join("")}else this.phone=this.phone.substr(0,this.phone.length-1)},buy:function(e){var t=this,n=this.phoneapi,o=this.phone.replace(/\s/g,"");new Promise((r,a)=>{i.a.ajax(n,{data:{act:"create",phone:o,face:e,addr:t.account},dataType:"json",type:"get",timeout:5e3,success:function(e){0==e.error?r(e):a(e)},error:function(e,t,n){console.log(n),a({error:999,code:"未知错误"})}})}).then(e=>new Promise((o,r)=>{var a=t.web3.toWei(e.cost);t.ins.pay(e.orderid,{value:a},(t,a)=>{null===t?i.a.getJSON(n,{act:"pay",orderid:e.orderid},e=>{0==e.error?(o(e),i.a.alert("支付成功")):r(e)}):r({error:101,code:"支付失败"})})})).catch(e=>{i.a.alert(e.code)})}}}).$mount("#app");window.addEventListener("load",function(){d.freshAccount(),i.a.init(),i()("#bottomNav").on("tap","a",function(){window.location.href=this.href})})}]);