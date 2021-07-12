goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36000 = arguments.length;
var i__4830__auto___36001 = (0);
while(true){
if((i__4830__auto___36001 < len__4829__auto___36000)){
args__4835__auto__.push((arguments[i__4830__auto___36001]));

var G__36002 = (i__4830__auto___36001 + (1));
i__4830__auto___36001 = G__36002;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35814){
var G__35815 = cljs.core.first(seq35814);
var seq35814__$1 = cljs.core.next(seq35814);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35815,seq35814__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35822 = cljs.core.seq(sources);
var chunk__35823 = null;
var count__35824 = (0);
var i__35825 = (0);
while(true){
if((i__35825 < count__35824)){
var map__35832 = chunk__35823.cljs$core$IIndexed$_nth$arity$2(null,i__35825);
var map__35832__$1 = cljs.core.__destructure_map(map__35832);
var src = map__35832__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35832__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35832__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35832__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35832__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35833){var e_36003 = e35833;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36003);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36003.message)].join('')));
}

var G__36004 = seq__35822;
var G__36005 = chunk__35823;
var G__36006 = count__35824;
var G__36007 = (i__35825 + (1));
seq__35822 = G__36004;
chunk__35823 = G__36005;
count__35824 = G__36006;
i__35825 = G__36007;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35822);
if(temp__5753__auto__){
var seq__35822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35822__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35822__$1);
var G__36008 = cljs.core.chunk_rest(seq__35822__$1);
var G__36009 = c__4649__auto__;
var G__36010 = cljs.core.count(c__4649__auto__);
var G__36011 = (0);
seq__35822 = G__36008;
chunk__35823 = G__36009;
count__35824 = G__36010;
i__35825 = G__36011;
continue;
} else {
var map__35834 = cljs.core.first(seq__35822__$1);
var map__35834__$1 = cljs.core.__destructure_map(map__35834);
var src = map__35834__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35835){var e_36012 = e35835;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36012);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36012.message)].join('')));
}

var G__36013 = cljs.core.next(seq__35822__$1);
var G__36014 = null;
var G__36015 = (0);
var G__36016 = (0);
seq__35822 = G__36013;
chunk__35823 = G__36014;
count__35824 = G__36015;
i__35825 = G__36016;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35844 = cljs.core.seq(js_requires);
var chunk__35845 = null;
var count__35846 = (0);
var i__35847 = (0);
while(true){
if((i__35847 < count__35846)){
var js_ns = chunk__35845.cljs$core$IIndexed$_nth$arity$2(null,i__35847);
var require_str_36017 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36017);


var G__36018 = seq__35844;
var G__36019 = chunk__35845;
var G__36020 = count__35846;
var G__36021 = (i__35847 + (1));
seq__35844 = G__36018;
chunk__35845 = G__36019;
count__35846 = G__36020;
i__35847 = G__36021;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35844);
if(temp__5753__auto__){
var seq__35844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35844__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35844__$1);
var G__36022 = cljs.core.chunk_rest(seq__35844__$1);
var G__36023 = c__4649__auto__;
var G__36024 = cljs.core.count(c__4649__auto__);
var G__36025 = (0);
seq__35844 = G__36022;
chunk__35845 = G__36023;
count__35846 = G__36024;
i__35847 = G__36025;
continue;
} else {
var js_ns = cljs.core.first(seq__35844__$1);
var require_str_36026 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36026);


