goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__36470 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36471 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36471);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__36473 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36474 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36474);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36473);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36470);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36476 = arguments.length;
switch (G__36476) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__36483 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36483,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36483,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__36486_36505 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__36487_36506 = null;
var count__36488_36507 = (0);
var i__36489_36508 = (0);
while(true){
if((i__36489_36508 < count__36488_36507)){
var vec__36498_36509 = chunk__36487_36506.cljs$core$IIndexed$_nth$arity$2(null,i__36489_36508);
var container_36510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36498_36509,(0),null);
var comp_36511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36498_36509,(1),null);
reagent.dom.re_render_component(comp_36511,container_36510);


var G__36514 = seq__36486_36505;
var G__36515 = chunk__36487_36506;
var G__36516 = count__36488_36507;
var G__36517 = (i__36489_36508 + (1));
seq__36486_36505 = G__36514;
chunk__36487_36506 = G__36515;
count__36488_36507 = G__36516;
i__36489_36508 = G__36517;
continue;
} else {
var temp__5753__auto___36518 = cljs.core.seq(seq__36486_36505);
if(temp__5753__auto___36518){
var seq__36486_36519__$1 = temp__5753__auto___36518;
if(cljs.core.chunked_seq_QMARK_(seq__36486_36519__$1)){
var c__4649__auto___36520 = cljs.core.chunk_first(seq__36486_36519__$1);
var G__36521 = cljs.core.chunk_rest(seq__36486_36519__$1);
var G__36522 = c__4649__auto___36520;
var G__36523 = cljs.core.count(c__4649__auto___36520);
var G__36524 = (0);
seq__36486_36505 = G__36521;
chunk__36487_36506 = G__36522;
count__36488_36507 = G__36523;
i__36489_36508 = G__36524;
continue;
} else {
var vec__36501_36525 = cljs.core.first(seq__36486_36519__$1);
var container_36526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36501_36525,(0),null);
var comp_36527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36501_36525,(1),null);
reagent.dom.re_render_component(comp_36527,container_36526);


var G__36528 = cljs.core.next(seq__36486_36519__$1);
var G__36529 = null;
var G__36530 = (0);
var G__36531 = (0);
seq__36486_36505 = G__36528;
chunk__36487_36506 = G__36529;
count__36488_36507 = G__36530;
i__36489_36508 = G__36531;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
