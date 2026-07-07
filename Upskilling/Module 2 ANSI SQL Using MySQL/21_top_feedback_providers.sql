-- EX 21: Top Feedback Providers
-- Top 5 users who submitted the most feedback entries.

SELECT u.user_id, u.full_name, COUNT(f.feedback_id) AS feedback_count
FROM Users u
     JOIN Feedback f ON f.user_id = u.user_id
GROUP BY u.user_id, u.full_name
ORDER BY feedback_count DESC
LIMIT 5;
