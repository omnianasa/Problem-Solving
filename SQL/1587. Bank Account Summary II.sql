# Write your MySQL query statement below
SELECT u.name AS NAME,
    SUM(t.amount) AS BALANCE
FROM Users u
    LEFT JOIN Transactions t ON t.account = u.account
GROUP BY t.account
HAVING SUM(t.amount) > 10000