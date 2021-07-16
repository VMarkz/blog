(ns components.links
  (:require
   [components.link :refer [link]]))

(defn links [items]
  [:ul
   (for [item items]
      (let [{:keys [img text url]} item]
        [link img text url]))])
