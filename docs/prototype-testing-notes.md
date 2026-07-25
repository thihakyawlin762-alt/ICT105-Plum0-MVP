# Prototype Testing Notes

## Test Environment

- Prototype link or folder: /prototype/SmartAssignmentTracker Lab 10
- Browser/device used: Google Chrome (Desktop)
- Tester role: Student / Lecturer
- Test date: 25 July 2026

---

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open Homepage | Open the Smart Assignment Tracker homepage | Homepage displays project title, introduction, navigation, and Login button | Homepage displayed correctly | Passed | None | No action required |
| T-02 | Add Assignment | Complete the Add Assignment form and submit | Assignment is saved into LocalStorage and success confirmation appears | Assignment saved successfully and displayed on Dashboard | Passed | None | No action required |
| T-03 | View Assignment List | Open Student Dashboard | Assignment list displays all saved assignments | Assignment list displayed correctly | Passed | None | No action required |
| T-04 | Search Assignment | Search assignments by course or title | Matching assignments are displayed | Search function works correctly | Passed | None | Improve search speed in future versions |
| T-05 | View Assignment Details | Select an assignment and open Details page | Full assignment information is displayed | Details displayed correctly | Passed | None | No action required |
| T-06 | Update Assignment Status | Mark an assignment as Completed from Dashboard or Lecturer Dashboard | Assignment status changes and Dashboard statistics update | Status updated correctly and dashboard refreshed | Passed | Lecturer Dashboard still requires additional management features | Continue Lecturer Module development |
| T-07 | Dashboard Metrics | Open Dashboard after adding and completing assignments | Statistics match stored assignment data | Dashboard metrics updated correctly | Passed | Additional analytics planned | Add more advanced metrics in future versions |

---

# Summary of Issues

- Lecturer Dashboard is still under development and some management functions are not fully implemented.
- Responsive layout can be further optimized for smaller mobile screens.
- Additional analytics and reporting features will be added in future sprints.

---

# Improvements Completed During Lab 11

- Improved assignment management workflow.
- Enhanced search and filtering functionality.
- Added dashboard metrics using LocalStorage.
- Improved UI consistency across Student Module pages.
- Updated documentation and prototype evidence.
- Continued development of the Lecturer Dashboard.