var G__36027 = cljs.core.next(seq__35844__$1);
var G__36028 = null;
var G__36029 = (0);
var G__36030 = (0);
seq__35844 = G__36027;
chunk__35845 = G__36028;
count__35846 = G__36029;
i__35847 = G__36030;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35852){
var map__35853 = p__35852;
var map__35853__$1 = cljs.core.__destructure_map(map__35853);
var msg = map__35853__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35853__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35853__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35854(s__35855){
return (new cljs.core.LazySeq(null,(function (){
var s__35855__$1 = s__35855;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35855__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35860 = cljs.core.first(xs__6308__auto__);
var map__35860__$1 = cljs.core.__destructure_map(map__35860);
var src = map__35860__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35860__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__35855__$1,map__35860,map__35860__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35853,map__35853__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35854_$_iter__35856(s__35857){
return (new cljs.core.LazySeq(null,((function (s__35855__$1,map__35860,map__35860__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35853,map__35853__$1,msg,info,reload_info){
return (function (){
var s__35857__$1 = s__35857;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35857__$1);
if(temp__5753__auto____$1){
var s__35857__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35857__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__35857__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__35859 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__35858 = (0);
while(true){
if((i__35858 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__35858);
cljs.core.chunk_append(b__35859,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36031 = (i__35858 + (1));
i__35858 = G__36031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35859),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35854_$_iter__35856(cljs.core.chunk_rest(s__35857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35859),null);
}
} else {
var warning = cljs.core.first(s__35857__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35854_$_iter__35856(cljs.core.rest(s__35857__$2)));
}
} else {
return null;
}
break;
}
});})(s__35855__$1,map__35860,map__35860__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35853,map__35853__$1,msg,info,reload_info))
,null,null));
});})(s__35855__$1,map__35860,map__35860__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35853,map__35853__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35854(cljs.core.rest(s__35855__$1)));
} else {
var G__36032 = cljs.core.rest(s__35855__$1);
s__35855__$1 = G__36032;
continue;
}
} else {
var G__36033 = cljs.core.rest(s__35855__$1);
s__35855__$1 = G__36033;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35861_36034 = cljs.core.seq(warnings);
var chunk__35862_36035 = null;
var count__35863_36036 = (0);
var i__35864_36037 = (0);
while(true){
if((i__35864_36037 < count__35863_36036)){
var map__35867_36038 = chunk__35862_36035.cljs$core$IIndexed$_nth$arity$2(null,i__35864_36037);
var map__35867_36039__$1 = cljs.core.__destructure_map(map__35867_36038);
var w_36040 = map__35867_36039__$1;
var msg_36041__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867_36039__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867_36039__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867_36039__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867_36039__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36044)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36042),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36043),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36041__$1)].join(''));


var G__36045 = seq__35861_36034;
var G__36046 = chunk__35862_36035;
var G__36047 = count__35863_36036;
var G__36048 = (i__35864_36037 + (1));
seq__35861_36034 = G__36045;
chunk__35862_36035 = G__36046;
count__35863_36036 = G__36047;
i__35864_36037 = G__36048;
continue;
} else {
var temp__5753__auto___36049 = cljs.core.seq(seq__35861_36034);
if(temp__5753__auto___36049){
var seq__35861_36050__$1 = temp__5753__auto___36049;
if(cljs.core.chunked_seq_QMARK_(seq__35861_36050__$1)){
var c__4649__auto___36051 = cljs.core.chunk_first(seq__35861_36050__$1);
var G__36052 = cljs.core.chunk_rest(seq__35861_36050__$1);
var G__36053 = c__4649__auto___36051;
var G__36054 = cljs.core.count(c__4649__auto___36051);
var G__36055 = (0);
seq__35861_36034 = G__36052;
chunk__35862_36035 = G__36053;
count__35863_36036 = G__36054;
i__35864_36037 = G__36055;
continue;
} else {
var map__35868_36056 = cljs.core.first(seq__35861_36050__$1);
var map__35868_36057__$1 = cljs.core.__destructure_map(map__35868_36056);
var w_36058 = map__35868_36057__$1;
var msg_36059__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868_36057__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868_36057__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868_36057__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868_36057__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36062)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36060),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36061),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36059__$1)].join(''));


