# Lab-04 Diagrams README

## Purpose

This folder contains the visual design documents for the *Smart Assignment Tracker* project. These diagrams translate the customer evidence collected during *Lab 03* into the system design prepared in *Lab 04*.

Each diagram presents a different perspective of the system and will serve as a reference for the final prototype development.

---

# Diagram Overview

| Diagram                  | File                     | Purpose                                                                                               |
| ------------------------ | ------------------------ | ----------------------------------------------------------------------------------------------------- |
| User Flow                | user-flow.png          | Illustrates the complete journey of the student while using the Smart Assignment Tracker.             |
| Use Case Diagram         | use-case-diagram.png   | Shows the actors interacting with the system and the main functions available to them.                |
| Business Logic Flowchart | business-flowchart.png | Describes the internal system logic, including validation, decisions, processing, and error handling. |

---

# 1. User Flow

The User Flow illustrates the sequence of actions a student performs while using the system.

The flow begins when the student logs in using an existing university account, accesses the dashboard, manages assignments, searches records, views assignment details, updates assignment status, and finally logs out.

This diagram focuses on the user's experience and interaction with the system rather than the internal processing logic.

---

# 2. Use Case Diagram

The Use Case Diagram identifies the actors and the system functions available to each actor.

### Primary Actor

* Student

### Secondary Actor

* Administrator

The Student manages personal assignments by adding, editing, viewing, searching, deleting, and marking assignments as completed.

The Administrator manages assignment records, monitors submitted data, updates assignment status, and maintains the overall system.

This diagram defines the functional scope of the prototype without showing the sequence of actions.

---

# 3. Business Logic Flowchart

The Business Logic Flowchart models the internal workflow of the Smart Assignment Tracker.

It includes:

* User input
* System processing
* Decision points
* Input validation
* Error handling
* Confirmation messages
* Processing loops
* Successful completion

The flowchart follows standard flowchart symbols introduced during Lecture 05 and demonstrates how the system processes user actions from start to finish.

---

# Design Assumptions

The Smart Assignment Tracker is designed specifically for university students.

The prototype assumes that every student already has an official university account provided by the university. Therefore, user registration is handled by the university and is outside the scope of this project.

As a result:

* Users log in using their existing university email and password.
* A *Create Account* feature is intentionally excluded from the MVP.
* The project focuses on assignment management rather than account management.

These assumptions keep the MVP aligned with the validated problem identified during customer discovery in Lab 03.

---

# Relationship Between the Diagrams

Each diagram represents a different aspect of the same system.

* *User Flow* explains how users interact with the system step by step.
* *Use Case Diagram* identifies the actors and the functions available within the system.
* *Business Logic Flowchart* explains how the system processes requests, validates data, and handles different scenarios.

Together, these diagrams ensure consistency between the customer evidence, user persona, system requirements, user stories, MVP features, and the final prototype.

---

# Software Used

All diagrams were created using *diagrams.net (draw.io)* and exported as PNG images for inclusion in this repository.

---

# Repository Structure

text
diagrams/
│── README.md
│── user-flow.png
│── use-case-diagram.png
└── business-flowchart.png

# Lab 05 User Flow

The original Lab 04 user flow diagram was replaced and updated for Lab 05 to better represent the Smart Assignment Tracker system and its different user roles.

The updated user flow is separated into two diagrams:

1. *Student User Flow*

   * Shows the student's journey from login, viewing the dashboard, adding assignments, managing assignments, tracking status, and logging out.

2. *Lecturer / Administrator User Flow*

   * Shows the lecturer's workflow for viewing assignment records, managing assignment information, updating assignment status, and maintaining assignment records.

This separation improves clarity by showing the different responsibilities of students and lecturers/administrators.

User Flow Diagrams:

* /diagrams/student-user-flow.png
* /diagrams/lecturer-admin-user-flow.png

### Lab 06 Diagram File Notes

For Lab 06, the **System Architecture** and **Data Flow** diagrams are provided as **Mermaid (`.mmd`) source files**.

* `diagrams/system-architecture.mmd`
* `diagrams/data-flow.mmd`

Mermaid files were chosen because they are easier to maintain, edit, and update throughout the semester while keeping the diagrams under version control in the GitHub repository. These source files represent the same system architecture and data flow used by the Smart Assignment Tracker prototype and can be exported to PNG whenever needed.

