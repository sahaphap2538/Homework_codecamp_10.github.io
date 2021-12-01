SELECT distinct S.sname
FROM 
sailors S left join reserves R on S.s_id = R.s_id
left join boats B on R.b_id = B.b_id
where B.color = 'red'