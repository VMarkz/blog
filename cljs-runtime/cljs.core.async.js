goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30859 = arguments.length;
switch (G__30859) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30860 = (function (f,blockable,meta30861){
this.f = f;
this.blockable = blockable;
this.meta30861 = meta30861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30862,meta30861__$1){
var self__ = this;
var _30862__$1 = this;
return (new cljs.core.async.t_cljs$core$async30860(self__.f,self__.blockable,meta30861__$1));
}));

(cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30862){
var self__ = this;
var _30862__$1 = this;
return self__.meta30861;
}));

(cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30861","meta30861",-813954176,null)], null);
}));

(cljs.core.async.t_cljs$core$async30860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30860");

(cljs.core.async.t_cljs$core$async30860.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30860.
 */
cljs.core.async.__GT_t_cljs$core$async30860 = (function cljs$core$async$__GT_t_cljs$core$async30860(f__$1,blockable__$1,meta30861){
return (new cljs.core.async.t_cljs$core$async30860(f__$1,blockable__$1,meta30861));
});

}

return (new cljs.core.async.t_cljs$core$async30860(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30878 = arguments.length;
switch (G__30878) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30880 = arguments.length;
switch (G__30880) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30888 = arguments.length;
switch (G__30888) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32405 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32405) : fn1.call(null,val_32405));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32405) : fn1.call(null,val_32405));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30890 = arguments.length;
switch (G__30890) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___32411 = n;
var x_32412 = (0);
while(true){
if((x_32412 < n__4706__auto___32411)){
(a[x_32412] = x_32412);

var G__32413 = (x_32412 + (1));
x_32412 = G__32413;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30891 = (function (flag,meta30892){
this.flag = flag;
this.meta30892 = meta30892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30893,meta30892__$1){
var self__ = this;
var _30893__$1 = this;
return (new cljs.core.async.t_cljs$core$async30891(self__.flag,meta30892__$1));
}));

(cljs.core.async.t_cljs$core$async30891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30893){
var self__ = this;
var _30893__$1 = this;
return self__.meta30892;
}));

(cljs.core.async.t_cljs$core$async30891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30892","meta30892",-951460591,null)], null);
}));

(cljs.core.async.t_cljs$core$async30891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30891");

(cljs.core.async.t_cljs$core$async30891.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30891.
 */
cljs.core.async.__GT_t_cljs$core$async30891 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30891(flag__$1,meta30892){
return (new cljs.core.async.t_cljs$core$async30891(flag__$1,meta30892));
});

}

