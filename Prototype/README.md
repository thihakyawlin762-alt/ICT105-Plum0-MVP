> **Message for Ajarn Herison Surbakti Lab 07**
>
> Thank you for taking the time to review our project.
>
> This prototype is an ongoing implementation of our ICT105 semester project. It follows the documentation and requirements established in Labs 03, 04, 05, and 06.
>
> **Current Development Progress**
>
> * **Student Module:** Most core functionality has been implemented, including the landing pages, login interface, student dashboard, assignment management, search, assignment details, completed assignments, and supporting frontend logic. This module is approaching completion, with the remaining work focused on refinement, testing, and UI improvements.
>
> * **Lecturer/Administrator Module:** Development has recently begun. The lecturer dashboard structure has been created, but most management features are still under implementation. Current progress is approximately **10%**, with the remaining functionality scheduled for future development as the semester progresses.
>
> This README provides an overview of the current project structure, implementation progress, and technical design to clearly communicate the prototype's present state and planned direction.

# Smart Assignment Tracker Prototype

## Overview

The **Smart Assignment Tracker** is the prototype implementation of the ICT105 semester project. It is designed to help university students organize, monitor, and manage their coursework while allowing lecturers or administrators to review assignment records and update assignment status.

This prototype is developed as part of the continuous semester project and follows the requirements defined in **Lab 03**, **Lab 04**, **Lab 05**, and **Lab 06**, including the Functional Requirements (FR), User Stories (US), MVP Feature List, Product Concept, Wireframes, Business Model Canvas, and Technical Architecture.

The current version demonstrates the planned system workflow and user interaction using frontend technologies.

---

# Prototype Status

**Current Development Status:** In Progress

This prototype is under active development. Core pages, navigation, layouts, and client-side logic are being implemented progressively. Some features currently use sample data or LocalStorage to simulate system behavior and will continue to be refined throughout the semester.

---

# Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* LocalStorage (client-side data simulation)

No backend server or database is currently implemented. Data persistence is simulated using LocalStorage and sample datasets.

---

# Project Structure

```
SmartAssignmentTracker/

├── assets/
│   ├── images/
│   │   ├── benefits.png
│   │   └── hero-banner.png
│   │
│   └── logo/
│       ├── logo.png
│       └── old-logo.png
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   ├── assignments.js
│   ├── completed.js
│   ├── dashboard.js
│   ├── details.js
│   ├── edit.js
│   ├── lecturer.js
│   ├── script.js
│   ├── search.js
│   ├── storage.js
│   ├── ui.js
│   └── validation.js
│
├── index.html
├── login.html
├── dashboard.html
├── add-assignment.html
├── assignments-details.html
├── edit-assignments.html
├── completed.html
├── search.html
└── lecturer-dashboard.html
```

---

# Page Description

| File                     | Purpose                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| index.html               | Landing page introducing the Smart Assignment Tracker and directing users to the system.   |
| login.html               | User authentication interface before entering the system.                                  |
| dashboard.html           | Main student dashboard displaying assignment summaries and upcoming deadlines.             |
| add-assignment.html      | Form used to create new assignment records.                                                |
| assignments-details.html | Displays complete information for a selected assignment.                                   |
| edit-assignments.html    | Allows users to modify existing assignment information.                                    |
| completed.html           | Displays assignments marked as completed.                                                  |
| search.html              | Allows searching and filtering assignments by different criteria.                          |
| lecturer-dashboard.html  | Administrative interface for lecturers to review assignments and update assignment status. |

---

# Asset Directory

## Images

The **images** folder stores graphical assets used throughout the prototype.

* **hero-banner.png**

  * Main visual banner displayed on the landing page.

* **benefits.png**

  * Illustration used to explain the benefits and purpose of the Smart Assignment Tracker.

## Logo

The **logo** folder stores project branding assets.

* **logo.png**

  * Current project logo.

* **old-logo.png**

  * Previous logo version retained for reference.

---

# CSS Directory

## style.css

Contains the primary styling used across the prototype, including typography, colors, layout, navigation, buttons, forms, and reusable components.

## responsive.css

Provides responsive layouts and media queries to improve usability across different screen sizes.

---

# JavaScript Modules

The JavaScript files are separated into modules to improve maintainability and code organization.

