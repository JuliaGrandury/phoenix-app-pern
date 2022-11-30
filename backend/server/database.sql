CREATE DATABASE phoenixapp;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP,
    UNIQUE (username)
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY NOT NULL,
    role VARCHAR NOT NULL,
    role_link VARCHAR,
    city VARCHAR NOT NULL,
    state VARCHAR,
    country VARCHAR NOT NULL,
    company VARCHAR NOT NULL,
    company_link VARCHAR,
    description VARCHAR NOT NULL,
    connections VARCHAR [],
    status VARCHAR NOT NULL,
    applied_on DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jobs (role, role_link, city, state, country, company, company_link, description, connections, status, applied_on, created_at) 
VALUES ('Software Engineer', 'https://www.accenture.com/us-en/careers/jobdetails?id=R00120688_en&title=Federal+-+Software+Engineer+Analyst', 'New York', 'NY', 'USA', 'Accenture', 'https://accenture.com', 'bla bla', '{"Charles", "Emma", "Oscar"}', 'Applied', '2022-12-02', '2017-05-25 17:39:15.014961-05');

INSERT INTO jobs (role, role_link, city, state, country, company, company_link, description, connections, status, applied_on, created_at) 
VALUES ('Software Engineer II', 'https://www.whoop.com/careers', 'Boston', 'MA', 'USA', 'Whoop', 'https://whoop.com', 'healthy', '{"Sasha", "Jake", "Pauline"}', 'To Apply', null, '2017-05-25 17:39:15.014961-05');

INSERT INTO jobs (role, role_link, city, state, country, company, company_link, description, connections, status, applied_on) 
VALUES ('Software Engineer II', 'https://www.whoop.com/careers', 'Boston', 'MA', 'USA', 'Whoop', 'https://whoop.com', 'healthy', '{"Sasha", "Jake", "Pauline"}', 'To Apply', null);


-- Created a composite type for contact information
CREATE TYPE contactinfo_item AS (
    phone TEXT,
    email TEXT,
    linkedin TEXT
);

CREATE TABLE connections (
    id SERIAL PRIMARY KEY NOT NULL,
    fullname TEXT NOT NULL, 
    role TEXT NOT NULL,
    company TEXT NOT NULL,
    contact_dates hstore,
    contact_information contactinfo_item,
    offers TEXT[],
    secondary_cons TEXT[],
    homework TEXT[],
    status TEXT NOT NULL
);


-- add indexing to jobTitle, jobLocation, companyName and appStatus


-- INSERT STATEMENTS FOR connections TABLE (working)

-- INSERT INTO connections (fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status) 
-- VALUES ('Liam Jolley', 'Software Engineer', 'X The Moonshot Factory', 
-- ' "Dec 9" => "google.com", "Dec 10" => "linkedincom", "Nov 20"=>"bla", "Nov 24"=>"google.com" ', '("9174235567", "test@gmail.com", "louie@linkedin.com")', '{"Resume Review", "Mock Interview"}' , '{"Louisa", "Marcus"}', '{"Email Resume to Him", "Finish Zoo System Design Problem"}', 'Active');

-- INSERT INTO connections (fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status) 
-- VALUES ('Laura Glanz', 'Consultant', 'Accenture', 
-- ' "Dec 9" => "google.com", "Dec 10" => "linkedincom", "Nov 20"=>"bla", "Nov 24"=>"google.com" ', '("9174235567", "test@gmail.com", "laura@linkedin.com")', '{"Resume Review", "Referral"}' , '{"Louisa", "Dave", "Chuck"}', '{"Email Resume to Her"}', 'Active');

-- SELECT STATEMENTS FOR connections TABLE (working)
-- SELECT contact_dates -> 'Dec 10' AS dec10 FROM connections WHERE fullname='Liam Jolley'; (without the WHERE it returns all contact_dates of Dec 10)
-- For more info see : https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-hstore/


-- Many to Many table of user accesses to other users dashboards
CREATE TABLE granted_accesses (
)



