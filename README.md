# ICT105-Plum0-MVP

# Smart Assignment Tracker

## Initial Problem Area

University students often miss assignment deadlines because important information is scattered across Learning Management Systems (LMS), chat groups, emails, and lecturer announcements. Managing deadlines across multiple platforms can be confusing and time-consuming.

## Target Users

* University students
* Students managing multiple courses and assignments
* Students who need a centralized way to track deadlines

## Selected IT Venture Direction

Our team selected *Smart Assignment Tracker* as the semester project. The system aims to help students organize assignment deadlines in one place and receive reminders before due dates. Currently, students rely on manual notes, screenshots, chat messages, or repeatedly checking LMS platforms. The proposed solution is a web-based dashboard that allows students to track assignments and deadlines more efficiently.

## Current Status

In Lab 02, our team reviewed three initial ideas, identified six potential IT opportunities, conducted technology feasibility mapping, applied NUF scoring, and selected Smart Assignment Tracker as our final semester project opportunity.

## Next Step

In Lab 03, our team will conduct customer discovery by interviewing and surveying university students to validate the problem, understand current behaviors, and gather evidence to improve the proposed solution.




# Customer Problem Discovery Summary | Lab-3

In Lab 03, our team collected early problem evidence from university students to validate the problem identified in Lab 02. We conducted interviews and gathered feedback about how students currently manage assignment deadlines. The goal was to determine whether the problem is real, frequent, and important enough to justify developing an MVP.

## Target Respondents

The respondents were university students from different years of study. We interviewed and collected feedback from students who regularly receive assignments through LMS platforms, chat groups, emails, and lecturer announcements.

## Main Evidence Found

Several respondents reported that assignment information is scattered across multiple platforms, making it difficult to track deadlines consistently.

Common pain points included:

* Forgetting assignment deadlines.
* Having to check multiple platforms repeatedly.
* Missing important announcements buried in chat groups.
* Spending extra time organizing assignment information manually.

Current workarounds included:

* Personal notebooks.
* Phone calendars and reminders.
* Screenshots of announcements.
* Chat group reminders.
* Frequent LMS checking.

## Updated Problem Statement

University students often struggle to keep track of assignment deadlines because important information is distributed across multiple channels such as LMS platforms, chat groups, emails, and lecturer announcements. As a result, students may miss deadlines, experience stress, and spend extra time manually organizing assignment information.

## Decision for Next Step

Based on the evidence collected, our team will continue with the Smart Assignment Tracker project. The problem appears to be real, common, and relevant to university students. For the next phase, we will focus on designing an MVP that provides a centralized dashboard for assignment tracking and deadline reminders.

# Lab 04: User Persona, Requirements, and User Stories

## Primary Target User

The primary target user is university students who manage multiple courses and assignments. They often receive assignment information from different platforms such as LMS, email, chat groups, and lecturer announcements, making it difficult to keep track of deadlines.

---

## Persona Summary

- Persona Name: Alex, Second-Year University Student
- User Type: University Student
- Main Goal: Organize all assignments in one place and avoid missing deadlines.
- Main Pain Point: Assignment information is scattered across multiple platforms, causing confusion and missed deadlines.
- Current Workaround: Uses notebooks, phone reminders, screenshots, chat history, and personal notes to keep track of assignments.

---

## Key Requirements

| Req ID | Requirement | Priority | Related Evidence |
|---|---|---|---|
| FR-01 | Display a homepage introducing the Smart Assignment Tracker and its purpose. | Must | Students wanted one centralized platform. |
| FR-03 | Allow students to add assignment information. | Must | Students currently record assignments manually. |
| FR-05 | Display all assignments in a dashboard. | Must | Students need an overview of upcoming deadlines. |
| FR-06 | Allow searching and filtering assignments. | Should | Students reported difficulty finding assignment information quickly. |
| FR-08 | Allow students to track assignment status. | Must | Students wanted an easier way to monitor assignment progress. |
| NFR-01 | The system shall provide a simple and easy-to-use interface. | Must | Users preferred a straightforward and organized system. |

---

## MVP Feature Scope

| Feature | Priority | Included in Final Prototype? |
|---|---|---|
| Homepage / Landing Page | Must | Yes |
| Student Login | Must | Yes |
| Assignment Dashboard | Must | Yes |
| Add Assignment | Must | Yes |
| Edit/Delete Assignment | Must | Yes |
| Search & Filter Assignments | Should | Yes |
| Assignment Details | Should | Yes |
| Assignment Status Tracking | Should | Yes |
| Reminder Notifications | Could | No |
| Dashboard Analytics | Could | No |

