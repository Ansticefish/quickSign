(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c23ef26"],{"324f":function(t,o,s){},"4d0c":function(t,o,s){"use strict";s("ca53")},"93ab":function(t,o,s){"use strict";s("324f")},ca53:function(t,o,s){},e743:function(t,o,s){"use strict";s.r(o);var A=function(){var t=this,o=t._self._c;return o("div",{staticClass:"bottom"},[o("div",{staticClass:"upload-area"},[o("label",{staticClass:"instruction",attrs:{for:"upload"}},[o("input",{attrs:{type:"file",accept:".pdf",id:"upload"},on:{change:t.uploadFile}}),o("p",{staticClass:"instruction__top"},[t._v("點擊此處上傳 或 直接拖曳檔案")]),o("img",{attrs:{src:s("f49c")}}),o("p",{staticClass:"instruction__bottom"},[t._v("(限10MB以下PDF檔)")])])]),t.showPopup?o("Popups",{attrs:{caption:t.caption,"btn-caption":t.btnCaption},on:{"close-window":t.closePopups}}):t._e()],1)},n=[],i=function(){var t=this,o=t._self._c;return o("div",{staticClass:"mask"},[o("div",{staticClass:"window"},[o("h2",[t._v(t._s(t.caption))]),o("div",{staticClass:"btns"},[t.btnCaption.length<1?o("button",{staticClass:"btns__orange",on:{click:t.closeWindow}},[t._v(" "+t._s(t.btnCaption[1]))]):t._e(),o("button",{staticClass:"btns__blue",on:{click:t.closeWindow}},[t._v(t._s(t.btnCaption[0]))])])])])},p=[],a=(s("14d9"),{name:"Popups",props:{caption:{type:String,required:!0},btnCaption:{type:Array,required:!0}},methods:{closeWindow(){"檔案上傳成功，請選擇想增加簽名的檔案！"===this.caption&&(this.$emit("close-window"),this.$router.push("/uploadFile/old")),this.$emit("close-window")}}}),e=a,c=(s("93ab"),s("2877")),u=Object(c["a"])(e,i,p,!1,null,"12ba1b8a",null),l=u.exports,r={name:"UploadFileNew",data(){return{caption:"",btnCaption:[],showPopup:!1}},components:{Popups:l},methods:{uploadFile(t){const o=t.target.files[0];console.log(o),"application/pdf"!==o.type?this.showPopups("您的檔案不是PDF檔！",["我知道了"]):o.size>10485760&&this.showPopups("您的檔案太大了！",["我知道了"]),this.showPopups("檔案上傳成功，請選擇想增加簽名的檔案！",["我知道了"])},closePopups(){this.showPopup=!1},showPopups(t,o){this.caption=t,this.btnCaption=o,this.showPopup=!0}}},d=r,I=(s("4d0c"),Object(c["a"])(d,A,n,!1,null,"3f251e78",null));o["default"]=I.exports},f49c:function(t,o){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-4c23ef26.9d89489f.js.map