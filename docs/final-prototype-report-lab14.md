# Final Prototype Report

## 1. Project Title

**Smart Assignment Tracker**

**ICT105-Plum0-MVP**

---

## 2. Group Members and Roles

| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| Phone Myat Khaung | Project Leader & Documentation | System requirements, prototype coordination, documentation, repository management | GitHub Commit |
| Thiha Kyaw Lin | Frontend & Prototype | Landing page, prototype implementation, final demo preparation | GitHub Commit |
| Thura Aung Naing | Documentation & Testing | User testing, improvement planning, final documentation | GitHub Commit |
| Sharuya Sood | Supporting Documentation | Pitch outline, diagrams, repository organization | GitHub Commit |

---

## 3. Problem Background

University students often manage assignments using paper notes, messaging applications, or memory. This frequently results in forgotten deadlines, poor organization, duplicate work, and late submissions. Lecturers also have limited visibility of student assignment progress without a centralized tracking system. This problem was identified during customer discovery activities and validated through interviews, feedback, and prototype testing conducted throughout the course.

---

## 4. Target Users

The primary users are university students who need an organized system for managing assignments, tracking deadlines, and monitoring academic progress.

The secondary users are lecturers who require a centralized dashboard to review assignment records, monitor completion progress, and analyze student performance.

---

## 5. Evidence Summary

Customer discovery activities, user feedback, and prototype testing confirmed that students prefer a centralized assignment management system instead of relying on multiple platforms or personal reminders. User testing demonstrated that participants could successfully create assignments, search records, update assignment status, and understand dashboard information with minimal guidance.

---

## 6. Final Prototype Overview

Smart Assignment Tracker is a web-based assignment management system developed using HTML, CSS, JavaScript, and LocalStorage.

The prototype includes:

- Landing Page
- Login System
- Student Dashboard
- Add Assignment
- Assignment List
- Search and Filter
- Assignment Details
- Edit Assignment
- Completed Assignments
- Lecturer Dashboard
- Student Progress
- Course Analytics

All prototype data is stored locally using LocalStorage to simulate a working information management system.

---

## 7. Requirement Traceability Summary

| Requirement ID | Implemented Feature/Screen | User Story ID | Evidence Source | Status |
|---|---|---|---|---|
| FR-01 | Landing Page | US-01 | landing-page Lab 14.png | Completed |
| FR-02 | Login & User Navigation | US-02 | student-dashboard Lab 14.png | Completed |
| FR-03 | Add Assignment | US-03 | add-assignment Lab 14.png | Completed |
| FR-04 | LocalStorage Data Management | US-04 | Student Dashboard | Completed |
| FR-05 | Assignment List | US-05 | assignment-list Lab 14.png | Completed |
| FR-06 | Search & Filter | US-06 | assignment-list Lab 14.png | Completed |
| FR-07 | Assignment Details | US-07 | assignment-details Lab 14.png | Completed |
| FR-08 | Assignment Status Tracking | US-08 | completed-assignments Lab 14.png | Completed |
| FR-09 | Lecturer Dashboard | US-09 | lecturer-dashboard Lab 14.png | Completed |
| FR-10 | Form Validation | US-10 | add-assignment Lab 14.png | Completed |
| FR-11 | Dashboard Analytics | US-11 | dashboard-analytics Lab 14.png | Completed |
| FR-12 | Prototype Traceability | US-12 | README.md | Completed |

---

## 8. Data Handling

The prototype collects assignment-related information including course name, assignment title, due date, priority, and completion status.

Data is:

- Stored locally using LocalStorage.
- Displayed through Student and Lecturer Dashboards.
- Updated when assignments are edited or completed.
- Filtered and searched using search functionality.
- Simulated without requiring a backend database.

No unnecessary personal or sensitive information is collected.

---

## 9. Validation and User Testing Results

User testing showed that participants could complete the primary workflow successfully, including creating assignments, searching records, updating status, and viewing dashboard information.

Feedback suggested improvements in navigation, dashboard presentation, and interface consistency, all of which were implemented before the final prototype.

---

## 10. Startup/Product Metrics

The project measures several early-stage product metrics including:

- Landing page visits
- CTA clicks
- Prototype demo attempts
- User feedback responses
- Overall user conversion rate

These metrics help evaluate user interest and prototype effectiveness during early validation.

---

## 11. Business Value and Venture Direction

Smart Assignment Tracker creates value by helping students organize academic work more efficiently while providing lecturers with improved visibility of assignment progress.

The system reduces missed deadlines, improves organization, supports academic productivity, and demonstrates the feasibility of a centralized assignment management platform.

Future commercialization could include cloud storage, multi-user authentication, mobile applications, and institutional deployment.

---

## 12. Limitations and Future Improvements

Current limitations include:

- Frontend prototype only.
- LocalStorage simulation instead of a cloud database.
- Single-user simulation.
- No authentication backend.
- Limited notification functionality.

Future improvements include:

- Multi-user authentication.
- Cloud database integration.
- Email and push notifications.
- Mobile application support.
- Advanced lecturer analytics.
- Export reports and calendar synchronization.
