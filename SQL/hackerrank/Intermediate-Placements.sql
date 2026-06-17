/*
Enter your query here.
*/

select name
  from students s
  left join friends f
on s.id = f.id
  left join packages p
on p.id = s.id
  left join packages p2
on p2.id = f.friend_id
 where p2.salary > p.salary
 order by p2.salary asc;