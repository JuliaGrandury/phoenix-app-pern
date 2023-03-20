CREATE DATABASE phoenixapp;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY NOT NULL,
    role VARCHAR NOT NULL,
    role_link VARCHAR,
    company VARCHAR NOT NULL,
    company_link VARCHAR,
    company_desc VARCHAR,
    city VARCHAR,
    state_abbr VARCHAR,
    country VARCHAR,
    connections VARCHAR[],
    workstyle VARCHAR,
    app_status VARCHAR,
    applied_on DATE,
    priority INT NOT NULL check(priority >= 1 and priority <=5),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- EXAMPLE INSERTIONS
INSERT INTO jobs (role, role_link, company, company_link, company_desc, city, state_abbr, country, workstyle, connections, app_status, applied_on, priority) 
VALUES ('Senior Server Engineer, Communications & Personalization', 'strava.com/careers', 'Strava', 'strava.com', 'An internet service for tracking physical exercise which incorporates social network features.', 'Denver', 'Colorado', 'USA', 'Remote', '{"Nina Jones", "Louis Poletti"}', 'Applied', '3/31/2022', 1);

INSERT INTO jobs (role, role_link, company, company_link, company_desc, city, state_abbr, country, workstyle, connections, app_status, applied_on, priority) 
VALUES ('Software Engineer', 'jobs.ashbyhq.com/bedrockocean', 'Bedrock Ocean Exploration', 'bedrockocean.com', 'Bedrock provides high-resolution marine surveys, including Geophysical, Hydrographic, and UXO.', 'Brooklyn', 'NY', 'USA', 'Hybrid', '{"Anthony Dimare", "Kayla Feairheller, Henry Amestoy"}', 'Applied', '3/29/2022', 4);

INSERT INTO jobs (role, role_link, company, company_link, company_desc, city, state_abbr, country, workstyle, connections, app_status, applied_on, priority) 
VALUES ('AI/ML Engineer', 'coralgardeners.org/pages/careers', 'Coral Gardeners', 'coralgardeners.org', 'We are revolutionizing ocean conservation. Join the movement and save the reef with us.', 'Moorea', '', 'French Polynesia', 'On-site', '{"Titouan Bernicot"}', 'Applied', '3/29/2022', 4);


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