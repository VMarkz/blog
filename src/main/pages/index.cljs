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
     :text "github.com/VMarkz"
     :url "https://github.com/VMarkz"}
   {:img "resources/public/email.png"
     :text "vmp.vitor.vmp@gmail.com"
     :url "https://gmail.com"}])

(def summary-list
  [{:item "2 years of development with Clojure(Script)."}
   {:item "Comfortable with REPL Driven Development and Data Driven Development."}
   {:item "Development of Rest APIs with (Clojure/Java/Kotlin)."}
   {:item "Use of MongoDB, Datomic, Postgresql, SqlServer, MySql."}
   {:item "Use of Kafka and Kafka Streams."}
   {:item "Containers with Docker and Kubernets."}
   {:item "CI and CD with GitHub Actions."}
   {:item "Learning to implement web interfaces with Clojure Scrpit."}
   {:item "Use of React, Reagent."}])

(def experiences-map
  [{:start-date "Sep. 2020"
    :end-date "Aug. 2022"
    :role "BackEnd Developer"
    :company "PayGo Pagamentos, São Paulo."
    :experiences [{:experience "Backend development with Clojure and ClojureScript."}
                  {:experience "CI/CD with GitHub Actions."}
                  {:experience "Kafka and Kafka Streams."}
                  {:experience "MongoDB with complex aggregations."}]}
   {:start-date "Aug. 2022"
    :end-date "Present"
    :role "BackEnd Developer"
    :company "C6 Bank, São Paulo."
    :experiences [{:experience "Backend development with Kotlin."}
                  {:experience "Messaging with Kafka and ActiveMQ."}
                  {:experience "Data manipulation with MySql."}]}])

(defn index []
  [:div [:div.container
         [header links-map]
         [:div
          [summary summary-list]
          [experience experiences-map]]]])
