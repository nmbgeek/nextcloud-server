/*! For license information please see files-reference-files.js.LICENSE.txt */
(()=>{"use strict";var e,i={95754:(e,i,n)=>{var o=n(20144),r=n(31352),a=n(86680),l=n(79753),s=n(62520),d=n.n(s),c=n(25108);const A={name:"ReferenceFileWidget",props:{richObject:{type:Object,required:!0},accessible:{type:Boolean,default:!0}},data(){return{previewUrl:window.OC.MimeType.getIconUrl(this.richObject.mimetype)}},computed:{fileSize(){return window.OC.Util.humanFileSize(this.richObject.size)},fileMtime(){return window.OC.Util.relativeModifiedDate(1e3*this.richObject.mtime)},filePath(){return d().dirname(this.richObject.path)},filePreview(){return this.previewUrl?{backgroundImage:"url("+this.previewUrl+")"}:{backgroundImage:"url("+window.OC.MimeType.getIconUrl(this.richObject.mimetype)+")"}},filePreviewClass(){return this.previewUrl?"widget-file--image--preview":"widget-file--image--icon"}},mounted(){if(this.richObject["preview-available"]){const e=(0,l.generateUrl)("/core/preview?fileId={fileId}&x=250&y=250",{fileId:this.richObject.id}),t=new Image;t.onload=()=>{this.previewUrl=e},t.onerror=e=>{c.error("could not load recommendation preview",e)},t.src=e}},methods:{navigate(){OCA.Viewer&&-1!==OCA.Viewer.mimetypes.indexOf(this.richObject.mimetype)?OCA.Viewer.open({path:this.richObject.path}):window.location=this.richObject.link}}};var p=n(93379),f=n.n(p),C=n(7795),g=n.n(C),w=n(90569),m=n.n(w),v=n(3565),u=n.n(v),h=n(19216),b=n.n(h),x=n(44589),k=n.n(x),y=n(7574),O={};O.styleTagTransform=k(),O.setAttributes=u(),O.insert=m().bind(null,"head"),O.domAPI=g(),O.insertStyleElement=b(),f()(y.Z,O),y.Z&&y.Z.locals&&y.Z.locals;var j=n(51900);const B=(0,j.Z)(A,(function(){var e=this,t=e._self._c;return e.accessible?t("a",{staticClass:"widget-file",attrs:{href:e.richObject.link},on:{click:function(t){return t.preventDefault(),e.navigate.apply(null,arguments)}}},[t("div",{staticClass:"widget-file--image",class:e.filePreviewClass,style:e.filePreview}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v(e._s(e.richObject.name))]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v(e._s(e.fileSize)),t("br"),e._v(e._s(e.fileMtime))]),e._v(" "),t("p",{staticClass:"widget-file--link"},[e._v(e._s(e.filePath))])])]):t("div",{staticClass:"widget-file widget-file--no-access"},[t("div",{staticClass:"widget-file--image widget-file--image--icon icon-folder"}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v("\n\t\t\t"+e._s(e.t("files","File cannot be accessed"))+"\n\t\t")]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v("\n\t\t\t"+e._s(e.t("files","You might not have have permissions to view it, ask the sender to share it"))+"\n\t\t")])])])}),[],!1,null,"3f729da0",null).exports;var _=n(64024);const I={name:"FileReferencePickerElement",components:{},props:{providerId:{type:String,required:!0},accessible:{type:Boolean,default:!1}},mounted(){this.openFilePicker(),window.addEventListener("click",this.onWindowClick)},beforeDestroy(){window.removeEventListener("click",this.onWindowClick)},methods:{onWindowClick(e){"A"===e.target.tagName&&e.target.classList.contains("oc-dialog-close")&&this.$emit("cancel")},async openFilePicker(){OC.dialogs.filepicker(t("files","Select file or folder to link to"),(e=>{OC.Files.getClient().getFileInfo(e).then(((e,t)=>{this.submit(t.id)}))}),!1,[],!1,_.K9.Choose,"",{target:this.$refs.picker})},submit(e){const t=window.location.protocol+"//"+window.location.host+(0,l.generateUrl)("/f/{fileId}",{fileId:e});this.$emit("submit",t)}}};var P=n(24056),E={};E.styleTagTransform=k(),E.setAttributes=u(),E.insert=m().bind(null,"head"),E.domAPI=g(),E.insertStyleElement=b(),f()(P.Z,E),P.Z&&P.Z.locals&&P.Z.locals;const F=(0,j.Z)(I,(function(){return(0,this._self._c)("div",{ref:"picker",staticClass:"reference-file-picker"})}),[],!1,null,"2dd87592",null).exports;o.default.mixin({methods:{t:r.Iu}}),(0,a.registerWidget)("file",((e,t)=>{let{richObjectType:i,richObject:n,accessible:r}=t;new(o.default.extend(B))({propsData:{richObjectType:i,richObject:n,accessible:r}}).$mount(e)})),(0,a.registerCustomPickerElement)("files",((e,t)=>{let{providerId:i,accessible:n}=t;const r=new(o.default.extend(F))({propsData:{providerId:i,accessible:n}}).$mount(e);return new a.NcCustomPickerRenderResult(r.$el,r)}),((e,t)=>{t.object.$destroy()}))},24056:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(87537),o=i.n(n),r=i(23645),a=i.n(r)()(o());a.push([e.id,".reference-file-picker[data-v-2dd87592]{flex-grow:1;padding:12px 16px 16px 16px}.reference-file-picker[data-v-2dd87592] .oc-dialog{transform:none !important;box-shadow:none !important;flex-grow:1 !important;position:static !important;width:100% !important;height:auto !important;padding:0 !important;max-width:initial}.reference-file-picker[data-v-2dd87592] .oc-dialog .oc-dialog-close{display:none}.reference-file-picker[data-v-2dd87592] .oc-dialog .oc-dialog-buttonrow.onebutton.aside{position:absolute;padding:12px 32px}.reference-file-picker[data-v-2dd87592] .oc-dialog .oc-dialog-content{max-width:100% !important}","",{version:3,sources:["webpack://./apps/files/src/views/FileReferencePickerElement.vue"],names:[],mappings:"AACA,wCACC,WAAA,CACA,2BAAA,CAEA,mDACC,yBAAA,CACA,0BAAA,CACA,sBAAA,CACA,0BAAA,CACA,qBAAA,CACA,sBAAA,CACA,oBAAA,CACA,iBAAA,CAEA,oEACC,YAAA,CAGD,wFACC,iBAAA,CACA,iBAAA,CAGD,sEACC,yBAAA",sourcesContent:["\n.reference-file-picker {\n\tflex-grow: 1;\n\tpadding: 12px 16px 16px 16px;\n\n\t&:deep(.oc-dialog) {\n\t\ttransform: none !important;\n\t\tbox-shadow: none !important;\n\t\tflex-grow: 1 !important;\n\t\tposition: static !important;\n\t\twidth: 100% !important;\n\t\theight: auto !important;\n\t\tpadding: 0 !important;\n\t\tmax-width: initial;\n\n\t\t.oc-dialog-close {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.oc-dialog-buttonrow.onebutton.aside {\n\t\t\tposition: absolute;\n\t\t\tpadding: 12px 32px;\n\t\t}\n\n\t\t.oc-dialog-content {\n\t\t\tmax-width: 100% !important;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const l=a},7574:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(87537),o=i.n(n),r=i(23645),a=i.n(r)()(o());a.push([e.id,".widget-file[data-v-3f729da0]{display:flex;flex-grow:1;color:var(--color-main-text) !important;text-decoration:none !important}.widget-file--image[data-v-3f729da0]{min-width:40%;background-position:center;background-size:cover;background-repeat:no-repeat}.widget-file--image.widget-file--image--icon[data-v-3f729da0]{min-width:88px;background-size:44px}.widget-file--title[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold}.widget-file--details[data-v-3f729da0]{padding:12px;flex-grow:1;display:flex;flex-direction:column}.widget-file--details p[data-v-3f729da0]{margin:0;padding:0}.widget-file--description[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.widget-file--link[data-v-3f729da0]{color:var(--color-text-maxcontrast)}.widget-file.widget-file--no-access[data-v-3f729da0]{padding:12px}.widget-file.widget-file--no-access .widget-file--details[data-v-3f729da0]{padding:0}","",{version:3,sources:["webpack://./apps/files/src/views/ReferenceFileWidget.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,WAAA,CACA,uCAAA,CACA,+BAAA,CAEA,qCACC,aAAA,CACA,0BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,8DACC,cAAA,CACA,oBAAA,CAIF,qCACC,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CAGD,uCACC,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCACC,QAAA,CACA,SAAA,CAIF,2CACC,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BAAA,CAGD,oCACC,mCAAA,CAGD,qDACC,YAAA,CAEA,2EACC,SAAA",sourcesContent:["\n.widget-file {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tcolor: var(--color-main-text) !important;\n\ttext-decoration: none !important;\n\n\t&--image {\n\t\tmin-width: 40%;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\n\t\t&.widget-file--image--icon {\n\t\t\tmin-width: 88px;\n\t\t\tbackground-size: 44px;\n\t\t}\n\t}\n\n\t&--title {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\tfont-weight: bold;\n\t}\n\n\t&--details {\n\t\tpadding: 12px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tp {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\t&--description {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 3;\n\t\tline-clamp: 3;\n\t\t-webkit-box-orient: vertical;\n\t}\n\n\t&--link {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&.widget-file--no-access {\n\t\tpadding: 12px;\n\n\t\t.widget-file--details {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const l=a}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=i,e=[],o.O=(t,i,n,r)=>{if(!i){var a=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],r=e[c][2];for(var l=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](i[s])))?i.splice(s--,1):(l=!1,r<a&&(a=r));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=9098,(()=>{o.b=document.baseURI||self.location.href;var e={9098:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,a=i[0],l=i[1],s=i[2],d=0;if(a.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(s)var c=s(o)}for(t&&t(i);d<a.length;d++)r=a[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),o.nc=void 0;var r=o.O(void 0,[7874],(()=>o(95754)));r=o.O(r)})();
//# sourceMappingURL=files-reference-files.js.map?v=c9678e19ce1009ba8244