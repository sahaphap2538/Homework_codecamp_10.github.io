SELECT distinct R.s_id
FROM reserves R left join boats B on R.b_id = B.b_id
where B.color = 'red'