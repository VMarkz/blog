goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33111 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33111(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33112 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33112(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32427 = coll;
var G__32429 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32427,G__32429) : shadow.dom.lazy_native_coll_seq.call(null,G__32427,G__32429));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32457 = arguments.length;
switch (G__32457) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32467 = arguments.length;
switch (G__32467) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32476 = arguments.length;
switch (G__32476) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32484 = arguments.length;
switch (G__32484) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32496 = arguments.length;
switch (G__32496) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32509 = arguments.length;
switch (G__32509) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32517){if((e32517 instanceof Object)){
var e = e32517;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32517;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32525 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32526 = null;
var count__32527 = (0);
var i__32528 = (0);
while(true){
if((i__32528 < count__32527)){
var el = chunk__32526.cljs$core$IIndexed$_nth$arity$2(null,i__32528);
var handler_33119__$1 = ((function (seq__32525,chunk__32526,count__32527,i__32528,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32525,chunk__32526,count__32527,i__32528,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33119__$1);


var G__33120 = seq__32525;
var G__33121 = chunk__32526;
var G__33122 = count__32527;
var G__33123 = (i__32528 + (1));
seq__32525 = G__33120;
chunk__32526 = G__33121;
count__32527 = G__33122;
i__32528 = G__33123;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32525);
if(temp__5753__auto__){
var seq__32525__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32525__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32525__$1);
var G__33124 = cljs.core.chunk_rest(seq__32525__$1);
var G__33125 = c__4649__auto__;
var G__33126 = cljs.core.count(c__4649__auto__);
var G__33127 = (0);
seq__32525 = G__33124;
chunk__32526 = G__33125;
count__32527 = G__33126;
i__32528 = G__33127;
continue;
} else {
var el = cljs.core.first(seq__32525__$1);
var handler_33128__$1 = ((function (seq__32525,chunk__32526,count__32527,i__32528,el,seq__32525__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32525,chunk__32526,count__32527,i__32528,el,seq__32525__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33128__$1);


var G__33129 = cljs.core.next(seq__32525__$1);
var G__33130 = null;
var G__33131 = (0);
var G__33132 = (0);
seq__32525 = G__33129;
chunk__32526 = G__33130;
count__32527 = G__33131;
i__32528 = G__33132;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32546 = arguments.length;
switch (G__32546) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32556 = cljs.core.seq(events);
var chunk__32557 = null;
var count__32558 = (0);
var i__32559 = (0);
while(true){
if((i__32559 < count__32558)){
var vec__32574 = chunk__32557.cljs$core$IIndexed$_nth$arity$2(null,i__32559);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32574,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33134 = seq__32556;
var G__33135 = chunk__32557;
var G__33136 = count__32558;
var G__33137 = (i__32559 + (1));
seq__32556 = G__33134;
chunk__32557 = G__33135;
count__32558 = G__33136;
i__32559 = G__33137;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32556);
if(temp__5753__auto__){
var seq__32556__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32556__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32556__$1);
var G__33138 = cljs.core.chunk_rest(seq__32556__$1);
var G__33139 = c__4649__auto__;
var G__33140 = cljs.core.count(c__4649__auto__);
var G__33141 = (0);
seq__32556 = G__33138;
chunk__32557 = G__33139;
count__32558 = G__33140;
i__32559 = G__33141;
continue;
} else {
var vec__32582 = cljs.core.first(seq__32556__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32582,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32582,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33142 = cljs.core.next(seq__32556__$1);
var G__33143 = null;
var G__33144 = (0);
var G__33145 = (0);
seq__32556 = G__33142;
chunk__32557 = G__33143;
count__32558 = G__33144;
i__32559 = G__33145;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32590 = cljs.core.seq(styles);
var chunk__32591 = null;
var count__32592 = (0);
var i__32593 = (0);
while(true){
if((i__32593 < count__32592)){
var vec__32604 = chunk__32591.cljs$core$IIndexed$_nth$arity$2(null,i__32593);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32604,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32604,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33146 = seq__32590;
var G__33147 = chunk__32591;
var G__33148 = count__32592;
var G__33149 = (i__32593 + (1));
seq__32590 = G__33146;
chunk__32591 = G__33147;
count__32592 = G__33148;
i__32593 = G__33149;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32590);
if(temp__5753__auto__){
var seq__32590__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32590__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32590__$1);
var G__33150 = cljs.core.chunk_rest(seq__32590__$1);
var G__33151 = c__4649__auto__;
var G__33152 = cljs.core.count(c__4649__auto__);
var G__33153 = (0);
seq__32590 = G__33150;
chunk__32591 = G__33151;
count__32592 = G__33152;
i__32593 = G__33153;
continue;
} else {
var vec__32609 = cljs.core.first(seq__32590__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32609,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33154 = cljs.core.next(seq__32590__$1);
var G__33155 = null;
var G__33156 = (0);
var G__33157 = (0);
seq__32590 = G__33154;
chunk__32591 = G__33155;
count__32592 = G__33156;
i__32593 = G__33157;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32615_33158 = key;
var G__32615_33159__$1 = (((G__32615_33158 instanceof cljs.core.Keyword))?G__32615_33158.fqn:null);
switch (G__32615_33159__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33161 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_33161,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_33161,"aria-");
}
})())){
el.setAttribute(ks_33161,value);
} else {
(el[ks_33161] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32677){
var map__32678 = p__32677;
var map__32678__$1 = cljs.core.__destructure_map(map__32678);
var props = map__32678__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32678__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32687 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32687,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32687,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32687,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32690 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32690,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32690;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32692 = arguments.length;
switch (G__32692) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32698){
var vec__32700 = p__32698;
var seq__32701 = cljs.core.seq(vec__32700);
var first__32702 = cljs.core.first(seq__32701);
var seq__32701__$1 = cljs.core.next(seq__32701);
var nn = first__32702;
var first__32702__$1 = cljs.core.first(seq__32701__$1);
var seq__32701__$2 = cljs.core.next(seq__32701__$1);
var np = first__32702__$1;
var nc = seq__32701__$2;
var node = vec__32700;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32711 = nn;
var G__32712 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32711,G__32712) : create_fn.call(null,G__32711,G__32712));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32715 = nn;
var G__32716 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32715,G__32716) : create_fn.call(null,G__32715,G__32716));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32720 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32720,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32720,(1),null);
var seq__32724_33169 = cljs.core.seq(node_children);
var chunk__32725_33170 = null;
var count__32726_33171 = (0);
var i__32727_33172 = (0);
while(true){
if((i__32727_33172 < count__32726_33171)){
var child_struct_33173 = chunk__32725_33170.cljs$core$IIndexed$_nth$arity$2(null,i__32727_33172);
var children_33174 = shadow.dom.dom_node(child_struct_33173);
if(cljs.core.seq_QMARK_(children_33174)){
var seq__32782_33175 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33174));
var chunk__32784_33176 = null;
var count__32785_33177 = (0);
var i__32786_33178 = (0);
while(true){
if((i__32786_33178 < count__32785_33177)){
var child_33179 = chunk__32784_33176.cljs$core$IIndexed$_nth$arity$2(null,i__32786_33178);
if(cljs.core.truth_(child_33179)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33179);


var G__33180 = seq__32782_33175;
var G__33181 = chunk__32784_33176;
var G__33182 = count__32785_33177;
var G__33183 = (i__32786_33178 + (1));
seq__32782_33175 = G__33180;
chunk__32784_33176 = G__33181;
count__32785_33177 = G__33182;
i__32786_33178 = G__33183;
continue;
} else {
var G__33184 = seq__32782_33175;
var G__33185 = chunk__32784_33176;
var G__33186 = count__32785_33177;
var G__33187 = (i__32786_33178 + (1));
seq__32782_33175 = G__33184;
chunk__32784_33176 = G__33185;
count__32785_33177 = G__33186;
i__32786_33178 = G__33187;
continue;
}
} else {
var temp__5753__auto___33188 = cljs.core.seq(seq__32782_33175);
if(temp__5753__auto___33188){
var seq__32782_33189__$1 = temp__5753__auto___33188;
if(cljs.core.chunked_seq_QMARK_(seq__32782_33189__$1)){
var c__4649__auto___33190 = cljs.core.chunk_first(seq__32782_33189__$1);
var G__33191 = cljs.core.chunk_rest(seq__32782_33189__$1);
var G__33192 = c__4649__auto___33190;
var G__33193 = cljs.core.count(c__4649__auto___33190);
var G__33194 = (0);
seq__32782_33175 = G__33191;
chunk__32784_33176 = G__33192;
count__32785_33177 = G__33193;
i__32786_33178 = G__33194;
continue;
} else {
var child_33195 = cljs.core.first(seq__32782_33189__$1);
if(cljs.core.truth_(child_33195)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33195);


var G__33196 = cljs.core.next(seq__32782_33189__$1);
var G__33197 = null;
var G__33198 = (0);
var G__33199 = (0);
seq__32782_33175 = G__33196;
chunk__32784_33176 = G__33197;
count__32785_33177 = G__33198;
i__32786_33178 = G__33199;
continue;
} else {
var G__33200 = cljs.core.next(seq__32782_33189__$1);
var G__33201 = null;
var G__33202 = (0);
var G__33203 = (0);
seq__32782_33175 = G__33200;
chunk__32784_33176 = G__33201;
count__32785_33177 = G__33202;
i__32786_33178 = G__33203;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33174);
}


var G__33204 = seq__32724_33169;
var G__33205 = chunk__32725_33170;
var G__33206 = count__32726_33171;
var G__33207 = (i__32727_33172 + (1));
seq__32724_33169 = G__33204;
chunk__32725_33170 = G__33205;
count__32726_33171 = G__33206;
i__32727_33172 = G__33207;
continue;
} else {
var temp__5753__auto___33208 = cljs.core.seq(seq__32724_33169);
if(temp__5753__auto___33208){
var seq__32724_33209__$1 = temp__5753__auto___33208;
if(cljs.core.chunked_seq_QMARK_(seq__32724_33209__$1)){
var c__4649__auto___33210 = cljs.core.chunk_first(seq__32724_33209__$1);
var G__33211 = cljs.core.chunk_rest(seq__32724_33209__$1);
var G__33212 = c__4649__auto___33210;
var G__33213 = cljs.core.count(c__4649__auto___33210);
var G__33214 = (0);
seq__32724_33169 = G__33211;
chunk__32725_33170 = G__33212;
count__32726_33171 = G__33213;
i__32727_33172 = G__33214;
continue;
} else {
var child_struct_33215 = cljs.core.first(seq__32724_33209__$1);
var children_33216 = shadow.dom.dom_node(child_struct_33215);
if(cljs.core.seq_QMARK_(children_33216)){
var seq__32817_33217 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33216));
var chunk__32819_33218 = null;
var count__32820_33219 = (0);
var i__32821_33220 = (0);
while(true){
if((i__32821_33220 < count__32820_33219)){
var child_33221 = chunk__32819_33218.cljs$core$IIndexed$_nth$arity$2(null,i__32821_33220);
if(cljs.core.truth_(child_33221)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33221);


var G__33222 = seq__32817_33217;
var G__33223 = chunk__32819_33218;
var G__33224 = count__32820_33219;
var G__33225 = (i__32821_33220 + (1));
seq__32817_33217 = G__33222;
chunk__32819_33218 = G__33223;
count__32820_33219 = G__33224;
i__32821_33220 = G__33225;
continue;
} else {
var G__33226 = seq__32817_33217;
var G__33227 = chunk__32819_33218;
var G__33228 = count__32820_33219;
var G__33229 = (i__32821_33220 + (1));
seq__32817_33217 = G__33226;
chunk__32819_33218 = G__33227;
count__32820_33219 = G__33228;
i__32821_33220 = G__33229;
continue;
}
} else {
var temp__5753__auto___33230__$1 = cljs.core.seq(seq__32817_33217);
if(temp__5753__auto___33230__$1){
var seq__32817_33231__$1 = temp__5753__auto___33230__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32817_33231__$1)){
var c__4649__auto___33232 = cljs.core.chunk_first(seq__32817_33231__$1);
var G__33233 = cljs.core.chunk_rest(seq__32817_33231__$1);
var G__33234 = c__4649__auto___33232;
var G__33235 = cljs.core.count(c__4649__auto___33232);
var G__33236 = (0);
seq__32817_33217 = G__33233;
chunk__32819_33218 = G__33234;
count__32820_33219 = G__33235;
i__32821_33220 = G__33236;
continue;
} else {
var child_33237 = cljs.core.first(seq__32817_33231__$1);
if(cljs.core.truth_(child_33237)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33237);


var G__33238 = cljs.core.next(seq__32817_33231__$1);
var G__33239 = null;
var G__33240 = (0);
var G__33241 = (0);
seq__32817_33217 = G__33238;
chunk__32819_33218 = G__33239;
count__32820_33219 = G__33240;
i__32821_33220 = G__33241;
continue;
} else {
var G__33242 = cljs.core.next(seq__32817_33231__$1);
var G__33243 = null;
var G__33244 = (0);
var G__33245 = (0);
seq__32817_33217 = G__33242;
chunk__32819_33218 = G__33243;
count__32820_33219 = G__33244;
i__32821_33220 = G__33245;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33216);
}


var G__33246 = cljs.core.next(seq__32724_33209__$1);
var G__33247 = null;
var G__33248 = (0);
var G__33249 = (0);
seq__32724_33169 = G__33246;
chunk__32725_33170 = G__33247;
count__32726_33171 = G__33248;
i__32727_33172 = G__33249;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32859 = cljs.core.seq(node);
var chunk__32860 = null;
var count__32861 = (0);
var i__32862 = (0);
while(true){
if((i__32862 < count__32861)){
var n = chunk__32860.cljs$core$IIndexed$_nth$arity$2(null,i__32862);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33250 = seq__32859;
var G__33251 = chunk__32860;
var G__33252 = count__32861;
var G__33253 = (i__32862 + (1));
seq__32859 = G__33250;
chunk__32860 = G__33251;
count__32861 = G__33252;
i__32862 = G__33253;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32859);
if(temp__5753__auto__){
var seq__32859__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32859__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32859__$1);
var G__33254 = cljs.core.chunk_rest(seq__32859__$1);
var G__33255 = c__4649__auto__;
var G__33256 = cljs.core.count(c__4649__auto__);
var G__33257 = (0);
seq__32859 = G__33254;
chunk__32860 = G__33255;
count__32861 = G__33256;
i__32862 = G__33257;
continue;
} else {
var n = cljs.core.first(seq__32859__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33258 = cljs.core.next(seq__32859__$1);
var G__33259 = null;
var G__33260 = (0);
var G__33261 = (0);
seq__32859 = G__33258;
chunk__32860 = G__33259;
count__32861 = G__33260;
i__32862 = G__33261;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32880 = arguments.length;
switch (G__32880) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32893 = arguments.length;
switch (G__32893) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32935 = arguments.length;
switch (G__32935) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33269 = arguments.length;
var i__4830__auto___33270 = (0);
while(true){
if((i__4830__auto___33270 < len__4829__auto___33269)){
args__4835__auto__.push((arguments[i__4830__auto___33270]));

var G__33271 = (i__4830__auto___33270 + (1));
i__4830__auto___33270 = G__33271;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32972_33277 = cljs.core.seq(nodes);
var chunk__32973_33278 = null;
var count__32974_33279 = (0);
var i__32975_33280 = (0);
while(true){
if((i__32975_33280 < count__32974_33279)){
var node_33281 = chunk__32973_33278.cljs$core$IIndexed$_nth$arity$2(null,i__32975_33280);
fragment.appendChild(shadow.dom._to_dom(node_33281));


var G__33282 = seq__32972_33277;
var G__33283 = chunk__32973_33278;
var G__33284 = count__32974_33279;
var G__33285 = (i__32975_33280 + (1));
seq__32972_33277 = G__33282;
chunk__32973_33278 = G__33283;
count__32974_33279 = G__33284;
i__32975_33280 = G__33285;
continue;
} else {
var temp__5753__auto___33286 = cljs.core.seq(seq__32972_33277);
if(temp__5753__auto___33286){
var seq__32972_33287__$1 = temp__5753__auto___33286;
if(cljs.core.chunked_seq_QMARK_(seq__32972_33287__$1)){
var c__4649__auto___33288 = cljs.core.chunk_first(seq__32972_33287__$1);
var G__33289 = cljs.core.chunk_rest(seq__32972_33287__$1);
var G__33290 = c__4649__auto___33288;
var G__33291 = cljs.core.count(c__4649__auto___33288);
var G__33292 = (0);
seq__32972_33277 = G__33289;
chunk__32973_33278 = G__33290;
count__32974_33279 = G__33291;
i__32975_33280 = G__33292;
continue;
} else {
var node_33293 = cljs.core.first(seq__32972_33287__$1);
fragment.appendChild(shadow.dom._to_dom(node_33293));


var G__33294 = cljs.core.next(seq__32972_33287__$1);
var G__33295 = null;
var G__33296 = (0);
var G__33297 = (0);
seq__32972_33277 = G__33294;
chunk__32973_33278 = G__33295;
count__32974_33279 = G__33296;
i__32975_33280 = G__33297;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32952){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32952));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32976_33298 = cljs.core.seq(scripts);
var chunk__32977_33299 = null;
var count__32978_33300 = (0);
var i__32979_33301 = (0);
while(true){
if((i__32979_33301 < count__32978_33300)){
var vec__32986_33302 = chunk__32977_33299.cljs$core$IIndexed$_nth$arity$2(null,i__32979_33301);
var script_tag_33303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986_33302,(0),null);
var script_body_33304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986_33302,(1),null);
eval(script_body_33304);


var G__33305 = seq__32976_33298;
var G__33306 = chunk__32977_33299;
var G__33307 = count__32978_33300;
var G__33308 = (i__32979_33301 + (1));
seq__32976_33298 = G__33305;
chunk__32977_33299 = G__33306;
count__32978_33300 = G__33307;
i__32979_33301 = G__33308;
continue;
} else {
var temp__5753__auto___33309 = cljs.core.seq(seq__32976_33298);
if(temp__5753__auto___33309){
var seq__32976_33310__$1 = temp__5753__auto___33309;
if(cljs.core.chunked_seq_QMARK_(seq__32976_33310__$1)){
var c__4649__auto___33311 = cljs.core.chunk_first(seq__32976_33310__$1);
var G__33312 = cljs.core.chunk_rest(seq__32976_33310__$1);
var G__33313 = c__4649__auto___33311;
var G__33314 = cljs.core.count(c__4649__auto___33311);
var G__33315 = (0);
seq__32976_33298 = G__33312;
chunk__32977_33299 = G__33313;
count__32978_33300 = G__33314;
i__32979_33301 = G__33315;
continue;
} else {
var vec__32989_33316 = cljs.core.first(seq__32976_33310__$1);
var script_tag_33317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989_33316,(0),null);
var script_body_33318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989_33316,(1),null);
eval(script_body_33318);


var G__33319 = cljs.core.next(seq__32976_33310__$1);
var G__33320 = null;
var G__33321 = (0);
var G__33322 = (0);
seq__32976_33298 = G__33319;
chunk__32977_33299 = G__33320;
count__32978_33300 = G__33321;
i__32979_33301 = G__33322;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32992){
var vec__32993 = p__32992;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32993,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32993,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32997 = arguments.length;
switch (G__32997) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32998 = cljs.core.seq(style_keys);
var chunk__32999 = null;
var count__33000 = (0);
var i__33001 = (0);
while(true){
if((i__33001 < count__33000)){
var it = chunk__32999.cljs$core$IIndexed$_nth$arity$2(null,i__33001);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33325 = seq__32998;
var G__33326 = chunk__32999;
var G__33327 = count__33000;
var G__33328 = (i__33001 + (1));
seq__32998 = G__33325;
chunk__32999 = G__33326;
count__33000 = G__33327;
i__33001 = G__33328;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32998);
if(temp__5753__auto__){
var seq__32998__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32998__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32998__$1);
var G__33329 = cljs.core.chunk_rest(seq__32998__$1);
var G__33330 = c__4649__auto__;
var G__33331 = cljs.core.count(c__4649__auto__);
var G__33332 = (0);
seq__32998 = G__33329;
chunk__32999 = G__33330;
count__33000 = G__33331;
i__33001 = G__33332;
continue;
} else {
var it = cljs.core.first(seq__32998__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33333 = cljs.core.next(seq__32998__$1);
var G__33334 = null;
var G__33335 = (0);
var G__33336 = (0);
seq__32998 = G__33333;
chunk__32999 = G__33334;
count__33000 = G__33335;
i__33001 = G__33336;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k33003,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__33007 = k33003;
var G__33007__$1 = (((G__33007 instanceof cljs.core.Keyword))?G__33007.fqn:null);
switch (G__33007__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33003,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33008){
var vec__33009 = p__33008;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33009,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33009,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33002){
var self__ = this;
var G__33002__$1 = this;
return (new cljs.core.RecordIter((0),G__33002__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33004,other33005){
var self__ = this;
var this33004__$1 = this;
return (((!((other33005 == null)))) && ((((this33004__$1.constructor === other33005.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33004__$1.x,other33005.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33004__$1.y,other33005.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33004__$1.__extmap,other33005.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k33003){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33012 = k33003;
var G__33012__$1 = (((G__33012 instanceof cljs.core.Keyword))?G__33012.fqn:null);
switch (G__33012__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33003);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__33002){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33013 = cljs.core.keyword_identical_QMARK_;
var expr__33014 = k__4481__auto__;
if(cljs.core.truth_((pred__33013.cljs$core$IFn$_invoke$arity$2 ? pred__33013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33014) : pred__33013.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33014)))){
return (new shadow.dom.Coordinate(G__33002,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33013.cljs$core$IFn$_invoke$arity$2 ? pred__33013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33014) : pred__33013.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33014)))){
return (new shadow.dom.Coordinate(self__.x,G__33002,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__33002),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__33002){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33002,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33006){
var extmap__4512__auto__ = (function (){var G__33016 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33006,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33006)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33016);
} else {
return G__33016;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33006),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33006),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k33018,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__33022 = k33018;
var G__33022__$1 = (((G__33022 instanceof cljs.core.Keyword))?G__33022.fqn:null);
switch (G__33022__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33018,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33023){
var vec__33024 = p__33023;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33024,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33024,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33017){
var self__ = this;
var G__33017__$1 = this;
return (new cljs.core.RecordIter((0),G__33017__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33019,other33020){
var self__ = this;
var this33019__$1 = this;
return (((!((other33020 == null)))) && ((((this33019__$1.constructor === other33020.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33019__$1.w,other33020.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33019__$1.h,other33020.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33019__$1.__extmap,other33020.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k33018){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33027 = k33018;
var G__33027__$1 = (((G__33027 instanceof cljs.core.Keyword))?G__33027.fqn:null);
switch (G__33027__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33018);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__33017){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33028 = cljs.core.keyword_identical_QMARK_;
var expr__33029 = k__4481__auto__;
if(cljs.core.truth_((pred__33028.cljs$core$IFn$_invoke$arity$2 ? pred__33028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33029) : pred__33028.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33029)))){
return (new shadow.dom.Size(G__33017,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33028.cljs$core$IFn$_invoke$arity$2 ? pred__33028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33029) : pred__33028.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33029)))){
return (new shadow.dom.Size(self__.w,G__33017,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__33017),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__33017){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33017,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33021){
var extmap__4512__auto__ = (function (){var G__33031 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33021,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33021)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33031);
} else {
return G__33031;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33021),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33021),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__33357 = (i + (1));
var G__33358 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33357;
ret = G__33358;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33036){
var vec__33037 = p__33036;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33037,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33037,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33041 = arguments.length;
switch (G__33041) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33360 = ps;
var G__33361 = (i + (1));
el__$1 = G__33360;
i = G__33361;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33042 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33042,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33042,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33042,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33045_33362 = cljs.core.seq(props);
var chunk__33046_33363 = null;
var count__33047_33364 = (0);
var i__33048_33365 = (0);
while(true){
if((i__33048_33365 < count__33047_33364)){
var vec__33055_33366 = chunk__33046_33363.cljs$core$IIndexed$_nth$arity$2(null,i__33048_33365);
var k_33367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33055_33366,(0),null);
var v_33368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33055_33366,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_33367);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33367),v_33368);


var G__33369 = seq__33045_33362;
var G__33370 = chunk__33046_33363;
var G__33371 = count__33047_33364;
var G__33372 = (i__33048_33365 + (1));
seq__33045_33362 = G__33369;
chunk__33046_33363 = G__33370;
count__33047_33364 = G__33371;
i__33048_33365 = G__33372;
continue;
} else {
var temp__5753__auto___33374 = cljs.core.seq(seq__33045_33362);
if(temp__5753__auto___33374){
var seq__33045_33375__$1 = temp__5753__auto___33374;
if(cljs.core.chunked_seq_QMARK_(seq__33045_33375__$1)){
var c__4649__auto___33376 = cljs.core.chunk_first(seq__33045_33375__$1);
var G__33377 = cljs.core.chunk_rest(seq__33045_33375__$1);
var G__33378 = c__4649__auto___33376;
var G__33379 = cljs.core.count(c__4649__auto___33376);
var G__33380 = (0);
seq__33045_33362 = G__33377;
chunk__33046_33363 = G__33378;
count__33047_33364 = G__33379;
i__33048_33365 = G__33380;
continue;
} else {
var vec__33058_33382 = cljs.core.first(seq__33045_33375__$1);
var k_33383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33058_33382,(0),null);
var v_33384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33058_33382,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_33383);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33383),v_33384);


var G__33385 = cljs.core.next(seq__33045_33375__$1);
var G__33386 = null;
var G__33387 = (0);
var G__33388 = (0);
seq__33045_33362 = G__33385;
chunk__33046_33363 = G__33386;
count__33047_33364 = G__33387;
i__33048_33365 = G__33388;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33062 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33062,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33062,(1),null);
var seq__33065_33389 = cljs.core.seq(node_children);
var chunk__33067_33390 = null;
var count__33068_33391 = (0);
var i__33069_33392 = (0);
while(true){
if((i__33069_33392 < count__33068_33391)){
var child_struct_33393 = chunk__33067_33390.cljs$core$IIndexed$_nth$arity$2(null,i__33069_33392);
if((!((child_struct_33393 == null)))){
if(typeof child_struct_33393 === 'string'){
var text_33394 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33394),child_struct_33393].join(''));
} else {
var children_33395 = shadow.dom.svg_node(child_struct_33393);
if(cljs.core.seq_QMARK_(children_33395)){
var seq__33083_33396 = cljs.core.seq(children_33395);
var chunk__33085_33397 = null;
var count__33086_33398 = (0);
var i__33087_33399 = (0);
while(true){
if((i__33087_33399 < count__33086_33398)){
var child_33400 = chunk__33085_33397.cljs$core$IIndexed$_nth$arity$2(null,i__33087_33399);
if(cljs.core.truth_(child_33400)){
node.appendChild(child_33400);


var G__33401 = seq__33083_33396;
var G__33402 = chunk__33085_33397;
var G__33403 = count__33086_33398;
var G__33404 = (i__33087_33399 + (1));
seq__33083_33396 = G__33401;
chunk__33085_33397 = G__33402;
count__33086_33398 = G__33403;
i__33087_33399 = G__33404;
continue;
} else {
var G__33405 = seq__33083_33396;
var G__33406 = chunk__33085_33397;
var G__33407 = count__33086_33398;
var G__33408 = (i__33087_33399 + (1));
seq__33083_33396 = G__33405;
chunk__33085_33397 = G__33406;
count__33086_33398 = G__33407;
i__33087_33399 = G__33408;
continue;
}
} else {
var temp__5753__auto___33417 = cljs.core.seq(seq__33083_33396);
if(temp__5753__auto___33417){
var seq__33083_33419__$1 = temp__5753__auto___33417;
if(cljs.core.chunked_seq_QMARK_(seq__33083_33419__$1)){
var c__4649__auto___33420 = cljs.core.chunk_first(seq__33083_33419__$1);
var G__33421 = cljs.core.chunk_rest(seq__33083_33419__$1);
var G__33422 = c__4649__auto___33420;
var G__33423 = cljs.core.count(c__4649__auto___33420);
var G__33424 = (0);
seq__33083_33396 = G__33421;
chunk__33085_33397 = G__33422;
count__33086_33398 = G__33423;
i__33087_33399 = G__33424;
continue;
} else {
var child_33425 = cljs.core.first(seq__33083_33419__$1);
if(cljs.core.truth_(child_33425)){
node.appendChild(child_33425);


var G__33426 = cljs.core.next(seq__33083_33419__$1);
var G__33427 = null;
var G__33428 = (0);
var G__33429 = (0);
seq__33083_33396 = G__33426;
chunk__33085_33397 = G__33427;
count__33086_33398 = G__33428;
i__33087_33399 = G__33429;
continue;
} else {
var G__33430 = cljs.core.next(seq__33083_33419__$1);
var G__33431 = null;
var G__33432 = (0);
var G__33433 = (0);
seq__33083_33396 = G__33430;
chunk__33085_33397 = G__33431;
count__33086_33398 = G__33432;
i__33087_33399 = G__33433;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33395);
}
}


var G__33434 = seq__33065_33389;
var G__33435 = chunk__33067_33390;
var G__33436 = count__33068_33391;
var G__33437 = (i__33069_33392 + (1));
seq__33065_33389 = G__33434;
chunk__33067_33390 = G__33435;
count__33068_33391 = G__33436;
i__33069_33392 = G__33437;
continue;
} else {
var G__33438 = seq__33065_33389;
var G__33439 = chunk__33067_33390;
var G__33440 = count__33068_33391;
var G__33441 = (i__33069_33392 + (1));
seq__33065_33389 = G__33438;
chunk__33067_33390 = G__33439;
count__33068_33391 = G__33440;
i__33069_33392 = G__33441;
continue;
}
} else {
var temp__5753__auto___33446 = cljs.core.seq(seq__33065_33389);
if(temp__5753__auto___33446){
var seq__33065_33447__$1 = temp__5753__auto___33446;
if(cljs.core.chunked_seq_QMARK_(seq__33065_33447__$1)){
var c__4649__auto___33448 = cljs.core.chunk_first(seq__33065_33447__$1);
var G__33449 = cljs.core.chunk_rest(seq__33065_33447__$1);
var G__33450 = c__4649__auto___33448;
var G__33451 = cljs.core.count(c__4649__auto___33448);
var G__33452 = (0);
seq__33065_33389 = G__33449;
chunk__33067_33390 = G__33450;
count__33068_33391 = G__33451;
i__33069_33392 = G__33452;
continue;
} else {
var child_struct_33456 = cljs.core.first(seq__33065_33447__$1);
if((!((child_struct_33456 == null)))){
if(typeof child_struct_33456 === 'string'){
var text_33457 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33457),child_struct_33456].join(''));
} else {
var children_33458 = shadow.dom.svg_node(child_struct_33456);
if(cljs.core.seq_QMARK_(children_33458)){
var seq__33089_33459 = cljs.core.seq(children_33458);
var chunk__33091_33460 = null;
var count__33092_33461 = (0);
var i__33093_33462 = (0);
while(true){
if((i__33093_33462 < count__33092_33461)){
var child_33463 = chunk__33091_33460.cljs$core$IIndexed$_nth$arity$2(null,i__33093_33462);
if(cljs.core.truth_(child_33463)){
node.appendChild(child_33463);


var G__33464 = seq__33089_33459;
var G__33465 = chunk__33091_33460;
var G__33466 = count__33092_33461;
var G__33467 = (i__33093_33462 + (1));
seq__33089_33459 = G__33464;
chunk__33091_33460 = G__33465;
count__33092_33461 = G__33466;
i__33093_33462 = G__33467;
continue;
} else {
var G__33468 = seq__33089_33459;
var G__33469 = chunk__33091_33460;
var G__33470 = count__33092_33461;
var G__33471 = (i__33093_33462 + (1));
seq__33089_33459 = G__33468;
chunk__33091_33460 = G__33469;
count__33092_33461 = G__33470;
i__33093_33462 = G__33471;
continue;
}
} else {
var temp__5753__auto___33472__$1 = cljs.core.seq(seq__33089_33459);
if(temp__5753__auto___33472__$1){
var seq__33089_33473__$1 = temp__5753__auto___33472__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33089_33473__$1)){
var c__4649__auto___33474 = cljs.core.chunk_first(seq__33089_33473__$1);
var G__33475 = cljs.core.chunk_rest(seq__33089_33473__$1);
var G__33476 = c__4649__auto___33474;
var G__33477 = cljs.core.count(c__4649__auto___33474);
var G__33478 = (0);
seq__33089_33459 = G__33475;
chunk__33091_33460 = G__33476;
count__33092_33461 = G__33477;
i__33093_33462 = G__33478;
continue;
} else {
var child_33482 = cljs.core.first(seq__33089_33473__$1);
if(cljs.core.truth_(child_33482)){
node.appendChild(child_33482);


var G__33483 = cljs.core.next(seq__33089_33473__$1);
var G__33484 = null;
var G__33485 = (0);
var G__33486 = (0);
seq__33089_33459 = G__33483;
chunk__33091_33460 = G__33484;
count__33092_33461 = G__33485;
i__33093_33462 = G__33486;
continue;
} else {
var G__33487 = cljs.core.next(seq__33089_33473__$1);
var G__33488 = null;
var G__33489 = (0);
var G__33490 = (0);
seq__33089_33459 = G__33487;
chunk__33091_33460 = G__33488;
count__33092_33461 = G__33489;
i__33093_33462 = G__33490;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33458);
}
}


var G__33491 = cljs.core.next(seq__33065_33447__$1);
var G__33492 = null;
var G__33493 = (0);
var G__33494 = (0);
seq__33065_33389 = G__33491;
chunk__33067_33390 = G__33492;
count__33068_33391 = G__33493;
i__33069_33392 = G__33494;
continue;
} else {
var G__33495 = cljs.core.next(seq__33065_33447__$1);
var G__33496 = null;
var G__33497 = (0);
var G__33498 = (0);
seq__33065_33389 = G__33495;
chunk__33067_33390 = G__33496;
count__33068_33391 = G__33497;
i__33069_33392 = G__33498;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33502 = arguments.length;
var i__4830__auto___33503 = (0);
while(true){
if((i__4830__auto___33503 < len__4829__auto___33502)){
args__4835__auto__.push((arguments[i__4830__auto___33503]));

var G__33504 = (i__4830__auto___33503 + (1));
i__4830__auto___33503 = G__33504;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33095){
var G__33096 = cljs.core.first(seq33095);
var seq33095__$1 = cljs.core.next(seq33095);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33096,seq33095__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33098 = arguments.length;
switch (G__33098) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__30798__auto___33509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_33103){
var state_val_33104 = (state_33103[(1)]);
if((state_val_33104 === (1))){
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33103__$1,(2),once_or_cleanup);
} else {
if((state_val_33104 === (2))){
var inst_33100 = (state_33103[(2)]);
var inst_33101 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33103__$1 = (function (){var statearr_33105 = state_33103;
(statearr_33105[(7)] = inst_33100);

return statearr_33105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33103__$1,inst_33101);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30631__auto__ = null;
var shadow$dom$state_machine__30631__auto____0 = (function (){
var statearr_33106 = [null,null,null,null,null,null,null,null];
(statearr_33106[(0)] = shadow$dom$state_machine__30631__auto__);

(statearr_33106[(1)] = (1));

return statearr_33106;
});
var shadow$dom$state_machine__30631__auto____1 = (function (state_33103){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_33103);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e33107){var ex__30634__auto__ = e33107;
var statearr_33108_33510 = state_33103;
(statearr_33108_33510[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_33103[(4)]))){
var statearr_33109_33512 = state_33103;
(statearr_33109_33512[(1)] = cljs.core.first((state_33103[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33513 = state_33103;
state_33103 = G__33513;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
shadow$dom$state_machine__30631__auto__ = function(state_33103){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30631__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30631__auto____1.call(this,state_33103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30631__auto____0;
shadow$dom$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30631__auto____1;
return shadow$dom$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_33110 = f__30799__auto__();
(statearr_33110[(6)] = c__30798__auto___33509);

return statearr_33110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
