-- EX 19: Completed Events with Feedback Summary
-- Total registrations and average feedback rating for completed events.

SELECT e.event_id, e.title,
       COUNT(DISTINCT r.registration_id) AS total_registrations,
       ROUND(AVG(f.rating),2) AS avg_rating
FROM Events e
LEFT JOIN Registrations r ON r.event_id = e.event_id
LEFT JOIN Feedback f      ON f.event_id = e.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id, e.title;
