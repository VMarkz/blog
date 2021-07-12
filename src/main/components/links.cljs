(ns components.links
  (:require
   [components.link :refer [link]]))

(defn links [items]
  [:ul {:style {:margin-top "10px"}}
   (for [item items]
      (let [{:keys [img text url]} item]
        [:li [link img text url]]))])
