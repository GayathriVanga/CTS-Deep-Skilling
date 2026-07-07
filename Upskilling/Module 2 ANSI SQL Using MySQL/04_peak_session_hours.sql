-- EX 04: Peak Session Hours
-- Count sessions scheduled between 10 AM and 12 PM for each event.

SELECT event_id, COUNT(*) AS session_count
FROM Sessions
WHERE TIME(start_time) BETWEEN '10:00:00' AND '12:00:00'
GROUP BY event_id;
