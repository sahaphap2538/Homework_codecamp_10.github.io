select S.sname
from sailors S
where 
S.age = (select max(S.age)
from sailors S)
