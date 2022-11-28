CREATE DATABASE phoenixapp;

CREATE TABLE [IF NOT EXISTS] users (
    id SERIAL PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    UNIQUE (username),
    created_at timestamp NOT NULL
);

CREATE TABLE [IF NOT EXISTS] jobs (
    id SERIAL PRIMARY KEY NOT NULL,
    role TEXT NOT NULL,
    role_link TEXT NOT NULL,
    city VARCHAR NOT NULL,
    country VARCHAR NOT NULL,
    company TEXT NOT NULL,
    company_link TEXT NOT NULL,
    description VARCHAR NOT NULL,
    connections TEXT [] NOT NULL,
    status TEXT NOT NULL,
    applied_on DATE NOT NULL,
    created_at timestamp NOT NULL
);

-- because contact_dates is an array of "dates" to "note_link" pairs
CREATE EXTENSION HSTORE;

-- making my own composite type for contact information
CREATE TYPE contactinfo_item AS (
    phone TEXT,
    email TEXT,
    linkedin TEXT
)

CREATE TABLE [IF NOT EXISTS] connections (
    id SERIAL PRIMARY KEY NOT NULL,
    fullname TEXT NOT NULL, 
    role TEXT NOT NULL,
    company TEXT NOT NULL,
    contact_dates HSTORE [] NOT NULL,
    contact_information contactinfo_item,
    offers TEXT [] NOT NULL,
    secondary_cons TEXT [] NOT NULL,
    homework TEXT [] NOT NULL,
    status TEXT NOT NULL,
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


