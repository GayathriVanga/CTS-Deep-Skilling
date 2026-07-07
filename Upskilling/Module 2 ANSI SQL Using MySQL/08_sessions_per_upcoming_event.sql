-- EX 08: Sessions per Upcoming Event
-- All upcoming events with count of sessions scheduled.

SELECT e.event_id, e.title, COUNT(s.session_id) AS session_count
FROM Events e
LEFT JOIN Sessions s ON s.event_id = e.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id, e.title;
