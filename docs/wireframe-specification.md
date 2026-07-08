# Wireframe Specification

## Required Wireframe Screens

Each wireframe represents one major feature of the Smart Assignment Tracker system. Every screen must support the user stories, system requirements, and MVP features defined in Lab 04.

| Wireframe File | Purpose | Minimum Elements to Show | Related Requirements |
|---|---|---|---|
| /wireframes/homepage.png | Entry point of the system | Project title, short description, target user, university logo (optional), Login button, About/Features section, navigation bar | FR-01, FR-02 |
| /wireframes/input-form.png | Allow students to add new assignments | Course name, assignment title, description, due date, priority dropdown, submit button, cancel button, validation messages, confirmation message | FR-03, FR-10, FR-11 |
| /wireframes/record-list.png | Display all assignments | Assignment table/cards, course, due date, priority, status, search bar, filter options, sort option | FR-05, FR-06, FR-08 |
| /wireframes/detail-view.png | Display complete assignment information | Assignment details, course name, description, due date, priority, status badge, edit button, delete button, mark as completed button | FR-07, FR-08 |
| /wireframes/dashboard.png | Provide an overview of assignment progress | Welcome section, upcoming deadlines, total assignments, completed assignments, pending assignments, simple charts/cards, quick action buttons | FR-12 |
| /wireframes/admin-view.png | Lecturer/Administrator management page | Student assignment records, search/filter, update assignment status, edit record, delete invalid record, dashboard summary, logout button | FR-09, FR-08 |

---

# Screen Design Guidelines

### Homepage
- Introduce the Smart Assignment Tracker.
- Clearly state the problem the system solves.
- Provide an obvious Login button.
- Keep navigation simple and consistent.

### Dashboard
- Show assignment statistics at a glance.
- Display upcoming deadlines.
- Include quick navigation to major features.
- Use cards to organize information.

### Add Assignment Form
- Keep the form simple.
- Clearly label required fields.
- Display validation errors near the corresponding fields.
- Show a success message after submission.

### Assignment Record List
- Display assignments in either a table or card layout.
- Allow users to search assignments.
- Allow filtering by course, priority, status, or due date.
- Show assignment status using colored badges.

### Assignment Detail View
- Present complete assignment information.
- Allow editing and deleting.
- Allow students to mark assignments as completed.
- Clearly display assignment status.

### Lecturer / Administrator View
- Show all student assignment records.
- Allow searching and filtering.
- Allow editing or deleting incorrect records.
- Allow updating assignment status when necessary.
- Display simple dashboard statistics for administrators.

---

# Wireframe Quality Rules

- Maintain consistent navigation across all screens.
- Use consistent colors, typography, buttons, and layouts.
- Include realistic sample data instead of empty placeholders.
- Ensure every screen directly supports at least one user story and one functional requirement.
- Keep the interface clean, simple, and easy to understand.
- Design wireframes to closely match the final HTML/CSS prototype.
- Create wireframes using Figma, Canva, PowerPoint, or another suitable design tool before implementation.
