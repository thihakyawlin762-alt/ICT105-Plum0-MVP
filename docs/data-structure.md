# Data Structure

## Project Title

Smart Assignment Tracker

---

## 1. Main Data Entities / Tables

| Entity / Table | Purpose                                                                                                   | Example Records       |
| -------------- | --------------------------------------------------------------------------------------------------------- | --------------------- |
| Student        | Stores student account information for accessing the system and managing assignments.                     | ST001 – John Tan      |
| Assignment     | Stores assignment information including course, deadline, priority, and completion status.                | AS001 – ICT105 Lab 06 |
| Lecturer       | Stores lecturer/administrator information for managing assignment records and updating assignment status. | LC001 – Dr. Smith     |

---

## 2. Field Definition

| Entity     | Field Name       | Data Type | Required? | Example Value                                   | Validation Rule                   | Used For Search/Filter? |
| ---------- | ---------------- | --------- | --------- | ----------------------------------------------- | --------------------------------- | ----------------------- |
| Student    | student_id       | Text/ID   | Yes       | ST001                                           | Unique value                      | Yes                     |
| Student    | full_name        | Text      | Yes       | John Tan                                        | Cannot be empty                   | Yes                     |
| Student    | email            | Email     | Yes       | [john@rsu.ac.th](mailto:john@rsu.ac.th)         | Valid university email            | Yes                     |
| Student    | password         | Password  | Yes       | ********                                        | Minimum 8 characters              | No                      |
| Assignment | assignment_id    | Text/ID   | Yes       | AS001                                           | Unique value                      | Yes                     |
| Assignment | course_name      | Text      | Yes       | ICT105                                          | Cannot be empty                   | Yes                     |
| Assignment | assignment_title | Text      | Yes       | Lab 06 Report                                   | Cannot be empty                   | Yes                     |
| Assignment | description      | Text      | No        | Complete Business Model Canvas                  | Maximum 500 characters            | No                      |
| Assignment | deadline         | Date      | Yes       | 2026-08-15                                      | Valid future date                 | Yes                     |
| Assignment | priority         | List      | Yes       | High                                            | Low / Medium / High               | Yes                     |
| Assignment | status           | List      | Yes       | Pending                                         | Pending / In Progress / Completed | Yes                     |
| Lecturer   | lecturer_id      | Text/ID   | Yes       | LC001                                           | Unique value                      | Yes                     |
| Lecturer   | full_name        | Text      | Yes       | Dr. Smith                                       | Cannot be empty                   | Yes                     |
| Lecturer   | email            | Email     | Yes       | [lecturer@rsu.ac.th](mailto:lecturer@rsu.ac.th) | Valid university email            | Yes                     |

---

## 3. Status Values

| Status      | Meaning                                                  | Who Can Update?          |
| ----------- | -------------------------------------------------------- | ------------------------ |
| Pending     | Assignment has been created but work has not started.    | Student                  |
| In Progress | Student is currently working on the assignment.          | Student                  |
| Completed   | Student has finished the assignment.                     | Student                  |
| Reviewed    | Lecturer has reviewed or verified the assignment record. | Lecturer / Administrator |

---

## 4. Sample Records

Sample assignment records are provided in:

/data/assignment-sample-records.csv

The dataset includes realistic examples of courses, assignments, priorities, deadlines, and assignment status values used throughout the prototype.

---

## 5. Data Privacy Note

The prototype does not collect sensitive personal information such as national ID numbers, financial information, phone numbers, or real passwords. All sample data used in the prototype is fictional and created only for demonstration purposes. Any names, email addresses, and assignment records are anonymized to protect user privacy while demonstrating the system workflow.
