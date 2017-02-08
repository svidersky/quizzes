***
Task: select ids of entries for which temperature was higher than a day before

Table temperatures
| id | date       | temperature |
|----|------------|-------------|
| 1  | 2016-01-01 | 10          |
| 2  | 2016-01-02 | 25          |
| 3  | 2016-01-03 | 20          |
| 4  | 2016-01-04 | 30          |
***

Solution:
select w1.id from weathers w1 left join weathers w2 on w1.id = w2.id + 1 where w1.temperature > w2.temperature;