var G__36063 = cljs.core.next(seq__35861_36050__$1);
var G__36064 = null;
var G__36065 = (0);
var G__36066 = (0);
seq__35861_36034 = G__36063;
chunk__35862_36035 = G__36064;
count__35863_36036 = G__36065;
i__35864_36037 = G__36066;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35851_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35851_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35874){
var map__35875 = p__35874;
var map__35875__$1 = cljs.core.__destructure_map(map__35875);
var msg = map__35875__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35875__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35876 = cljs.core.seq(updates);
var chunk__35878 = null;
var count__35879 = (0);
var i__35880 = (0);
while(true){
if((i__35880 < count__35879)){
var path = chunk__35878.cljs$core$IIndexed$_nth$arity$2(null,i__35880);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35919_36067 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35924_36068 = null;
var count__35925_36069 = (0);
var i__35926_36070 = (0);
while(true){
if((i__35926_36070 < count__35925_36069)){
var node_36071 = chunk__35924_36068.cljs$core$IIndexed$_nth$arity$2(null,i__35926_36070);
if(cljs.core.not(node_36071.shadow$old)){
var path_match_36072 = shadow.cljs.devtools.client.browser.match_paths(node_36071.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36072)){
var new_link_36073 = (function (){var G__35938 = node_36071.cloneNode(true);
G__35938.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36072),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35938;
})();
(node_36071.shadow$old = true);

(new_link_36073.onload = ((function (seq__35919_36067,chunk__35924_36068,count__35925_36069,i__35926_36070,seq__35876,chunk__35878,count__35879,i__35880,new_link_36073,path_match_36072,node_36071,path,map__35875,map__35875__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36071);
});})(seq__35919_36067,chunk__35924_36068,count__35925_36069,i__35926_36070,seq__35876,chunk__35878,count__35879,i__35880,new_link_36073,path_match_36072,node_36071,path,map__35875,map__35875__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36072], 0));

goog.dom.insertSiblingAfter(new_link_36073,node_36071);


var G__36074 = seq__35919_36067;
var G__36075 = chunk__35924_36068;
var G__36076 = count__35925_36069;
var G__36077 = (i__35926_36070 + (1));
seq__35919_36067 = G__36074;
chunk__35924_36068 = G__36075;
count__35925_36069 = G__36076;
i__35926_36070 = G__36077;
continue;
} else {
var G__36078 = seq__35919_36067;
var G__36079 = chunk__35924_36068;
var G__36080 = count__35925_36069;
var G__36081 = (i__35926_36070 + (1));
seq__35919_36067 = G__36078;
chunk__35924_36068 = G__36079;
count__35925_36069 = G__36080;
i__35926_36070 = G__36081;
continue;
}
} else {
var G__36082 = seq__35919_36067;
var G__36083 = chunk__35924_36068;
var G__36084 = count__35925_36069;
var G__36085 = (i__35926_36070 + (1));
seq__35919_36067 = G__36082;
chunk__35924_36068 = G__36083;
count__35925_36069 = G__36084;
i__35926_36070 = G__36085;
continue;
}
} else {
var temp__5753__auto___36086 = cljs.core.seq(seq__35919_36067);
if(temp__5753__auto___36086){
var seq__35919_36087__$1 = temp__5753__auto___36086;
if(cljs.core.chunked_seq_QMARK_(seq__35919_36087__$1)){
var c__4649__auto___36088 = cljs.core.chunk_first(seq__35919_36087__$1);
var G__36089 = cljs.core.chunk_rest(seq__35919_36087__$1);
var G__36090 = c__4649__auto___36088;
var G__36091 = cljs.core.count(c__4649__auto___36088);
var G__36092 = (0);
seq__35919_36067 = G__36089;
chunk__35924_36068 = G__36090;
count__35925_36069 = G__36091;
i__35926_36070 = G__36092;
continue;
} else {
var node_36093 = cljs.core.first(seq__35919_36087__$1);
if(cljs.core.not(node_36093.shadow$old)){
var path_match_36094 = shadow.cljs.devtools.client.browser.match_paths(node_36093.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36094)){
var new_link_36095 = (function (){var G__35939 = node_36093.cloneNode(true);
G__35939.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36094),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35939;
})();
(node_36093.shadow$old = true);

(new_link_36095.onload = ((function (seq__35919_36067,chunk__35924_36068,count__35925_36069,i__35926_36070,seq__35876,chunk__35878,count__35879,i__35880,new_link_36095,path_match_36094,node_36093,seq__35919_36087__$1,temp__5753__auto___36086,path,map__35875,map__35875__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36093);
});})(seq__35919_36067,chunk__35924_36068,count__35925_36069,i__35926_36070,seq__35876,chunk__35878,count__35879,i__35880,new_link_36095,path_match_36094,node_36093,seq__35919_36087__$1,temp__5753__auto___36086,path,map__35875,map__35875__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36094], 0));

goog.dom.insertSiblingAfter(new_link_36095,node_36093);


var G__36096 = cljs.core.next(seq__35919_36087__$1);
var G__36097 = null;
var G__36098 = (0);
var G__36099 = (0);
seq__35919_36067 = G__36096;
chunk__35924_36068 = G__36097;
count__35925_36069 = G__36098;
i__35926_36070 = G__36099;
continue;
} else {
var G__36100 = cljs.core.next(seq__35919_36087__$1);
var G__36101 = null;
var G__36102 = (0);
var G__36103 = (0);
seq__35919_36067 = G__36100;
chunk__35924_36068 = G__36101;
count__35925_36069 = G__36102;
i__35926_36070 = G__36103;
continue;
}
} else {
var G__36104 = cljs.core.next(seq__35919_36087__$1);
var G__36105 = null;
var G__36106 = (0);
var G__36107 = (0);
seq__35919_36067 = G__36104;
chunk__35924_36068 = G__36105;
count__35925_36069 = G__36106;
i__35926_36070 = G__36107;
continue;
}
}
} else {
}
}
break;
}