| File           | Responsibility                                                     |
| -------------- | ------------------------------------------------------------------ |
| script.js      | General initialization and shared interactions.                    |
| assignments.js | Assignment creation and assignment list management.                |
| completed.js   | Handles completed assignment functionality.                        |
| dashboard.js   | Generates dashboard statistics and summary information.            |
| details.js     | Displays detailed assignment information.                          |
| edit.js        | Updates existing assignment records.                               |
| lecturer.js    | Lecturer dashboard functionality and assignment status management. |
| search.js      | Assignment searching and filtering logic.                          |
| storage.js     | Handles LocalStorage operations and data persistence.              |
| ui.js          | Shared UI rendering functions and reusable interface components.   |
| validation.js  | Client-side input validation and form verification.                |

---

# Implemented Features

* Landing page
* User login interface
* Student dashboard
* Assignment creation form
* Assignment detail page
* Assignment editing
* Completed assignment tracking
* Search and filtering
* Lecturer dashboard
* Responsive interface
* LocalStorage-based data management
* Client-side form validation

---

# Features Under Development

The following features are currently being refined or expanded:

* Reminder notification logic
* Dashboard analytics improvements
* Advanced search and filtering
* Additional assignment statistics
* UI refinements and accessibility improvements
* Enhanced lecturer management workflow
* Performance optimization
* Code refactoring and documentation

---

# Prototype Scope

This prototype demonstrates the project's Minimum Viable Product (MVP) defined throughout ICT105.

The implementation focuses on:

* Assignment management
* Student workflow
* Lecturer workflow
* Requirement traceability
* User interaction
* System navigation

Backend infrastructure, authentication services, and cloud databases are intentionally excluded from the current implementation because they are outside the scope of the semester prototype.

---

# Relationship to Previous Labs

This prototype is developed directly from the documentation produced during the ICT105 semester project.

* **Lab 03** — Customer Problem Discovery
* **Lab 04** — Functional Requirements, User Stories, and MVP Features
* **Lab 05** — Product Concept and UI/UX Wireframes
* **Lab 06** — Business Model Canvas, Technical Architecture, Data Structure, and System Diagrams

All implemented pages and features are designed to remain consistent with these project documents.

---

# Prototype Folder (Lab 10)

## Smart Assignment Tracker Prototype

This folder contains the **Lab 10 – MVP Implementation Sprint 1** prototype for the ICT105 semester project.

The prototype demonstrates the first working implementation of the **Smart Assignment Tracker** based on the approved requirements, user stories, wireframes, technical architecture, data structure, and responsible design review completed in previous labs.

---

## Folder Contents

This folder contains the following files and folders:

### Lab 10 Required Prototype Files

- **index.html lab 10.html** – Sample Lab 10 entry page.
- **style.css-lab 10.css** – Sample stylesheet for Lab 10.
- **script.js-lab 10.js** – Sample JavaScript file for Lab 10.
- **prototype-link.md** – Prototype platform information and requirement coverage.

### Complete Working Prototype

