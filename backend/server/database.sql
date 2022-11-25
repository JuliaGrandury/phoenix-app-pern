CREATE DATABASE phoenixapp;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY NOT NULLABLE,
    jobTitle TEXT NOT NULLABLE,
    jobLink TEXT NOT NULLABLE,
    jobCity VARCHAR NOT NULLABLE,
    jobCountry VARCHAR NOT NULLABLE,
    companyName TEXT NOT NULLABLE,
    companyUrl TEXT NOT NULLABLE,
    companyDesc VARCHAR NOT NULLABLE,
    -- connections: ['Henry Amestoy', 'Kate Wild'],
    -- connectionStatus: 'Active',
    -- connectionDate: '2022-09-28',
    appStatus TEXT NOT NULLABLE,
    appDate DATE NOT NULLABLE,
    createdAt timestamp NOT NULLABLE
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULLABLE,
    username TEXT NOT NULLABLE,
    email TEXT NOT NULLABLE,
    password TEXT NOT NULLABLE,
    UNIQUE (userName),
    createdAt timestamp NOT NULLABLE
);

CREATE TABLE connections (
    id SERIAL PRIMARY KEY NOT NULLABLE,
    fullname TEXT NOT NULLABLE, 
    role TEXT NOT NULLABLE,
    company TEXT NOT NULLABLE,
    contactDates DATE [] NOT NULLABLE,
    contactInformation {phone: TEXT NOT NULLABLE, email: TEXT NOT NULLABLE, linkedin: TEXT NOT NULLABLE},
    offers TEXT [] NOT NULLABLE,
    secondaryConnections TEXT [] NOT NULLABLE,
    homework: TEXT [] NOT NULLABLE,
    status TEXT NOT NULLABLE,
)

-- add indexing to jobTitle, jobLocation, companyName and appStatus

-- think of structure for network (colored status dots with name, title, company that you can click on for a full card to appear)
-- each CONNECTION HAS the following card
    -- full name : Liam Jolley
    -- role : Software Engineer II
    -- company : X The Moonshot Factory
    -- contactDates : [first call, second call, etc]
    -- contactInformation: { phone : 917849234/NULL, email: test@gmail/NULL, linkedin : linkedin.com/NULL}
    -- offers: advice (link to notes), mock interview, list of suggested roles/companies, referral
    -- secondaryConnections: [Julia Lawrence, Melody Gibson, etc.]
    -- homework: Work on ..., Schedule Mock Interview, Send Resume
    -- status: Active, Inactive (becomes inactive after 4 weeks of no comm)


