# DAX Measures

```DAX
Total Tests =
COUNTROWS('ValidationResults')

Total Test Users =
DISTINCTCOUNT('ValidationResults'[Test_User_ID])

Completed Tasks =
CALCULATE(
    COUNTROWS('ValidationResults'),
    'ValidationResults'[Task_Completed] = "Yes"
)

Task Success Rate =
DIVIDE(
    [Completed Tasks],
    [Total Tests]
)

Average Completion Time =
AVERAGE('ValidationResults'[Time_Seconds])

Average Feedback Score =
AVERAGE('ValidationResults'[Feedback_Score_1_5])

Average Interest Level =
AVERAGE('ValidationResults'[Interest_Level_1_5])

Confused Tests =
CALCULATE(
    COUNTROWS('ValidationResults'),
    'ValidationResults'[Confusion_Point] <> "None"
)

Confusion Rate =
DIVIDE(
    [Confused Tests],
    [Total Tests]
)
```
