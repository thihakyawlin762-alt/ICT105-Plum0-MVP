# Technical Architecture

## Project Title

Smart Assignment Tracker

---

## 1. Selected Prototype Platform

Selected Platform:

* Frontend + localStorage or JSON

Technologies Used:

* HTML5
* CSS3
* JavaScript
* Browser LocalStorage (for prototype data simulation)
* GitHub Pages (prototype hosting)

---

## 2. Architecture Decision

The Smart Assignment Tracker is implemented as a frontend web application using HTML, CSS, and JavaScript. This architecture matches the team's current technical skills and can be completed within the semester timeline.

LocalStorage and sample JSON data are used to simulate data storage without requiring a backend database. This allows the prototype to demonstrate the complete user workflow, including login, assignment management, dashboard summaries, and lecturer functions, while remaining practical for the project scope.

---

## 3. Main Components

| Component                         | Description                                                                                               | Tool / Technology                  | Related Requirement |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------- |
| User Interface                    | Displays all pages, navigation, and user interactions.                                                    | HTML5, CSS3                        | FR-01 – FR-07       |
| Data Input Form                   | Allows students to add and edit assignment information.                                                   | HTML Forms, JavaScript             | FR-02, FR-03        |
| Data Storage                      | Stores assignment information during prototype simulation.                                                | Browser LocalStorage / Sample JSON | FR-02, FR-03        |
| Record List                       | Displays all assignments with search and filter functions.                                                | HTML, CSS, JavaScript              | FR-04, FR-06        |
| Detail View                       | Displays complete assignment information and current status.                                              | HTML, CSS, JavaScript              | FR-03, FR-07        |
| Lecturer / Administrator Function | Allows lecturers to view records, edit assignments, update assignment status, and remove invalid records. | HTML, CSS, JavaScript              | FR-08, FR-09        |
| Dashboard / Summary               | Displays assignment statistics, upcoming deadlines, completed tasks, and pending assignments.             | HTML, CSS, JavaScript              | FR-04, FR-05        |

---

## 4. What Will Be Fully Implemented?

The final prototype will implement:

* Homepage
* Login page
* Student dashboard
* Lecturer/Administrator dashboard
* Add Assignment
* Edit Assignment
* Delete Assignment
* Assignment List
* Assignment Detail View
* Search Assignments
* Filter Assignments
* Mark Assignment as Completed
* Dashboard summary cards
* Navigation between all pages
* Basic form validation
* LocalStorage-based assignment management

---

## 5. What Will Be Simulated?

The following features will be simulated because a full backend system is outside the project scope:

* User authentication (login validation)
* Persistent database storage
* Multi-user accounts
* Reminder notifications
* University Learning Management System (LMS) integration
* Email notifications
* Calendar synchronization
* Real-time data synchronization

---

## 6. Final Prototype Risk

The biggest technical risk is the absence of a backend database and server-side authentication. Because the prototype is frontend-based, data is stored locally and cannot be shared between users or devices.

To reduce this limitation, the team will use LocalStorage and realistic sample assignment data to demonstrate the complete workflow and ensure all Functional Requirements and User Stories can be evaluated during the final prototype demonstration.
