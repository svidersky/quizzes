***
Task: select top salaries in each department

Table departments:
+----+-------+
| id | name  |
|----|-------|
| 1  | IT    |
| 2  | Sales |

Table employees contains all employees.
+----+-------+--------+---------------+
| id | name  | salary | department_id |
+----+-------+--------+---------------+
| 1  | Joe   | 70000  | 1             |
| 2  | Henry | 80000  | 2             |
| 3  | Sam   | 60000  | 2             |
| 4  | Max   | 90000  | 1             |
+----+-------+--------+---------------+
***

Solution:
select departments.name, max(salary) as salary from employees join departments on department_id = departments.id GROUP BY departments.name;
