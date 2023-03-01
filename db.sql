CREATE DATABASE phoenixapp;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY NOT NULL,
    role VARCHAR NOT NULL,
    role_link VARCHAR,
    city VARCHAR,
    state VARCHAR,
    country VARCHAR,
    workstyle VARCHAR NOT NULL,
    company VARCHAR NOT NULL,
    connections VARCHAR[],
    status VARCHAR,
    applied_on DATE,
    priority INT NOT NULL check(priority >= 1 and priority <=5),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- EXAMPLE INSERTIONS
INSERT INTO jobs (role, role_link, city, state, country, workstyle, company, connections, status, applied_on, priority) 
VALUES ('Software Engineer', 'google.com', 'Denver', 'Colorado', 'USA', 'Remote', 'Strava', '{"Nina Jones", "Louis Poletti"}', 'Applied', '3/31/2022', 1);

INSERT INTO jobs (role, role_link, city, state, country, workstyle, company, connections, status, applied_on, priority) 
VALUES ('Software Engineer', 'google.com', 'Brisbane', '', 'Australia', 'Hybrid', 'Brisbane Conservancy', '{"Timmy Jones", "John Trumpet"}', 'Applied', '3/29/2022', 4);


CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    website VARCHAR,
    description VARCHAR,
    founding_date DATE,
    founders VARCHAR[],
    status VARCHAR,
    size VARCHAR,
);