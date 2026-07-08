# Feature-Value Mapping

| Feature ID | MVP Feature                     | Requirement ID | User Story ID | User Value                                                                | Business / Operational Value                                                     | Prototype Screen or Module | Priority |
| ---------- | ------------------------------- | -------------- | ------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------- | -------- |
| F-01       | User Authentication (Login)     | FR-01          | US-01         | Students and lecturers can securely access their own dashboard.           | Protects user data and restricts system access to authorized users.              | login.html                 | Must     |
| F-02       | Add Assignment                  | FR-02          | US-02         | Students can record assignments and deadlines in one place.               | Creates structured assignment records for tracking and management.               | add-assignment.html        | Must     |
| F-03       | Manage Assignment (Edit/Delete) | FR-03          | US-03         | Students can keep assignment information accurate and up to date.         | Maintains accurate and reliable assignment records.                              | assignment-detail.html     | Must     |
| F-04       | Assignment Dashboard            | FR-04          | US-04         | Students can quickly view all assignments and upcoming deadlines.         | Provides a centralized overview of assignment progress.                          | dashboard.html             | Must     |
| F-05       | Reminder Notification           | FR-05          | US-05         | Students receive reminders before deadlines to reduce missed submissions. | Improves assignment completion rates and academic organization.                  | dashboard.html             | Must     |
| F-06       | Search and Filter Assignments   | FR-06          | US-06         | Students can quickly find assignments by course, deadline, or priority.   | Makes assignment management faster and improves usability.                       | assignments.html           | Should   |
| F-07       | Assignment Status Tracking      | FR-07          | US-07         | Students can mark assignments as completed and monitor their progress.    | Helps students and lecturers monitor assignment completion and overall progress. | assignment-detail.html     | Should   |

## Reflection

### Which feature creates the strongest user value?

The Assignment Dashboard (F-04) creates the strongest user value because it gives students a clear overview of all assignments, deadlines, and their current progress in one place.

### Which feature creates the strongest business or operational value?

The User Authentication (F-01) provides the strongest operational value because it ensures that only authorized students and lecturers can access and manage assignment information, improving security and system reliability.

### Which required feature is still weak or unclear?

The Reminder Notification (F-05) is currently the weakest feature because the MVP uses simple on-screen reminder notifications. Advanced reminder methods such as email notifications, SMS, or calendar synchronization are outside the scope of the current semester and may be implemented in future versions.
