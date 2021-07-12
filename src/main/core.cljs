(ns core
  (:require
   [pages.index :refer [index]]
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(defn ^:export run []
  (rdom/render [index] (.getElementById js/document "app")))

(defn ^:dev/after-load start []
  (.log js/console "starting application...")
  (run))

(defn ^:dev/before-load stop []
  (.log js/console "stoping application..."))
