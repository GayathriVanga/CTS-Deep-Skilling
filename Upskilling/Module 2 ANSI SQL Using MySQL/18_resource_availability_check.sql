-- EX 18: Resource Availability Check
-- Events with no resources uploaded.

SELECT e.event_id, e.title
FROM Events e
LEFT JOIN Resources res ON res.event_id = e.event_id
WHERE res.resource_id IS NULL;
