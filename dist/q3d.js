!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e){t.exports=mui},function(t,e){t.exports=Vue},function(t,e){t.exports={data:function(){return{web3:null,account:void 0,ins:null,loaded:!1,balance:0}},methods:{freshAccount:function(){this.web3=window.web3,void 0!==window.web3?(()=>window.web3.currentProvider.isMetaMask&&window.ethereum?window.ethereum.enable():new Promise((t,e)=>{this.web3.eth.getAccounts((n,s)=>{s.length>0?t(s):e(n)})}))().then(t=>(this.account=t[0],new Promise((t,e)=>{this.web3.eth.getBalance(this.account,function(n,s){null!==n?e(n):t(s)})}))).then(t=>{this.balance=this.web3.fromWei(t).toFixed(3,1)}).catch(t=>{this.loaded=!0}):this.loaded=!0}}}},function(t,e){t.exports={Q3D:{addr:"0x2Aa57E9A76d53A814bd6b055C21B8E64E230e979",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},F3D:{addr:"0x8bE4d9A46041017F1319bE12769cB5AaC3a6a774",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Luck28:{addr:"0xdeebcBbad22F82C658ec960CC92F70da4e65448f",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Eleven:{addr:"0x439943b6301B955De505A51f4Be9D46e010Cd434",owner:"0xFaFeFF0D45C8816f6E1bf6548441122959Cb7Cfe"},Team:"0x6d943855aC3AC3205A5b2A95F7A41d3211de066f",branch_key:"key_live_npGkkdWQLGY8kuUtpDJhdmihDrkULAMa",Scan:"https://explorer.hadeschain.org"}},function(t,e){t.exports=function(t){this.config=t,this.scheme="trust://open?";var e=this.config.mui;this.run=function(){if(e.os.wechat)this.mask();else if(!0!==this.isWeb3()){var t=this;this.callBranch(function(n,s){null===n&&(t.scheme+="link_click_id="+s,e("#chipIn")[0].href=t.scheme,t.tryCallApp())})}},this.handleOpen=function(){this.checkOpen(function(t){!1===t&&(window.location.href="./download.html")})},this.isWeb3=function(){return void 0!==window.web3},this.checkOpen=function(t){var e=null,n=!1,s=0;e=window.setInterval(function(){s++,((n=document.hidden||document.webkitHidden)||s>40)&&(t(n),clearInterval(e))},50)},this.tryCallApp=function(){(e.os.android||e.os.ios)&&(window.location.href=this.scheme)},this.mask=function(){e.createMask(function(){return!1}).show(),e(".mui-backdrop")[0].innerHTML='<img style="width:100%;" src="./img/live_weixin.png" alt="微信打开"/>'},this.callBranch=function(t){!function(t,e,n,s,i,a,o,r,d,u){if(!t[s]||!t[s]._q){for(;r<o.length;)i(a,o[r++]);(d=e.createElement(n)).async=1,d.src="https://cdn.branch.io/branch-latest.min.js",(u=e.getElementsByTagName(n)[0]).parentNode.insertBefore(d,u),t[s]=a}}(window,document,"script","branch",function(t,e){t[e]=function(){t._q.push([e,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking getBrowserFingerprintId".split(" "),0),branch.init(this.config.branch_key),branch.logout(),branch.link({channel:"browser",data:{event:"openURL",url:window.location.href,$canonical_url:window.location.href}},(t,e)=>{document.createElement("img").src=e+"?src=img"}),branch.getBrowserFingerprintId(t)}}},function(t){t.exports=[{constant:!0,inputs:[{name:"name",type:"address"}],name:"refer",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"num",type:"string"},{name:"mul",type:"uint256"}],name:"chipIn",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"code",type:"uint256"}],name:"reg",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getAddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"customerAddress",type:"address"},{indexed:!1,name:"seq",type:"uint256"},{indexed:!1,name:"num",type:"string"},{indexed:!1,name:"mul",type:"uint256"}],name:"onChip",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"seq",type:"uint256"},{indexed:!1,name:"num",type:"string"}],name:"onDraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"agentAddress",type:"address"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"onDividend",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"customerAddress",type:"address"},{indexed:!1,name:"seq",type:"uint256"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"onBonus",type:"event"}]},,function(t,e){t.exports={c:function(t,e){if(t>e)return 0;if(t==e)return 1;for(var n=1,s=e;s-t>0;)n=n*s/(e-s+1),s--;return n},toAscii:function(t){let e="",n=0;const s=t.length;for("0x"===t.substring(0,2)&&(n=2);n<s;n+=2){const s=parseInt(t.substr(n,2),16);e+=String.fromCharCode(s)}return e}}},function(t,e){t.exports=function(){this.items={};var t=localStorage.getItem("cart");try{this.items=JSON.parse(t)||{}}catch(t){this.items={}}this.save=function(){return localStorage.setItem("cart",JSON.stringify(this.items))},this.read=function(t){return void 0===t?this.items:(void 0===this.items[t]&&(this.items[t]={},this.items[t].length=0),this.items[t])},this.add=function(t,e){void 0===this.items[t]&&(this.items[t]={},this.items[t].length=0),void 0===this.items[t][e]&&(this.items[t][e]=!0,this.items[t].length+=1),this.save()},this.remove=function(t,e){void 0!==this.items[t]&&void 0!==this.items[t][e]&&(delete this.items[t][e],this.items[t].length-=1,this.save())},this.clear=function(t){for(var e in this.items[t])"length"!==e&&delete this.items[t][e];this.items[t].length=0,this.save()},this.read()}},function(t,e){t.exports=function(t){var e="00:00:00";return t>0&&(e=("00"+parseInt(t/3600)).slice(-2)+":"+("00"+parseInt(t%3600/60)).slice(-2)+":"+("00"+t%60).slice(-2)),e}},function(t,e,n){const s=n(7);t.exports={data:function(){return{ins:null,phrase:0,history:!1,time:"00 : 00",draws:[]}},methods:{onHistory:function(){this.history=!this.history},ListenDraw:function(t){this.ins.onDraw({},t,"pending").watch((t,e)=>{e.args.seq=e.args.seq.toNumber(),e.args.num=e.args.num.split(""),this.draws.unshift(e.args),this.draws.length>5&&this.draws.pop()})},showDraws:function(t,e){let n={address:t,"topics.0":"0xeb447c70aa20ab5dcf8a114e3e951d1f55f963d9770628c2925689d08fbdbeac",page:0,pages:1,limit:5};e.post("https://explorer.hadeschain.org/events",n,t=>{t.docs.forEach(t=>{var e={};e.num=t.data.substr(-64,2*("0x"+t.data.substr(-80,16))),e.num=s.toAscii(e.num).split(""),e.seq=parseInt(t.topics[1],16),this.draws.push(e)})},"json")}}}},function(t,e){t.exports={data:function(){return{pick:!1,cost:0,min:0,max:0,mul:2}},methods:{chipIn:function(){if(1*this.mul!=0){if(!(this.ctx("mui")(".ball.seled").length>0&&!1===this.addCart()))if(0!==this.items.length)if(void 0!==this.ins){var t="";for(var e in this.items)!0===this.items[e]&&(t+=e);if(!this.isValid(t))return this.ctx("mui").toast("出错");this.ins.chipIn(t,this.web3.toWei(this.mul),{from:this.account,gasPrice:2e9,value:this.value(t)},(t,e)=>{null===t&&(this.ctx("cart").clear(this.ctx("product")),this.ctx("mui").toast("投注成功"),this.app.showSel())})}else this.ctx("trust").handleOpen();else this.ctx("mui").toast("彩车为空")}else this.ctx("mui").toast("请输入单注金额")}},watch:{mul:function(t){/^\d+\.?\d{0,2}$/.test(t)||(this.mul=t.substring(0,t.length-1))}}}},function(t,e,n){"use strict";n.r(e);var s=n(0),i=n.n(s),a=n(1),o=n.n(a);const r=n(3),d=n(8),u=n(9),h=n(4),c=new d,l=n(5);var f;const m=n(2),p=n(10),g=n(11),b=new o.a({mixins:[p],el:"#app",data:{odd:"a",items:c.read("Q3D"),scan:r.Scan+"/address/"+r.Q3D.addr,types:{a:"和值",b:"三同号通选",c:"三同号",d:"二同号复选",e:"二同号单选",f:"三不同号",g:"二不同号",h:"三连号"}},methods:{sel:function(t){i()(".ball").each(function(e,n){0!=t?9!=t?3!=t?6!=t||(e%2==1?n.classList.toggle("seled"):n.classList.remove("seled")):e%2==0?n.classList.toggle("seled"):n.classList.remove("seled"):e>=8?n.classList.toggle("seled"):n.classList.remove("seled"):e<8?n.classList.toggle("seled"):n.classList.remove("seled")}),w.calc()},remove:function(t){c.remove("Q3D",t),0==this.items.length&&this.showSel()},showSel:function(){this.odd=i()("#app .mui-scroll a.mui-active")[0].dataset.odd}},mounted:function(){this.showDraws(r.Q3D.addr.toLowerCase(),i.a),i.a.init(),i()("#popover").on("tap","a",function(){window.location.href=this.href})},beforeMount:function(){i()("#loading")[0].style.display="none"}}),w=new o.a({mixins:[m,g],el:"#bottomNav",data:{app:b,items:b.items,odds:{"004a":135,"005a":67,"006a":40,"007a":27,"008a":19,"009a":16,"010a":15,"011a":15,"012a":16,"013a":19,"014a":27,"015a":40,"016a":67,"017a":135,nnnb:67,c:406,d:25,e:135,f:67,g:13,h:16}},watch:{web3:function(){void 0!==this.web3&&(this.app.ins=this.ins=this.web3.eth.contract(l).at(r.Q3D.addr),this.web3.eth.getBlockNumber((t,e)=>{null===t&&this.app.ListenDraw({fromBlock:e})}))}},methods:{addCart:function(){var t=[],e=[],n=[],s=[],a=i()(".ball.seled");if(0==a.length)return this.showCart(),!0;if(a.each(function(){4==this.dataset.num.length?c.add("Q3D",this.dataset.num):"e"==this.dataset.num.substr(-1)?3==this.dataset.num.length?t.push(this.dataset.num.substr(0,2)):2==this.dataset.num.length&&e.push(this.dataset.num.substr(0,1)):"f"==this.dataset.num.substr(-1)?n.push(this.dataset.num.substr(0,1)):"g"==this.dataset.num.substr(-1)&&s.push(this.dataset.num.substr(0,1))}),t.length>0&&0==e.length)return i.a.toast("请至少选择1个不同号"),!1;if(0==t.length&&e.length>0)return i.a.toast("请至少选择1个双同号"),!1;if(t.length>0&&e.length>0)for(var o=0;o<t.length;o++)for(var r=0;r<e.length;r++)c.add("Q3D",""+t[o]+e[r]+"e");if(n.length>0&&n.length<3)return i.a.toast("至少选择3个号"),!1;if(n.length>=3)for(o=0;o<n.length;o++)for(r=o+1;r<n.length;r++)for(var d=r+1;d<n.length;d++)c.add("Q3D",""+n[o]+n[r]+n[d]+"f");if(s.length>0&&s.length<2)return i.a.toast("至少选择2个号"),!1;if(s.length>=2)for(o=0;o<s.length;o++)for(r=o+1;r<s.length;r++)c.add("Q3D",""+s[o]+s[r]+"*g");return a.each(function(){this.classList.remove("seled")}),this.calc(),this.showCart(),!0},showCart:function(){0!=this.items.length?this.app.odd="cart":i.a.toast("彩车为空")},calc:function(){var t,e=i()(".ball.seled"),n=0,s=0,a=0;if(this.pick=e.length>0,0==e.length)return this.cost=n,this.min=s,void(this.max=a);if("a"==this.app.odd)n=2*e.length,e.each(function(){"a"!=(t=this.dataset.num).substr(-1)&&(t=t.substr(-1)),(0==s||w.odds[t]<s)&&(s=w.odds[t]),(0==a||w.odds[t]>a)&&(a=w.odds[t])});else if("b"==this.app.odd)n=2*e.length,e.each(function(){"b"!=(t=this.dataset.num).substr(-1)?(t=t.substr(-1),s=a=w.odds[t]):(s=w.odds[t],a+=w.odds[t])});else if("b"==this.app.odd)n=2*e.length,e.each(function(){"b"!=(t=this.dataset.num).substr(-1)?(t=t.substr(-1),s=a=w.odds[t]):(s=w.odds[t],a+=w.odds[t])});else if("d"==this.app.odd){var o="",r="",d="";e.each(function(){3==(t=this.dataset.num).length?o+=t.substr(0,2):2==t.length?r+=t.substr(0,1):4==t.length&&(d+=t.substr(0,1))}),o.length/2*r.length>0&&(n+=o.length/2*r.length*2,s=a=w.odds.e),d.length>0&&(n+=2*d.length,s=w.odds.d,0==a&&(a=s)),new RegExp("["+d+"]+").test(o)&&(a+=s)}else if("f"==this.app.odd){var u=e.length,h=u,c="";"xyzh"==e[h-1].dataset.num&&(n+=2,u=h-1),u>=3&&(n+=u*(u-1)*(u-2)/6*2,a=w.odds.f),u<h&&(s=w.odds.h),a*s?(e.each(function(){c+=this.dataset.num.substr(0,1)}),/123|234|345|456/.test(c)&&(a+=s),6==u&&(s=w.odds.f)):s=a=s+a}else"g"==this.app.odd&&e.length>=2&&(n=2*e.length*(e.length-1)/2,s=w.odds.g,a=(n/2<=3?n/2:3)*w.odds.g);this.cost=n,this.min=s,this.max=a},isValid:function(t){return!(0==t.length||t.length%4>0)},value:function(t){return t.length/4*this.web3.toWei(this.mul)},ctx:function(t){return{mui:i.a,cart:c,trust:f,product:"Q3D"}[t]}}});i()(".mui-scroll").on("tap","a",function(){b.odd=this.dataset.odd,i()(".ball.seled").each(function(){this.classList.remove("seled")}),w.calc()}),i()("#app").on("tap",".ball",function(){if(this.classList.toggle("seled"),"e"==this.dataset.num.substr(-1)){var t=this.dataset.num;if(3==t.length)t=t.substr(1);else{if(2!=t.length)return;t=t.substr(0,1)+t}i()('.ball[data-num="'+t+'"').each(function(){this.classList.remove("seled")})}w.calc()}),window.setInterval(function(){var t=u(parseInt(600-(new Date).getTime()/1e3%600));b.time=t.substr(3)},1e3),window.addEventListener("load",function(){w.freshAccount(),(f=new h({mui:i.a,branch_key:r.branch_key})).run()})}]);