# Lab 10 - Implementation Plan

## 1. Project Information

- *Group name:* ICT105-Plum0-MVP
- *Project title:* Smart Assignment Tracker
- *Repository link:* https://github.com/thihakyawlin762-alt/ICT105-Plum0-MVP.git
- *Selected platform/tools:* HTML, CSS, JavaScript, LocalStorage
- *Backend status:* Simulated backend (LocalStorage)

---

## 2. Prototype Scope for Sprint 1

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage / Landing Page | FR-01 | US-01 | Homepage | In Progress |
| Login | FR-01 | US-01 | Login | In Progress |
| Add Assignment | FR-02 | US-02 | Add Assignment | In Progress |
| Edit/Delete Assignment | FR-03 | US-03 | Edit Assignment | In Progress |
| Student Dashboard | FR-04 | US-04 | Dashboard | In Progress |
| Reminder Notification | FR-05 | US-05 | Dashboard | In Progress |
| Search / Filter | FR-06 | US-06 | Search | In Progress |
| Assignment Status | FR-07 | US-07 | Completed / Dashboard | In Progress |
| Lecturer Dashboard | FR-04 | US-04 | Lecturer Module | In Progress |

---

## 3. Implementation Approach

*Frontend:*

- HTML
- CSS
- JavaScript

*Data source/storage:*

- Browser LocalStorage

*Admin/status handling:*

- Lecturer Dashboard updates assignment status using shared LocalStorage.

*Search/filter approach:*

- JavaScript dynamically filters assignments by course, keyword, and status.

*Validation approach:*

- JavaScript validates required fields before saving assignments.

*Screenshots/evidence approach:*

- Screenshots will be taken after each completed feature and stored inside the /screenshots/ folder for GitHub documentation.

---

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| Phone Myat Khaung | Develop the complete prototype (HTML, CSS, JavaScript, LocalStorage, Student & Lecturer Modules, screenshots) | Prototype commits |
| Thiha Kyaw Lin | Sprint planning, Implementation Plan, Feature Implementation Status, Requirement mapping | Documentation commits |
| Thura Aung Naing | README update, Weekly Logbook, GitHub Issues, repository documentation | Documentation commits |
| Shaurya | Assets, repository support, proofreading, small fixes | Support commits |

---

## 5. Risks or Blockers

- CSS conflicts between Student Dashboard and Lecturer Dashboard due to shared class names.
- Maintaining consistent LocalStorage data across all modules.
- Ensuring all implemented features correctly map to Functional Requirements (FR) and User Stories (US).
- Keeping documentation synchronized with the latest prototype implementation.