- **SmartAssignmentTracker Lab 10/**

This folder contains the complete Smart Assignment Tracker prototype, including all project pages, assets, JavaScript modules, CSS files, images, and LocalStorage implementation developed during the semester.

### Previous Prototype Version

- **SmartAssignmentTracker - Lab 07/**

This folder contains the earlier prototype created during previous laboratory activities and is kept for project development history and comparison.

---

## Technologies Used

The prototype was developed using:

- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage (Simulated Backend)

Development was completed using **Sublime Text 3**.

No server-side backend or database has been implemented at this stage because the project focuses on the Minimum Viable Product (MVP).

---

## Current Prototype Features

### Student Module

- Landing Page
- Login Page
- Student Dashboard
- Add Assignment
- Edit Assignment
- Assignment Details
- Search and Filter
- Completed Assignments
- Dashboard Statistics
- Notifications
- LocalStorage Data Management

### Lecturer Module

- Lecturer Dashboard
- Assignment Record Management
- Assignment Status Management
- Student Progress
- Course Analytics

The Lecturer Module is currently under active development and will continue to be expanded in future sprints.

---

## Related ICT105 Labs

This prototype is based on project documentation completed throughout the semester:

- Lab 03 – Customer Problem Discovery
- Lab 04 – Functional Requirements, User Stories, and MVP Features
- Lab 05 – Product Concept and Wireframes
- Lab 06 – Technical Architecture and Data Structure
- Lab 09 – Responsible IT Review
- Lab 10 – MVP Implementation Sprint 1

---

## Development Status

The Smart Assignment Tracker is currently under active development.

Sprint 1 focuses on implementing the core Minimum Viable Product (MVP) features. Additional functionality, testing, UI improvements, lecturer management features, and project refinements will continue throughout the remaining ICT105 project timeline.

---

## Note for Ajarn Herison Surbakti

The complete working prototype is located inside the **SmartAssignmentTracker Lab 10** folder within this directory.

The additional Lab 10 files included in this folder are provided to satisfy the prototype folder structure required by the ICT105 Lab 10 instructions while preserving the complete project implementation.

> **Message for Ajarn Herison Surbakti – Lab 11**
>
> Thank you for reviewing our Lab 11 prototype submission.
>
> This prototype represents the second MVP implementation sprint of the Smart Assignment Tracker project. It builds upon the work completed in Labs 03–10 by improving prototype functionality, documenting implementation progress, introducing startup/product metrics, improving data handling, and testing the complete user workflow.
>
> **Lab 11 Development Progress**
>
> **Student Module**
>
> The Student Module is now functionally complete for the Minimum Viable Product (MVP). Students can navigate the system, create assignments, edit existing records, search assignments, manage completed assignments, and view dashboard summaries. Data persistence is simulated using LocalStorage.
>
> **Lecturer / Administrator Module**
>
> The Lecturer Dashboard has been expanded from the previous sprint. Administrative pages now demonstrate assignment monitoring, status management, dashboard summaries, and analytics to simulate lecturer workflow. Additional backend functionality will be implemented in future development.
>
> **Lab 11 Improvements**
>
> - Prototype data handling improved
> - Startup/Product Metrics dashboard prepared
> - Feature implementation status documented
> - Prototype testing completed
> - Updated screenshots captured
> - README and documentation revised
>
> This folder contains the updated prototype used for Lab 11 MVP Implementation Sprint 2.

# Smart Assignment Tracker Prototype (Lab 11)

## Overview

The Smart Assignment Tracker is a web-based assignment management system developed for the ICT105 semester project.

The prototype helps students organize coursework while providing lecturers with tools to monitor assignments and student progress.

This version represents **Lab 11 – MVP Implementation Sprint 2**, continuing development from Labs 03–10.

---

# Prototype Status

**Current Development Status:** MVP Sprint 2 (Lab 11)

Current implementation includes:

- Student assignment management
- Lecturer monitoring dashboard
- LocalStorage-based data persistence
- Dashboard statistics
- Startup/Product Metrics
- Improved search and filtering
- Prototype testing documentation

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage
- Power BI (Startup/Product Metrics Dashboard)

Development environment:

- Sublime Text 3

---

# Folder Contents

## Required Lab 11 Files

- index.html-lab11.html
- style.css-lab11.css
- script.js-lab11.js
- prototype-link_lab 11.md

## Complete Working Prototype

**SmartAssignmentTracker Lab 11/**

Contains the complete Smart Assignment Tracker source code including:

- HTML pages
- CSS
- JavaScript
- Images
- Assets
- LocalStorage implementation

---

# Prototype Features

## Student Module

- Landing Page
- Login
- Student Dashboard
- Add Assignment
- Edit Assignment
- Assignment Details
- Search Assignments
- Completed Assignments
- Notifications
- Dashboard Statistics
- LocalStorage Data Management

## Lecturer Module

- Lecturer Dashboard
- Assignment Monitoring
- Status Management
- Student Progress
- Course Analytics
- Dashboard Summary

---

# Startup/Product Metrics

Lab 11 introduces prototype metrics including:

- Total Records
- Pending Assignments
- Completed Assignments
- Resolution Rate
- Assignment Categories
- User Activity Events
- Dashboard Usage
- Search Activity
- Admin Updates
- Average Processing Time

These metrics are demonstrated using Power BI dashboards created from prototype datasets.

---

# Related ICT105 Labs

- Lab 03 – Customer Problem Discovery
- Lab 04 – Functional Requirements
- Lab 05 – Product Concept & Wireframes
- Lab 06 – Technical Architecture
- Lab 07 – Initial Prototype
- Lab 09 – Responsible IT Review
- Lab 10 – MVP Sprint 1
- Lab 11 – MVP Sprint 2 & Startup Metrics

---

# Development Status

The Smart Assignment Tracker continues to evolve toward the final semester project.

Lab 11 focuses on:

- Improving prototype quality
- Better data handling
- Startup metrics
- Dashboard analytics
- Prototype testing
- Documentation refinement

Future work will include backend integration, authentication, notifications, and additional lecturer management functionality.

---

# Note for Ajarn Herison Surbakti

The complete working prototype is located inside the **SmartAssignmentTracker Lab 10** folder.

The remaining Lab 11 files are included to satisfy the required ICT105 submission structure while preserving the complete working project.


# Current Development Note

This repository represents the ongoing development of the Smart Assignment Tracker. Additional improvements, refinements, and feature implementations will continue throughout the remaining semester as the project progresses toward the final prototype submission.

