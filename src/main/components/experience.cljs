(ns components.experience)

(defn experience-content [{:keys [start-date
                                  end-date
                                  role
                                  company
                                  experiences]}]
  [:div.experience
   [:div
    [:div start-date]
    [:div end-date]]
   [:div.container
    [:strong role]
    [:div company]
    [:ul.my-ul
     (for [item experiences]
         [:li.list (:experience item)])]]])

(defn experience [items]
  [:div
   [:h2.section-title "Experience"]
   (for [item items]
     [experience-content item])])