---

## Diagram Links

- User Flow Diagram: /diagrams/user-flow.png
- Use Case Diagram: /diagrams/use-case-diagram.png
- System Flowchart: /diagrams/flowchart.png

---

## GitHub Contribution Evidence

All team members contributed to the repository through GitHub commits, issues, documentation updates, diagrams, or project management activities.

- Phone Myat Khaung – Project planning, system requirements, MVP feature planning, and project coordination.
- Thiha Kyaw Lin – User flow, use case diagram, system flowchart, README maintenance, and documentation.
- Thura Aung Naing – Technical support, GitHub repository management, and prototype development.
- Shaurya Sood – User persona creation, documentation review, proofreading, and README updates.

# README Update - Lab 05

## Lab 05: Product Concept and UI/UX Wireframe

### Product Concept

The Smart Assignment Tracker is a web-based application designed for university students to manage their assignments in one place. It helps students organize coursework, monitor deadlines, track assignment progress, and receive reminders for upcoming submissions. The system also provides a Lecturer/Administrator module to monitor assignment records and manage assignment status. The goal is to reduce missed deadlines, improve organization, and simplify assignment management throughout the semester.

### Requirement-Driven Screens

| Screen                                | Related Requirement IDs | Wireframe File              |
| ------------------------------------- | ----------------------- | --------------------------- |
| Homepage / Landing                    | FR-01, FR-02            | /wireframes/homepage.png    |
| Input / Submission Form               | FR-03, FR-10, FR-11     | /wireframes/input-form.png  |
| Assignment Records / Information List | FR-05, FR-06            | /wireframes/record-list.png |
| Assignment Detail View                | FR-07, FR-08            | /wireframes/detail-view.png |
| Dashboard / Summary                   | FR-12                   | /wireframes/dashboard.png   |
| Lecturer / Administrator View         | FR-09, FR-08            | /wireframes/admin-view.png  |

### User Flow

The project includes separate Student and Lecturer/Administrator user flows to clearly represent how each user interacts with the system. The diagrams illustrate the navigation between major screens and demonstrate how the application supports assignment management while maintaining traceability to the system requirements and user stories.

User Flow Diagram:

* /diagrams/user-flow.png

### Team Contribution

All team members contributed to the same GitHub repository through documentation, wireframe design, prototype development, repository management, and project coordination. Individual contributions are recorded through GitHub commits, project documentation, and the weekly logbook.

# README Update - Lab 06: Business Model Canvas and Technical Architecture

## Lab 06 Summary

Lab 06 focused on defining how the Smart Assignment Tracker creates value and how it will be technically implemented. Our group developed the Business Model Canvas, Feature-Value Mapping, Technical Architecture, Data Structure, System Architecture Diagram, and Data Flow Diagram. These outputs provide a clear roadmap for building the final prototype while ensuring consistency with the Functional Requirements (FR), User Stories (US), MVP features, and wireframes completed in previous labs.

## Files Added or Updated

* [Business Model Canvas](docs/business-model-canvas.md)
* [Feature-Value Mapping](docs/feature-value-mapping.md)
* [Technical Architecture](docs/technical-architecture.md)
* [Data Structure](docs/data-structure.md)
* [System Architecture Diagram](diagrams/system-architecture.png)
* [System Architecture Source](diagrams/system-architecture.mmd)
* [Data Flow Diagram](diagrams/data-flow.png)
* [Data Flow Source](diagrams/data-flow.mmd)
* [Assignment Sample Dataset](data/assignment-sample-records.csv)
* [Customer Segments Dataset](data/customer-segments.csv)
* [Weekly Logbook](docs/weekly-logbook.md)

## Technical Direction

The Smart Assignment Tracker prototype is implemented as a frontend web application using HTML, CSS, and JavaScript. Assignment data is managed using LocalStorage and sample datasets to simulate system behavior without requiring a backend database. This approach matches the team's technical skills, fits the semester timeline, and supports all required MVP features.

## Final Prototype Connection

The Business Model Canvas defines how the Smart Assignment Tracker delivers value to students and lecturers. The Feature-Value Mapping ensures that every MVP feature is connected to the Functional Requirements (FR) and User Stories (US). The Technical Architecture, Data Structure, System Architecture Diagram, Data Flow Diagram, and sample datasets provide the implementation roadmap for the prototype. Together with the documents developed in Labs 03, 04, and 05, these outputs ensure that the final prototype remains requirement-driven, technically consistent, and aligned with the project's objectives.


