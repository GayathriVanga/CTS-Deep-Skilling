-- EX 17: Multi-Session Speakers
-- Speakers who handle more than one session across all events.

SELECT speaker_name, COUNT(*) AS session_count
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(*) > 1;
