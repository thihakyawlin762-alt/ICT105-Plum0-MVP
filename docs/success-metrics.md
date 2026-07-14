# Success Metrics and Decision Rules

## 1. Success Metrics

| Metric ID | Metric                              |                 Target | How to Measure                                                                       | Related Requirement |
| --------- | ----------------------------------- | ---------------------: | ------------------------------------------------------------------------------------ | ------------------- |
| M-01      | Task completion rate                |      80% or higher | Number of testers who complete all assigned tasks without assistance / Total testers | FR-03, FR-04, FR-05 |
| M-02      | Assignment form completion accuracy |      90% or higher | Valid assignment submissions / Total submissions                                     | FR-03, FR-10, FR-11 |
| M-03      | Search success rate                 |      80% or higher | Users who successfully find the requested assignment / Total testers                 | FR-06               |
| M-04      | Dashboard comprehension             |      80% or higher | Testers who correctly understand the dashboard summary / Total testers               | FR-12               |
| M-05      | Usability rating                    | Average 4 out of 5 | Average rating collected from the feedback form                                      | FR-01 to FR-12      |
| M-06      | Feature usefulness rating           | Average 4 out of 5 | Average rating for the usefulness of core MVP features                               | MVP Features        |

---

## 2. Decision Rules

| Result                                                | Decision                                                                                                                 |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| All success metrics meet or exceed the target values. | Continue with the implementation sprint and further prototype development.                                               |
| One or more metrics fall below the target values.     | Review the interface, workflow, labels, or feature implementation before the next development iteration.                 |
| Most metrics fail to meet the target values.          | Re-evaluate the project requirements, user stories, MVP features, and problem assumptions before continuing development. |
