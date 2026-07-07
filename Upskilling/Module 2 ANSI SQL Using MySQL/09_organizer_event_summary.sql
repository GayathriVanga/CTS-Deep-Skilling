-- EX 09: Organizer Event Summary
-- For each organizer, show number of events and current status.

SELECT o.user_id AS organizer_id, o.full_name AS organizer_name,
       e.status, COUNT(*) AS event_count
FROM Events e
JOIN Users o ON o.user_id = e.organizer_id
GROUP BY o.user_id, o.full_name, e.status
ORDER BY o.user_id, e.status;
