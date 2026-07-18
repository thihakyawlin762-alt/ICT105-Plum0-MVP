# Lab 09 Basic Security Risk Check

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| Form input | Can incomplete or invalid data be submitted? | Validation exists but can be improved. | Medium | Require mandatory fields and display clear validation messages before submission. | Thiha Kyaw Lin |
| Admin function | Can normal users access admin actions? | Student and Lecturer roles are separated. | Low | Continue using role-based access control for lecturer-only features. | Thiha Kyaw Lin |
| Data display | Is private information visible to everyone? | Only assignment-related information is displayed. Passwords are hidden. | Low | Restrict lecturer feedback and user information to authorized users only. | Thiha Kyaw Lin |
| Status update | Can records be edited without control? | Assignment editing is available to authorized users. | Medium | Limit editing permissions and record changes when updating assignments. | Thiha Kyaw Lin |
| Public links | Does a public link expose data that should be private? | Prototype does not expose sensitive information through public links. | Low | Avoid sharing pages containing personal or assignment information publicly. | Thiha Kyaw Lin |
| File upload | If used, can unsafe or unrelated files be uploaded? | No file upload feature is currently implemented. | Low | If file uploads are added later, restrict file types, size, and scan uploaded files. | Thiha Kyaw Lin |

## Security Decision

*Continue with mitigation*

The Smart Assignment Tracker prototype is suitable to continue development. Minor improvements should be implemented, including stronger input validation, maintaining role-based access control, protecting private user information, and preparing secure file upload rules if that feature is introduced in future versions.