# README Lab 07: MVP Experiment Design

## Experiment Objective

The objective of this MVP experiment is to evaluate whether university students can successfully complete the core assignment management workflow using the Smart Assignment Tracker without assistance. The experiment will identify usability issues, validate the project's core assumptions, and gather feedback before continuing with deeper implementation.

---

## Critical Assumptions

The three most important assumptions tested during this experiment are:

1. University students need a centralized system to organize assignments and deadlines.
2. Students can complete the main assignment management workflow without assistance.
3. The Smart Assignment Tracker provides a more effective way to manage coursework than existing methods such as notes or messaging applications.

---

## MVP Experiment Type

Selected Experiment Type:

* Simple Web Prototype
* Clickable Prototype

Reason for Selection:

The current Smart Assignment Tracker is implemented as an interactive HTML, CSS, and JavaScript prototype with LocalStorage support. This allows realistic usability testing of the complete student workflow without requiring a full backend implementation.

---

## Success Metrics

The MVP experiment will be evaluated using the following measurable success metrics:

* Task Completion Rate ≥ 80%
* Assignment Form Completion Accuracy ≥ 90%
* Search Success Rate ≥ 80%
* Dashboard Comprehension ≥ 80%
* Average Usability Rating ≥ 4 / 5
* Average Feature Usefulness Rating ≥ 4 / 5

---

## Files Added in Lab 07

* /docs/mvp-experiment-plan.md
* /docs/critical-assumptions.md
* /docs/experiment-script.md
* /docs/success-metrics.md
* /docs/feedback-form.md
* /docs/weekly-logbook.md

---

## Connection to Final Prototype

The MVP experiment provides evidence to validate the Smart Assignment Tracker before further development. User feedback, task completion results, and usability measurements will help the team identify interface improvements, refine the assignment workflow, and prioritize future features. The experiment findings will directly guide the implementation and refinement of the final prototype while ensuring it remains aligned with the system requirements, user stories, and MVP objectives established in previous labs.

### Additional Lab 07 Resources

The following supporting files were also prepared for the MVP experiment planning and documentation:

- /data/experiment-results-template.csv
- /data/feedback-form-template.md
- /data/sample-experiment-results.csv
- /data/sample-test-users.csv
-  /diagrams/experiment-flow.mmd
-  /diagrams/experiment-flow.png

These files provide templates and sample datasets to support the planned MVP usability experiment and future user testing.

# README Update - Lab 08

## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective

The objective of this validation was to evaluate whether students and lecturers could successfully use the Smart Assignment Tracker to complete the core assignment management workflow. The experiment focused on validating the usability, usefulness, and effectiveness of the MVP before continuing with further implementation.

---

### Prototype Version Tested

- **Version:** v1.0
- **Link:** `/prototype/SmartAssignmentTracker/`
- **Screenshots:** `/screenshots/validation-test-screens.png`

---

### Analytics Summary

| Metric | Result |
|---|---:|
| Total test users | 20 |
| Task success rate | 90% |
| Average feedback score | 4.3 / 5 |
| Average interest level | 4.5 / 5 |
| Main confusion point | Search filter labels, validation messages, save button placement, lecturer navigation |

---

### MVP Decision

The team decided to **continue with minor revisions**. Validation results demonstrated that the core assignment management workflow was successful, with a high task completion rate and positive user feedback. Minor usability improvements will be implemented before continuing with the next development stage.

---

### Files Added

- `/data/validation-results.xlsx`
- `/data/validation-results.csv`
- `/docs/customer-validation-summary.md`
- `/docs/analytics-insights.md`
- `/docs/mvp-decision.md`
- `/screenshots/validation-test-screens.png`
- `/docs/weekly-logbook.md`

## Member Contributions

| Member | Created | Uploaded to GitHub |
|--------|---------|--------------------|
| **Thiha Kyaw Lin** | `validation-results.csv`, `validation-results.xlsx` | Uploaded validation datasets |
| **Shaurya Sood** | `data-dictionary.md`, `dax-measures.md` | Uploaded documentation and DAX resources |
| **Phone Myat Khaung** | `customer-validation-summary.md`, `mvp-decision.md`, `analytics-insights.md`, `README.md`, `Weekly Logbook`, Power BI dashboard formatting, dashboard screenshot, final review and integration | Uploaded documentation, dashboard screenshot, README, Weekly Logbook, and completed final integration |
| **Thura Aung Naing** | `validation-results-flow.mmd`, `validation-test-screens.png`, `tester-user-notes.md` | Uploaded validation workflow, screenshots, and tester notes |
