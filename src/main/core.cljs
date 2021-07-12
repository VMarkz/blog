(ns core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(def links-map
  [{:img "resources/public/linkedin.png"
    :text "linkedin"
    :url "https://www.linkedin.com/in/vitor-marques-73b8991a9/"}
   {:img "resources/public/github.png"
     :text "github"
     :url "https://github.com/VMarkz"}])

(def summary-text
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare sem in
sapien volutpat vulputate. Vestibulum at velit convallis, pharetra enim sit amet,
faucibus magna. Maecenas lectus dolor, ultrices ac nunc sed, ullamcorper
tincidunt eros. Integer tempor ligula elementum, tincidunt leo a, aliquam quam.
Duis maximus libero ut arcu sollicitudin commodo. Pellentesque maximus risus quis
feugiat tempus. In finibus lacus nec aliquam commodo. Mauris sodales sagittis
neque et pretium. Fusce lacinia ex metus.")

(def experiences-map
  [{:start-date "Sep. 2020"
    :end-date "Present"
    :hole "BackEnd Developer"
    :company "PayGo Pagamentos, São Paulo."
    :experiences [{:experience "Backend development with Clojure and ClojureScript."}
                  {:experience "CI/CD with GitHub Actions"}]}])

(defn link [img text url]
  [:div {:style {:display "flex"
                 :alling-items "center"
                 :margin-top "5px"}}
   [:img {:src img
          :width "30px"
          :style {:margin-right "5px"}}]
   [:a {:href url}[:div text]]])

(defn links [items]
  [:ul {:style {:margin-top "10px"}}
   (for [item items]
      (let [{:keys [img text url]} item]
        [:li [link img text url]]))])

(defn title []
  [:div [:h1.title. "Curriculum Vitae"]
        [:h2.subtitle "Vitor Marques"]])

(defn header [items]
  [:div.level
   [title]
   [links items]])

(defn summary []
  [:div
    [:h2.title "Summary"]
   [:div
    [:p summary-text]]
   [:div
    [:ul {:style {:list-style-type "square"
                  :margin-left "15px"}}
     [:li "Item 0"]
     [:li "Item 1"]
     [:li "Item 2"]]]])

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

(defn body []
  [:div
   [summary]
   [experience experiences-map]])

(defn index []
  [:div [:div.container
         [header links-map]
         [body]]])

(defn ^:export run []
  (rdom/render [index] (.getElementById js/document "app")))

(defn ^:dev/after-load start []
  (.log js/console "starting application...")
  (run))

(defn ^:dev/before-load stop []
  (.log js/console "stoping application..."))
