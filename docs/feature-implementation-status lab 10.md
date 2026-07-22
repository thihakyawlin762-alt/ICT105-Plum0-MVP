# Lab 10 - Feature Implementation Status

## Purpose

This document tracks the implementation progress of the Smart Assignment Tracker prototype and demonstrates traceability between the prototype and system-requirements.md.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | index.html | Working Draft | index.html | Improve UI polish |
| FR-02 | Primary user pathway | login.html | Working Draft | login.html | Add real authentication in future |
| FR-03 | User input or data submission | add-assignment.html | Working Draft | add-assignment.html | Improve validation messages |
| FR-04 | Data storage or simulated storage | storage.js (LocalStorage) | Working Draft | storage.js | Replace with database in future |
| FR-05 | View records or information list | dashboard.html, search.html | Working Draft | dashboard.html | Improve sorting options |
| FR-06 | Search, filter, or category function | search.html | Working Draft | search.html | Add advanced filters |
| FR-07 | Detail view for each record | assignment-details.html | Working Draft | assignment-details.html | Improve information layout |
| FR-08 | Status or progress tracking | completed.html, dashboard.html | Working Draft | completed.html | Add overdue tracking |
| FR-09 | Admin or manager function | lecturer-dashboard.html | Working Draft | lecturer-dashboard.html | Improve lecturer workflow |
| FR-10 | Validation and error prevention | script.js | Working Draft | JavaScript validation | Strengthen input validation |
| FR-11 | Confirmation or feedback message | add-assignment.html, edit-assignment.html | Working Draft | Success messages | Improve notification design |
| FR-12 | Dashboard or summary view | dashboard.html | Working Draft | Dashboard statistics | Add more analytics |
| FR-13 | UI consistency | CSS | In Progress | style.css | Separate Lecturer and Student CSS |
| FR-14 | Mobile-friendly/responsive design | responsive.css | Working Draft | responsive.css | Test additional screen sizes |
| FR-15 | Privacy and responsible data handling | LocalStorage & Lab 09 documentation | Working Draft | Lab 09 Responsible IT documents | Replace LocalStorage for production |
| FR-16 | Final prototype traceability | Prototype + Documentation | In Progress | GitHub commits & documentation | Final verification before submission |

---

## Summary

*Features working today:*

- Homepage
- Login navigation
- Student Dashboard
- Add Assignment
- Edit Assignment
- Delete Assignment
- Search
- Assignment Details
- Completed Assignments
- Lecturer Dashboard
- LocalStorage synchronization
- Dashboard statistics
- Notifications
- Responsive layout

---

*Features partially working:*

- Lecturer Dashboard UI refinement
- CSS separation between Student and Lecturer modules
- Advanced search/filter options
- Enhanced validation messages

---

*Features not yet started:*

- Real database integration
- User authentication system
- Email/SMS notifications
- Calendar synchronization

---

*Features requiring instructor feedback:*

- Lecturer Dashboard workflow
- CSS architecture separation
- Future backend integration approach
