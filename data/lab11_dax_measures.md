# Lab 11 DAX Measures
# Smart Assignment Tracker

Total Records =
DISTINCTCOUNT('PrototypeRecords'[RecordID])

Total Activity Events =
COUNTROWS('ActivityLog')

New Assignments =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "CreateAssignment"
)

Pending Assignments =
CALCULATE(
    DISTINCTCOUNT('PrototypeRecords'[RecordID]),
    'PrototypeRecords'[CurrentStatus] = "Pending"
)

Completed Assignments =
CALCULATE(
    DISTINCTCOUNT('PrototypeRecords'[RecordID]),
    'PrototypeRecords'[CurrentStatus] = "Completed"
)

Completion Rate =
DIVIDE(
    [Completed Assignments],
    [Total Records]
)

Average Completion Days =
AVERAGE('PrototypeRecords'[ResolutionDays])

Search Actions =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "SearchAssignment"
)

Assignment Updates =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] IN {
        "EditAssignment",
        "UpdateStatus"
    }
)

Dashboard Views =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[ActionType] = "ViewDashboard"
)

Average Processing Time =
AVERAGE('ActivityLog'[ProcessingTimeMinutes])

Mobile Activity Events =
CALCULATE(
    COUNTROWS('ActivityLog'),
    'ActivityLog'[DeviceType] = "Mobile"
)

Mobile Activity Rate =
DIVIDE(
    [Mobile Activity Events],
    [Total Activity Events]
)
