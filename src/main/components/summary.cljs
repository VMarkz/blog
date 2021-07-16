(ns components.summary)

(def summary-text
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare sem in
sapien volutpat vulputate. Vestibulum at velit convallis, pharetra enim sit amet,
faucibus magna. Maecenas lectus dolor, ultrices ac nunc sed, ullamcorper
tincidunt eros. Integer tempor ligula elementum, tincidunt leo a, aliquam quam.
Duis maximus libero ut arcu sollicitudin commodo. Pellentesque maximus risus quis
feugiat tempus. In finibus lacus nec aliquam commodo. Mauris sodales sagittis
neque et pretium. Fusce lacinia ex metus.")

(defn summary []
  [:div
    [:h2.section-title "Summary"]
   [:div
    [:p summary-text]]
   [:div
    [:ul.my-ul {:style {:list-style-type "square"
                        :margin-left "15px"}}
     [:li.list "Item 0"]
     [:li.list "Item 1"]
     [:li.list "Item 2"]]]])
