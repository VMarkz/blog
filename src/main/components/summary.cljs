(ns components.summary)

(def summary-text
  "Backend developer, currently working with the develoment of Banking as a Service products in C6 Bank, interested and open
   to learning more and more about everything related to the world of programming. I believe that
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
