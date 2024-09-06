(ns components.formation)

(defn formation-content [{:keys [start-date
                                 end-date
                                 graduation
                                 school
                                 status]}]
  [:div.formation
   [:div
    [:div start-date]
    [:div end-date]]
   [:div.container
    [:strong graduation]
    [:div school]
    [:i status]]])

(defn formation [items]
  [:div
   [:h2.section-title "Formation"]
   (for [item items]
     [formation-content item])])