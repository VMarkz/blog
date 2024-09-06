(ns pages.index
  (:require
   [components.header :refer [header]]
   [components.summary :refer [summary]]
   [components.formation :refer [formation]]
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
  [{:item "2 years of development with Clojure and Clojure Script."}
   {:item "4 years of development with Java and Kotlin."}
   {:item "Comfortable with REPL Driven Development and Data Driven Development."}
   {:item "Knowledge in software developmet good practives as Data Driven Development and Test Driven Development."}
   {:item "Development of Rest APIs."}
   {:item "Use of MongoDB, Datomic, Postgresql, SqlServer, MySql."}
   {:item "Use of Kafka, Kafka Streams, ActiveMQ, SNS and SQS."}
   {:item "Worked with cloud solutions, such as AWS and GCP."}
   {:item "Containers with Docker and Kubernets."}
   {:item "CI and CD with GitHub Actions."}
   {:item "Learning to implement web interfaces with Clojure Scrpit."}
   {:item "Use of React, Reagent."}])

(def formation-list
  [{:start-date "Jan. 2020"
    :end-date "Dec. 2022"
    :graduation "Development and Analysis of Systems"
    :school "SPTech"
    :status "Completed"}
   {:start-date "May. 2022"
    :end-date "Aug. 2022"
    :graduation "MBA in Artificial Intelligence"
    :school "FIAP"
    :status "Incompleted"}])

(def experiences-list
  [{:start-date "Sep. 2020"
    :end-date "Aug. 2022"
    :role "Junior BackEnd Developer"
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
                  {:experience "Messaging with Kafka, ActiveMQ, AWS SNS and SQS."}
                  {:experience "Data manipulation with MySql and MongoDB."}
                  {:experience "Creation of Banking as a Service products."}
                  {:experience "API externalization with GCP APIGee."}]}])

(defn index []
  [:div [:div.container
         [header links-map]
         [:div
          [summary summary-list]
          [formation formation-list]
          [experience experiences-list]]]])
