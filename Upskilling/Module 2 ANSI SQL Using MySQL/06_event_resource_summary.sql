-- EX 06: Event Resource Summary
-- Number of resources (PDFs, images, links) uploaded for each event.

SELECT e.event_id, e.title,
       SUM(res.resource_type = 'pdf')   AS pdf_count,
       SUM(res.resource_type = 'image') AS image_count,
       SUM(res.resource_type = 'link')  AS link_count,
       COUNT(res.resource_id)           AS total_resources
FROM Events e
     LEFT JOIN Resources res ON res.event_id = e.event_id
GROUP BY e.event_id, e.title
ORDER BY e.event_id;
