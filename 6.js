webpackJsonp([6],{277:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),l=a(1),m=i(l),s=a(34),d=i(s),f=a(35),u=i(f);a(584);var p=function(t){function e(){return n(this,e),o(this,Object.getPrototypeOf(e).apply(this,arguments))}return c(e,t),r(e,[{key:"_getContactInfoCard",value:function(t,e,a){return m["default"].createElement(d["default"],{className:"contact-info-card"},m["default"].createElement("div",{className:"contact-info-card-title"},t,", ",e),m["default"].createElement("div",{className:"contact-info-card-email"},"Email: ",m["default"].createElement("a",{href:"mailto:"+a,className:"contact-link"},a)))}},{key:"render",value:function(){return m["default"].createElement("div",{className:"contact-page"},m["default"].createElement(d["default"],{className:"contact-title-card",zDepth:2},m["default"].createElement("div",{className:"contact-title"},"Contact"),m["default"].createElement("div",{className:"contact-description"},"Depending on the nature of your query, please direct your message to the appropriate person listed below. For general questions, feel free to email ",m["default"].createElement("a",{href:"mailto:pennmasti@gmail.com",className:"contact-link"},"pennmasti@gmail.com"),".")),m["default"].createElement(d["default"],{zDepth:2},m["default"].createElement("div",{className:"contact-list-card"},m["default"].createElement("div",{className:"contact-list-card-map"},m["default"].createElement(u["default"],{className:"contact-list-card-map-paper"},m["default"].createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12234.522845042044!2d-75.19560320000001!3d39.94964930000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c65a7f3bccc1%3A0x9eaa6a2b2d6fe94!2sUniversity+of+Pennsylvania!5e0!3m2!1sen!2sus!4v1433053648091",className:"contact-philly-map",frameborder:"0",style:{border:0}}))),m["default"].createElement("div",{className:"contact-list-card-contacts"},m["default"].createElement("div",{className:"contact-list-column-left"},this._getContactInfoCard("Nikhil Naidu","President","nnaidu03@gmail.com"),this._getContactInfoCard("Michelle Nie","Treasurer","mnie@wharton.upenn.edu"),this._getContactInfoCard("Arjun Nair","Show Chair","arjunxnair@gmail.com"),this._getContactInfoCard("Swathi Raman","Show Chair","swathi.raman09@gmail.com"),this._getContactInfoCard("Akshat Agrawal","Marketing Chair","akshat.ag77@gmail.com")),m["default"].createElement("div",{className:"contact-list-column-right"},this._getContactInfoCard("Eshani Patel","Vice-President","eptal4271@gmail.com"),this._getContactInfoCard("Gagan Gupta","Competition Chair","gagan.aj.gupta@gmail.com"),this._getContactInfoCard("Rathnam Venkat","Outreach Chair","rathnamkvenkat@gmail.com"),this._getContactInfoCard("Ria Desai","Costume Chair","riades@sas.upenn.edu"),this._getContactInfoCard("Ashwin Baweja","Webmaster","ashwinb10@gmail.com"))))))}}]),e}(m["default"].Component);e["default"]=p},290:function(t,e,a){e=t.exports=a(19)(),e.push([t.id,'.contact-page{padding:1rem;margin-bottom:2rem;max-width:1000px;margin-left:auto;margin-right:auto}@media (min-width:1000px){.contact-page{padding:2rem}}.contact-page:after{content:" ";display:block;clear:both}.contact-title-card{padding:1rem}.contact-title{font-size:1.35rem;font-weight:700;margin-bottom:.75rem}@media (min-width:720px){.contact-title{font-size:1.75rem}}.contact-description{font-size:.75rem;color:#444}@media (min-width:720px){.contact-description{font-size:.9rem}}.contact-link{font-weight:500;color:#fa0209}.contact-link:hover{color:#000;transition:all .2s}.contact-list-card{background:url('+a(598)+");background-position:0 0;background-repeat:no-repeat;background-size:cover;margin-top:2rem;padding:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;-moz-align-items:stretch;align-items:stretch}@media (min-width:1000px){.contact-list-card{-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}.contact-list-card .contact-list-card-map{-webkit-box-flex:1;-webkit-flex:1;-moz-flex:1;-ms-flex:1;flex:1}.contact-list-card .contact-list-card-contacts{-webkit-box-flex:2;-webkit-flex:2;-moz-flex:2;-ms-flex:2;flex:2}}.contact-list-card-map-paper{padding:.5rem}.contact-philly-map{width:100%;display:block}.contact-list-card-contacts{display:inline-block;margin:auto;margin-top:2rem;width:100%}@media (min-width:720px){.contact-list-card-contacts{width:75%}}@media (min-width:1000px){.contact-list-card-contacts{margin-top:0;margin-left:4rem;width:100%}}@media (min-width:550px){.contact-list-column-left{width:47.36842%;float:left;margin-right:5.26316%}.contact-list-column-right{width:47.36842%;float:right;margin-right:0}}.contact-info-card{padding:.75rem;margin-bottom:1rem}.contact-info-card-title{font-size:.75rem;font-weight:700;margin-bottom:.2rem}@media (min-width:720px){.contact-info-card-title{font-size:.8rem}}@media (min-width:1000px){.contact-info-card-title{font-size:.9rem}}.contact-info-card-email{font-size:.7rem}@media (min-width:720px){.contact-info-card-email{font-size:.75rem}}@media (min-width:1000px){.contact-info-card-email{font-size:.85rem}}",""])},584:function(t,e,a){var i=a(290);"string"==typeof i&&(i=[[t.id,i,""]]);a(22)(i,{});i.locals&&(t.exports=i.locals)},598:function(t,e,a){t.exports=a.p+"386d07eb0999407d1c4106897276352b.jpg"}});