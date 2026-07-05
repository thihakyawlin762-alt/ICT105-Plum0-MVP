# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

As a [user role], I want to [goal/action], so that [benefit/value].

---

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Student | As a student, I want to create an account and log in so that I can securely manage my assignments. | FR-01 User Authentication | Must | Given a registered student, when they enter the correct username and password, then they are successfully logged into the dashboard. | Login page screenshot |
| US-02 | Student | As a student, I want to add assignment details so that I can keep all deadlines in one place. | FR-02 Add Assignment | Must | Given a logged-in student, when they submit an assignment with course name, title, deadline, and priority, then the assignment is saved and displayed on the dashboard. | Add Assignment page |
| US-03 | Student | As a student, I want to edit or delete assignments so that I can keep my schedule updated. | FR-03 Manage Assignment | Must | Given an existing assignment, when the student edits or deletes it, then the system updates the assignment list immediately. | Edit/Delete demonstration |
| US-04 | Student | As a student, I want to view all my assignments in one dashboard so that I can easily monitor upcoming deadlines. | FR-04 Dashboard | Must | Given multiple assignments, when the student opens the dashboard, then all assignments are displayed and sorted by due date. | Dashboard screenshot |
| US-05 | Student | As a student, I want to receive reminders before deadlines so that I do not forget to submit my assignments. | FR-05 Reminder Notification | Must | Given an assignment with an approaching deadline, when the reminder time is reached, then the system displays a reminder notification. | Reminder notification screenshot |
| US-06 | Student | As a student, I want to search or filter assignments by course or deadline so that I can quickly find the information I need. | FR-06 Search and Filter | Should | Given multiple assignments, when the student searches by course or filters by deadline, then only matching assignments are displayed. | Search/filter demonstration |
| US-07 | Student | As a student, I want to mark assignments as completed so that I can track my academic progress. | FR-07 Assignment Status | Should | Given a completed assignment, when the student marks it as completed, then its status changes and it moves to the completed section. | Completed assignment screenshot |
| US-08 | Student | As a student, I want the dashboard to be easy to understand so that I can quickly check important deadlines without confusion. | NFR-01 Usability | Must | Given a first-time user, when they access the dashboard, then they can navigate the system without instructions. | Dashboard UI demonstration |

---

## Acceptance Criteria Checklist

A good acceptance criterion should be:

- Testable
- Observable in the final prototype
- Connected to a requirement
- Connected to user evidence from Lab 03
- Clear and measurable

---

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| US-09 | Automatic assignment import from LMS | Add after MVP if LMS integration becomes available. |
| US-10 | Email or SMS reminder notifications | Implement after the basic reminder system is completed. |
| US-11 | Calendar synchronization (Google Calendar) | Add as an advanced feature in future versions. |
| US-12 | Group assignment collaboration | Develop after the individual assignment management system is stable. |
