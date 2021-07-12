goog.provide('components.experience');
components.experience.experiences_map = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start-date","start-date",295168731),"Sep. 2020",new cljs.core.Keyword(null,"end-date","end-date",-208259642),"Present",new cljs.core.Keyword(null,"hole","hole",-743450790),"BackEnd Developer",new cljs.core.Keyword(null,"company","company",-340475075),"PayGo Pagamentos, S\u00E3o Paulo.",new cljs.core.Keyword(null,"experiences","experiences",-661793643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"experience","experience",1091946507),"Backend development with Clojure and ClojureScript."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"experience","experience",1091946507),"CI/CD with GitHub Actions"], null)], null)], null)], null);
components.experience.experience_content = (function components$experience$experience_content(p__30826){
var map__30827 = p__30826;
var map__30827__$1 = cljs.core.__destructure_map(map__30827);
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30827__$1,new cljs.core.Keyword(null,"start-date","start-date",295168731));
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30827__$1,new cljs.core.Keyword(null,"end-date","end-date",-208259642));
var hole = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30827__$1,new cljs.core.Keyword(null,"hole","hole",-743450790));
var company = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30827__$1,new cljs.core.Keyword(null,"company","company",-340475075));
var experiences = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30827__$1,new cljs.core.Keyword(null,"experiences","experiences",-661793643));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),start_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),end_date], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),hole], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),company], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4622__auto__ = (function components$experience$experience_content_$_iter__30828(s__30829){
return (new cljs.core.LazySeq(null,(function (){
var s__30829__$1 = s__30829;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30829__$1);
if(temp__5753__auto__){
var s__30829__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30829__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30829__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30831 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30830 = (0);
while(true){
if((i__30830 < size__4621__auto__)){
var item = cljs.core._nth(c__4620__auto__,i__30830);
cljs.core.chunk_append(b__30831,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"experience","experience",1091946507).cljs$core$IFn$_invoke$arity$1(item)], null));

var G__30836 = (i__30830 + (1));
i__30830 = G__30836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30831),components$experience$experience_content_$_iter__30828(cljs.core.chunk_rest(s__30829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30831),null);
}
} else {
var item = cljs.core.first(s__30829__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"experience","experience",1091946507).cljs$core$IFn$_invoke$arity$1(item)], null),components$experience$experience_content_$_iter__30828(cljs.core.rest(s__30829__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(experiences);
})()], null)], null)], null);
});
components.experience.experience = (function components$experience$experience(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title","h2.title",866247517),"Experience"], null),(function (){var iter__4622__auto__ = (function components$experience$experience_$_iter__30832(s__30833){
return (new cljs.core.LazySeq(null,(function (){
var s__30833__$1 = s__30833;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30833__$1);
if(temp__5753__auto__){
var s__30833__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30833__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30833__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30835 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30834 = (0);
while(true){
if((i__30834 < size__4621__auto__)){
var item = cljs.core._nth(c__4620__auto__,i__30834);
cljs.core.chunk_append(b__30835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.experience.experience_content,item], null));

var G__30837 = (i__30834 + (1));
i__30834 = G__30837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30835),components$experience$experience_$_iter__30832(cljs.core.chunk_rest(s__30833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30835),null);
}
} else {
var item = cljs.core.first(s__30833__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.experience.experience_content,item], null),components$experience$experience_$_iter__30832(cljs.core.rest(s__30833__$2)));
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

//# sourceMappingURL=components.experience.js.map
