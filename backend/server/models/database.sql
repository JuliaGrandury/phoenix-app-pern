CREATE DATABASE phoenixapp;

CREATE TABLE dashboards (
    id SERIAL PRIMARY KEY NOT NULL,
    jobs 
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



