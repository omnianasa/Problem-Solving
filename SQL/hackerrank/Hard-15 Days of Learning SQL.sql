/*
Enter your query here.
*/

with dailycounts as (
   select submission_date,
          hacker_id,
          count(submission_id) as cnt
     from submissions
    group by submission_date,
             hacker_id
),hackerconsistency as (
   select s1.submission_date,
          count(distinct s1.hacker_id) as num_hackers
     from dailycounts s1
    where (
      select count(distinct s2.submission_date)
        from dailycounts s2
       where s2.hacker_id = s1.hacker_id
         and s2.submission_date <= s1.submission_date
   ) = datediff(
      s1.submission_date,
      '2016-03-01'
   ) + 1
    group by s1.submission_date
),maxsubmissions as (
   select submission_date,
          hacker_id,
          row_number()
          over(partition by submission_date
               order by cnt desc,
                        hacker_id asc
          ) as rn
     from dailycounts
)
select h.submission_date,
       c.num_hackers,
       h.hacker_id,
       n.name
  from maxsubmissions h
  join hackerconsistency c
on h.submission_date = c.submission_date
  join hackers n
on h.hacker_id = n.hacker_id
 where h.rn = 1
 order by h.submission_date;