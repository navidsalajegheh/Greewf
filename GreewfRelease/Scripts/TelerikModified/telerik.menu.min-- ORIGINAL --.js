(function(a){var b=a.telerik;b.scripts.push("telerik.menu.js");b.menu=function(e,f){this.element=e;this.nextItemZIndex=100;a.extend(this,f);a(".t-item:not(.t-state-disabled)",e).live("mouseenter",b.delegate(this,this.mouseenter)).live("mouseleave",b.delegate(this,this.mouseleave)).live("click",b.delegate(this,this.click));a(".t-item:not(.t-state-disabled) > .t-link",e).live("mouseenter",b.hover).live("mouseleave",b.leave);a(".t-item.t-state-disabled",e).live("click",function(){return false});a(document).click(b.delegate(this,this.documentClick));b.bind(this,{select:this.onSelect,open:this.onOpen,close:this.onClose,load:this.onLoad})};function d(e){var f=e.parent();return{direction:f.hasClass("t-menu")?f.hasClass("t-menu-vertical")?"right":"bottom":"right"}}function c(h,f){try{return a.contains(h,f)}catch(g){return false}}b.menu.prototype={toggle:function(f,e){a(f).each(function(){a(this).toggleClass("t-state-default",e).toggleClass("t-state-disabled",!e)})},enable:function(e){this.toggle(e,true)},disable:function(e){this.toggle(e,false)},open:function(e){var f=this;a(e).each(function(){var g=a(this);clearTimeout(g.data("timer"));g.data("timer",setTimeout(function(){var h=g.find(".t-group:first");if(h.length){b.fx.play(f.effects,h,d(g));g.css("z-index",f.nextItemZIndex++)}},100))})},close:function(e){var f=this;a(e).each(function(h,i){var g=a(i);clearTimeout(g.data("timer"));g.data("timer",setTimeout(function(){var j=g.find(".t-group:first");if(j.length){b.fx.rewind(f.effects,j,d(g),function(){g.css("zIndex","");if(a(f.element).find(".t-group:visible").length==0){f.nextItemZIndex=100}});j.find(".t-group").stop(false,true)}},100))})},mouseenter:function(g,h){var f=a(h);if(!this.openOnClick||this.clicked){if(!c(h,g.relatedTarget)){this.triggerEvent("open",f);this.open(f);var i=f.parent().closest(".t-item")[0];if(i&&!c(i,g.relatedTarget)){this.mouseenter(g,i)}}}if(this.openOnClick&&this.clicked){this.triggerEvent("close",f);f.siblings().each(a.proxy(function(e,j){this.close(a(j))},this))}},mouseleave:function(g,h){if(!this.openOnClick&&!c(h,g.relatedTarget)){var f=a(h);this.triggerEvent("close",f);this.close(f);var i=f.parent().closest(".t-item")[0];if(i&&!c(i,g.relatedTarget)){this.mouseleave(g,i)}}},click:function(g,h){g.stopPropagation();var f=a(h);if(f.hasClass("t-state-disabled")){g.preventDefault();return}if(b.trigger(this.element,"select",{item:f[0]})){g.preventDefault();return}if(!f.parent().hasClass("t-menu")||!this.openOnClick){return}g.preventDefault();this.clicked=true;this.triggerEvent("open",f);this.open(f)},documentClick:function(f,g){if(a.contains(this.element,f.target)){return}if(this.clicked){this.clicked=false;a(this.element).children(".t-item").each(a.proxy(function(e,h){this.close(a(h))},this))}},hasChildren:function(e){return e.find(".t-group:first").length},triggerEvent:function(f,e){if(this.hasChildren(e)){b.trigger(this.element,f,{item:e[0]})}}};a.fn.tMenu=function(e){return b.create(this,{name:"tMenu",init:function(f,g){return new b.menu(f,g)},options:e})};a.fn.tMenu.defaults={orientation:"horizontal",effects:b.fx.slide.defaults(),openOnClick:false}})(jQuery);