-- EX 03: Inactive Users
-- Users who have not registered for any events in the last 90 days.

SELECT u.user_id, u.full_name, u.email, u.city, u.registration_date
FROM Users u
WHERE u.user_id NOT IN (
    SELECT r.user_id
    FROM Registrations r
    WHERE r.registration_date >= DATE_SUB(CURDATE(), INTERVAL 90 DAY)
);
