CREATE TABLE SecurityScreen(
    changePassword : text,
    2FA : TEXT,
)
CREATE TABLE AuditLogs (
    eventID : number,
    eventDate : date,
    associatedSystemUser : text,
    remedialAction : text,
)

CREATE TABLE AuditTrail(
    loggedInUser : TEXT,
    logInTime : CURRENT_TIMESTAMP,
    associatedLoggedInIPAddress : text,
)