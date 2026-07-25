# Startup / Product Metrics

> Define metrics that show useful product activity. These metrics help evaluate how the Smart Assignment Tracker prototype performs and how users interact with the system.

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Assignments | Usage | Shows how many assignments are currently stored in the system | Count all assignment records | LocalStorage | Student Dashboard |
| M-02 | Pending Assignments | Status | Shows how many assignments are still unfinished | Count assignments with status = Pending | LocalStorage | Student Dashboard |
| M-03 | Completed Assignments | Status | Shows student progress and completed work | Count assignments with status = Completed | LocalStorage | Completed Assignments Page / Dashboard |
| M-04 | High Priority Assignments | Priority | Helps users identify urgent assignments | Count assignments with priority = High | LocalStorage | Dashboard |
| M-05 | Assignment Completion Rate | Performance | Measures overall completion progress | Completed Assignments ÷ Total Assignments × 100 | LocalStorage | Dashboard |
| M-06 | Total Courses | Category | Shows how many different courses are currently managed | Count unique course names | LocalStorage | Lecturer Dashboard |

---

## 2. Metrics Interpretation

The Smart Assignment Tracker uses these metrics to help students and lecturers monitor assignment progress. Total Assignments shows overall system usage, while Pending and Completed Assignments provide an overview of academic workload and progress. High Priority Assignments help students quickly identify urgent tasks that require immediate attention. Assignment Completion Rate measures productivity by comparing completed assignments to the total number of assignments. Total Courses indicates how many different subjects are currently being managed within the system. Together, these metrics allow users to better organize their workload and help lecturers monitor assignment activity. Future improvements may include deadline analytics, overdue assignment tracking, reminder statistics, and course performance trends.

---

## 3. Link to Final Prototype

These metrics are displayed within the Student Dashboard and Lecturer Dashboard of the Smart Assignment Tracker prototype. Dashboard statistic cards automatically calculate values using LocalStorage data, allowing the prototype to simulate real-time analytics without requiring a backend database. As additional features are implemented in future sprints, these metrics will continue to expand to provide more detailed insights into assignment management and user activity.
