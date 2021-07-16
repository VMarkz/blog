(ns pages.index
  (:require
   [components.header :refer [header]]
   [components.summary :refer [summary]]
   [components.experience :refer [experience]]))

(def links-map
  [{:img "resources/public/linkedin.png"
    :text "linkedin"
    :url "https://www.linkedin.com/in/vitor-marques-73b8991a9/"}
   {:img "resources/public/github.png"
     :text "github"
     :url "https://github.com/VMarkz"}])

(def experiences-map
  [{:start-date "Sep. 2020"
    :end-date "Present"
    :role "BackEnd Developer"
    :company "PayGo Pagamentos, São Paulo."
    :experiences [{:experience "Backend development with Clojure and ClojureScript."}
                  {:experience "CI/CD with GitHub Actions"}]}])

(defn index []
  [:div [:div.container
         [header links-map]
         [:div
          [summary]
          [experience experiences-map]]]])
