-- EX 01: User Upcoming Events
-- Show a list of all upcoming events a user is registered for in their city, sorted by date.

SELECT u.user_id, u.full_name, e.event_id, e.title, e.city, e.start_date
FROM   Users u
       INNER JOIN Registrations r ON r.user_id = u.user_id
       INNER JOIN Events e ON e.event_id = r.event_id
WHERE  e.status = 'upcoming'
  AND  e.city = u.city
ORDER  BY u.user_id, e.start_date;
