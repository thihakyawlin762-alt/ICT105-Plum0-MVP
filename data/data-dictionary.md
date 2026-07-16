# Data Dictionary

| Column | Meaning | Data Type | Example | Why Students Need It |
|---|---|---|---|---|
| Test_User_ID | Unique identifier for each validation participant. | Text | TU-01 | Used to distinguish each tester while keeping identities anonymous. |
| User_Role | The role of the tester who participated in the validation. | Text | Student | Used to compare validation results between students and lecturers. |
| Prototype_Version | The version of the Smart Assignment Tracker prototype being tested. | Text | v1.0 | Helps identify which prototype version produced the results. |
| Main_Task | The primary task assigned to the tester during validation. | Text | Add Assignment | Used to analyze performance for different prototype features. |
| Task_Completed | Indicates whether the tester successfully completed the assigned task. | Text | Yes | Used to calculate task completion and success rates. |
| Time_Seconds | Time taken by the tester to complete the assigned task. | Whole Number | 42 | Used to measure task efficiency and identify difficult workflows. |
| Confusion_Point | Area where the tester experienced confusion during the task. | Text | Search filter labels | Helps identify usability problems requiring improvement. |
| Feature_Most_Useful | Feature the tester considered the most valuable. | Text | Dashboard | Used to identify the MVP's strongest features. |
| Feedback_Score_1_5 | Overall satisfaction rating given by the tester on a scale of 1 to 5. | Whole Number | 5 | Used to calculate the average feedback score. |
| Interest_Level_1_5 | Likelihood that the tester would use the system in the future (1–5). | Whole Number | 4 | Measures user interest in the Smart Assignment Tracker. |
| Comment | Qualitative feedback provided by the tester after completing the task. | Text | The assignment form is simple to use. | Used to support quantitative analytics with user opinions. |
| Requirement_Affected | Functional requirement(s) related to the tested feature. | Text | FR-03, FR-07 | Provides traceability between validation results and project requirements. |
