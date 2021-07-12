(ns components.header
  (:require
   [components.title :refer [title]]
   [components.links :refer [links]]))

(defn header [items]
  [:div.level
   [title]
   [links items]])
