goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33887,res){
var map__33888 = p__33887;
var map__33888__$1 = cljs.core.__destructure_map(map__33888);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33888__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33888__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33889 = res;
var G__33889__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33889,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33889);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33889__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33889__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33891 = arguments.length;
switch (G__33891) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33893,msg,handlers,timeout_after_ms){
var map__33894 = p__33893;
var map__33894__$1 = cljs.core.__destructure_map(map__33894);
var runtime = map__33894__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33894__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___34200 = arguments.length;
var i__4830__auto___34201 = (0);
while(true){
if((i__4830__auto___34201 < len__4829__auto___34200)){
args__4835__auto__.push((arguments[i__4830__auto___34201]));

var G__34202 = (i__4830__auto___34201 + (1));
i__4830__auto___34201 = G__34202;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33898,ev,args){
var map__33899 = p__33898;
var map__33899__$1 = cljs.core.__destructure_map(map__33899);
var runtime = map__33899__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33899__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33900 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33903 = null;
var count__33904 = (0);
var i__33905 = (0);
while(true){
if((i__33905 < count__33904)){
var ext = chunk__33903.cljs$core$IIndexed$_nth$arity$2(null,i__33905);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34203 = seq__33900;
var G__34204 = chunk__33903;
var G__34205 = count__33904;
var G__34206 = (i__33905 + (1));
seq__33900 = G__34203;
chunk__33903 = G__34204;
count__33904 = G__34205;
i__33905 = G__34206;
continue;
} else {
var G__34207 = seq__33900;
var G__34208 = chunk__33903;
var G__34209 = count__33904;
var G__34210 = (i__33905 + (1));
seq__33900 = G__34207;
chunk__33903 = G__34208;
count__33904 = G__34209;
i__33905 = G__34210;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33900);
if(temp__5753__auto__){
var seq__33900__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33900__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33900__$1);
var G__34211 = cljs.core.chunk_rest(seq__33900__$1);
var G__34212 = c__4649__auto__;
var G__34213 = cljs.core.count(c__4649__auto__);
var G__34214 = (0);
seq__33900 = G__34211;
chunk__33903 = G__34212;
count__33904 = G__34213;
i__33905 = G__34214;
continue;
} else {
var ext = cljs.core.first(seq__33900__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34216 = cljs.core.next(seq__33900__$1);
var G__34217 = null;
var G__34218 = (0);
var G__34219 = (0);
seq__33900 = G__34216;
chunk__33903 = G__34217;
count__33904 = G__34218;
i__33905 = G__34219;
continue;
} else {
var G__34221 = cljs.core.next(seq__33900__$1);
var G__34222 = null;
var G__34223 = (0);
var G__34224 = (0);
seq__33900 = G__34221;
chunk__33903 = G__34222;
count__33904 = G__34223;
i__33905 = G__34224;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33895){
var G__33896 = cljs.core.first(seq33895);
var seq33895__$1 = cljs.core.next(seq33895);
var G__33897 = cljs.core.first(seq33895__$1);
var seq33895__$2 = cljs.core.next(seq33895__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33896,G__33897,seq33895__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33912,p__33913){
var map__33914 = p__33912;
var map__33914__$1 = cljs.core.__destructure_map(map__33914);
var runtime = map__33914__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33914__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33915 = p__33913;
var map__33915__$1 = cljs.core.__destructure_map(map__33915);
var msg = map__33915__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33915__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33961 = cljs.core.deref(state_ref);
var map__33961__$1 = cljs.core.__destructure_map(map__33961);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33969){
var map__33975 = p__33969;
var map__33975__$1 = cljs.core.__destructure_map(map__33975);
var runtime = map__33975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33998,msg){
var map__33999 = p__33998;
var map__33999__$1 = cljs.core.__destructure_map(map__33999);
var runtime = map__33999__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33999__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34011,key,p__34012){
var map__34013 = p__34011;
var map__34013__$1 = cljs.core.__destructure_map(map__34013);
var state = map__34013__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34013__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34015 = p__34012;
var map__34015__$1 = cljs.core.__destructure_map(map__34015);
var spec = map__34015__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34015__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34076,key,spec){
var map__34077 = p__34076;
var map__34077__$1 = cljs.core.__destructure_map(map__34077);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34078_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34078_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34079_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34079_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34080_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34080_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34081_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34081_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34082_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34082_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34148,key){
var map__34149 = p__34148;
var map__34149__$1 = cljs.core.__destructure_map(map__34149);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34149__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34150,msg){
var map__34151 = p__34150;
var map__34151__$1 = cljs.core.__destructure_map(map__34151);
var runtime = map__34151__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34151__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34171,p__34172){
var map__34173 = p__34171;
var map__34173__$1 = cljs.core.__destructure_map(map__34173);
var runtime = map__34173__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34173__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34174 = p__34172;
var map__34174__$1 = cljs.core.__destructure_map(map__34174);
var msg = map__34174__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34174__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34174__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34182 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34184 = null;
var count__34185 = (0);
var i__34186 = (0);
while(true){
if((i__34186 < count__34185)){
var map__34194 = chunk__34184.cljs$core$IIndexed$_nth$arity$2(null,i__34186);
var map__34194__$1 = cljs.core.__destructure_map(map__34194);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34194__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34237 = seq__34182;
var G__34238 = chunk__34184;
var G__34239 = count__34185;
var G__34240 = (i__34186 + (1));
seq__34182 = G__34237;
chunk__34184 = G__34238;
count__34185 = G__34239;
i__34186 = G__34240;
continue;
} else {
var G__34241 = seq__34182;
var G__34242 = chunk__34184;
var G__34243 = count__34185;
var G__34244 = (i__34186 + (1));
seq__34182 = G__34241;
chunk__34184 = G__34242;
count__34185 = G__34243;
i__34186 = G__34244;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34182);
if(temp__5753__auto__){
var seq__34182__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34182__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34182__$1);
var G__34246 = cljs.core.chunk_rest(seq__34182__$1);
var G__34247 = c__4649__auto__;
var G__34248 = cljs.core.count(c__4649__auto__);
var G__34249 = (0);
seq__34182 = G__34246;
chunk__34184 = G__34247;
count__34185 = G__34248;
i__34186 = G__34249;
continue;
} else {
var map__34195 = cljs.core.first(seq__34182__$1);
var map__34195__$1 = cljs.core.__destructure_map(map__34195);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34195__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34250 = cljs.core.next(seq__34182__$1);
var G__34251 = null;
var G__34252 = (0);
var G__34253 = (0);
seq__34182 = G__34250;
chunk__34184 = G__34251;
count__34185 = G__34252;
i__34186 = G__34253;
continue;
} else {
var G__34254 = cljs.core.next(seq__34182__$1);
var G__34255 = null;
var G__34256 = (0);
var G__34257 = (0);
seq__34182 = G__34254;
chunk__34184 = G__34255;
count__34185 = G__34256;
i__34186 = G__34257;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
