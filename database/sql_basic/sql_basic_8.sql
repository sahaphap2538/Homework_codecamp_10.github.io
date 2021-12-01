select sname from sailors S where S.s_id in
(SELECT distinct S.s_id
FROM sailors S left join reserves R on S.s_id = R.s_id
left join boats B on R.b_id = B.b_id
where B.color = 'red')
and S.s_id in
(SELECT distinct S.s_id
FROM sailors S left join reserves R on S.s_id = R.s_id
left join boats B on R.b_id = B.b_id
where B.color = 'green')