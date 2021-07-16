(ns components.link)

(defn link [img text url]
  [:li {:style {:display "flex"
                :alling-items "center"
                :margin-top "5px"}}
   [:img {:src img
          :width "30px"
          :style {:margin-right "5px"}}]
   [:a {:href url}[:div text]]])
