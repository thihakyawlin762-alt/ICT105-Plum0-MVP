# Lab 09 Risk Register

| Risk ID | Category | Risk Description | Affected Feature / Requirement | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Privacy | Personal student information may be accessed by unauthorized users. | Student Profile, Lecturer Feedback (FR-01, FR-10) | High | Low | Implement role-based access control and restrict access to authorized users only. | Thiha Kyaw Lin | Issue #6 | Open |
| R-02 | Ethical | Users may misunderstand how their information is used. | Privacy Notice, User Consent | Medium | Medium | Provide clear privacy notices and obtain user consent before collecting data. | Thiha Kyaw Lin | Issue #7 | Open |
| R-03 | Intellectual Property | Images, icons, or other third-party assets may be used without proper attribution. | UI Design | Medium | Medium | Record all third-party assets and provide proper attribution or use royalty-free resources. | Thiha Kyaw Lin | Issue #7 | Open |
| R-04 | Security | Unauthorized users may attempt to access lecturer-only functions. | Lecturer Dashboard (FR-11, FR-12, FR-13) | High | Low | Enforce role-based authentication and authorization for lecturer features. | Thiha Kyaw Lin | Issue #6 | Open |
| R-05 | Legal | Personal data may be stored longer than necessary. | User Data Storage | Medium | Low | Store only necessary academic information and remove unnecessary personal data. | Thiha Kyaw Lin | Issue #7 | Open |
| R-06 | Data Quality | Users may enter incomplete or incorrect assignment information. | Assignment Form (FR-03, FR-04) | Medium | Medium | Validate required fields and provide clear input validation messages before submission. | Thiha Kyaw Lin | Issue #6 | Open |

## Overall Risk Decision

The Smart Assignment Tracker prototype is *safe to continue development with mitigation*. The identified risks are manageable and can be reduced by implementing stronger privacy protection, role-based access control, input validation, proper documentation of third-party assets, and responsible handling of user data. These improvements should be completed before moving to the final implementation stage.           
