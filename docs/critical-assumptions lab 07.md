# Critical Assumptions

## Instruction

The following assumptions identify the key risks that could affect the success of the Smart Assignment Tracker MVP. These assumptions will be validated during the MVP experiment before further development.

| Assumption ID | Category              | Assumption                                                                                                                   | Related Requirement / User Story | Risk Level | Current Evidence                                 | How to Test                                                                       |
| ------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| A-01          | User Problem          | University students need a centralized system to organize assignments and deadlines.                                         | FR-03 / US-01                    | High       | Lab 03 problem discovery and user interviews     | Observe whether students prefer using the prototype over their current method.    |
| A-02          | Value Proposition     | The Smart Assignment Tracker helps students manage assignments more efficiently than notes or messaging apps.                | FR-12 / US-06                    | High       | Product Concept (Lab 05)                         | Ask participants whether the dashboard improves assignment management.            |
| A-03          | Usability             | Students can complete the main assignment workflow without assistance.                                                       | FR-03, FR-05 / US-02, US-03      | High       | No formal usability testing yet                  | Conduct task-based prototype testing and measure task completion.                 |
| A-04          | Technical Feasibility | HTML, CSS, JavaScript, and LocalStorage are sufficient for implementing the MVP prototype.                                   | Technical Architecture (Lab 06)  | Medium     | Prototype currently functions using LocalStorage | Test all major features across different web browsers.                            |
| A-05          | Business Logic        | Students are willing to manually enter and maintain their assignment information.                                            | FR-03 / US-02                    | Medium     | Based on assumptions from Lab 03                 | Ask participants whether they would regularly use the system for real coursework. |
| A-06          | Data Handling         | Assignment information stored in LocalStorage remains accurate and can be retrieved correctly during normal prototype usage. | FR-05, FR-07                     | Low        | Current prototype implementation                 | Test data creation, editing, searching, and retrieval across multiple sessions.   |

---

## Categories

The assumptions are grouped into the following categories:

* User Problem
* Value Proposition
* Usability
* Technical Feasibility
* Business Logic
* Data Handling
