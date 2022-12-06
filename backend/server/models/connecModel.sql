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