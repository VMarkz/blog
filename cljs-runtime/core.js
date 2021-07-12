goog.provide('core');
core.run = (function core$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.index.index], null),document.getElementById("app"));
});
goog.exportSymbol('core.run', core.run);
core.start = (function core$start(){
console.log("starting application...");

return core.run();
});
core.stop = (function core$stop(){
return console.log("stoping application...");
});

//# sourceMappingURL=core.js.map