var G__36108 = seq__35876;
var G__36109 = chunk__35878;
var G__36110 = count__35879;
var G__36111 = (i__35880 + (1));
seq__35876 = G__36108;
chunk__35878 = G__36109;
count__35879 = G__36110;
i__35880 = G__36111;
continue;
} else {
var G__36112 = seq__35876;
var G__36113 = chunk__35878;
var G__36114 = count__35879;
var G__36115 = (i__35880 + (1));
seq__35876 = G__36112;
chunk__35878 = G__36113;
count__35879 = G__36114;
i__35880 = G__36115;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35876);
if(temp__5753__auto__){
var seq__35876__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35876__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35876__$1);
var G__36116 = cljs.core.chunk_rest(seq__35876__$1);
var G__36117 = c__4649__auto__;
var G__36118 = cljs.core.count(c__4649__auto__);
var G__36119 = (0);
seq__35876 = G__36116;
chunk__35878 = G__36117;
count__35879 = G__36118;
i__35880 = G__36119;
continue;
} else {
var path = cljs.core.first(seq__35876__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35941_36120 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35945_36121 = null;
var count__35946_36122 = (0);
var i__35947_36123 = (0);
while(true){
if((i__35947_36123 < count__35946_36122)){
var node_36124 = chunk__35945_36121.cljs$core$IIndexed$_nth$arity$2(null,i__35947_36123);
if(cljs.core.not(node_36124.shadow$old)){
var path_match_36125 = shadow.cljs.devtools.client.browser.match_paths(node_36124.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36125)){
var new_link_36126 = (function (){var G__35953 = node_36124.cloneNode(true);
G__35953.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36125),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35953;
})();
(node_36124.shadow$old = true);

(new_link_36126.onload = ((function (seq__35941_36120,chunk__35945_36121,count__35946_36122,i__35947_36123,seq__35876,chunk__35878,count__35879,i__35880,new_link_36126,path_match_36125,node_36124,path,seq__35876__$1,temp__5753__auto__,map__35875,map__35875__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36124);
});})(seq__35941_36120,chunk__35945_36121,count__35946_36122,i__35947_36123,seq__35876,chunk__35878,count__35879,i__35880,new_link_36126,path_match_36125,node_36124,path,seq__35876__$1,temp__5753__auto__,map__35875,map__35875__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36125], 0));

goog.dom.insertSiblingAfter(new_link_36126,node_36124);


var G__36127 = seq__35941_36120;
var G__36128 = chunk__35945_36121;
var G__36129 = count__35946_36122;
var G__36130 = (i__35947_36123 + (1));
seq__35941_36120 = G__36127;
chunk__35945_36121 = G__36128;
count__35946_36122 = G__36129;
i__35947_36123 = G__36130;
continue;
} else {
var G__36131 = seq__35941_36120;
var G__36132 = chunk__35945_36121;
var G__36133 = count__35946_36122;
var G__36134 = (i__35947_36123 + (1));
seq__35941_36120 = G__36131;
chunk__35945_36121 = G__36132;
count__35946_36122 = G__36133;
i__35947_36123 = G__36134;
continue;
}
} else {
var G__36135 = seq__35941_36120;
var G__36136 = chunk__35945_36121;
var G__36137 = count__35946_36122;
var G__36138 = (i__35947_36123 + (1));
seq__35941_36120 = G__36135;
chunk__35945_36121 = G__36136;
count__35946_36122 = G__36137;
i__35947_36123 = G__36138;
continue;
}
} else {
var temp__5753__auto___36139__$1 = cljs.core.seq(seq__35941_36120);
if(temp__5753__auto___36139__$1){
var seq__35941_36140__$1 = temp__5753__auto___36139__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35941_36140__$1)){
var c__4649__auto___36141 = cljs.core.chunk_first(seq__35941_36140__$1);
var G__36142 = cljs.core.chunk_rest(seq__35941_36140__$1);
var G__36143 = c__4649__auto___36141;
var G__36144 = cljs.core.count(c__4649__auto___36141);
var G__36145 = (0);
seq__35941_36120 = G__36142;
chunk__35945_36121 = G__36143;
count__35946_36122 = G__36144;
i__35947_36123 = G__36145;
continue;
} else {
var node_36146 = cljs.core.first(seq__35941_36140__$1);
if(cljs.core.not(node_36146.shadow$old)){
var path_match_36147 = shadow.cljs.devtools.client.browser.match_paths(node_36146.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36147)){
var new_link_36148 = (function (){var G__35954 = node_36146.cloneNode(true);
G__35954.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36147),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35954;
})();
(node_36146.shadow$old = true);

(new_link_36148.onload = ((function (seq__35941_36120,chunk__35945_36121,count__35946_36122,i__35947_36123,seq__35876,chunk__35878,count__35879,i__35880,new_link_36148,path_match_36147,node_36146,seq__35941_36140__$1,temp__5753__auto___36139__$1,path,seq__35876__$1,temp__5753__auto__,map__35875,map__35875__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36146);
});})(seq__35941_36120,chunk__35945_36121,count__35946_36122,i__35947_36123,seq__35876,chunk__35878,count__35879,i__35880,new_link_36148,path_match_36147,node_36146,seq__35941_36140__$1,temp__5753__auto___36139__$1,path,seq__35876__$1,temp__5753__auto__,map__35875,map__35875__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36147], 0));

