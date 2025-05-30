name="Adeel"
age=25
areStudent=False
list1=[1,2,34,5,6]


# task  1
print(f'Hello,{name}')
print(f'Age of Adeel after 5 year become {age+5}')
print('Adult' if age>18 else 'minor')
print(f'some of the list {sum(list1)}')

# calculate sum witout using the sum
def sumoffav(data):
    sum=0
    for i in (data):
        sum +=i
    return sum

print(sumoffav(list1))
