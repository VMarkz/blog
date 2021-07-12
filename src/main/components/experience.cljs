(ns components.experience)

(def experiences-map
  [{:start-date "Sep. 2020"
    :end-date "Present"
    :hole "BackEnd Developer"
    :company "PayGo Pagamentos, São Paulo."
    :experiences [{:experience "Backend development with Clojure and ClojureScript."}
                  {:experience "CI/CD with GitHub Actions"}]}])

(defn experience-content [{:keys [start-date
                                  end-date
                                  hole
                                  company
                                  experiences]}]
  [:div {:style {:margin-top "10px"}}
   [:div start-date]
   [:div end-date]
   [:div
    [:strong hole]
    [:p company]
    [:ul
     (for [item experiences]
         [:li (:experience item)])]]])

(defn experience [items]
  [:div
   [:h2.title "Experience"]
   (for [item items]
     [experience-content item])])
