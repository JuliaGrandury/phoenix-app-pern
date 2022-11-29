CREATE DATABASE phoenixapp;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at timestamp NOT NULL,
    UNIQUE (username)
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY NOT NULL,
    role TEXT NOT NULL,
    role_link TEXT NOT NULL,
    city VARCHAR NOT NULL,
    country VARCHAR NOT NULL,
    company TEXT NOT NULL,
    company_link TEXT NOT NULL,
    description VARCHAR NOT NULL,
    connections [],
    status TEXT NOT NULL,
    applied_on DATE NOT NULL,
    created_at timestamp NOT NULL,
    FOREIGN KEY(connections) REFERENCES connections(id)
);

-- because contact_dates is an array of "dates" to "note_link" pairs
CREATE EXTENSION HSTORE;

-- making my own composite type for contact information
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
    contact_dates hstore[] NOT NULL,
    contact_information contactinfo_item,
    offers TEXT[] NOT NULL,
    secondary_cons TEXT[] NOT NULL,
    homework TEXT[] NOT NULL,
    status TEXT NOT NULL
);

-- m to m table of users to other users
CREATE TABLE granted_accesses (
)

INSERT INTO connections (fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status) 
VALUES ('Liam Jolley', 'Software Engineer', '{"Dec 9"=>"google.com", "Dec 10"=>"linkedincom", "Nov 20"=>"bla", "Nov 24"=>"google.com"}', 
'ROW("9174235567", "test@gmail.com", "louie@linkedin.com")', '["Resume Review", "]'), ;


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