return (new cljs.core.async.t_cljs$core$async30891(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30894 = (function (flag,cb,meta30895){
this.flag = flag;
this.cb = cb;
this.meta30895 = meta30895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30896,meta30895__$1){
var self__ = this;
var _30896__$1 = this;
return (new cljs.core.async.t_cljs$core$async30894(self__.flag,self__.cb,meta30895__$1));
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30896){
var self__ = this;
var _30896__$1 = this;
return self__.meta30895;
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30895","meta30895",-444132911,null)], null);
}));

(cljs.core.async.t_cljs$core$async30894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30894");

(cljs.core.async.t_cljs$core$async30894.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30894.
 */
cljs.core.async.__GT_t_cljs$core$async30894 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30894(flag__$1,cb__$1,meta30895){
return (new cljs.core.async.t_cljs$core$async30894(flag__$1,cb__$1,meta30895));
});

}

return (new cljs.core.async.t_cljs$core$async30894(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30897_SHARP_){
var G__30899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30897_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30899) : fret.call(null,G__30899));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30898_SHARP_){
var G__30900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30898_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30900) : fret.call(null,G__30900));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32414 = (i + (1));
i = G__32414;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32415 = arguments.length;
var i__4830__auto___32416 = (0);
while(true){
if((i__4830__auto___32416 < len__4829__auto___32415)){
args__4835__auto__.push((arguments[i__4830__auto___32416]));

var G__32417 = (i__4830__auto___32416 + (1));
i__4830__auto___32416 = G__32417;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30903){
var map__30904 = p__30903;
var map__30904__$1 = cljs.core.__destructure_map(map__30904);
var opts = map__30904__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30901){
var G__30902 = cljs.core.first(seq30901);
var seq30901__$1 = cljs.core.next(seq30901);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30902,seq30901__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30906 = arguments.length;
switch (G__30906) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30798__auto___32419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_30930){
var state_val_30931 = (state_30930[(1)]);
if((state_val_30931 === (7))){
var inst_30926 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30932_32420 = state_30930__$1;
(statearr_30932_32420[(2)] = inst_30926);

(statearr_30932_32420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (1))){
var state_30930__$1 = state_30930;
var statearr_30933_32421 = state_30930__$1;
(statearr_30933_32421[(2)] = null);

(statearr_30933_32421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (4))){
var inst_30909 = (state_30930[(7)]);
var inst_30909__$1 = (state_30930[(2)]);
var inst_30910 = (inst_30909__$1 == null);
var state_30930__$1 = (function (){var statearr_30934 = state_30930;
(statearr_30934[(7)] = inst_30909__$1);

return statearr_30934;
})();
if(cljs.core.truth_(inst_30910)){
var statearr_30935_32422 = state_30930__$1;
(statearr_30935_32422[(1)] = (5));

} else {
var statearr_30936_32423 = state_30930__$1;
(statearr_30936_32423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (13))){
var state_30930__$1 = state_30930;
var statearr_30937_32424 = state_30930__$1;
(statearr_30937_32424[(2)] = null);

(statearr_30937_32424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (6))){
var inst_30909 = (state_30930[(7)]);
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30930__$1,(11),to,inst_30909);
} else {
if((state_val_30931 === (3))){
var inst_30928 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30930__$1,inst_30928);
} else {
if((state_val_30931 === (12))){
var state_30930__$1 = state_30930;
var statearr_30938_32425 = state_30930__$1;
(statearr_30938_32425[(2)] = null);

(statearr_30938_32425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (2))){
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30930__$1,(4),from);
} else {
if((state_val_30931 === (11))){
var inst_30919 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
if(cljs.core.truth_(inst_30919)){
var statearr_30939_32426 = state_30930__$1;
(statearr_30939_32426[(1)] = (12));

} else {
var statearr_30940_32428 = state_30930__$1;
(statearr_30940_32428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (9))){
var state_30930__$1 = state_30930;
var statearr_30941_32430 = state_30930__$1;
(statearr_30941_32430[(2)] = null);

(statearr_30941_32430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (5))){
var state_30930__$1 = state_30930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30942_32431 = state_30930__$1;
(statearr_30942_32431[(1)] = (8));

} else {
var statearr_30943_32432 = state_30930__$1;
(statearr_30943_32432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (14))){
var inst_30924 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30944_32433 = state_30930__$1;
(statearr_30944_32433[(2)] = inst_30924);

(statearr_30944_32433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (10))){
var inst_30916 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30945_32434 = state_30930__$1;
(statearr_30945_32434[(2)] = inst_30916);

(statearr_30945_32434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (8))){
var inst_30913 = cljs.core.async.close_BANG_(to);
var state_30930__$1 = state_30930;
var statearr_30946_32435 = state_30930__$1;
(statearr_30946_32435[(2)] = inst_30913);

(statearr_30946_32435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_30947 = [null,null,null,null,null,null,null,null];
(statearr_30947[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_30947[(1)] = (1));

return statearr_30947;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_30930){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_30930);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e30948){var ex__30634__auto__ = e30948;
var statearr_30949_32436 = state_30930;
(statearr_30949_32436[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_30930[(4)]))){
var statearr_30950_32437 = state_30930;
(statearr_30950_32437[(1)] = cljs.core.first((state_30930[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32438 = state_30930;
state_30930 = G__32438;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_30930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_30930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_30951 = f__30799__auto__();
(statearr_30951[(6)] = c__30798__auto___32419);

return statearr_30951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30952){
var vec__30953 = p__30952;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30953,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30953,(1),null);
var job = vec__30953;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30798__auto___32439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_30960){
var state_val_30961 = (state_30960[(1)]);
if((state_val_30961 === (1))){
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30960__$1,(2),res,v);
} else {
if((state_val_30961 === (2))){
var inst_30957 = (state_30960[(2)]);
var inst_30958 = cljs.core.async.close_BANG_(res);
var state_30960__$1 = (function (){var statearr_30962 = state_30960;
(statearr_30962[(7)] = inst_30957);

return statearr_30962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30960__$1,inst_30958);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0 = (function (){
var statearr_30963 = [null,null,null,null,null,null,null,null];
(statearr_30963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__);

(statearr_30963[(1)] = (1));

return statearr_30963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1 = (function (state_30960){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_30960);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e30964){var ex__30634__auto__ = e30964;
var statearr_30965_32440 = state_30960;
(statearr_30965_32440[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_30960[(4)]))){
var statearr_30966_32441 = state_30960;
(statearr_30966_32441[(1)] = cljs.core.first((state_30960[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32442 = state_30960;
state_30960 = G__32442;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = function(state_30960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1.call(this,state_30960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_30967 = f__30799__auto__();
(statearr_30967[(6)] = c__30798__auto___32439);

return statearr_30967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30968){
var vec__30969 = p__30968;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30969,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30969,(1),null);
var job = vec__30969;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___32443 = n;
var __32444 = (0);
while(true){
if((__32444 < n__4706__auto___32443)){
var G__30972_32445 = type;
var G__30972_32446__$1 = (((G__30972_32445 instanceof cljs.core.Keyword))?G__30972_32445.fqn:null);
switch (G__30972_32446__$1) {
case "compute":
var c__30798__auto___32448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32444,c__30798__auto___32448,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async){
return (function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = ((function (__32444,c__30798__auto___32448,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async){
return (function (state_30985){
var state_val_30986 = (state_30985[(1)]);
if((state_val_30986 === (1))){
var state_30985__$1 = state_30985;
var statearr_30987_32449 = state_30985__$1;
(statearr_30987_32449[(2)] = null);

(statearr_30987_32449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (2))){
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30985__$1,(4),jobs);
} else {
if((state_val_30986 === (3))){
var inst_30983 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30985__$1,inst_30983);
} else {
if((state_val_30986 === (4))){
var inst_30975 = (state_30985[(2)]);
var inst_30976 = process(inst_30975);
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30976)){
var statearr_30988_32451 = state_30985__$1;
(statearr_30988_32451[(1)] = (5));

} else {
var statearr_30989_32452 = state_30985__$1;
(statearr_30989_32452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (5))){
var state_30985__$1 = state_30985;
var statearr_30990_32453 = state_30985__$1;
(statearr_30990_32453[(2)] = null);

(statearr_30990_32453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (6))){
var state_30985__$1 = state_30985;
var statearr_30991_32454 = state_30985__$1;
(statearr_30991_32454[(2)] = null);

(statearr_30991_32454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (7))){
var inst_30981 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_30992_32455 = state_30985__$1;
(statearr_30992_32455[(2)] = inst_30981);

(statearr_30992_32455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32444,c__30798__auto___32448,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async))
;
return ((function (__32444,switch__30630__auto__,c__30798__auto___32448,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0 = (function (){
var statearr_30993 = [null,null,null,null,null,null,null];
(statearr_30993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__);

(statearr_30993[(1)] = (1));

return statearr_30993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1 = (function (state_30985){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_30985);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e30994){var ex__30634__auto__ = e30994;
var statearr_30995_32458 = state_30985;
(statearr_30995_32458[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_30985[(4)]))){
var statearr_30996_32459 = state_30985;
(statearr_30996_32459[(1)] = cljs.core.first((state_30985[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32460 = state_30985;
state_30985 = G__32460;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = function(state_30985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1.call(this,state_30985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__;
})()
;})(__32444,switch__30630__auto__,c__30798__auto___32448,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async))
})();
var state__30800__auto__ = (function (){var statearr_30997 = f__30799__auto__();
(statearr_30997[(6)] = c__30798__auto___32448);

return statearr_30997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
});})(__32444,c__30798__auto___32448,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async))
);


break;
case "async":
var c__30798__auto___32461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32444,c__30798__auto___32461,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async){
return (function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = ((function (__32444,c__30798__auto___32461,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async){
return (function (state_31010){
var state_val_31011 = (state_31010[(1)]);
if((state_val_31011 === (1))){
var state_31010__$1 = state_31010;
var statearr_31012_32462 = state_31010__$1;
(statearr_31012_32462[(2)] = null);

(statearr_31012_32462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (2))){
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31010__$1,(4),jobs);
} else {
if((state_val_31011 === (3))){
var inst_31008 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31010__$1,inst_31008);
} else {
if((state_val_31011 === (4))){
var inst_31000 = (state_31010[(2)]);
var inst_31001 = async(inst_31000);
var state_31010__$1 = state_31010;
if(cljs.core.truth_(inst_31001)){
var statearr_31013_32463 = state_31010__$1;
(statearr_31013_32463[(1)] = (5));

} else {
var statearr_31014_32464 = state_31010__$1;
(statearr_31014_32464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (5))){
var state_31010__$1 = state_31010;
var statearr_31015_32466 = state_31010__$1;
(statearr_31015_32466[(2)] = null);

(statearr_31015_32466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (6))){
var state_31010__$1 = state_31010;
var statearr_31016_32468 = state_31010__$1;
(statearr_31016_32468[(2)] = null);

(statearr_31016_32468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (7))){
var inst_31006 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31017_32469 = state_31010__$1;
(statearr_31017_32469[(2)] = inst_31006);

(statearr_31017_32469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32444,c__30798__auto___32461,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async))
;
return ((function (__32444,switch__30630__auto__,c__30798__auto___32461,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0 = (function (){
var statearr_31018 = [null,null,null,null,null,null,null];
(statearr_31018[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__);

(statearr_31018[(1)] = (1));

return statearr_31018;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1 = (function (state_31010){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31010);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31019){var ex__30634__auto__ = e31019;
var statearr_31020_32470 = state_31010;
(statearr_31020_32470[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31010[(4)]))){
var statearr_31021_32471 = state_31010;
(statearr_31021_32471[(1)] = cljs.core.first((state_31010[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32472 = state_31010;
state_31010 = G__32472;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = function(state_31010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1.call(this,state_31010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__;
})()
;})(__32444,switch__30630__auto__,c__30798__auto___32461,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async))
})();
var state__30800__auto__ = (function (){var statearr_31022 = f__30799__auto__();
(statearr_31022[(6)] = c__30798__auto___32461);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
});})(__32444,c__30798__auto___32461,G__30972_32445,G__30972_32446__$1,n__4706__auto___32443,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30972_32446__$1)].join('')));

}

var G__32473 = (__32444 + (1));
__32444 = G__32473;
continue;
} else {
}
break;
}

var c__30798__auto___32474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31044){
var state_val_31045 = (state_31044[(1)]);
if((state_val_31045 === (7))){
var inst_31040 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31046_32477 = state_31044__$1;
(statearr_31046_32477[(2)] = inst_31040);

(statearr_31046_32477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (1))){
var state_31044__$1 = state_31044;
var statearr_31047_32478 = state_31044__$1;
(statearr_31047_32478[(2)] = null);

(statearr_31047_32478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (4))){
var inst_31025 = (state_31044[(7)]);
var inst_31025__$1 = (state_31044[(2)]);
var inst_31026 = (inst_31025__$1 == null);
var state_31044__$1 = (function (){var statearr_31048 = state_31044;
(statearr_31048[(7)] = inst_31025__$1);

return statearr_31048;
})();
if(cljs.core.truth_(inst_31026)){
var statearr_31049_32479 = state_31044__$1;
(statearr_31049_32479[(1)] = (5));

} else {
var statearr_31050_32480 = state_31044__$1;
(statearr_31050_32480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (6))){
var inst_31030 = (state_31044[(8)]);
var inst_31025 = (state_31044[(7)]);
var inst_31030__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31032 = [inst_31025,inst_31030__$1];
var inst_31033 = (new cljs.core.PersistentVector(null,2,(5),inst_31031,inst_31032,null));
var state_31044__$1 = (function (){var statearr_31051 = state_31044;
(statearr_31051[(8)] = inst_31030__$1);

return statearr_31051;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31044__$1,(8),jobs,inst_31033);
} else {
if((state_val_31045 === (3))){
var inst_31042 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31044__$1,inst_31042);
} else {
if((state_val_31045 === (2))){
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31044__$1,(4),from);
} else {
if((state_val_31045 === (9))){
var inst_31037 = (state_31044[(2)]);
var state_31044__$1 = (function (){var statearr_31052 = state_31044;
(statearr_31052[(9)] = inst_31037);

return statearr_31052;
})();
var statearr_31053_32481 = state_31044__$1;
(statearr_31053_32481[(2)] = null);

(statearr_31053_32481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (5))){
var inst_31028 = cljs.core.async.close_BANG_(jobs);
var state_31044__$1 = state_31044;
var statearr_31054_32482 = state_31044__$1;
(statearr_31054_32482[(2)] = inst_31028);

(statearr_31054_32482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (8))){
var inst_31030 = (state_31044[(8)]);
var inst_31035 = (state_31044[(2)]);
var state_31044__$1 = (function (){var statearr_31055 = state_31044;
(statearr_31055[(10)] = inst_31035);

return statearr_31055;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31044__$1,(9),results,inst_31030);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0 = (function (){
var statearr_31056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__);

(statearr_31056[(1)] = (1));

return statearr_31056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1 = (function (state_31044){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31044);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31057){var ex__30634__auto__ = e31057;
var statearr_31058_32485 = state_31044;
(statearr_31058_32485[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31044[(4)]))){
var statearr_31059_32486 = state_31044;
(statearr_31059_32486[(1)] = cljs.core.first((state_31044[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32487 = state_31044;
state_31044 = G__32487;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = function(state_31044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1.call(this,state_31044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31060 = f__30799__auto__();
(statearr_31060[(6)] = c__30798__auto___32474);

return statearr_31060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


var c__30798__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31098){
var state_val_31099 = (state_31098[(1)]);
if((state_val_31099 === (7))){
var inst_31094 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31100_32488 = state_31098__$1;
(statearr_31100_32488[(2)] = inst_31094);

(statearr_31100_32488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (20))){
var state_31098__$1 = state_31098;
var statearr_31101_32489 = state_31098__$1;
(statearr_31101_32489[(2)] = null);

(statearr_31101_32489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (1))){
var state_31098__$1 = state_31098;
var statearr_31102_32490 = state_31098__$1;
(statearr_31102_32490[(2)] = null);

(statearr_31102_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (4))){
var inst_31063 = (state_31098[(7)]);
var inst_31063__$1 = (state_31098[(2)]);
var inst_31064 = (inst_31063__$1 == null);
var state_31098__$1 = (function (){var statearr_31103 = state_31098;
(statearr_31103[(7)] = inst_31063__$1);

return statearr_31103;
})();
if(cljs.core.truth_(inst_31064)){
var statearr_31104_32491 = state_31098__$1;
(statearr_31104_32491[(1)] = (5));

} else {
var statearr_31105_32492 = state_31098__$1;
(statearr_31105_32492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (15))){
var inst_31076 = (state_31098[(8)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31098__$1,(18),to,inst_31076);
} else {
if((state_val_31099 === (21))){
var inst_31089 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31106_32493 = state_31098__$1;
(statearr_31106_32493[(2)] = inst_31089);

(statearr_31106_32493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (13))){
var inst_31091 = (state_31098[(2)]);
var state_31098__$1 = (function (){var statearr_31107 = state_31098;
(statearr_31107[(9)] = inst_31091);

return statearr_31107;
})();
var statearr_31108_32495 = state_31098__$1;
(statearr_31108_32495[(2)] = null);

(statearr_31108_32495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (6))){
var inst_31063 = (state_31098[(7)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31098__$1,(11),inst_31063);
} else {
if((state_val_31099 === (17))){
var inst_31084 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31084)){
var statearr_31109_32497 = state_31098__$1;
(statearr_31109_32497[(1)] = (19));

} else {
var statearr_31110_32498 = state_31098__$1;
(statearr_31110_32498[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (3))){
var inst_31096 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31098__$1,inst_31096);
} else {
if((state_val_31099 === (12))){
var inst_31073 = (state_31098[(10)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31098__$1,(14),inst_31073);
} else {
if((state_val_31099 === (2))){
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31098__$1,(4),results);
} else {
if((state_val_31099 === (19))){
var state_31098__$1 = state_31098;
var statearr_31111_32499 = state_31098__$1;
(statearr_31111_32499[(2)] = null);

(statearr_31111_32499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (11))){
var inst_31073 = (state_31098[(2)]);
var state_31098__$1 = (function (){var statearr_31112 = state_31098;
(statearr_31112[(10)] = inst_31073);

return statearr_31112;
})();
var statearr_31113_32500 = state_31098__$1;
(statearr_31113_32500[(2)] = null);

(statearr_31113_32500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (9))){
var state_31098__$1 = state_31098;
var statearr_31114_32501 = state_31098__$1;
(statearr_31114_32501[(2)] = null);

(statearr_31114_32501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (5))){
var state_31098__$1 = state_31098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31115_32502 = state_31098__$1;
(statearr_31115_32502[(1)] = (8));

} else {
var statearr_31116_32503 = state_31098__$1;
(statearr_31116_32503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (14))){
var inst_31078 = (state_31098[(11)]);
var inst_31076 = (state_31098[(8)]);
var inst_31076__$1 = (state_31098[(2)]);
var inst_31077 = (inst_31076__$1 == null);
var inst_31078__$1 = cljs.core.not(inst_31077);
var state_31098__$1 = (function (){var statearr_31117 = state_31098;
(statearr_31117[(11)] = inst_31078__$1);

(statearr_31117[(8)] = inst_31076__$1);

return statearr_31117;
})();
if(inst_31078__$1){
var statearr_31118_32504 = state_31098__$1;
(statearr_31118_32504[(1)] = (15));

} else {
var statearr_31119_32505 = state_31098__$1;
(statearr_31119_32505[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (16))){
var inst_31078 = (state_31098[(11)]);
var state_31098__$1 = state_31098;
var statearr_31120_32506 = state_31098__$1;
(statearr_31120_32506[(2)] = inst_31078);

(statearr_31120_32506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (10))){
var inst_31070 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31121_32508 = state_31098__$1;
(statearr_31121_32508[(2)] = inst_31070);

(statearr_31121_32508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (18))){
var inst_31081 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31122_32510 = state_31098__$1;
(statearr_31122_32510[(2)] = inst_31081);

(statearr_31122_32510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (8))){
var inst_31067 = cljs.core.async.close_BANG_(to);
var state_31098__$1 = state_31098;
var statearr_31123_32511 = state_31098__$1;
(statearr_31123_32511[(2)] = inst_31067);

(statearr_31123_32511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0 = (function (){
var statearr_31124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__);

(statearr_31124[(1)] = (1));

return statearr_31124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1 = (function (state_31098){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31098);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31125){var ex__30634__auto__ = e31125;
var statearr_31126_32512 = state_31098;
(statearr_31126_32512[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31098[(4)]))){
var statearr_31127_32513 = state_31098;
(statearr_31127_32513[(1)] = cljs.core.first((state_31098[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32514 = state_31098;
state_31098 = G__32514;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__ = function(state_31098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1.call(this,state_31098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30631__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31128 = f__30799__auto__();
(statearr_31128[(6)] = c__30798__auto__);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));

return c__30798__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31130 = arguments.length;
switch (G__31130) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31132 = arguments.length;
switch (G__31132) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31134 = arguments.length;
switch (G__31134) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30798__auto___32519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31160){
var state_val_31161 = (state_31160[(1)]);
if((state_val_31161 === (7))){
var inst_31156 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31162_32520 = state_31160__$1;
(statearr_31162_32520[(2)] = inst_31156);

(statearr_31162_32520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (1))){
var state_31160__$1 = state_31160;
var statearr_31163_32521 = state_31160__$1;
(statearr_31163_32521[(2)] = null);

(statearr_31163_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (4))){
var inst_31137 = (state_31160[(7)]);
var inst_31137__$1 = (state_31160[(2)]);
var inst_31138 = (inst_31137__$1 == null);
var state_31160__$1 = (function (){var statearr_31164 = state_31160;
(statearr_31164[(7)] = inst_31137__$1);

return statearr_31164;
})();
if(cljs.core.truth_(inst_31138)){
var statearr_31165_32522 = state_31160__$1;
(statearr_31165_32522[(1)] = (5));

} else {
var statearr_31166_32523 = state_31160__$1;
(statearr_31166_32523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (13))){
var state_31160__$1 = state_31160;
var statearr_31167_32524 = state_31160__$1;
(statearr_31167_32524[(2)] = null);

(statearr_31167_32524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (6))){
var inst_31137 = (state_31160[(7)]);
var inst_31143 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31137) : p.call(null,inst_31137));
var state_31160__$1 = state_31160;
if(cljs.core.truth_(inst_31143)){
var statearr_31168_32529 = state_31160__$1;
(statearr_31168_32529[(1)] = (9));

} else {
var statearr_31169_32530 = state_31160__$1;
(statearr_31169_32530[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (3))){
var inst_31158 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31160__$1,inst_31158);
} else {
if((state_val_31161 === (12))){
var state_31160__$1 = state_31160;
var statearr_31170_32531 = state_31160__$1;
(statearr_31170_32531[(2)] = null);

(statearr_31170_32531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (2))){
var state_31160__$1 = state_31160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31160__$1,(4),ch);
} else {
if((state_val_31161 === (11))){
var inst_31137 = (state_31160[(7)]);
var inst_31147 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31160__$1,(8),inst_31147,inst_31137);
} else {
if((state_val_31161 === (9))){
var state_31160__$1 = state_31160;
var statearr_31171_32532 = state_31160__$1;
(statearr_31171_32532[(2)] = tc);

(statearr_31171_32532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (5))){
var inst_31140 = cljs.core.async.close_BANG_(tc);
var inst_31141 = cljs.core.async.close_BANG_(fc);
var state_31160__$1 = (function (){var statearr_31172 = state_31160;
(statearr_31172[(8)] = inst_31140);

return statearr_31172;
})();
var statearr_31173_32533 = state_31160__$1;
(statearr_31173_32533[(2)] = inst_31141);

(statearr_31173_32533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (14))){
var inst_31154 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31174_32534 = state_31160__$1;
(statearr_31174_32534[(2)] = inst_31154);

(statearr_31174_32534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (10))){
var state_31160__$1 = state_31160;
var statearr_31175_32535 = state_31160__$1;
(statearr_31175_32535[(2)] = fc);

(statearr_31175_32535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (8))){
var inst_31149 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
if(cljs.core.truth_(inst_31149)){
var statearr_31176_32536 = state_31160__$1;
(statearr_31176_32536[(1)] = (12));

} else {
var statearr_31177_32537 = state_31160__$1;
(statearr_31177_32537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_31178 = [null,null,null,null,null,null,null,null,null];
(statearr_31178[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_31178[(1)] = (1));

return statearr_31178;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_31160){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31160);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31179){var ex__30634__auto__ = e31179;
var statearr_31180_32538 = state_31160;
(statearr_31180_32538[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31160[(4)]))){
var statearr_31181_32539 = state_31160;
(statearr_31181_32539[(1)] = cljs.core.first((state_31160[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32540 = state_31160;
state_31160 = G__32540;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_31160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_31160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31182 = f__30799__auto__();
(statearr_31182[(6)] = c__30798__auto___32519);

return statearr_31182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30798__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31204){
var state_val_31205 = (state_31204[(1)]);
if((state_val_31205 === (7))){
var inst_31200 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
var statearr_31206_32541 = state_31204__$1;
(statearr_31206_32541[(2)] = inst_31200);

(statearr_31206_32541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (1))){
var inst_31183 = init;
var inst_31184 = inst_31183;
var state_31204__$1 = (function (){var statearr_31207 = state_31204;
(statearr_31207[(7)] = inst_31184);

return statearr_31207;
})();
var statearr_31208_32542 = state_31204__$1;
(statearr_31208_32542[(2)] = null);

(statearr_31208_32542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (4))){
var inst_31187 = (state_31204[(8)]);
var inst_31187__$1 = (state_31204[(2)]);
var inst_31188 = (inst_31187__$1 == null);
var state_31204__$1 = (function (){var statearr_31209 = state_31204;
(statearr_31209[(8)] = inst_31187__$1);

return statearr_31209;
})();
if(cljs.core.truth_(inst_31188)){
var statearr_31210_32543 = state_31204__$1;
(statearr_31210_32543[(1)] = (5));

} else {
var statearr_31211_32544 = state_31204__$1;
(statearr_31211_32544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (6))){
var inst_31187 = (state_31204[(8)]);
var inst_31184 = (state_31204[(7)]);
var inst_31191 = (state_31204[(9)]);
var inst_31191__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31184,inst_31187) : f.call(null,inst_31184,inst_31187));
var inst_31192 = cljs.core.reduced_QMARK_(inst_31191__$1);
var state_31204__$1 = (function (){var statearr_31212 = state_31204;
(statearr_31212[(9)] = inst_31191__$1);

return statearr_31212;
})();
if(inst_31192){
var statearr_31213_32547 = state_31204__$1;
(statearr_31213_32547[(1)] = (8));

} else {
var statearr_31214_32548 = state_31204__$1;
(statearr_31214_32548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (3))){
var inst_31202 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31204__$1,inst_31202);
} else {
if((state_val_31205 === (2))){
var state_31204__$1 = state_31204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31204__$1,(4),ch);
} else {
if((state_val_31205 === (9))){
var inst_31191 = (state_31204[(9)]);
var inst_31184 = inst_31191;
var state_31204__$1 = (function (){var statearr_31215 = state_31204;
(statearr_31215[(7)] = inst_31184);

return statearr_31215;
})();
var statearr_31216_32549 = state_31204__$1;
(statearr_31216_32549[(2)] = null);

(statearr_31216_32549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (5))){
var inst_31184 = (state_31204[(7)]);
var state_31204__$1 = state_31204;
var statearr_31217_32550 = state_31204__$1;
(statearr_31217_32550[(2)] = inst_31184);

(statearr_31217_32550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (10))){
var inst_31198 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
var statearr_31218_32551 = state_31204__$1;
(statearr_31218_32551[(2)] = inst_31198);

(statearr_31218_32551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (8))){
var inst_31191 = (state_31204[(9)]);
var inst_31194 = cljs.core.deref(inst_31191);
var state_31204__$1 = state_31204;
var statearr_31219_32552 = state_31204__$1;
(statearr_31219_32552[(2)] = inst_31194);

(statearr_31219_32552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30631__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30631__auto____0 = (function (){
var statearr_31220 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31220[(0)] = cljs$core$async$reduce_$_state_machine__30631__auto__);

(statearr_31220[(1)] = (1));

return statearr_31220;
});
var cljs$core$async$reduce_$_state_machine__30631__auto____1 = (function (state_31204){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31204);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31221){var ex__30634__auto__ = e31221;
var statearr_31222_32553 = state_31204;
(statearr_31222_32553[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31204[(4)]))){
var statearr_31223_32554 = state_31204;
(statearr_31223_32554[(1)] = cljs.core.first((state_31204[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32555 = state_31204;
state_31204 = G__32555;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30631__auto__ = function(state_31204){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30631__auto____1.call(this,state_31204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30631__auto____0;
cljs$core$async$reduce_$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30631__auto____1;
return cljs$core$async$reduce_$_state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31224 = f__30799__auto__();
(statearr_31224[(6)] = c__30798__auto__);

return statearr_31224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));

return c__30798__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30798__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (1))){
var inst_31225 = cljs.core.async.reduce(f__$1,init,ch);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31230__$1,(2),inst_31225);
} else {
if((state_val_31231 === (2))){
var inst_31227 = (state_31230[(2)]);
var inst_31228 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31227) : f__$1.call(null,inst_31227));
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31230__$1,inst_31228);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30631__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30631__auto____0 = (function (){
var statearr_31232 = [null,null,null,null,null,null,null];
(statearr_31232[(0)] = cljs$core$async$transduce_$_state_machine__30631__auto__);

(statearr_31232[(1)] = (1));

return statearr_31232;
});
var cljs$core$async$transduce_$_state_machine__30631__auto____1 = (function (state_31230){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31230);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31233){var ex__30634__auto__ = e31233;
var statearr_31234_32560 = state_31230;
(statearr_31234_32560[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31230[(4)]))){
var statearr_31235_32561 = state_31230;
(statearr_31235_32561[(1)] = cljs.core.first((state_31230[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32562 = state_31230;
state_31230 = G__32562;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30631__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30631__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30631__auto____0;
cljs$core$async$transduce_$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30631__auto____1;
return cljs$core$async$transduce_$_state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31236 = f__30799__auto__();
(statearr_31236[(6)] = c__30798__auto__);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));

return c__30798__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31238 = arguments.length;
switch (G__31238) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30798__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31263){
var state_val_31264 = (state_31263[(1)]);
if((state_val_31264 === (7))){
var inst_31245 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31265_32567 = state_31263__$1;
(statearr_31265_32567[(2)] = inst_31245);

(statearr_31265_32567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (1))){
var inst_31239 = cljs.core.seq(coll);
var inst_31240 = inst_31239;
var state_31263__$1 = (function (){var statearr_31266 = state_31263;
(statearr_31266[(7)] = inst_31240);

return statearr_31266;
})();
var statearr_31267_32571 = state_31263__$1;
(statearr_31267_32571[(2)] = null);

(statearr_31267_32571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (4))){
var inst_31240 = (state_31263[(7)]);
var inst_31243 = cljs.core.first(inst_31240);
var state_31263__$1 = state_31263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31263__$1,(7),ch,inst_31243);
} else {
if((state_val_31264 === (13))){
var inst_31257 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31268_32572 = state_31263__$1;
(statearr_31268_32572[(2)] = inst_31257);

(statearr_31268_32572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (6))){
var inst_31248 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
if(cljs.core.truth_(inst_31248)){
var statearr_31269_32573 = state_31263__$1;
(statearr_31269_32573[(1)] = (8));

} else {
var statearr_31270_32577 = state_31263__$1;
(statearr_31270_32577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (3))){
var inst_31261 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31263__$1,inst_31261);
} else {
if((state_val_31264 === (12))){
var state_31263__$1 = state_31263;
var statearr_31271_32578 = state_31263__$1;
(statearr_31271_32578[(2)] = null);

(statearr_31271_32578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (2))){
var inst_31240 = (state_31263[(7)]);
var state_31263__$1 = state_31263;
if(cljs.core.truth_(inst_31240)){
var statearr_31272_32579 = state_31263__$1;
(statearr_31272_32579[(1)] = (4));

} else {
var statearr_31273_32580 = state_31263__$1;
(statearr_31273_32580[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (11))){
var inst_31254 = cljs.core.async.close_BANG_(ch);
var state_31263__$1 = state_31263;
var statearr_31274_32581 = state_31263__$1;
(statearr_31274_32581[(2)] = inst_31254);

(statearr_31274_32581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (9))){
var state_31263__$1 = state_31263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31275_32585 = state_31263__$1;
(statearr_31275_32585[(1)] = (11));

} else {
var statearr_31276_32586 = state_31263__$1;
(statearr_31276_32586[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (5))){
var inst_31240 = (state_31263[(7)]);
var state_31263__$1 = state_31263;
var statearr_31277_32587 = state_31263__$1;
(statearr_31277_32587[(2)] = inst_31240);

(statearr_31277_32587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (10))){
var inst_31259 = (state_31263[(2)]);
var state_31263__$1 = state_31263;
var statearr_31278_32588 = state_31263__$1;
(statearr_31278_32588[(2)] = inst_31259);

(statearr_31278_32588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31264 === (8))){
var inst_31240 = (state_31263[(7)]);
var inst_31250 = cljs.core.next(inst_31240);
var inst_31240__$1 = inst_31250;
var state_31263__$1 = (function (){var statearr_31279 = state_31263;
(statearr_31279[(7)] = inst_31240__$1);

return statearr_31279;
})();
var statearr_31280_32589 = state_31263__$1;
(statearr_31280_32589[(2)] = null);

(statearr_31280_32589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_31281 = [null,null,null,null,null,null,null,null];
(statearr_31281[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_31281[(1)] = (1));

return statearr_31281;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_31263){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31263);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31282){var ex__30634__auto__ = e31282;
var statearr_31283_32597 = state_31263;
(statearr_31283_32597[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31263[(4)]))){
var statearr_31284_32598 = state_31263;
(statearr_31284_32598[(1)] = cljs.core.first((state_31263[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32599 = state_31263;
state_31263 = G__32599;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_31263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_31263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31285 = f__30799__auto__();
(statearr_31285[(6)] = c__30798__auto__);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));

return c__30798__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31287 = arguments.length;
switch (G__31287) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32607 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32607(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32608 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32608(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32612 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32612(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32613 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32613(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31295 = (function (ch,cs,meta31296){
this.ch = ch;
this.cs = cs;
this.meta31296 = meta31296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31297,meta31296__$1){
var self__ = this;
var _31297__$1 = this;
return (new cljs.core.async.t_cljs$core$async31295(self__.ch,self__.cs,meta31296__$1));
}));

(cljs.core.async.t_cljs$core$async31295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31297){
var self__ = this;
var _31297__$1 = this;
return self__.meta31296;
}));

(cljs.core.async.t_cljs$core$async31295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31295.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31295.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31295.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31295.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31296","meta31296",-2030759320,null)], null);
}));

(cljs.core.async.t_cljs$core$async31295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31295");

(cljs.core.async.t_cljs$core$async31295.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31295.
 */
cljs.core.async.__GT_t_cljs$core$async31295 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31295(ch__$1,cs__$1,meta31296){
return (new cljs.core.async.t_cljs$core$async31295(ch__$1,cs__$1,meta31296));
});

}

return (new cljs.core.async.t_cljs$core$async31295(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30798__auto___32614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31432){
var state_val_31433 = (state_31432[(1)]);
if((state_val_31433 === (7))){
var inst_31428 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31434_32616 = state_31432__$1;
(statearr_31434_32616[(2)] = inst_31428);

(statearr_31434_32616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (20))){
var inst_31333 = (state_31432[(7)]);
var inst_31345 = cljs.core.first(inst_31333);
var inst_31346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31345,(0),null);
var inst_31347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31345,(1),null);
var state_31432__$1 = (function (){var statearr_31435 = state_31432;
(statearr_31435[(8)] = inst_31346);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31347)){
var statearr_31436_32617 = state_31432__$1;
(statearr_31436_32617[(1)] = (22));

} else {
var statearr_31437_32618 = state_31432__$1;
(statearr_31437_32618[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (27))){
var inst_31302 = (state_31432[(9)]);
var inst_31375 = (state_31432[(10)]);
var inst_31382 = (state_31432[(11)]);
var inst_31377 = (state_31432[(12)]);
var inst_31382__$1 = cljs.core._nth(inst_31375,inst_31377);
var inst_31383 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31382__$1,inst_31302,done);
var state_31432__$1 = (function (){var statearr_31439 = state_31432;
(statearr_31439[(11)] = inst_31382__$1);

return statearr_31439;
})();
if(cljs.core.truth_(inst_31383)){
var statearr_31440_32619 = state_31432__$1;
(statearr_31440_32619[(1)] = (30));

} else {
var statearr_31441_32620 = state_31432__$1;
(statearr_31441_32620[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (1))){
var state_31432__$1 = state_31432;
var statearr_31443_32621 = state_31432__$1;
(statearr_31443_32621[(2)] = null);

(statearr_31443_32621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (24))){
var inst_31333 = (state_31432[(7)]);
var inst_31352 = (state_31432[(2)]);
var inst_31353 = cljs.core.next(inst_31333);
var inst_31311 = inst_31353;
var inst_31312 = null;
var inst_31313 = (0);
var inst_31314 = (0);
var state_31432__$1 = (function (){var statearr_31444 = state_31432;
(statearr_31444[(13)] = inst_31352);

(statearr_31444[(14)] = inst_31312);

(statearr_31444[(15)] = inst_31311);

(statearr_31444[(16)] = inst_31314);

(statearr_31444[(17)] = inst_31313);

return statearr_31444;
})();
var statearr_31446_32622 = state_31432__$1;
(statearr_31446_32622[(2)] = null);

(statearr_31446_32622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (39))){
var state_31432__$1 = state_31432;
var statearr_31450_32623 = state_31432__$1;
(statearr_31450_32623[(2)] = null);

(statearr_31450_32623[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (4))){
var inst_31302 = (state_31432[(9)]);
var inst_31302__$1 = (state_31432[(2)]);
var inst_31303 = (inst_31302__$1 == null);
var state_31432__$1 = (function (){var statearr_31451 = state_31432;
(statearr_31451[(9)] = inst_31302__$1);

return statearr_31451;
})();
if(cljs.core.truth_(inst_31303)){
var statearr_31452_32624 = state_31432__$1;
(statearr_31452_32624[(1)] = (5));

} else {
var statearr_31453_32625 = state_31432__$1;
(statearr_31453_32625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (15))){
var inst_31312 = (state_31432[(14)]);
var inst_31311 = (state_31432[(15)]);
var inst_31314 = (state_31432[(16)]);
var inst_31313 = (state_31432[(17)]);
var inst_31329 = (state_31432[(2)]);
var inst_31330 = (inst_31314 + (1));
var tmp31447 = inst_31312;
var tmp31448 = inst_31311;
var tmp31449 = inst_31313;
var inst_31311__$1 = tmp31448;
var inst_31312__$1 = tmp31447;
var inst_31313__$1 = tmp31449;
var inst_31314__$1 = inst_31330;
var state_31432__$1 = (function (){var statearr_31454 = state_31432;
(statearr_31454[(14)] = inst_31312__$1);

(statearr_31454[(18)] = inst_31329);

(statearr_31454[(15)] = inst_31311__$1);

(statearr_31454[(16)] = inst_31314__$1);

(statearr_31454[(17)] = inst_31313__$1);

return statearr_31454;
})();
var statearr_31455_32626 = state_31432__$1;
(statearr_31455_32626[(2)] = null);

(statearr_31455_32626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (21))){
var inst_31356 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31459_32627 = state_31432__$1;
(statearr_31459_32627[(2)] = inst_31356);

(statearr_31459_32627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (31))){
var inst_31382 = (state_31432[(11)]);
var inst_31386 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31382);
var state_31432__$1 = state_31432;
var statearr_31460_32628 = state_31432__$1;
(statearr_31460_32628[(2)] = inst_31386);

(statearr_31460_32628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (32))){
var inst_31375 = (state_31432[(10)]);
var inst_31376 = (state_31432[(19)]);
var inst_31377 = (state_31432[(12)]);
var inst_31374 = (state_31432[(20)]);
var inst_31388 = (state_31432[(2)]);
var inst_31389 = (inst_31377 + (1));
var tmp31456 = inst_31375;
var tmp31457 = inst_31376;
var tmp31458 = inst_31374;
var inst_31374__$1 = tmp31458;
var inst_31375__$1 = tmp31456;
var inst_31376__$1 = tmp31457;
var inst_31377__$1 = inst_31389;
var state_31432__$1 = (function (){var statearr_31461 = state_31432;
(statearr_31461[(10)] = inst_31375__$1);

(statearr_31461[(21)] = inst_31388);

(statearr_31461[(19)] = inst_31376__$1);

(statearr_31461[(12)] = inst_31377__$1);

(statearr_31461[(20)] = inst_31374__$1);

return statearr_31461;
})();
var statearr_31462_32629 = state_31432__$1;
(statearr_31462_32629[(2)] = null);

(statearr_31462_32629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (40))){
var inst_31401 = (state_31432[(22)]);
var inst_31405 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31401);
var state_31432__$1 = state_31432;
var statearr_31464_32630 = state_31432__$1;
(statearr_31464_32630[(2)] = inst_31405);

(statearr_31464_32630[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (33))){
var inst_31392 = (state_31432[(23)]);
var inst_31394 = cljs.core.chunked_seq_QMARK_(inst_31392);
var state_31432__$1 = state_31432;
if(inst_31394){
var statearr_31465_32631 = state_31432__$1;
(statearr_31465_32631[(1)] = (36));

} else {
var statearr_31466_32632 = state_31432__$1;
(statearr_31466_32632[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (13))){
var inst_31323 = (state_31432[(24)]);
var inst_31326 = cljs.core.async.close_BANG_(inst_31323);
var state_31432__$1 = state_31432;
var statearr_31467_32633 = state_31432__$1;
(statearr_31467_32633[(2)] = inst_31326);

(statearr_31467_32633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (22))){
var inst_31346 = (state_31432[(8)]);
var inst_31349 = cljs.core.async.close_BANG_(inst_31346);
var state_31432__$1 = state_31432;
var statearr_31468_32634 = state_31432__$1;
(statearr_31468_32634[(2)] = inst_31349);

(statearr_31468_32634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (36))){
var inst_31392 = (state_31432[(23)]);
var inst_31396 = cljs.core.chunk_first(inst_31392);
var inst_31397 = cljs.core.chunk_rest(inst_31392);
var inst_31398 = cljs.core.count(inst_31396);
var inst_31374 = inst_31397;
var inst_31375 = inst_31396;
var inst_31376 = inst_31398;
var inst_31377 = (0);
var state_31432__$1 = (function (){var statearr_31470 = state_31432;
(statearr_31470[(10)] = inst_31375);

(statearr_31470[(19)] = inst_31376);

(statearr_31470[(12)] = inst_31377);

(statearr_31470[(20)] = inst_31374);

return statearr_31470;
})();
var statearr_31472_32635 = state_31432__$1;
(statearr_31472_32635[(2)] = null);

(statearr_31472_32635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (41))){
var inst_31392 = (state_31432[(23)]);
var inst_31407 = (state_31432[(2)]);
var inst_31408 = cljs.core.next(inst_31392);
var inst_31374 = inst_31408;
var inst_31375 = null;
var inst_31376 = (0);
var inst_31377 = (0);
var state_31432__$1 = (function (){var statearr_31473 = state_31432;
(statearr_31473[(10)] = inst_31375);

(statearr_31473[(19)] = inst_31376);

(statearr_31473[(25)] = inst_31407);

(statearr_31473[(12)] = inst_31377);

(statearr_31473[(20)] = inst_31374);

return statearr_31473;
})();
var statearr_31474_32636 = state_31432__$1;
(statearr_31474_32636[(2)] = null);

(statearr_31474_32636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (43))){
var state_31432__$1 = state_31432;
var statearr_31475_32637 = state_31432__$1;
(statearr_31475_32637[(2)] = null);

(statearr_31475_32637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (29))){
var inst_31416 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31476_32638 = state_31432__$1;
(statearr_31476_32638[(2)] = inst_31416);

(statearr_31476_32638[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (44))){
var inst_31425 = (state_31432[(2)]);
var state_31432__$1 = (function (){var statearr_31477 = state_31432;
(statearr_31477[(26)] = inst_31425);

return statearr_31477;
})();
var statearr_31478_32639 = state_31432__$1;
(statearr_31478_32639[(2)] = null);

(statearr_31478_32639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (6))){
var inst_31366 = (state_31432[(27)]);
var inst_31365 = cljs.core.deref(cs);
var inst_31366__$1 = cljs.core.keys(inst_31365);
var inst_31367 = cljs.core.count(inst_31366__$1);
var inst_31368 = cljs.core.reset_BANG_(dctr,inst_31367);
var inst_31373 = cljs.core.seq(inst_31366__$1);
var inst_31374 = inst_31373;
var inst_31375 = null;
var inst_31376 = (0);
var inst_31377 = (0);
var state_31432__$1 = (function (){var statearr_31479 = state_31432;
(statearr_31479[(10)] = inst_31375);

(statearr_31479[(19)] = inst_31376);

(statearr_31479[(27)] = inst_31366__$1);

(statearr_31479[(12)] = inst_31377);

(statearr_31479[(28)] = inst_31368);

(statearr_31479[(20)] = inst_31374);

return statearr_31479;
})();
var statearr_31480_32640 = state_31432__$1;
(statearr_31480_32640[(2)] = null);

(statearr_31480_32640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (28))){
var inst_31392 = (state_31432[(23)]);
var inst_31374 = (state_31432[(20)]);
var inst_31392__$1 = cljs.core.seq(inst_31374);
var state_31432__$1 = (function (){var statearr_31481 = state_31432;
(statearr_31481[(23)] = inst_31392__$1);

return statearr_31481;
})();
if(inst_31392__$1){
var statearr_31482_32641 = state_31432__$1;
(statearr_31482_32641[(1)] = (33));

} else {
var statearr_31483_32642 = state_31432__$1;
(statearr_31483_32642[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (25))){
var inst_31376 = (state_31432[(19)]);
var inst_31377 = (state_31432[(12)]);
var inst_31379 = (inst_31377 < inst_31376);
var inst_31380 = inst_31379;
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31380)){
var statearr_31484_32643 = state_31432__$1;
(statearr_31484_32643[(1)] = (27));

} else {
var statearr_31485_32644 = state_31432__$1;
(statearr_31485_32644[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (34))){
var state_31432__$1 = state_31432;
var statearr_31488_32645 = state_31432__$1;
(statearr_31488_32645[(2)] = null);

(statearr_31488_32645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (17))){
var state_31432__$1 = state_31432;
var statearr_31489_32646 = state_31432__$1;
(statearr_31489_32646[(2)] = null);

(statearr_31489_32646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (3))){
var inst_31430 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31432__$1,inst_31430);
} else {
if((state_val_31433 === (12))){
var inst_31361 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31490_32647 = state_31432__$1;
(statearr_31490_32647[(2)] = inst_31361);

(statearr_31490_32647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (2))){
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31432__$1,(4),ch);
} else {
if((state_val_31433 === (23))){
var state_31432__$1 = state_31432;
var statearr_31491_32648 = state_31432__$1;
(statearr_31491_32648[(2)] = null);

(statearr_31491_32648[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (35))){
var inst_31414 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31493_32649 = state_31432__$1;
(statearr_31493_32649[(2)] = inst_31414);

(statearr_31493_32649[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (19))){
var inst_31333 = (state_31432[(7)]);
var inst_31337 = cljs.core.chunk_first(inst_31333);
var inst_31338 = cljs.core.chunk_rest(inst_31333);
var inst_31339 = cljs.core.count(inst_31337);
var inst_31311 = inst_31338;
var inst_31312 = inst_31337;
var inst_31313 = inst_31339;
var inst_31314 = (0);
var state_31432__$1 = (function (){var statearr_31494 = state_31432;
(statearr_31494[(14)] = inst_31312);

(statearr_31494[(15)] = inst_31311);

(statearr_31494[(16)] = inst_31314);

(statearr_31494[(17)] = inst_31313);

return statearr_31494;
})();
var statearr_31495_32650 = state_31432__$1;
(statearr_31495_32650[(2)] = null);

(statearr_31495_32650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (11))){
var inst_31333 = (state_31432[(7)]);
var inst_31311 = (state_31432[(15)]);
var inst_31333__$1 = cljs.core.seq(inst_31311);
var state_31432__$1 = (function (){var statearr_31496 = state_31432;
(statearr_31496[(7)] = inst_31333__$1);

return statearr_31496;
})();
if(inst_31333__$1){
var statearr_31497_32651 = state_31432__$1;
(statearr_31497_32651[(1)] = (16));

} else {
var statearr_31498_32652 = state_31432__$1;
(statearr_31498_32652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (9))){
var inst_31363 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31499_32653 = state_31432__$1;
(statearr_31499_32653[(2)] = inst_31363);

(statearr_31499_32653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (5))){
var inst_31309 = cljs.core.deref(cs);
var inst_31310 = cljs.core.seq(inst_31309);
var inst_31311 = inst_31310;
var inst_31312 = null;
var inst_31313 = (0);
var inst_31314 = (0);
var state_31432__$1 = (function (){var statearr_31500 = state_31432;
(statearr_31500[(14)] = inst_31312);

(statearr_31500[(15)] = inst_31311);

(statearr_31500[(16)] = inst_31314);

(statearr_31500[(17)] = inst_31313);

return statearr_31500;
})();
var statearr_31501_32654 = state_31432__$1;
(statearr_31501_32654[(2)] = null);

(statearr_31501_32654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (14))){
var state_31432__$1 = state_31432;
var statearr_31502_32655 = state_31432__$1;
(statearr_31502_32655[(2)] = null);

(statearr_31502_32655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (45))){
var inst_31422 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31503_32656 = state_31432__$1;
(statearr_31503_32656[(2)] = inst_31422);

(statearr_31503_32656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (26))){
var inst_31366 = (state_31432[(27)]);
var inst_31418 = (state_31432[(2)]);
var inst_31419 = cljs.core.seq(inst_31366);
var state_31432__$1 = (function (){var statearr_31504 = state_31432;
(statearr_31504[(29)] = inst_31418);

return statearr_31504;
})();
if(inst_31419){
var statearr_31505_32657 = state_31432__$1;
(statearr_31505_32657[(1)] = (42));

} else {
var statearr_31506_32658 = state_31432__$1;
(statearr_31506_32658[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (16))){
var inst_31333 = (state_31432[(7)]);
var inst_31335 = cljs.core.chunked_seq_QMARK_(inst_31333);
var state_31432__$1 = state_31432;
if(inst_31335){
var statearr_31508_32659 = state_31432__$1;
(statearr_31508_32659[(1)] = (19));

} else {
var statearr_31509_32660 = state_31432__$1;
(statearr_31509_32660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (38))){
var inst_31411 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31510_32661 = state_31432__$1;
(statearr_31510_32661[(2)] = inst_31411);

(statearr_31510_32661[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (30))){
var state_31432__$1 = state_31432;
var statearr_31511_32662 = state_31432__$1;
(statearr_31511_32662[(2)] = null);

(statearr_31511_32662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (10))){
var inst_31312 = (state_31432[(14)]);
var inst_31314 = (state_31432[(16)]);
var inst_31322 = cljs.core._nth(inst_31312,inst_31314);
var inst_31323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31322,(0),null);
var inst_31324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31322,(1),null);
var state_31432__$1 = (function (){var statearr_31512 = state_31432;
(statearr_31512[(24)] = inst_31323);

return statearr_31512;
})();
if(cljs.core.truth_(inst_31324)){
var statearr_31513_32663 = state_31432__$1;
(statearr_31513_32663[(1)] = (13));

} else {
var statearr_31514_32664 = state_31432__$1;
(statearr_31514_32664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (18))){
var inst_31359 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31515_32665 = state_31432__$1;
(statearr_31515_32665[(2)] = inst_31359);

(statearr_31515_32665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (42))){
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31432__$1,(45),dchan);
} else {
if((state_val_31433 === (37))){
var inst_31302 = (state_31432[(9)]);
var inst_31392 = (state_31432[(23)]);
var inst_31401 = (state_31432[(22)]);
var inst_31401__$1 = cljs.core.first(inst_31392);
var inst_31402 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31401__$1,inst_31302,done);
var state_31432__$1 = (function (){var statearr_31516 = state_31432;
(statearr_31516[(22)] = inst_31401__$1);

return statearr_31516;
})();
if(cljs.core.truth_(inst_31402)){
var statearr_31517_32666 = state_31432__$1;
(statearr_31517_32666[(1)] = (39));

} else {
var statearr_31518_32667 = state_31432__$1;
(statearr_31518_32667[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (8))){
var inst_31314 = (state_31432[(16)]);
var inst_31313 = (state_31432[(17)]);
var inst_31316 = (inst_31314 < inst_31313);
var inst_31317 = inst_31316;
var state_31432__$1 = state_31432;
if(cljs.core.truth_(inst_31317)){
var statearr_31519_32668 = state_31432__$1;
(statearr_31519_32668[(1)] = (10));

} else {
var statearr_31520_32669 = state_31432__$1;
(statearr_31520_32669[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30631__auto__ = null;
var cljs$core$async$mult_$_state_machine__30631__auto____0 = (function (){
var statearr_31521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31521[(0)] = cljs$core$async$mult_$_state_machine__30631__auto__);

(statearr_31521[(1)] = (1));

return statearr_31521;
});
var cljs$core$async$mult_$_state_machine__30631__auto____1 = (function (state_31432){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31432);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31522){var ex__30634__auto__ = e31522;
var statearr_31523_32670 = state_31432;
(statearr_31523_32670[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31432[(4)]))){
var statearr_31524_32671 = state_31432;
(statearr_31524_32671[(1)] = cljs.core.first((state_31432[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32672 = state_31432;
state_31432 = G__32672;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30631__auto__ = function(state_31432){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30631__auto____1.call(this,state_31432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30631__auto____0;
cljs$core$async$mult_$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30631__auto____1;
return cljs$core$async$mult_$_state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31525 = f__30799__auto__();
(statearr_31525[(6)] = c__30798__auto___32614);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31527 = arguments.length;
switch (G__31527) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32674 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32674(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32675 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32675(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32676 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32676(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32679 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32679(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32680 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32680(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32681 = arguments.length;
var i__4830__auto___32682 = (0);
while(true){
if((i__4830__auto___32682 < len__4829__auto___32681)){
args__4835__auto__.push((arguments[i__4830__auto___32682]));

var G__32683 = (i__4830__auto___32682 + (1));
i__4830__auto___32682 = G__32683;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31589){
var map__31590 = p__31589;
var map__31590__$1 = cljs.core.__destructure_map(map__31590);
var opts = map__31590__$1;
var statearr_31591_32684 = state;
(statearr_31591_32684[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31592_32685 = state;
(statearr_31592_32685[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31593_32686 = state;
(statearr_31593_32686[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31585){
var G__31586 = cljs.core.first(seq31585);
var seq31585__$1 = cljs.core.next(seq31585);
var G__31587 = cljs.core.first(seq31585__$1);
var seq31585__$2 = cljs.core.next(seq31585__$1);
var G__31588 = cljs.core.first(seq31585__$2);
var seq31585__$3 = cljs.core.next(seq31585__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31586,G__31587,G__31588,seq31585__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31605 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31606){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31606 = meta31606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31607,meta31606__$1){
var self__ = this;
var _31607__$1 = this;
return (new cljs.core.async.t_cljs$core$async31605(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31606__$1));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31607){
var self__ = this;
var _31607__$1 = this;
return self__.meta31606;
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31606","meta31606",51141772,null)], null);
}));

(cljs.core.async.t_cljs$core$async31605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31605");

(cljs.core.async.t_cljs$core$async31605.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31605.
 */
cljs.core.async.__GT_t_cljs$core$async31605 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31605(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31606){
return (new cljs.core.async.t_cljs$core$async31605(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31606));
});

}

return (new cljs.core.async.t_cljs$core$async31605(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30798__auto___32693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31675){
var state_val_31676 = (state_31675[(1)]);
if((state_val_31676 === (7))){
var inst_31635 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
if(cljs.core.truth_(inst_31635)){
var statearr_31677_32694 = state_31675__$1;
(statearr_31677_32694[(1)] = (8));

} else {
var statearr_31678_32695 = state_31675__$1;
(statearr_31678_32695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (20))){
var inst_31628 = (state_31675[(7)]);
var state_31675__$1 = state_31675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31675__$1,(23),out,inst_31628);
} else {
if((state_val_31676 === (1))){
var inst_31611 = calc_state();
var inst_31612 = cljs.core.__destructure_map(inst_31611);
var inst_31613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31612,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31612,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31612,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31616 = inst_31611;
var state_31675__$1 = (function (){var statearr_31679 = state_31675;
(statearr_31679[(8)] = inst_31614);

(statearr_31679[(9)] = inst_31615);

(statearr_31679[(10)] = inst_31616);

(statearr_31679[(11)] = inst_31613);

return statearr_31679;
})();
var statearr_31680_32696 = state_31675__$1;
(statearr_31680_32696[(2)] = null);

(statearr_31680_32696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (24))){
var inst_31619 = (state_31675[(12)]);
var inst_31616 = inst_31619;
var state_31675__$1 = (function (){var statearr_31681 = state_31675;
(statearr_31681[(10)] = inst_31616);

return statearr_31681;
})();
var statearr_31682_32697 = state_31675__$1;
(statearr_31682_32697[(2)] = null);

(statearr_31682_32697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (4))){
var inst_31628 = (state_31675[(7)]);
var inst_31630 = (state_31675[(13)]);
var inst_31627 = (state_31675[(2)]);
var inst_31628__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31627,(0),null);
var inst_31629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31627,(1),null);
var inst_31630__$1 = (inst_31628__$1 == null);
var state_31675__$1 = (function (){var statearr_31683 = state_31675;
(statearr_31683[(7)] = inst_31628__$1);

(statearr_31683[(13)] = inst_31630__$1);

(statearr_31683[(14)] = inst_31629);

return statearr_31683;
})();
if(cljs.core.truth_(inst_31630__$1)){
var statearr_31684_32699 = state_31675__$1;
(statearr_31684_32699[(1)] = (5));

} else {
var statearr_31685_32703 = state_31675__$1;
(statearr_31685_32703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (15))){
var inst_31649 = (state_31675[(15)]);
var inst_31620 = (state_31675[(16)]);
var inst_31649__$1 = cljs.core.empty_QMARK_(inst_31620);
var state_31675__$1 = (function (){var statearr_31686 = state_31675;
(statearr_31686[(15)] = inst_31649__$1);

return statearr_31686;
})();
if(inst_31649__$1){
var statearr_31687_32704 = state_31675__$1;
(statearr_31687_32704[(1)] = (17));

} else {
var statearr_31688_32705 = state_31675__$1;
(statearr_31688_32705[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (21))){
var inst_31619 = (state_31675[(12)]);
var inst_31616 = inst_31619;
var state_31675__$1 = (function (){var statearr_31689 = state_31675;
(statearr_31689[(10)] = inst_31616);

return statearr_31689;
})();
var statearr_31690_32706 = state_31675__$1;
(statearr_31690_32706[(2)] = null);

(statearr_31690_32706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (13))){
var inst_31642 = (state_31675[(2)]);
var inst_31643 = calc_state();
var inst_31616 = inst_31643;
var state_31675__$1 = (function (){var statearr_31691 = state_31675;
(statearr_31691[(10)] = inst_31616);

(statearr_31691[(17)] = inst_31642);

return statearr_31691;
})();
var statearr_31692_32707 = state_31675__$1;
(statearr_31692_32707[(2)] = null);

(statearr_31692_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (22))){
var inst_31669 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
var statearr_31693_32708 = state_31675__$1;
(statearr_31693_32708[(2)] = inst_31669);

(statearr_31693_32708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (6))){
var inst_31629 = (state_31675[(14)]);
var inst_31633 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31629,change);
var state_31675__$1 = state_31675;
var statearr_31694_32709 = state_31675__$1;
(statearr_31694_32709[(2)] = inst_31633);

(statearr_31694_32709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (25))){
var state_31675__$1 = state_31675;
var statearr_31695_32710 = state_31675__$1;
(statearr_31695_32710[(2)] = null);

(statearr_31695_32710[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (17))){
var inst_31621 = (state_31675[(18)]);
var inst_31629 = (state_31675[(14)]);
var inst_31651 = (inst_31621.cljs$core$IFn$_invoke$arity$1 ? inst_31621.cljs$core$IFn$_invoke$arity$1(inst_31629) : inst_31621.call(null,inst_31629));
var inst_31652 = cljs.core.not(inst_31651);
var state_31675__$1 = state_31675;
var statearr_31696_32713 = state_31675__$1;
(statearr_31696_32713[(2)] = inst_31652);

(statearr_31696_32713[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (3))){
var inst_31673 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31675__$1,inst_31673);
} else {
if((state_val_31676 === (12))){
var state_31675__$1 = state_31675;
var statearr_31697_32714 = state_31675__$1;
(statearr_31697_32714[(2)] = null);

(statearr_31697_32714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (2))){
var inst_31619 = (state_31675[(12)]);
var inst_31616 = (state_31675[(10)]);
var inst_31619__$1 = cljs.core.__destructure_map(inst_31616);
var inst_31620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31619__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31619__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31619__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31675__$1 = (function (){var statearr_31698 = state_31675;
(statearr_31698[(18)] = inst_31621);

(statearr_31698[(12)] = inst_31619__$1);

(statearr_31698[(16)] = inst_31620);

return statearr_31698;
})();
return cljs.core.async.ioc_alts_BANG_(state_31675__$1,(4),inst_31622);
} else {
if((state_val_31676 === (23))){
var inst_31660 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
if(cljs.core.truth_(inst_31660)){
var statearr_31699_32717 = state_31675__$1;
(statearr_31699_32717[(1)] = (24));

} else {
var statearr_31700_32718 = state_31675__$1;
(statearr_31700_32718[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (19))){
var inst_31655 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
var statearr_31701_32719 = state_31675__$1;
(statearr_31701_32719[(2)] = inst_31655);

(statearr_31701_32719[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (11))){
var inst_31629 = (state_31675[(14)]);
var inst_31639 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31629);
var state_31675__$1 = state_31675;
var statearr_31702_32723 = state_31675__$1;
(statearr_31702_32723[(2)] = inst_31639);

(statearr_31702_32723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (9))){
var inst_31646 = (state_31675[(19)]);
var inst_31629 = (state_31675[(14)]);
var inst_31620 = (state_31675[(16)]);
var inst_31646__$1 = (inst_31620.cljs$core$IFn$_invoke$arity$1 ? inst_31620.cljs$core$IFn$_invoke$arity$1(inst_31629) : inst_31620.call(null,inst_31629));
var state_31675__$1 = (function (){var statearr_31703 = state_31675;
(statearr_31703[(19)] = inst_31646__$1);

return statearr_31703;
})();
if(cljs.core.truth_(inst_31646__$1)){
var statearr_31704_32728 = state_31675__$1;
(statearr_31704_32728[(1)] = (14));

} else {
var statearr_31705_32729 = state_31675__$1;
(statearr_31705_32729[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (5))){
var inst_31630 = (state_31675[(13)]);
var state_31675__$1 = state_31675;
var statearr_31706_32730 = state_31675__$1;
(statearr_31706_32730[(2)] = inst_31630);

(statearr_31706_32730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (14))){
var inst_31646 = (state_31675[(19)]);
var state_31675__$1 = state_31675;
var statearr_31707_32737 = state_31675__$1;
(statearr_31707_32737[(2)] = inst_31646);

(statearr_31707_32737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (26))){
var inst_31665 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
var statearr_31708_32738 = state_31675__$1;
(statearr_31708_32738[(2)] = inst_31665);

(statearr_31708_32738[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (16))){
var inst_31657 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
if(cljs.core.truth_(inst_31657)){
var statearr_31709_32739 = state_31675__$1;
(statearr_31709_32739[(1)] = (20));

} else {
var statearr_31710_32740 = state_31675__$1;
(statearr_31710_32740[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (10))){
var inst_31671 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
var statearr_31711_32741 = state_31675__$1;
(statearr_31711_32741[(2)] = inst_31671);

(statearr_31711_32741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (18))){
var inst_31649 = (state_31675[(15)]);
var state_31675__$1 = state_31675;
var statearr_31712_32742 = state_31675__$1;
(statearr_31712_32742[(2)] = inst_31649);

(statearr_31712_32742[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (8))){
var inst_31628 = (state_31675[(7)]);
var inst_31637 = (inst_31628 == null);
var state_31675__$1 = state_31675;
if(cljs.core.truth_(inst_31637)){
var statearr_31713_32743 = state_31675__$1;
(statearr_31713_32743[(1)] = (11));

} else {
var statearr_31714_32744 = state_31675__$1;
(statearr_31714_32744[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30631__auto__ = null;
var cljs$core$async$mix_$_state_machine__30631__auto____0 = (function (){
var statearr_31715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31715[(0)] = cljs$core$async$mix_$_state_machine__30631__auto__);

(statearr_31715[(1)] = (1));

return statearr_31715;
});
var cljs$core$async$mix_$_state_machine__30631__auto____1 = (function (state_31675){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31675);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31716){var ex__30634__auto__ = e31716;
var statearr_31717_32745 = state_31675;
(statearr_31717_32745[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31675[(4)]))){
var statearr_31718_32746 = state_31675;
(statearr_31718_32746[(1)] = cljs.core.first((state_31675[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32747 = state_31675;
state_31675 = G__32747;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30631__auto__ = function(state_31675){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30631__auto____1.call(this,state_31675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30631__auto____0;
cljs$core$async$mix_$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30631__auto____1;
return cljs$core$async$mix_$_state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31719 = f__30799__auto__();
(statearr_31719[(6)] = c__30798__auto___32693);

return statearr_31719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32748 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32748(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32749 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32749(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32750 = (function() {
var G__32751 = null;
var G__32751__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32751__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32751 = function(p,v){
switch(arguments.length){
case 1:
return G__32751__1.call(this,p);
case 2:
return G__32751__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32751.cljs$core$IFn$_invoke$arity$1 = G__32751__1;
G__32751.cljs$core$IFn$_invoke$arity$2 = G__32751__2;
return G__32751;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31721 = arguments.length;
switch (G__31721) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32750(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32750(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31724 = arguments.length;
switch (G__31724) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31722_SHARP_){
if(cljs.core.truth_((p1__31722_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31722_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31722_SHARP_.call(null,topic)))){
return p1__31722_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31722_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31725 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31726){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31726 = meta31726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31727,meta31726__$1){
var self__ = this;
var _31727__$1 = this;
return (new cljs.core.async.t_cljs$core$async31725(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31726__$1));
}));

(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31727){
var self__ = this;
var _31727__$1 = this;
return self__.meta31726;
}));

(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31726","meta31726",1889167695,null)], null);
}));

(cljs.core.async.t_cljs$core$async31725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31725");

(cljs.core.async.t_cljs$core$async31725.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31725.
 */
cljs.core.async.__GT_t_cljs$core$async31725 = (function cljs$core$async$__GT_t_cljs$core$async31725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31726){
return (new cljs.core.async.t_cljs$core$async31725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31726));
});

}

return (new cljs.core.async.t_cljs$core$async31725(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30798__auto___32754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31799){
var state_val_31800 = (state_31799[(1)]);
if((state_val_31800 === (7))){
var inst_31795 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31801_32755 = state_31799__$1;
(statearr_31801_32755[(2)] = inst_31795);

(statearr_31801_32755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (20))){
var state_31799__$1 = state_31799;
var statearr_31802_32756 = state_31799__$1;
(statearr_31802_32756[(2)] = null);

(statearr_31802_32756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (1))){
var state_31799__$1 = state_31799;
var statearr_31803_32757 = state_31799__$1;
(statearr_31803_32757[(2)] = null);

(statearr_31803_32757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (24))){
var inst_31778 = (state_31799[(7)]);
var inst_31787 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31778);
var state_31799__$1 = state_31799;
var statearr_31804_32758 = state_31799__$1;
(statearr_31804_32758[(2)] = inst_31787);

(statearr_31804_32758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (4))){
var inst_31730 = (state_31799[(8)]);
var inst_31730__$1 = (state_31799[(2)]);
var inst_31731 = (inst_31730__$1 == null);
var state_31799__$1 = (function (){var statearr_31805 = state_31799;
(statearr_31805[(8)] = inst_31730__$1);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31731)){
var statearr_31806_32759 = state_31799__$1;
(statearr_31806_32759[(1)] = (5));

} else {
var statearr_31807_32760 = state_31799__$1;
(statearr_31807_32760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (15))){
var inst_31772 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31808_32761 = state_31799__$1;
(statearr_31808_32761[(2)] = inst_31772);

(statearr_31808_32761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (21))){
var inst_31792 = (state_31799[(2)]);
var state_31799__$1 = (function (){var statearr_31809 = state_31799;
(statearr_31809[(9)] = inst_31792);

return statearr_31809;
})();
var statearr_31810_32768 = state_31799__$1;
(statearr_31810_32768[(2)] = null);

(statearr_31810_32768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (13))){
var inst_31754 = (state_31799[(10)]);
var inst_31756 = cljs.core.chunked_seq_QMARK_(inst_31754);
var state_31799__$1 = state_31799;
if(inst_31756){
var statearr_31811_32769 = state_31799__$1;
(statearr_31811_32769[(1)] = (16));

} else {
var statearr_31812_32770 = state_31799__$1;
(statearr_31812_32770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (22))){
var inst_31784 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
if(cljs.core.truth_(inst_31784)){
var statearr_31813_32771 = state_31799__$1;
(statearr_31813_32771[(1)] = (23));

} else {
var statearr_31814_32772 = state_31799__$1;
(statearr_31814_32772[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (6))){
var inst_31778 = (state_31799[(7)]);
var inst_31780 = (state_31799[(11)]);
var inst_31730 = (state_31799[(8)]);
var inst_31778__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31730) : topic_fn.call(null,inst_31730));
var inst_31779 = cljs.core.deref(mults);
var inst_31780__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31779,inst_31778__$1);
var state_31799__$1 = (function (){var statearr_31815 = state_31799;
(statearr_31815[(7)] = inst_31778__$1);

(statearr_31815[(11)] = inst_31780__$1);

return statearr_31815;
})();
if(cljs.core.truth_(inst_31780__$1)){
var statearr_31816_32773 = state_31799__$1;
(statearr_31816_32773[(1)] = (19));

} else {
var statearr_31817_32774 = state_31799__$1;
(statearr_31817_32774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (25))){
var inst_31789 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31818_32775 = state_31799__$1;
(statearr_31818_32775[(2)] = inst_31789);

(statearr_31818_32775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (17))){
var inst_31754 = (state_31799[(10)]);
var inst_31763 = cljs.core.first(inst_31754);
var inst_31764 = cljs.core.async.muxch_STAR_(inst_31763);
var inst_31765 = cljs.core.async.close_BANG_(inst_31764);
var inst_31766 = cljs.core.next(inst_31754);
var inst_31740 = inst_31766;
var inst_31741 = null;
var inst_31742 = (0);
var inst_31743 = (0);
var state_31799__$1 = (function (){var statearr_31819 = state_31799;
(statearr_31819[(12)] = inst_31741);

(statearr_31819[(13)] = inst_31742);

(statearr_31819[(14)] = inst_31765);

(statearr_31819[(15)] = inst_31743);

(statearr_31819[(16)] = inst_31740);

return statearr_31819;
})();
var statearr_31820_32776 = state_31799__$1;
(statearr_31820_32776[(2)] = null);

(statearr_31820_32776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (3))){
var inst_31797 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31799__$1,inst_31797);
} else {
if((state_val_31800 === (12))){
var inst_31774 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31821_32777 = state_31799__$1;
(statearr_31821_32777[(2)] = inst_31774);

(statearr_31821_32777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (2))){
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31799__$1,(4),ch);
} else {
if((state_val_31800 === (23))){
var state_31799__$1 = state_31799;
var statearr_31822_32778 = state_31799__$1;
(statearr_31822_32778[(2)] = null);

(statearr_31822_32778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (19))){
var inst_31780 = (state_31799[(11)]);
var inst_31730 = (state_31799[(8)]);
var inst_31782 = cljs.core.async.muxch_STAR_(inst_31780);
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31799__$1,(22),inst_31782,inst_31730);
} else {
if((state_val_31800 === (11))){
var inst_31754 = (state_31799[(10)]);
var inst_31740 = (state_31799[(16)]);
var inst_31754__$1 = cljs.core.seq(inst_31740);
var state_31799__$1 = (function (){var statearr_31823 = state_31799;
(statearr_31823[(10)] = inst_31754__$1);

return statearr_31823;
})();
if(inst_31754__$1){
var statearr_31824_32779 = state_31799__$1;
(statearr_31824_32779[(1)] = (13));

} else {
var statearr_31825_32780 = state_31799__$1;
(statearr_31825_32780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (9))){
var inst_31776 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31826_32781 = state_31799__$1;
(statearr_31826_32781[(2)] = inst_31776);

(statearr_31826_32781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (5))){
var inst_31737 = cljs.core.deref(mults);
var inst_31738 = cljs.core.vals(inst_31737);
var inst_31739 = cljs.core.seq(inst_31738);
var inst_31740 = inst_31739;
var inst_31741 = null;
var inst_31742 = (0);
var inst_31743 = (0);
var state_31799__$1 = (function (){var statearr_31827 = state_31799;
(statearr_31827[(12)] = inst_31741);

(statearr_31827[(13)] = inst_31742);

(statearr_31827[(15)] = inst_31743);

(statearr_31827[(16)] = inst_31740);

return statearr_31827;
})();
var statearr_31828_32788 = state_31799__$1;
(statearr_31828_32788[(2)] = null);

(statearr_31828_32788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (14))){
var state_31799__$1 = state_31799;
var statearr_31832_32789 = state_31799__$1;
(statearr_31832_32789[(2)] = null);

(statearr_31832_32789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (16))){
var inst_31754 = (state_31799[(10)]);
var inst_31758 = cljs.core.chunk_first(inst_31754);
var inst_31759 = cljs.core.chunk_rest(inst_31754);
var inst_31760 = cljs.core.count(inst_31758);
var inst_31740 = inst_31759;
var inst_31741 = inst_31758;
var inst_31742 = inst_31760;
var inst_31743 = (0);
var state_31799__$1 = (function (){var statearr_31833 = state_31799;
(statearr_31833[(12)] = inst_31741);

(statearr_31833[(13)] = inst_31742);

(statearr_31833[(15)] = inst_31743);

(statearr_31833[(16)] = inst_31740);

return statearr_31833;
})();
var statearr_31834_32790 = state_31799__$1;
(statearr_31834_32790[(2)] = null);

(statearr_31834_32790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (10))){
var inst_31741 = (state_31799[(12)]);
var inst_31742 = (state_31799[(13)]);
var inst_31743 = (state_31799[(15)]);
var inst_31740 = (state_31799[(16)]);
var inst_31748 = cljs.core._nth(inst_31741,inst_31743);
var inst_31749 = cljs.core.async.muxch_STAR_(inst_31748);
var inst_31750 = cljs.core.async.close_BANG_(inst_31749);
var inst_31751 = (inst_31743 + (1));
var tmp31829 = inst_31741;
var tmp31830 = inst_31742;
var tmp31831 = inst_31740;
var inst_31740__$1 = tmp31831;
var inst_31741__$1 = tmp31829;
var inst_31742__$1 = tmp31830;
var inst_31743__$1 = inst_31751;
var state_31799__$1 = (function (){var statearr_31835 = state_31799;
(statearr_31835[(12)] = inst_31741__$1);

(statearr_31835[(13)] = inst_31742__$1);

(statearr_31835[(17)] = inst_31750);

(statearr_31835[(15)] = inst_31743__$1);

(statearr_31835[(16)] = inst_31740__$1);

return statearr_31835;
})();
var statearr_31836_32791 = state_31799__$1;
(statearr_31836_32791[(2)] = null);

(statearr_31836_32791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (18))){
var inst_31769 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31837_32792 = state_31799__$1;
(statearr_31837_32792[(2)] = inst_31769);

(statearr_31837_32792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (8))){
var inst_31742 = (state_31799[(13)]);
var inst_31743 = (state_31799[(15)]);
var inst_31745 = (inst_31743 < inst_31742);
var inst_31746 = inst_31745;
var state_31799__$1 = state_31799;
if(cljs.core.truth_(inst_31746)){
var statearr_31838_32793 = state_31799__$1;
(statearr_31838_32793[(1)] = (10));

} else {
var statearr_31839_32794 = state_31799__$1;
(statearr_31839_32794[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_31840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31840[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_31840[(1)] = (1));

return statearr_31840;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_31799){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31799);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31841){var ex__30634__auto__ = e31841;
var statearr_31842_32795 = state_31799;
(statearr_31842_32795[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31799[(4)]))){
var statearr_31843_32796 = state_31799;
(statearr_31843_32796[(1)] = cljs.core.first((state_31799[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32797 = state_31799;
state_31799 = G__32797;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_31799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_31799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31844 = f__30799__auto__();
(statearr_31844[(6)] = c__30798__auto___32754);

return statearr_31844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31846 = arguments.length;
switch (G__31846) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31848 = arguments.length;
switch (G__31848) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31850 = arguments.length;
switch (G__31850) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30798__auto___32801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31893){
var state_val_31894 = (state_31893[(1)]);
if((state_val_31894 === (7))){
var state_31893__$1 = state_31893;
var statearr_31895_32802 = state_31893__$1;
(statearr_31895_32802[(2)] = null);

(statearr_31895_32802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (1))){
var state_31893__$1 = state_31893;
var statearr_31896_32803 = state_31893__$1;
(statearr_31896_32803[(2)] = null);

(statearr_31896_32803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (4))){
var inst_31853 = (state_31893[(7)]);
var inst_31854 = (state_31893[(8)]);
var inst_31856 = (inst_31854 < inst_31853);
var state_31893__$1 = state_31893;
if(cljs.core.truth_(inst_31856)){
var statearr_31897_32804 = state_31893__$1;
(statearr_31897_32804[(1)] = (6));

} else {
var statearr_31898_32805 = state_31893__$1;
(statearr_31898_32805[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (15))){
var inst_31879 = (state_31893[(9)]);
var inst_31884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31879);
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31893__$1,(17),out,inst_31884);
} else {
if((state_val_31894 === (13))){
var inst_31879 = (state_31893[(9)]);
var inst_31879__$1 = (state_31893[(2)]);
var inst_31880 = cljs.core.some(cljs.core.nil_QMARK_,inst_31879__$1);
var state_31893__$1 = (function (){var statearr_31899 = state_31893;
(statearr_31899[(9)] = inst_31879__$1);

return statearr_31899;
})();
if(cljs.core.truth_(inst_31880)){
var statearr_31900_32806 = state_31893__$1;
(statearr_31900_32806[(1)] = (14));

} else {
var statearr_31901_32807 = state_31893__$1;
(statearr_31901_32807[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (6))){
var state_31893__$1 = state_31893;
var statearr_31902_32808 = state_31893__$1;
(statearr_31902_32808[(2)] = null);

(statearr_31902_32808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (17))){
var inst_31886 = (state_31893[(2)]);
var state_31893__$1 = (function (){var statearr_31904 = state_31893;
(statearr_31904[(10)] = inst_31886);

return statearr_31904;
})();
var statearr_31905_32809 = state_31893__$1;
(statearr_31905_32809[(2)] = null);

(statearr_31905_32809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (3))){
var inst_31891 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31893__$1,inst_31891);
} else {
if((state_val_31894 === (12))){
var _ = (function (){var statearr_31906 = state_31893;
(statearr_31906[(4)] = cljs.core.rest((state_31893[(4)])));

return statearr_31906;
})();
var state_31893__$1 = state_31893;
var ex31903 = (state_31893__$1[(2)]);
var statearr_31907_32810 = state_31893__$1;
(statearr_31907_32810[(5)] = ex31903);


if((ex31903 instanceof Object)){
var statearr_31908_32811 = state_31893__$1;
(statearr_31908_32811[(1)] = (11));

(statearr_31908_32811[(5)] = null);

} else {
throw ex31903;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (2))){
var inst_31852 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31853 = cnt;
var inst_31854 = (0);
var state_31893__$1 = (function (){var statearr_31909 = state_31893;
(statearr_31909[(11)] = inst_31852);

(statearr_31909[(7)] = inst_31853);

(statearr_31909[(8)] = inst_31854);

return statearr_31909;
})();
var statearr_31910_32812 = state_31893__$1;
(statearr_31910_32812[(2)] = null);

(statearr_31910_32812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (11))){
var inst_31858 = (state_31893[(2)]);
var inst_31859 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31893__$1 = (function (){var statearr_31911 = state_31893;
(statearr_31911[(12)] = inst_31858);

return statearr_31911;
})();
var statearr_31912_32813 = state_31893__$1;
(statearr_31912_32813[(2)] = inst_31859);

(statearr_31912_32813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (9))){
var inst_31854 = (state_31893[(8)]);
var _ = (function (){var statearr_31913 = state_31893;
(statearr_31913[(4)] = cljs.core.cons((12),(state_31893[(4)])));

return statearr_31913;
})();
var inst_31865 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31854) : chs__$1.call(null,inst_31854));
var inst_31866 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31854) : done.call(null,inst_31854));
var inst_31867 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31865,inst_31866);
var ___$1 = (function (){var statearr_31914 = state_31893;
(statearr_31914[(4)] = cljs.core.rest((state_31893[(4)])));

return statearr_31914;
})();
var state_31893__$1 = state_31893;
var statearr_31915_32814 = state_31893__$1;
(statearr_31915_32814[(2)] = inst_31867);

(statearr_31915_32814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (5))){
var inst_31877 = (state_31893[(2)]);
var state_31893__$1 = (function (){var statearr_31916 = state_31893;
(statearr_31916[(13)] = inst_31877);

return statearr_31916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31893__$1,(13),dchan);
} else {
if((state_val_31894 === (14))){
var inst_31882 = cljs.core.async.close_BANG_(out);
var state_31893__$1 = state_31893;
var statearr_31917_32815 = state_31893__$1;
(statearr_31917_32815[(2)] = inst_31882);

(statearr_31917_32815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (16))){
var inst_31889 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31918_32816 = state_31893__$1;
(statearr_31918_32816[(2)] = inst_31889);

(statearr_31918_32816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (10))){
var inst_31854 = (state_31893[(8)]);
var inst_31870 = (state_31893[(2)]);
var inst_31871 = (inst_31854 + (1));
var inst_31854__$1 = inst_31871;
var state_31893__$1 = (function (){var statearr_31919 = state_31893;
(statearr_31919[(14)] = inst_31870);

(statearr_31919[(8)] = inst_31854__$1);

return statearr_31919;
})();
var statearr_31920_32823 = state_31893__$1;
(statearr_31920_32823[(2)] = null);

(statearr_31920_32823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (8))){
var inst_31875 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31921_32824 = state_31893__$1;
(statearr_31921_32824[(2)] = inst_31875);

(statearr_31921_32824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_31922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31922[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_31922[(1)] = (1));

return statearr_31922;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_31893){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31893);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31923){var ex__30634__auto__ = e31923;
var statearr_31924_32825 = state_31893;
(statearr_31924_32825[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31893[(4)]))){
var statearr_31925_32826 = state_31893;
(statearr_31925_32826[(1)] = cljs.core.first((state_31893[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32827 = state_31893;
state_31893 = G__32827;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_31893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_31893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31926 = f__30799__auto__();
(statearr_31926[(6)] = c__30798__auto___32801);

return statearr_31926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31929 = arguments.length;
switch (G__31929) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30798__auto___32829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_31961){
var state_val_31962 = (state_31961[(1)]);
if((state_val_31962 === (7))){
var inst_31940 = (state_31961[(7)]);
var inst_31941 = (state_31961[(8)]);
var inst_31940__$1 = (state_31961[(2)]);
var inst_31941__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31940__$1,(0),null);
var inst_31942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31940__$1,(1),null);
var inst_31943 = (inst_31941__$1 == null);
var state_31961__$1 = (function (){var statearr_31963 = state_31961;
(statearr_31963[(7)] = inst_31940__$1);

(statearr_31963[(9)] = inst_31942);

(statearr_31963[(8)] = inst_31941__$1);

return statearr_31963;
})();
if(cljs.core.truth_(inst_31943)){
var statearr_31964_32830 = state_31961__$1;
(statearr_31964_32830[(1)] = (8));

} else {
var statearr_31965_32831 = state_31961__$1;
(statearr_31965_32831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (1))){
var inst_31930 = cljs.core.vec(chs);
var inst_31931 = inst_31930;
var state_31961__$1 = (function (){var statearr_31966 = state_31961;
(statearr_31966[(10)] = inst_31931);

return statearr_31966;
})();
var statearr_31967_32832 = state_31961__$1;
(statearr_31967_32832[(2)] = null);

(statearr_31967_32832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (4))){
var inst_31931 = (state_31961[(10)]);
var state_31961__$1 = state_31961;
return cljs.core.async.ioc_alts_BANG_(state_31961__$1,(7),inst_31931);
} else {
if((state_val_31962 === (6))){
var inst_31957 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31968_32833 = state_31961__$1;
(statearr_31968_32833[(2)] = inst_31957);

(statearr_31968_32833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (3))){
var inst_31959 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31961__$1,inst_31959);
} else {
if((state_val_31962 === (2))){
var inst_31931 = (state_31961[(10)]);
var inst_31933 = cljs.core.count(inst_31931);
var inst_31934 = (inst_31933 > (0));
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31934)){
var statearr_31970_32834 = state_31961__$1;
(statearr_31970_32834[(1)] = (4));

} else {
var statearr_31971_32835 = state_31961__$1;
(statearr_31971_32835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (11))){
var inst_31931 = (state_31961[(10)]);
var inst_31950 = (state_31961[(2)]);
var tmp31969 = inst_31931;
var inst_31931__$1 = tmp31969;
var state_31961__$1 = (function (){var statearr_31972 = state_31961;
(statearr_31972[(11)] = inst_31950);

(statearr_31972[(10)] = inst_31931__$1);

return statearr_31972;
})();
var statearr_31973_32836 = state_31961__$1;
(statearr_31973_32836[(2)] = null);

(statearr_31973_32836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (9))){
var inst_31941 = (state_31961[(8)]);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31961__$1,(11),out,inst_31941);
} else {
if((state_val_31962 === (5))){
var inst_31955 = cljs.core.async.close_BANG_(out);
var state_31961__$1 = state_31961;
var statearr_31974_32837 = state_31961__$1;
(statearr_31974_32837[(2)] = inst_31955);

(statearr_31974_32837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (10))){
var inst_31953 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31975_32838 = state_31961__$1;
(statearr_31975_32838[(2)] = inst_31953);

(statearr_31975_32838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (8))){
var inst_31940 = (state_31961[(7)]);
var inst_31942 = (state_31961[(9)]);
var inst_31931 = (state_31961[(10)]);
var inst_31941 = (state_31961[(8)]);
var inst_31945 = (function (){var cs = inst_31931;
var vec__31936 = inst_31940;
var v = inst_31941;
var c = inst_31942;
return (function (p1__31927_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31927_SHARP_);
});
})();
var inst_31946 = cljs.core.filterv(inst_31945,inst_31931);
var inst_31931__$1 = inst_31946;
var state_31961__$1 = (function (){var statearr_31976 = state_31961;
(statearr_31976[(10)] = inst_31931__$1);

return statearr_31976;
})();
var statearr_31977_32839 = state_31961__$1;
(statearr_31977_32839[(2)] = null);

(statearr_31977_32839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31978[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_31961){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_31961);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e31979){var ex__30634__auto__ = e31979;
var statearr_31980_32840 = state_31961;
(statearr_31980_32840[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_31961[(4)]))){
var statearr_31981_32841 = state_31961;
(statearr_31981_32841[(1)] = cljs.core.first((state_31961[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32842 = state_31961;
state_31961 = G__32842;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_31961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_31961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_31982 = f__30799__auto__();
(statearr_31982[(6)] = c__30798__auto___32829);

return statearr_31982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31984 = arguments.length;
switch (G__31984) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30798__auto___32844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_32008){
var state_val_32009 = (state_32008[(1)]);
if((state_val_32009 === (7))){
var inst_31990 = (state_32008[(7)]);
var inst_31990__$1 = (state_32008[(2)]);
var inst_31991 = (inst_31990__$1 == null);
var inst_31992 = cljs.core.not(inst_31991);
var state_32008__$1 = (function (){var statearr_32010 = state_32008;
(statearr_32010[(7)] = inst_31990__$1);

return statearr_32010;
})();
if(inst_31992){
var statearr_32011_32845 = state_32008__$1;
(statearr_32011_32845[(1)] = (8));

} else {
var statearr_32012_32846 = state_32008__$1;
(statearr_32012_32846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (1))){
var inst_31985 = (0);
var state_32008__$1 = (function (){var statearr_32013 = state_32008;
(statearr_32013[(8)] = inst_31985);

return statearr_32013;
})();
var statearr_32014_32847 = state_32008__$1;
(statearr_32014_32847[(2)] = null);

(statearr_32014_32847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (4))){
var state_32008__$1 = state_32008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32008__$1,(7),ch);
} else {
if((state_val_32009 === (6))){
var inst_32003 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32015_32848 = state_32008__$1;
(statearr_32015_32848[(2)] = inst_32003);

(statearr_32015_32848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (3))){
var inst_32005 = (state_32008[(2)]);
var inst_32006 = cljs.core.async.close_BANG_(out);
var state_32008__$1 = (function (){var statearr_32016 = state_32008;
(statearr_32016[(9)] = inst_32005);

return statearr_32016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32008__$1,inst_32006);
} else {
if((state_val_32009 === (2))){
var inst_31985 = (state_32008[(8)]);
var inst_31987 = (inst_31985 < n);
var state_32008__$1 = state_32008;
if(cljs.core.truth_(inst_31987)){
var statearr_32017_32849 = state_32008__$1;
(statearr_32017_32849[(1)] = (4));

} else {
var statearr_32018_32850 = state_32008__$1;
(statearr_32018_32850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (11))){
var inst_31985 = (state_32008[(8)]);
var inst_31995 = (state_32008[(2)]);
var inst_31996 = (inst_31985 + (1));
var inst_31985__$1 = inst_31996;
var state_32008__$1 = (function (){var statearr_32019 = state_32008;
(statearr_32019[(10)] = inst_31995);

(statearr_32019[(8)] = inst_31985__$1);

return statearr_32019;
})();
var statearr_32020_32851 = state_32008__$1;
(statearr_32020_32851[(2)] = null);

(statearr_32020_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (9))){
var state_32008__$1 = state_32008;
var statearr_32021_32852 = state_32008__$1;
(statearr_32021_32852[(2)] = null);

(statearr_32021_32852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (5))){
var state_32008__$1 = state_32008;
var statearr_32022_32853 = state_32008__$1;
(statearr_32022_32853[(2)] = null);

(statearr_32022_32853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (10))){
var inst_32000 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32023_32854 = state_32008__$1;
(statearr_32023_32854[(2)] = inst_32000);

(statearr_32023_32854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (8))){
var inst_31990 = (state_32008[(7)]);
var state_32008__$1 = state_32008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32008__$1,(11),out,inst_31990);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_32024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32024[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_32024[(1)] = (1));

return statearr_32024;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_32008){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_32008);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e32025){var ex__30634__auto__ = e32025;
var statearr_32026_32855 = state_32008;
(statearr_32026_32855[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_32008[(4)]))){
var statearr_32027_32856 = state_32008;
(statearr_32027_32856[(1)] = cljs.core.first((state_32008[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32857 = state_32008;
state_32008 = G__32857;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_32008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_32008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_32028 = f__30799__auto__();
(statearr_32028[(6)] = c__30798__auto___32844);

return statearr_32028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32030 = (function (f,ch,meta32031){
this.f = f;
this.ch = ch;
this.meta32031 = meta32031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32032,meta32031__$1){
var self__ = this;
var _32032__$1 = this;
return (new cljs.core.async.t_cljs$core$async32030(self__.f,self__.ch,meta32031__$1));
}));

(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32032){
var self__ = this;
var _32032__$1 = this;
return self__.meta32031;
}));

(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32033 = (function (f,ch,meta32031,_,fn1,meta32034){
this.f = f;
this.ch = ch;
this.meta32031 = meta32031;
this._ = _;
this.fn1 = fn1;
this.meta32034 = meta32034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32035,meta32034__$1){
var self__ = this;
var _32035__$1 = this;
return (new cljs.core.async.t_cljs$core$async32033(self__.f,self__.ch,self__.meta32031,self__._,self__.fn1,meta32034__$1));
}));

(cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32035){
var self__ = this;
var _32035__$1 = this;
return self__.meta32034;
}));

(cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32029_SHARP_){
var G__32036 = (((p1__32029_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32029_SHARP_) : self__.f.call(null,p1__32029_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32036) : f1.call(null,G__32036));
});
}));

(cljs.core.async.t_cljs$core$async32033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32031","meta32031",-1781150436,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32030","cljs.core.async/t_cljs$core$async32030",1086166946,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32034","meta32034",1826902452,null)], null);
}));

(cljs.core.async.t_cljs$core$async32033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32033");

(cljs.core.async.t_cljs$core$async32033.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32033.
 */
cljs.core.async.__GT_t_cljs$core$async32033 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32033(f__$1,ch__$1,meta32031__$1,___$2,fn1__$1,meta32034){
return (new cljs.core.async.t_cljs$core$async32033(f__$1,ch__$1,meta32031__$1,___$2,fn1__$1,meta32034));
});

}

return (new cljs.core.async.t_cljs$core$async32033(self__.f,self__.ch,self__.meta32031,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32037 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32037) : self__.f.call(null,G__32037));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32031","meta32031",-1781150436,null)], null);
}));

(cljs.core.async.t_cljs$core$async32030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32030");

(cljs.core.async.t_cljs$core$async32030.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32030.
 */
cljs.core.async.__GT_t_cljs$core$async32030 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32030(f__$1,ch__$1,meta32031){
return (new cljs.core.async.t_cljs$core$async32030(f__$1,ch__$1,meta32031));
});

}

return (new cljs.core.async.t_cljs$core$async32030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32038 = (function (f,ch,meta32039){
this.f = f;
this.ch = ch;
this.meta32039 = meta32039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32040,meta32039__$1){
var self__ = this;
var _32040__$1 = this;
return (new cljs.core.async.t_cljs$core$async32038(self__.f,self__.ch,meta32039__$1));
}));

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32040){
var self__ = this;
var _32040__$1 = this;
return self__.meta32039;
}));

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32039","meta32039",1060317879,null)], null);
}));

(cljs.core.async.t_cljs$core$async32038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32038");

(cljs.core.async.t_cljs$core$async32038.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32038.
 */
cljs.core.async.__GT_t_cljs$core$async32038 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32038(f__$1,ch__$1,meta32039){
return (new cljs.core.async.t_cljs$core$async32038(f__$1,ch__$1,meta32039));
});

}

return (new cljs.core.async.t_cljs$core$async32038(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32041 = (function (p,ch,meta32042){
this.p = p;
this.ch = ch;
this.meta32042 = meta32042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32043,meta32042__$1){
var self__ = this;
var _32043__$1 = this;
return (new cljs.core.async.t_cljs$core$async32041(self__.p,self__.ch,meta32042__$1));
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32043){
var self__ = this;
var _32043__$1 = this;
return self__.meta32042;
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32042","meta32042",1204337582,null)], null);
}));

(cljs.core.async.t_cljs$core$async32041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32041");

(cljs.core.async.t_cljs$core$async32041.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32041.
 */
cljs.core.async.__GT_t_cljs$core$async32041 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32041(p__$1,ch__$1,meta32042){
return (new cljs.core.async.t_cljs$core$async32041(p__$1,ch__$1,meta32042));
});

}

return (new cljs.core.async.t_cljs$core$async32041(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32045 = arguments.length;
switch (G__32045) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30798__auto___32864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_32066){
var state_val_32067 = (state_32066[(1)]);
if((state_val_32067 === (7))){
var inst_32062 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32068_32865 = state_32066__$1;
(statearr_32068_32865[(2)] = inst_32062);

(statearr_32068_32865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (1))){
var state_32066__$1 = state_32066;
var statearr_32069_32866 = state_32066__$1;
(statearr_32069_32866[(2)] = null);

(statearr_32069_32866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (4))){
var inst_32048 = (state_32066[(7)]);
var inst_32048__$1 = (state_32066[(2)]);
var inst_32049 = (inst_32048__$1 == null);
var state_32066__$1 = (function (){var statearr_32070 = state_32066;
(statearr_32070[(7)] = inst_32048__$1);

return statearr_32070;
})();
if(cljs.core.truth_(inst_32049)){
var statearr_32071_32867 = state_32066__$1;
(statearr_32071_32867[(1)] = (5));

} else {
var statearr_32072_32868 = state_32066__$1;
(statearr_32072_32868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (6))){
var inst_32048 = (state_32066[(7)]);
var inst_32053 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32048) : p.call(null,inst_32048));
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_32053)){
var statearr_32073_32869 = state_32066__$1;
(statearr_32073_32869[(1)] = (8));

} else {
var statearr_32074_32870 = state_32066__$1;
(statearr_32074_32870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (3))){
var inst_32064 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32066__$1,inst_32064);
} else {
if((state_val_32067 === (2))){
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32066__$1,(4),ch);
} else {
if((state_val_32067 === (11))){
var inst_32056 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32075_32871 = state_32066__$1;
(statearr_32075_32871[(2)] = inst_32056);

(statearr_32075_32871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (9))){
var state_32066__$1 = state_32066;
var statearr_32076_32872 = state_32066__$1;
(statearr_32076_32872[(2)] = null);

(statearr_32076_32872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (5))){
var inst_32051 = cljs.core.async.close_BANG_(out);
var state_32066__$1 = state_32066;
var statearr_32077_32873 = state_32066__$1;
(statearr_32077_32873[(2)] = inst_32051);

(statearr_32077_32873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (10))){
var inst_32059 = (state_32066[(2)]);
var state_32066__$1 = (function (){var statearr_32078 = state_32066;
(statearr_32078[(8)] = inst_32059);

return statearr_32078;
})();
var statearr_32079_32874 = state_32066__$1;
(statearr_32079_32874[(2)] = null);

(statearr_32079_32874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (8))){
var inst_32048 = (state_32066[(7)]);
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32066__$1,(11),out,inst_32048);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_32080 = [null,null,null,null,null,null,null,null,null];
(statearr_32080[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_32080[(1)] = (1));

return statearr_32080;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_32066){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_32066);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e32081){var ex__30634__auto__ = e32081;
var statearr_32082_32875 = state_32066;
(statearr_32082_32875[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_32066[(4)]))){
var statearr_32083_32876 = state_32066;
(statearr_32083_32876[(1)] = cljs.core.first((state_32066[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32877 = state_32066;
state_32066 = G__32877;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_32066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_32066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_32084 = f__30799__auto__();
(statearr_32084[(6)] = c__30798__auto___32864);

return statearr_32084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32086 = arguments.length;
switch (G__32086) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30798__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (7))){
var inst_32144 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32150_32881 = state_32148__$1;
(statearr_32150_32881[(2)] = inst_32144);

(statearr_32150_32881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (20))){
var inst_32114 = (state_32148[(7)]);
var inst_32125 = (state_32148[(2)]);
var inst_32126 = cljs.core.next(inst_32114);
var inst_32100 = inst_32126;
var inst_32101 = null;
var inst_32102 = (0);
var inst_32103 = (0);
var state_32148__$1 = (function (){var statearr_32151 = state_32148;
(statearr_32151[(8)] = inst_32101);

(statearr_32151[(9)] = inst_32100);

(statearr_32151[(10)] = inst_32103);

(statearr_32151[(11)] = inst_32102);

(statearr_32151[(12)] = inst_32125);

return statearr_32151;
})();
var statearr_32152_32882 = state_32148__$1;
(statearr_32152_32882[(2)] = null);

(statearr_32152_32882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (1))){
var state_32148__$1 = state_32148;
var statearr_32153_32883 = state_32148__$1;
(statearr_32153_32883[(2)] = null);

(statearr_32153_32883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (4))){
var inst_32089 = (state_32148[(13)]);
var inst_32089__$1 = (state_32148[(2)]);
var inst_32090 = (inst_32089__$1 == null);
var state_32148__$1 = (function (){var statearr_32154 = state_32148;
(statearr_32154[(13)] = inst_32089__$1);

return statearr_32154;
})();
if(cljs.core.truth_(inst_32090)){
var statearr_32155_32884 = state_32148__$1;
(statearr_32155_32884[(1)] = (5));

} else {
var statearr_32156_32885 = state_32148__$1;
(statearr_32156_32885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (15))){
var state_32148__$1 = state_32148;
var statearr_32160_32886 = state_32148__$1;
(statearr_32160_32886[(2)] = null);

(statearr_32160_32886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (21))){
var state_32148__$1 = state_32148;
var statearr_32161_32888 = state_32148__$1;
(statearr_32161_32888[(2)] = null);

(statearr_32161_32888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (13))){
var inst_32101 = (state_32148[(8)]);
var inst_32100 = (state_32148[(9)]);
var inst_32103 = (state_32148[(10)]);
var inst_32102 = (state_32148[(11)]);
var inst_32110 = (state_32148[(2)]);
var inst_32111 = (inst_32103 + (1));
var tmp32157 = inst_32101;
var tmp32158 = inst_32100;
var tmp32159 = inst_32102;
var inst_32100__$1 = tmp32158;
var inst_32101__$1 = tmp32157;
var inst_32102__$1 = tmp32159;
var inst_32103__$1 = inst_32111;
var state_32148__$1 = (function (){var statearr_32162 = state_32148;
(statearr_32162[(8)] = inst_32101__$1);

(statearr_32162[(9)] = inst_32100__$1);

(statearr_32162[(10)] = inst_32103__$1);

(statearr_32162[(11)] = inst_32102__$1);

(statearr_32162[(14)] = inst_32110);

return statearr_32162;
})();
var statearr_32163_32889 = state_32148__$1;
(statearr_32163_32889[(2)] = null);

(statearr_32163_32889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (22))){
var state_32148__$1 = state_32148;
var statearr_32164_32890 = state_32148__$1;
(statearr_32164_32890[(2)] = null);

(statearr_32164_32890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (6))){
var inst_32089 = (state_32148[(13)]);
var inst_32098 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32089) : f.call(null,inst_32089));
var inst_32099 = cljs.core.seq(inst_32098);
var inst_32100 = inst_32099;
var inst_32101 = null;
var inst_32102 = (0);
var inst_32103 = (0);
var state_32148__$1 = (function (){var statearr_32165 = state_32148;
(statearr_32165[(8)] = inst_32101);

(statearr_32165[(9)] = inst_32100);

(statearr_32165[(10)] = inst_32103);

(statearr_32165[(11)] = inst_32102);

return statearr_32165;
})();
var statearr_32166_32891 = state_32148__$1;
(statearr_32166_32891[(2)] = null);

(statearr_32166_32891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (17))){
var inst_32114 = (state_32148[(7)]);
var inst_32118 = cljs.core.chunk_first(inst_32114);
var inst_32119 = cljs.core.chunk_rest(inst_32114);
var inst_32120 = cljs.core.count(inst_32118);
var inst_32100 = inst_32119;
var inst_32101 = inst_32118;
var inst_32102 = inst_32120;
var inst_32103 = (0);
var state_32148__$1 = (function (){var statearr_32167 = state_32148;
(statearr_32167[(8)] = inst_32101);

(statearr_32167[(9)] = inst_32100);

(statearr_32167[(10)] = inst_32103);

(statearr_32167[(11)] = inst_32102);

return statearr_32167;
})();
var statearr_32168_32892 = state_32148__$1;
(statearr_32168_32892[(2)] = null);

(statearr_32168_32892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (3))){
var inst_32146 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32148__$1,inst_32146);
} else {
if((state_val_32149 === (12))){
var inst_32134 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32169_32894 = state_32148__$1;
(statearr_32169_32894[(2)] = inst_32134);

(statearr_32169_32894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (2))){
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32148__$1,(4),in$);
} else {
if((state_val_32149 === (23))){
var inst_32142 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32170_32895 = state_32148__$1;
(statearr_32170_32895[(2)] = inst_32142);

(statearr_32170_32895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (19))){
var inst_32129 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32171_32896 = state_32148__$1;
(statearr_32171_32896[(2)] = inst_32129);

(statearr_32171_32896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (11))){
var inst_32114 = (state_32148[(7)]);
var inst_32100 = (state_32148[(9)]);
var inst_32114__$1 = cljs.core.seq(inst_32100);
var state_32148__$1 = (function (){var statearr_32172 = state_32148;
(statearr_32172[(7)] = inst_32114__$1);

return statearr_32172;
})();
if(inst_32114__$1){
var statearr_32173_32897 = state_32148__$1;
(statearr_32173_32897[(1)] = (14));

} else {
var statearr_32174_32898 = state_32148__$1;
(statearr_32174_32898[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (9))){
var inst_32136 = (state_32148[(2)]);
var inst_32137 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32148__$1 = (function (){var statearr_32175 = state_32148;
(statearr_32175[(15)] = inst_32136);

return statearr_32175;
})();
if(cljs.core.truth_(inst_32137)){
var statearr_32176_32899 = state_32148__$1;
(statearr_32176_32899[(1)] = (21));

} else {
var statearr_32177_32900 = state_32148__$1;
(statearr_32177_32900[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (5))){
var inst_32092 = cljs.core.async.close_BANG_(out);
var state_32148__$1 = state_32148;
var statearr_32178_32901 = state_32148__$1;
(statearr_32178_32901[(2)] = inst_32092);

(statearr_32178_32901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (14))){
var inst_32114 = (state_32148[(7)]);
var inst_32116 = cljs.core.chunked_seq_QMARK_(inst_32114);
var state_32148__$1 = state_32148;
if(inst_32116){
var statearr_32179_32902 = state_32148__$1;
(statearr_32179_32902[(1)] = (17));

} else {
var statearr_32180_32903 = state_32148__$1;
(statearr_32180_32903[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (16))){
var inst_32132 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32181_32904 = state_32148__$1;
(statearr_32181_32904[(2)] = inst_32132);

(statearr_32181_32904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (10))){
var inst_32101 = (state_32148[(8)]);
var inst_32103 = (state_32148[(10)]);
var inst_32108 = cljs.core._nth(inst_32101,inst_32103);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32148__$1,(13),out,inst_32108);
} else {
if((state_val_32149 === (18))){
var inst_32114 = (state_32148[(7)]);
var inst_32123 = cljs.core.first(inst_32114);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32148__$1,(20),out,inst_32123);
} else {
if((state_val_32149 === (8))){
var inst_32103 = (state_32148[(10)]);
var inst_32102 = (state_32148[(11)]);
var inst_32105 = (inst_32103 < inst_32102);
var inst_32106 = inst_32105;
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32106)){
var statearr_32182_32905 = state_32148__$1;
(statearr_32182_32905[(1)] = (10));

} else {
var statearr_32183_32906 = state_32148__$1;
(statearr_32183_32906[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30631__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30631__auto____0 = (function (){
var statearr_32184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32184[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30631__auto__);

(statearr_32184[(1)] = (1));

return statearr_32184;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30631__auto____1 = (function (state_32148){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_32148);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e32185){var ex__30634__auto__ = e32185;
var statearr_32186_32907 = state_32148;
(statearr_32186_32907[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_32148[(4)]))){
var statearr_32187_32908 = state_32148;
(statearr_32187_32908[(1)] = cljs.core.first((state_32148[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32909 = state_32148;
state_32148 = G__32909;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30631__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30631__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30631__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30631__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_32188 = f__30799__auto__();
(statearr_32188[(6)] = c__30798__auto__);

return statearr_32188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));

return c__30798__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32190 = arguments.length;
switch (G__32190) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32192 = arguments.length;
switch (G__32192) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32194 = arguments.length;
switch (G__32194) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30798__auto___32913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_32218){
var state_val_32219 = (state_32218[(1)]);
if((state_val_32219 === (7))){
var inst_32213 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32220_32914 = state_32218__$1;
(statearr_32220_32914[(2)] = inst_32213);

(statearr_32220_32914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (1))){
var inst_32195 = null;
var state_32218__$1 = (function (){var statearr_32221 = state_32218;
(statearr_32221[(7)] = inst_32195);

return statearr_32221;
})();
var statearr_32222_32915 = state_32218__$1;
(statearr_32222_32915[(2)] = null);

(statearr_32222_32915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (4))){
var inst_32198 = (state_32218[(8)]);
var inst_32198__$1 = (state_32218[(2)]);
var inst_32199 = (inst_32198__$1 == null);
var inst_32200 = cljs.core.not(inst_32199);
var state_32218__$1 = (function (){var statearr_32223 = state_32218;
(statearr_32223[(8)] = inst_32198__$1);

return statearr_32223;
})();
if(inst_32200){
var statearr_32224_32916 = state_32218__$1;
(statearr_32224_32916[(1)] = (5));

} else {
var statearr_32225_32917 = state_32218__$1;
(statearr_32225_32917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (6))){
var state_32218__$1 = state_32218;
var statearr_32226_32918 = state_32218__$1;
(statearr_32226_32918[(2)] = null);

(statearr_32226_32918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (3))){
var inst_32215 = (state_32218[(2)]);
var inst_32216 = cljs.core.async.close_BANG_(out);
var state_32218__$1 = (function (){var statearr_32227 = state_32218;
(statearr_32227[(9)] = inst_32215);

return statearr_32227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32218__$1,inst_32216);
} else {
if((state_val_32219 === (2))){
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32218__$1,(4),ch);
} else {
if((state_val_32219 === (11))){
var inst_32198 = (state_32218[(8)]);
var inst_32207 = (state_32218[(2)]);
var inst_32195 = inst_32198;
var state_32218__$1 = (function (){var statearr_32228 = state_32218;
(statearr_32228[(7)] = inst_32195);

(statearr_32228[(10)] = inst_32207);

return statearr_32228;
})();
var statearr_32229_32919 = state_32218__$1;
(statearr_32229_32919[(2)] = null);

(statearr_32229_32919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (9))){
var inst_32198 = (state_32218[(8)]);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32218__$1,(11),out,inst_32198);
} else {
if((state_val_32219 === (5))){
var inst_32195 = (state_32218[(7)]);
var inst_32198 = (state_32218[(8)]);
var inst_32202 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32198,inst_32195);
var state_32218__$1 = state_32218;
if(inst_32202){
var statearr_32231_32920 = state_32218__$1;
(statearr_32231_32920[(1)] = (8));

} else {
var statearr_32232_32921 = state_32218__$1;
(statearr_32232_32921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (10))){
var inst_32210 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32233_32922 = state_32218__$1;
(statearr_32233_32922[(2)] = inst_32210);

(statearr_32233_32922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (8))){
var inst_32195 = (state_32218[(7)]);
var tmp32230 = inst_32195;
var inst_32195__$1 = tmp32230;
var state_32218__$1 = (function (){var statearr_32234 = state_32218;
(statearr_32234[(7)] = inst_32195__$1);

return statearr_32234;
})();
var statearr_32235_32923 = state_32218__$1;
(statearr_32235_32923[(2)] = null);

(statearr_32235_32923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_32236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32236[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_32236[(1)] = (1));

return statearr_32236;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_32218){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_32218);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e32237){var ex__30634__auto__ = e32237;
var statearr_32238_32924 = state_32218;
(statearr_32238_32924[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_32218[(4)]))){
var statearr_32239_32925 = state_32218;
(statearr_32239_32925[(1)] = cljs.core.first((state_32218[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32926 = state_32218;
state_32218 = G__32926;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_32218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_32218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_32240 = f__30799__auto__();
(statearr_32240[(6)] = c__30798__auto___32913);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32242 = arguments.length;
switch (G__32242) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30798__auto___32928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_32280){
var state_val_32281 = (state_32280[(1)]);
if((state_val_32281 === (7))){
var inst_32276 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32282_32929 = state_32280__$1;
(statearr_32282_32929[(2)] = inst_32276);

(statearr_32282_32929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (1))){
var inst_32243 = (new Array(n));
var inst_32244 = inst_32243;
var inst_32245 = (0);
var state_32280__$1 = (function (){var statearr_32283 = state_32280;
(statearr_32283[(7)] = inst_32244);

(statearr_32283[(8)] = inst_32245);

return statearr_32283;
})();
var statearr_32284_32930 = state_32280__$1;
(statearr_32284_32930[(2)] = null);

(statearr_32284_32930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (4))){
var inst_32248 = (state_32280[(9)]);
var inst_32248__$1 = (state_32280[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var inst_32250 = cljs.core.not(inst_32249);
var state_32280__$1 = (function (){var statearr_32285 = state_32280;
(statearr_32285[(9)] = inst_32248__$1);

return statearr_32285;
})();
if(inst_32250){
var statearr_32286_32931 = state_32280__$1;
(statearr_32286_32931[(1)] = (5));

} else {
var statearr_32287_32932 = state_32280__$1;
(statearr_32287_32932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (15))){
var inst_32270 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32288_32934 = state_32280__$1;
(statearr_32288_32934[(2)] = inst_32270);

(statearr_32288_32934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (13))){
var state_32280__$1 = state_32280;
var statearr_32289_32936 = state_32280__$1;
(statearr_32289_32936[(2)] = null);

(statearr_32289_32936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (6))){
var inst_32245 = (state_32280[(8)]);
var inst_32266 = (inst_32245 > (0));
var state_32280__$1 = state_32280;
if(cljs.core.truth_(inst_32266)){
var statearr_32290_32937 = state_32280__$1;
(statearr_32290_32937[(1)] = (12));

} else {
var statearr_32291_32938 = state_32280__$1;
(statearr_32291_32938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (3))){
var inst_32278 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32280__$1,inst_32278);
} else {
if((state_val_32281 === (12))){
var inst_32244 = (state_32280[(7)]);
var inst_32268 = cljs.core.vec(inst_32244);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32280__$1,(15),out,inst_32268);
} else {
if((state_val_32281 === (2))){
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32280__$1,(4),ch);
} else {
if((state_val_32281 === (11))){
var inst_32260 = (state_32280[(2)]);
var inst_32261 = (new Array(n));
var inst_32244 = inst_32261;
var inst_32245 = (0);
var state_32280__$1 = (function (){var statearr_32292 = state_32280;
(statearr_32292[(7)] = inst_32244);

(statearr_32292[(10)] = inst_32260);

(statearr_32292[(8)] = inst_32245);

return statearr_32292;
})();
var statearr_32293_32939 = state_32280__$1;
(statearr_32293_32939[(2)] = null);

(statearr_32293_32939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (9))){
var inst_32244 = (state_32280[(7)]);
var inst_32258 = cljs.core.vec(inst_32244);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32280__$1,(11),out,inst_32258);
} else {
if((state_val_32281 === (5))){
var inst_32253 = (state_32280[(11)]);
var inst_32248 = (state_32280[(9)]);
var inst_32244 = (state_32280[(7)]);
var inst_32245 = (state_32280[(8)]);
var inst_32252 = (inst_32244[inst_32245] = inst_32248);
var inst_32253__$1 = (inst_32245 + (1));
var inst_32254 = (inst_32253__$1 < n);
var state_32280__$1 = (function (){var statearr_32294 = state_32280;
(statearr_32294[(11)] = inst_32253__$1);

(statearr_32294[(12)] = inst_32252);

return statearr_32294;
})();
if(cljs.core.truth_(inst_32254)){
var statearr_32295_32940 = state_32280__$1;
(statearr_32295_32940[(1)] = (8));

} else {
var statearr_32296_32941 = state_32280__$1;
(statearr_32296_32941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (14))){
var inst_32273 = (state_32280[(2)]);
var inst_32274 = cljs.core.async.close_BANG_(out);
var state_32280__$1 = (function (){var statearr_32298 = state_32280;
(statearr_32298[(13)] = inst_32273);

return statearr_32298;
})();
var statearr_32299_32942 = state_32280__$1;
(statearr_32299_32942[(2)] = inst_32274);

(statearr_32299_32942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (10))){
var inst_32264 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32300_32943 = state_32280__$1;
(statearr_32300_32943[(2)] = inst_32264);

(statearr_32300_32943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (8))){
var inst_32253 = (state_32280[(11)]);
var inst_32244 = (state_32280[(7)]);
var tmp32297 = inst_32244;
var inst_32244__$1 = tmp32297;
var inst_32245 = inst_32253;
var state_32280__$1 = (function (){var statearr_32301 = state_32280;
(statearr_32301[(7)] = inst_32244__$1);

(statearr_32301[(8)] = inst_32245);

return statearr_32301;
})();
var statearr_32302_32944 = state_32280__$1;
(statearr_32302_32944[(2)] = null);

(statearr_32302_32944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_32303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32303[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_32303[(1)] = (1));

return statearr_32303;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_32280){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_32280);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e32304){var ex__30634__auto__ = e32304;
var statearr_32305_32945 = state_32280;
(statearr_32305_32945[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_32280[(4)]))){
var statearr_32306_32946 = state_32280;
(statearr_32306_32946[(1)] = cljs.core.first((state_32280[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32947 = state_32280;
state_32280 = G__32947;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_32280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_32280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_32307 = f__30799__auto__();
(statearr_32307[(6)] = c__30798__auto___32928);

return statearr_32307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32309 = arguments.length;
switch (G__32309) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30798__auto___32949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30799__auto__ = (function (){var switch__30630__auto__ = (function (state_32354){
var state_val_32355 = (state_32354[(1)]);
if((state_val_32355 === (7))){
var inst_32350 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32356_32950 = state_32354__$1;
(statearr_32356_32950[(2)] = inst_32350);

(statearr_32356_32950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (1))){
var inst_32310 = [];
var inst_32311 = inst_32310;
var inst_32312 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32354__$1 = (function (){var statearr_32357 = state_32354;
(statearr_32357[(7)] = inst_32311);

(statearr_32357[(8)] = inst_32312);

return statearr_32357;
})();
var statearr_32358_32951 = state_32354__$1;
(statearr_32358_32951[(2)] = null);

(statearr_32358_32951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (4))){
var inst_32315 = (state_32354[(9)]);
var inst_32315__$1 = (state_32354[(2)]);
var inst_32316 = (inst_32315__$1 == null);
var inst_32317 = cljs.core.not(inst_32316);
var state_32354__$1 = (function (){var statearr_32359 = state_32354;
(statearr_32359[(9)] = inst_32315__$1);

return statearr_32359;
})();
if(inst_32317){
var statearr_32360_32953 = state_32354__$1;
(statearr_32360_32953[(1)] = (5));

} else {
var statearr_32361_32954 = state_32354__$1;
(statearr_32361_32954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (15))){
var inst_32311 = (state_32354[(7)]);
var inst_32342 = cljs.core.vec(inst_32311);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32354__$1,(18),out,inst_32342);
} else {
if((state_val_32355 === (13))){
var inst_32337 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32362_32955 = state_32354__$1;
(statearr_32362_32955[(2)] = inst_32337);

(statearr_32362_32955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (6))){
var inst_32311 = (state_32354[(7)]);
var inst_32339 = inst_32311.length;
var inst_32340 = (inst_32339 > (0));
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32340)){
var statearr_32363_32956 = state_32354__$1;
(statearr_32363_32956[(1)] = (15));

} else {
var statearr_32364_32957 = state_32354__$1;
(statearr_32364_32957[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (17))){
var inst_32347 = (state_32354[(2)]);
var inst_32348 = cljs.core.async.close_BANG_(out);
var state_32354__$1 = (function (){var statearr_32365 = state_32354;
(statearr_32365[(10)] = inst_32347);

return statearr_32365;
})();
var statearr_32366_32958 = state_32354__$1;
(statearr_32366_32958[(2)] = inst_32348);

(statearr_32366_32958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (3))){
var inst_32352 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32354__$1,inst_32352);
} else {
if((state_val_32355 === (12))){
var inst_32311 = (state_32354[(7)]);
var inst_32330 = cljs.core.vec(inst_32311);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32354__$1,(14),out,inst_32330);
} else {
if((state_val_32355 === (2))){
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32354__$1,(4),ch);
} else {
if((state_val_32355 === (11))){
var inst_32319 = (state_32354[(11)]);
var inst_32311 = (state_32354[(7)]);
var inst_32315 = (state_32354[(9)]);
var inst_32327 = inst_32311.push(inst_32315);
var tmp32367 = inst_32311;
var inst_32311__$1 = tmp32367;
var inst_32312 = inst_32319;
var state_32354__$1 = (function (){var statearr_32368 = state_32354;
(statearr_32368[(7)] = inst_32311__$1);

(statearr_32368[(12)] = inst_32327);

(statearr_32368[(8)] = inst_32312);

return statearr_32368;
})();
var statearr_32369_32959 = state_32354__$1;
(statearr_32369_32959[(2)] = null);

(statearr_32369_32959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (9))){
var inst_32312 = (state_32354[(8)]);
var inst_32323 = cljs.core.keyword_identical_QMARK_(inst_32312,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32354__$1 = state_32354;
var statearr_32370_32960 = state_32354__$1;
(statearr_32370_32960[(2)] = inst_32323);

(statearr_32370_32960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (5))){
var inst_32320 = (state_32354[(13)]);
var inst_32319 = (state_32354[(11)]);
var inst_32315 = (state_32354[(9)]);
var inst_32312 = (state_32354[(8)]);
var inst_32319__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32315) : f.call(null,inst_32315));
var inst_32320__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32319__$1,inst_32312);
var state_32354__$1 = (function (){var statearr_32371 = state_32354;
(statearr_32371[(13)] = inst_32320__$1);

(statearr_32371[(11)] = inst_32319__$1);

return statearr_32371;
})();
if(inst_32320__$1){
var statearr_32372_32961 = state_32354__$1;
(statearr_32372_32961[(1)] = (8));

} else {
var statearr_32373_32962 = state_32354__$1;
(statearr_32373_32962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (14))){
var inst_32319 = (state_32354[(11)]);
var inst_32315 = (state_32354[(9)]);
var inst_32332 = (state_32354[(2)]);
var inst_32333 = [];
var inst_32334 = inst_32333.push(inst_32315);
var inst_32311 = inst_32333;
var inst_32312 = inst_32319;
var state_32354__$1 = (function (){var statearr_32374 = state_32354;
(statearr_32374[(14)] = inst_32332);

(statearr_32374[(7)] = inst_32311);

(statearr_32374[(15)] = inst_32334);

(statearr_32374[(8)] = inst_32312);

return statearr_32374;
})();
var statearr_32375_32963 = state_32354__$1;
(statearr_32375_32963[(2)] = null);

(statearr_32375_32963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (16))){
var state_32354__$1 = state_32354;
var statearr_32376_32964 = state_32354__$1;
(statearr_32376_32964[(2)] = null);

(statearr_32376_32964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (10))){
var inst_32325 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32325)){
var statearr_32377_32965 = state_32354__$1;
(statearr_32377_32965[(1)] = (11));

} else {
var statearr_32378_32966 = state_32354__$1;
(statearr_32378_32966[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (18))){
var inst_32344 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32379_32967 = state_32354__$1;
(statearr_32379_32967[(2)] = inst_32344);

(statearr_32379_32967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (8))){
var inst_32320 = (state_32354[(13)]);
var state_32354__$1 = state_32354;
var statearr_32380_32968 = state_32354__$1;
(statearr_32380_32968[(2)] = inst_32320);

(statearr_32380_32968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30631__auto__ = null;
var cljs$core$async$state_machine__30631__auto____0 = (function (){
var statearr_32381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32381[(0)] = cljs$core$async$state_machine__30631__auto__);

(statearr_32381[(1)] = (1));

return statearr_32381;
});
var cljs$core$async$state_machine__30631__auto____1 = (function (state_32354){
while(true){
var ret_value__30632__auto__ = (function (){try{while(true){
var result__30633__auto__ = switch__30630__auto__(state_32354);
if(cljs.core.keyword_identical_QMARK_(result__30633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30633__auto__;
}
break;
}
}catch (e32382){var ex__30634__auto__ = e32382;
var statearr_32383_32969 = state_32354;
(statearr_32383_32969[(2)] = ex__30634__auto__);


if(cljs.core.seq((state_32354[(4)]))){
var statearr_32384_32970 = state_32354;
(statearr_32384_32970[(1)] = cljs.core.first((state_32354[(4)])));

} else {
throw ex__30634__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32971 = state_32354;
state_32354 = G__32971;
continue;
} else {
return ret_value__30632__auto__;
}
break;
}
});
cljs$core$async$state_machine__30631__auto__ = function(state_32354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30631__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30631__auto____1.call(this,state_32354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30631__auto____0;
cljs$core$async$state_machine__30631__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30631__auto____1;
return cljs$core$async$state_machine__30631__auto__;
})()
})();
var state__30800__auto__ = (function (){var statearr_32385 = f__30799__auto__();
(statearr_32385[(6)] = c__30798__auto___32949);

return statearr_32385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30800__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
