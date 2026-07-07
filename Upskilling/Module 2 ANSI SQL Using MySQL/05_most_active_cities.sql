-- EX 05: Most Active Cities
-- Top 5 cities with the highest number of distinct user registrations.

SELECT u.city, COUNT(DISTINCT r.user_id) AS distinct_users
FROM Registrations r
     JOIN Users u ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY distinct_users DESC
LIMIT 5;