goog.dom.insertSiblingAfter(new_link_36148,node_36146);


var G__36149 = cljs.core.next(seq__35941_36140__$1);
var G__36150 = null;
var G__36151 = (0);
var G__36152 = (0);
seq__35941_36120 = G__36149;
chunk__35945_36121 = G__36150;
count__35946_36122 = G__36151;
i__35947_36123 = G__36152;
continue;
} else {
var G__36153 = cljs.core.next(seq__35941_36140__$1);
var G__36154 = null;
var G__36155 = (0);
var G__36156 = (0);
seq__35941_36120 = G__36153;
chunk__35945_36121 = G__36154;
count__35946_36122 = G__36155;
i__35947_36123 = G__36156;
continue;
}
} else {
var G__36157 = cljs.core.next(seq__35941_36140__$1);
var G__36158 = null;
var G__36159 = (0);
var G__36160 = (0);
seq__35941_36120 = G__36157;
chunk__35945_36121 = G__36158;
count__35946_36122 = G__36159;
i__35947_36123 = G__36160;
continue;
}
}
} else {
}
}
break;
}


var G__36161 = cljs.core.next(seq__35876__$1);
var G__36162 = null;
var G__36163 = (0);
var G__36164 = (0);
seq__35876 = G__36161;
chunk__35878 = G__36162;
count__35879 = G__36163;
i__35880 = G__36164;
continue;
} else {
var G__36165 = cljs.core.next(seq__35876__$1);
var G__36166 = null;
var G__36167 = (0);
var G__36168 = (0);
seq__35876 = G__36165;
chunk__35878 = G__36166;
count__35879 = G__36167;
i__35880 = G__36168;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35956){
var map__35957 = p__35956;
var map__35957__$1 = cljs.core.__destructure_map(map__35957);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35957__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35958){
var map__35959 = p__35958;
var map__35959__$1 = cljs.core.__destructure_map(map__35959);
var _ = map__35959__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35959__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35968,done,error){
var map__35969 = p__35968;
var map__35969__$1 = cljs.core.__destructure_map(map__35969);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35969__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35972,done,error){
var map__35973 = p__35972;
var map__35973__$1 = cljs.core.__destructure_map(map__35973);
var msg = map__35973__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35982){
var map__35983 = p__35982;
var map__35983__$1 = cljs.core.__destructure_map(map__35983);
var src = map__35983__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35984 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35984) : done.call(null,G__35984));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35985){
var map__35986 = p__35985;
var map__35986__$1 = cljs.core.__destructure_map(map__35986);
var msg__$1 = map__35986__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35986__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35987){var ex = e35987;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35988){
var map__35989 = p__35988;
var map__35989__$1 = cljs.core.__destructure_map(map__35989);
var env = map__35989__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35989__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35992){
var map__35993 = p__35992;
var map__35993__$1 = cljs.core.__destructure_map(map__35993);
var msg = map__35993__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35996){
var map__35997 = p__35996;
var map__35997__$1 = cljs.core.__destructure_map(map__35997);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35997__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35997__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35998){
var map__35999 = p__35998;
var map__35999__$1 = cljs.core.__destructure_map(map__35999);
var svc = map__35999__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35999__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
