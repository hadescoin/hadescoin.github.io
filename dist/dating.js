!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=26)}({0:function(e,n){e.exports=mui},1:function(e,n){e.exports=Vue},2:function(e,n){e.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((e,n)=>{this.web3.eth.getAccounts((t,r)=>{r.length>0?e(r):n(t)})}))().then(e=>(this.account=e[0],new Promise((e,n)=>{this.web3.eth.getBalance(this.account,function(t,r){null!==t?n(t):e(r)})}))).then(e=>{this.balance=this.web3.fromWei(e).toFixed(2,1)}).catch(e=>{this.loaded=!0}):this.loaded=!0}}}},26:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),o=t(1),a=t.n(o);const c=t(3),s=(t(4),t(2)),d=t(7),u=new a.a({mixins:[s],data:{draws:[],odd:"Q3D",dQuery:{"topics.0":"0xeb447c70aa20ab5dcf8a114e3e951d1f55f963d9770628c2925689d08fbdbeac",page:0,pages:1,limit:20}},mounted:function(){this.showDraws(),this.loaded=!0},methods:{showDraws:function(){this.dQuery.page>=this.dQuery.pages||(this.dQuery.address=c[this.odd].addr.toLowerCase(),i.a.post("https://explorer.hadeschain.org/events",this.dQuery,e=>{e.docs.forEach(e=>{this.draws.push(this.drawFilter(e))})},"json"))},drawFilter:function(e){var n={};return n.num=e.data.substr(-64,2*("0x"+e.data.substr(-80,16))),n.num=d.toAscii(n.num).split(""),n.seq=parseInt(e.topics[1],16),n}}}).$mount("#app");i()(".mui-scroll").on("tap","a",function(){u.odd=this.dataset.odd,u.draws.length=0,u.showDraws()}),window.addEventListener("load",function(){i.a.init(),i()("#bottomNav").on("tap","a",function(){window.location.href=this.href}),window.onerror=function(e){document.getElementById("debug").innerHTML+=e}})},3:function(e,n){e.exports={Q3D:{addr:"0x57365a44F8358e24B4AFa11be59e7689657d6412",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x5fd76274D0B9A36c824E3b58A785F16dC9dee423",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0x4A71C7116B851b410e784d46c18261f2Ff00B2d1",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0xdEEAfb0AE272a082cF6853ECcd3B5A229A5a07a9",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},4:function(e,n){e.exports=function(e){this.config=e,this.scheme="trust://open?";var n=this.config.mui;this.run=function(){if(n.os.wechat)this.mask();else if(!0!==this.isWeb3()){var e=this;this.callBranch(function(t,r){null===t&&(e.scheme+="link_click_id="+r,n("#chipIn")[0].href=e.scheme,e.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(e){!1===e&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(e){var n=null,t=!1,r=0;n=window.setInterval(function(){r++,((t=document.hidden||document.webkitHidden)||r>40)&&(e(t),clearInterval(n))},50)},this.tryCallApp=function(){(n.os.android||n.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){n.createMask(function(){return!1}).show(),n(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(e){!function(e,n,t,r,i,o,a,c,s,d){if(!e[r]||!e[r]._q){for(;c<a.length;)i(o,a[c++]);(s=n.createElement(t)).async=1,s.src="https://cdn.branch.io/branch-latest.min.js",(d=n.getElementsByTagName(t)[0]).parentNode.insertBefore(s,d),e[r]=o}}(window,document,"script","branch",function(e,n){e[n]=function(){e._q.push([n,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(e,n)=>{document.createElement("img").src=n+"?src=img"}),branch.getBrowserFingerprintId(e)}}},7:function(e,n){e.exports={c:function(e,n){if(e>n)return 0;if(e==n)return 1;for(var t=1,r=n;r-e>0;)t=t*r/(n-r+1),r--;return t},toAscii:function(e){let n="",t=0;const r=e.length;for("0x"===e.substring(0,2)&&(t=2);t<r;t+=2){const r=parseInt(e.substr(t,2),16);n+=String.fromCharCode(r)}return n}}}});