goog.provide('components.links');
components.links.links = (function components$links$links(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),(function (){var iter__4622__auto__ = (function components$links$links_$_iter__30819(s__30820){
return (new cljs.core.LazySeq(null,(function (){
var s__30820__$1 = s__30820;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30820__$1);
if(temp__5753__auto__){
var s__30820__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30820__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30820__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30822 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30821 = (0);
while(true){
if((i__30821 < size__4621__auto__)){
var item = cljs.core._nth(c__4620__auto__,i__30821);
cljs.core.chunk_append(b__30822,(function (){var map__30823 = item;
var map__30823__$1 = cljs.core.__destructure_map(map__30823);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30823__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30823__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30823__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.link.link,img,text,url], null)], null);
})());

var G__30825 = (i__30821 + (1));
i__30821 = G__30825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30822),components$links$links_$_iter__30819(cljs.core.chunk_rest(s__30820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30822),null);
}
} else {
var item = cljs.core.first(s__30820__$2);
return cljs.core.cons((function (){var map__30824 = item;
var map__30824__$1 = cljs.core.__destructure_map(map__30824);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30824__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30824__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30824__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.link.link,img,text,url], null)], null);
})(),components$links$links_$_iter__30819(cljs.core.rest(s__30820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(items);
})()], null);
});

//# sourceMappingURL=components.links.js.map
