!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e){t.exports=mui},function(t,e){t.exports=Vue},function(t,e){t.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((t,e)=>{this.web3.eth.getAccounts((n,i)=>{i.length>0?t(i):e(n)})}))().then(t=>(this.account=t[0],new Promise((t,e)=>{this.web3.eth.getBalance(this.account,function(n,i){null!==n?e(n):t(i)})}))).then(t=>{this.balance=this.web3.fromWei(t).toFixed(3,1)}).catch(t=>{this.loaded=!0}):this.loaded=!0}}}},function(t,e){t.exports={Q3D:{addr:"0x2Aa57E9A76d53A814bd6b055C21B8E64E230e979",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x8bE4d9A46041017F1319bE12769cB5AaC3a6a774",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0xdeebcBbad22F82C658ec960CC92F70da4e65448f",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0x439943b6301B955De505A51f4Be9D46e010Cd434",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},function(t,e){t.exports=function(t){this.config=t,this.scheme="trust://open?";var e=this.config.mui;this.run=function(){if(e.os.wechat)this.mask();else if(!0!==this.isWeb3()){var t=this;this.callBranch(function(n,i){null===n&&(t.scheme+="link_click_id="+i,e("#chipIn")[0].href=t.scheme,t.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(t){!1===t&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(t){var e=null,n=!1,i=0;e=window.setInterval(function(){i++,((n=document.hidden||document.webkitHidden)||i>40)&&(t(n),clearInterval(e))},50)},this.tryCallApp=function(){(e.os.android||e.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){e.createMask(function(){return!1}).show(),e(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(t){!function(t,e,n,i,s,a,o,r,c,d){if(!t[i]||!t[i]._q){for(;r<o.length;)s(a,o[r++]);(c=e.createElement(n)).async=1,c.src="https://cdn.branch.io/branch-latest.min.js",(d=e.getElementsByTagName(n)[0]).parentNode.insertBefore(c,d),t[i]=a}}(window,document,"script","branch",function(t,e){t[e]=function(){t._q.push([e,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(t,e)=>{document.createElement("img").src=e+"?src=img"}),branch.getBrowserFingerprintId(t)}}},function(t){t.exports=[{constant:!0,inputs:[{name:"name",type:"address"}],name:"refer",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"num",type:"string"},{name:"mul",type:"uint256"}],name:"chipIn",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"code",type:"uint256"}],name:"reg",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getAddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"customerAddress",type:"address"},{indexed:!1,name:"seq",type:"uint256"},{indexed:!1,name:"num",type:"string"},{indexed:!1,name:"mul",type:"uint256"}],name:"onChip",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"seq",type:"uint256"},{indexed:!1,name:"num",type:"string"}],name:"onDraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"agentAddress",type:"address"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"onDividend",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customerAddress",type:"address"},{indexed:!1,name:"seq",type:"uint256"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"onBonus",type:"event"}]},,function(t,e){t.exports={c:function(t,e){if(t>e)return 0;if(t==e)return 1;for(var n=1,i=e;i-t>0;)n=n*i/(e-i+1),i--;return n},toAscii:function(t){let e="",n=0;const i=t.length;for("0x"===t.substring(0,2)&&(n=2);n<i;n+=2){const i=parseInt(t.substr(n,2),16);e+=String.fromCharCode(i)}return e}}},function(t,e){t.exports=function(){this.items={};var t=localStorage.getItem("cart");try{this.items=JSON.parse(t)||{}}catch(t){this.items={}}this.save=function(){return localStorage.setItem("cart",JSON.stringify(this.items))},this.read=function(t){return void 0===t?this.items:(void 0===this.items[t]&&(this.items[t]={},this.items[t].length=0),this.items[t])},this.add=function(t,e){void 0===this.items[t]&&(this.items[t]={},this.items[t].length=0),void 0===this.items[t][e]&&(this.items[t][e]=!0,this.items[t].length+=1),this.save()},this.remove=function(t,e){void 0!==this.items[t]&&void 0!==this.items[t][e]&&(delete this.items[t][e],this.items[t].length-=1,this.save())},this.clear=function(t){for(var e in this.items[t])"length"!==e&&delete this.items[t][e];this.items[t].length=0,this.save()},this.read()}},function(t,e){t.exports=function(t){var e="00:00:00";return t>0&&(e=("00"+parseInt(t/3600)).slice(-2)+":"+("00"+parseInt(t%3600/60)).slice(-2)+":"+("00"+t%60).slice(-2)),e}},function(t,e,n){const i=n(7);t.exports={data:function(){return{ins:null,phrase:0,history:!1,time:"00 : 00",draws:[]}},methods:{onHistory:function(){this.history=!this.history},ListenDraw:function(t){this.ins.onDraw({},t,"pending").watch((t,e)=>{e.args.seq=e.args.seq.toNumber(),e.args.num=e.args.num.split(""),this.draws.unshift(e.args),this.draws.length>5&&this.draws.pop()})},showDraws:function(t,e){let n={address:t,"topics.0":"0xeb447c70aa20ab5dcf8a114e3e951d1f55f963d9770628c2925689d08fbdbeac",page:0,pages:1,limit:5};e.post("https://explorer.hadeschain.org/events",n,t=>{t.docs.forEach(t=>{var e={};e.num=t.data.substr(-64,2*("0x"+t.data.substr(-80,16))),e.num=i.toAscii(e.num).split(""),e.seq=parseInt(t.topics[1],16),this.draws.push(e)})},"json")}}}},function(t,e){t.exports={data:function(){return{pick:!1,cost:0,min:0,max:0,mul:2}},methods:{chipIn:function(){if(1*this.mul!=0){if(!(this.ctx("mui")(".ball.seled").length>0&&!1===this.addCart()))if(0!==this.items.length)if(void 0!==this.ins){var t="";for(var e in this.items)!0===this.items[e]&&(t+=e);if(!this.isValid(t))return this.ctx("mui").toast("出错");this.ins.chipIn(t,this.web3.toWei(this.mul),{from:this.account,gasPrice:2e9,value:this.value(t)},(t,e)=>{null===t&&(this.ctx("cart").clear(this.ctx("product")),this.ctx("mui").toast("投注成功"),this.app.showSel())})}else this.ctx("trust").handleOpen();else this.ctx("mui").toast("彩车为空")}else this.ctx("mui").toast("请输入单注金额")}},watch:{mul:function(t){/^\d+\.?\d{0,2}$/.test(t)||(this.mul=t.substring(0,t.length-1))}}}},,,,function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),a=n(1),o=n.n(a);const r=n(3),c=n(7),d=n(8),u=n(9),h=n(4),l=new d,p=n(5);var m;const f=n(2),b=n(10),w=n(11),g=new o.a({mixins:[b],el:"#app",data:{odd:"05",items:l.read("Eleven"),scan:r.Scan+"/address/"+r.Eleven.addr},methods:{remove:function(t){l.remove("Eleven",t),0==this.items.length&&this.showSel()},showSel:function(){this.odd=s()("#app .mui-scroll a.mui-active")[0].dataset.odd}},mounted:function(){this.showDraws(r.Eleven.addr.toLowerCase(),s.a),s.a.init(),s()("#popover").on("tap","a",function(){window.location.href=this.href})},beforeMount:function(){s()("#loading")[0].style.display="none"}}),v=new o.a({mixins:[f,w],el:"#bottomNav",data:{app:g,items:g.items,odds:{"05":868,"06":144,"07":41,"08":15,"09":6}},watch:{web3:function(){void 0!==this.web3&&(this.app.ins=this.ins=this.web3.eth.contract(p).at(r.Eleven.addr),this.web3.eth.getBlockNumber((t,e)=>{null===t&&this.app.ListenDraw({fromBlock:e})}))}},methods:{addCart:function(){var t=s()(".ball.seled"),e=parseInt(this.app.odd)<<12;return t.length<parseInt(this.app.odd)?(this.showCart(),!0):(t.each(function(){e+=parseInt(this.dataset.num),this.classList.remove("seled")}),l.add("Eleven",e.toString(16).toUpperCase()),v.calc(),this.showCart(),!0)},showCart:function(){0!=this.items.length?this.app.odd="cart":s.a.toast("彩车为空")},calc:function(){var t=s()(".ball.seled"),e=0,n=0,i=0,a=parseInt(this.app.odd);if(this.pick=t.length>=a,t.length<a)return v.cost=e,v.min=n,void(v.max=i);e=2*this.c(a,t.length),n=i=this.c(t.length-a,t.length-5)*this.odds[this.app.odd],v.cost=e,v.min=n,v.max=i},isValid:function(t){return!(0==t.length||t.length%4>0)},value:function(t){return t.length/4*this.web3.toWei(this.mul)},ctx:function(t){return{mui:s.a,cart:l,trust:m,product:"Eleven"}[t]},c:c.c}});s()(".mui-scroll").on("tap","a",function(){g.odd=this.dataset.odd,s()(".ball.seled").each(function(){this.classList.remove("seled")}),v.calc()}),s()("#app").on("tap",".ball",function(){this.classList.toggle("seled");var t=s()(".ball.seled"),e=parseInt(g.odd);if(t.length>e)return this.classList.toggle("seled"),void s.a.toast("任选"+e+"最多选"+e+"个");v.calc()}),window.setInterval(function(){var t=u(parseInt(600-(new Date).getTime()/1e3%600));g.time=t.substr(3)},1e3),window.addEventListener("load",function(){v.freshAccount(),(m=new h({mui:s.a,branch_key:r.branch_key})).run()})}]);