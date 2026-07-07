-- EX 07: Low Feedback Alerts
-- Users who gave feedback with a rating less than 3, with comments and event names.

SELECT u.user_id, u.full_name, e.title AS event_name, f.rating, f.comments
FROM Feedback f
JOIN Users u  ON u.user_id  = f.user_id
JOIN Events e ON e.event_id = f.event_id
WHERE f.rating < 3;
