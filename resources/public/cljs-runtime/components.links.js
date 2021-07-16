goog.provide('components.links');
components.links.links = (function components$links$links(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4622__auto__ = (function components$links$links_$_iter__26483(s__26484){
return (new cljs.core.LazySeq(null,(function (){
var s__26484__$1 = s__26484;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26484__$1);
if(temp__5753__auto__){
var s__26484__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26484__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__26484__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__26486 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__26485 = (0);
while(true){
if((i__26485 < size__4621__auto__)){
var item = cljs.core._nth(c__4620__auto__,i__26485);
cljs.core.chunk_append(b__26486,(function (){var map__26487 = item;
var map__26487__$1 = cljs.core.__destructure_map(map__26487);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26487__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26487__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26487__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.link.link,img,text,url], null);
})());

var G__26489 = (i__26485 + (1));
i__26485 = G__26489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26486),components$links$links_$_iter__26483(cljs.core.chunk_rest(s__26484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26486),null);
}
} else {
var item = cljs.core.first(s__26484__$2);
return cljs.core.cons((function (){var map__26488 = item;
var map__26488__$1 = cljs.core.__destructure_map(map__26488);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26488__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26488__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26488__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.link.link,img,text,url], null);
})(),components$links$links_$_iter__26483(cljs.core.rest(s__26484__$2)));
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
