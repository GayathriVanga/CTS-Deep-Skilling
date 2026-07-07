-- EX 10: Feedback Gap
-- Events that had registrations but received no feedback.

SELECT DISTINCT e.event_id, e.title
FROM Events e
JOIN Registrations r ON r.event_id = e.event_id
WHERE NOT EXISTS (
    SELECT 1 FROM Feedback f WHERE f.event_id = e.event_id
);
