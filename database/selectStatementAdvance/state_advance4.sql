SELECT D.customer_name, sum(A.balance)
FROM accounts A left join depositor D on A.account_number = D.account_number
group by D.customer_name having count(*) >= 2
