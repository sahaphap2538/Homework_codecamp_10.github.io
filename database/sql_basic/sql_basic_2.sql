SELECT sname 
FROM sailors S left join reserves R on S.s_id = R.s_id
where R.b_id = 103