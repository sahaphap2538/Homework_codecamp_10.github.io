SELECT A.account_number
FROM accounts A left join branch B on A.branch_name = B.branch_name
where B.branch_city = 'Riverside'