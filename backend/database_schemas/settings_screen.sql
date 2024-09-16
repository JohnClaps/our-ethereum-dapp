CREATE TABLE AccountSettings(
    email : text,
    password : VARCHAR,
)
CREATE TABLE SecuritySettings(
    newPassword : VARCHAR,
    confirmPassword:VARCHAR,
)
CREATE TABLE NotificationSettings(
    emailNotifications : VARCHAR,
    smsNotifications:VARCHAR,
)
CREATE TABLE LanguageSettings(
    name : text,
)
