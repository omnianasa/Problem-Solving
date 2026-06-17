/*
Enter your query here.
*/

select ceil(avg(salary) - avg(ltrim(replace(
   salary,
   '0',
   ''
))))
  from employees;