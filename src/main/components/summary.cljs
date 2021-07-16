(ns components.summary)

(def summary-text
  "Backend developer, currently working with Clojure(Script), interested and open
    to learning more and more, not only about Clojure and the functional paradigm,
    but also about everything related to the world of programming. I believe that
    exposing ideas/opinions, communication and teamwork are the greatest gifts for
    delivering a product that adds value.")

(defn summary [items]
  [:div
    [:h2.section-title "Summary"]
   [:div
    [:p summary-text]]
   [:div
    [:ul.my-ul {:style {:list-style-type "square"
                        :margin-left "15px"}}
     (for [item items]
       [:li.list (:item item)])]]])
