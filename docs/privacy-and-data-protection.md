# Lab 09 Privacy and Data Protection

## Data Collection Summary

| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| Student ID | Identify assignment owner | Yes | No | Keep | Required to identify users within the university. |
| Student Name | Display assignment owner | Yes | No | Keep | Used only within the system. |
| Assignment Title | Identify assignment | No | No | Keep | Core information for assignment management. |
| Module / Course | Organize assignments | No | No | Keep | Helps categorize assignments. |
| Assignment Description | Explain assignment details | No | No | Keep | Required for understanding the task. |
| Due Date | Track deadlines | No | No | Keep | Essential for reminders and scheduling. |
| Lecturer Feedback | Display comments from lecturers | Yes | No | Keep | Visible only to the relevant student and lecturer. |
| Assignment Status | Track progress | No | No | Keep | Shows whether an assignment is pending, submitted, or completed. |
| Password | User authentication | Yes | Yes | Keep | Stored securely and never displayed to users. |

## Privacy Rule for Prototype

The Smart Assignment Tracker only collects information necessary for assignment management and academic activities. Personal information is limited to student identification and login credentials. Passwords are securely stored and are never displayed publicly. Assignment information and lecturer feedback are only accessible to authorized users. The prototype avoids collecting unnecessary sensitive information such as home addresses, phone numbers, financial information, or personal identification documents.

## Data Minimization Decision

- No phone numbers are collected.
- No home addresses are collected.
- No financial or banking information is collected.
- No national identification or passport information is collected.
- Lecturer feedback is only visible to the relevant student.
- Passwords are securely stored and never displayed.
