CREATE TABLE DateRange(
    weeekly:text,
    quarterly:text
    custom:text
)
CREATE TABLE ReportType(
    financialReport :text,
    operationalReport :text,
    complianceReport :text,
)
CREATE TABLE ReportDetails(
    report_id : number,
    reportNmae:text,
    reportDate:DATE,
    reportType : text,
    reportStatus:text,
)
