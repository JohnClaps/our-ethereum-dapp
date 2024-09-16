CREATE TABLE Health(
    cpuUsage : number,
    memoryUsage : number,
    diskUsage :number,
    
)
CREATE TABLE ServerStatus(
    PRIMARY KEY server_id : int,
    serverStatus : text,
    serverUptime :Time,
    serverActions :text,
)
CREATE TABLE RecentAlerts(
    diskUsage : text,
    cpuUsage:text,
    memoryUsage : text,
)

