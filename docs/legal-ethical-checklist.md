# Lab 09 Legal and Ethical Checklist

## Project Title
Smart Assignment Tracker

## Ethical Review

| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | Yes | The homepage clearly explains that the system helps students manage assignments, deadlines, and lecturer feedback. | Keep the introduction visible on the homepage. | Phone Myat Khaung | Issue #1 |
| The prototype avoids misleading claims. | Yes | The system only provides assignment management features and does not claim automatic grading or academic guarantees. | Ensure all feature descriptions remain accurate. | Phone Myat Khaung | Issue #1 |
| The prototype does not collect unnecessary sensitive data. | Yes | Only assignment-related information is collected. No bank details, home addresses, or unnecessary personal information are requested. | Continue limiting data collection to required academic information only. | Phone Myat Khaung | Issue #1 |
| Users can understand what happens after submission. | Yes | After adding or editing an assignment, confirmation messages are displayed to inform users that the operation was successful. | Keep confirmation messages clear and consistent throughout the system. | Phone Myat Khaung | Issue #1 |
| Admin or manager actions are clearly separated from user actions. | Yes | Lecturer functions such as reviewing assignments and managing feedback are separated from student functions. | Maintain role-based access between students and lecturers. | Phone Myat Khaung | Issue #1 |
| The prototype avoids unfair or harmful treatment of users. | Yes | All users have equal access to assignment management features, and no user is treated differently based on personal characteristics. | Continue designing features that provide equal access for all users. | Phone Myat Khaung | Issue #1 |

## Summary Decision

**Safe to continue:** ✔ Yes

### Required revision before implementation

- Improve privacy notices explaining how assignment information is used.
- Ensure lecturer-only features remain protected from student access.
- Continue minimizing personal data collection to only what is necessary for academic purposes.
- Add clearer confirmation and validation messages where appropriate.
