CREATE TABLE Ticket(
    ticketType : text,
    ticketDescription:VARCHAR,
)
CREATE TABLE RecentSupportTickets(
    ticketID : number,
    ticketIssueDate:DATE,
    ticketType : text,
    ticketStatus:text,
)
CREATE TABLE FAQs(
    faq : text,
    faqDate :DATE
)