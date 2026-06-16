/*
Enter your query here.
*/

select max(
   case
      when occupation = 'Doctor' then
         name
   end
) as doctor,
       max(
          case
             when occupation = 'Professor' then
                name
          end
       ) as professor,
       max(
          case
             when occupation = 'Singer' then
                name
          end
       ) as singer,
       max(
          case
             when occupation = 'Actor' then
                name
          end
       ) as actor
  from (
   select name,
          occupation,
          row_number()
          over(partition by occupation
               order by name asc
          ) as rownum
     from occupations
) /*ADD HERE AS TEMP*/
 group by rownum;