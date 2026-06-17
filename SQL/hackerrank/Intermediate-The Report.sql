/*
Enter your query here.
*/

select case
          when grades.grade < 8 then
             null
          else
             students.name
       end,
       grades.grade,
       students.marks
  from students
 inner join grades
on students.marks between grades.min_mark and grades.max_mark
 order by grades.grade desc,
          case
             when grades.grade >= 8 then
                students.name
             else
                students.marks
          end
       asc;