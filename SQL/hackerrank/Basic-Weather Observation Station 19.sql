/*
Enter your query here.
*/
select round(
   pow(
      pow(
         min(lat_n) - max(lat_n),
         2
      ) + pow(
         min(long_w) - max(long_w),
         2
      ),
      0.5
   ),
   4
)
  from station;