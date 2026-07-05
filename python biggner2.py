Python 3.13.14 (tags/v3.13.14:fd17997, Jun 10 2026, 13:03:48) [MSC v.1944 64 bit (AMD64)] on win32
Enter "help" below or click "Help" above for more information.
uni='har'
uni
'har'
li=[3,4 0,"sof","eng",7.32]
SyntaxError: invalid syntax. Perhaps you forgot a comma?
li=[3,4,2, 0,"sof","eng",7.32]
li
[3, 4, 2, 0, 'sof', 'eng', 7.32]
print(uni+li)
Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    print(uni+li)
TypeError: can only concatenate str (not "list") to str
uni and li
[3, 4, 2, 0, 'sof', 'eng', 7.32]
uni
'har'
uni+li
Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    uni+li
TypeError: can only concatenate str (not "list") to str
type(uni)
<class 'str'>
uni.isdigit()
False
type(li)
<class 'list'>
tt[3, 4, 2, 0, 'sof', 'eng', 7.32]
Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    tt[3, 4, 2, 0, 'sof', 'eng', 7.32]
NameError: name 'tt' is not defined
tt=3, 4, 2, 0, 'sof', 'eng', 7.32
type(tt)
<class 'tuple'>
pop(3)
Traceback (most recent call last):
  File "<pyshell#15>", line 1, in <module>
    pop(3)
NameError: name 'pop' is not defined. Did you mean: 'pow'?
tt.insert(3,44)
Traceback (most recent call last):
  File "<pyshell#16>", line 1, in <module>
    tt.insert(3,44)
AttributeError: 'tuple' object has no attribute 'insert'
li.insert(0,44)
li
[44, 3, 4, 2, 0, 'sof', 'eng', 7.32]
li.pop(0)
44
li
[3, 4, 2, 0, 'sof', 'eng', 7.32]
di={'name':"xamse","age":30,2:1000}
di
{'name': 'xamse', 'age': 30, 2: 1000}
di["age"]:25
di
{'name': 'xamse', 'age': 30, 2: 1000}
{'name': 'xamse', 'age': 30, 2: 1000}
{'name': 'xamse', 'age': 30, 2: 1000}

di['age']:25
di['age']:25,
SyntaxError: invalid syntax

di['age']=25
di
{'name': 'xamse', 'age': 25, 2: 1000}
tt
(3, 4, 2, 0, 'sof', 'eng', 7.32)
tt.inset(0,20)
Traceback (most recent call last):
  File "<pyshell#33>", line 1, in <module>
    tt.inset(0,20)
AttributeError: 'tuple' object has no attribute 'inset'. Did you mean: 'index'?
type(di)
<class 'dict'>

di
{'name': 'xamse', 'age': 25, 2: 1000}














































d
Traceback (most recent call last):
  File "<pyshell#56>", line 1, in <module>
    d
NameError: name 'd' is not defined. Did you mean: 'di'?
di_values
Traceback (most recent call last):
  File "<pyshell#57>", line 1, in <module>
    di_values
NameError: name 'di_values' is not defined
di.key
Traceback (most recent call last):
  File "<pyshell#58>", line 1, in <module>
    di.key
AttributeError: 'dict' object has no attribute 'key'. Did you mean: 'keys'?
di.key()
Traceback (most recent call last):
  File "<pyshell#59>", line 1, in <module>
    di.key()
AttributeError: 'dict' object has no attribute 'key'. Did you mean: 'keys'?
di={'name':"xamse","age":30,2:1000}
di
{'name': 'xamse', 'age': 30, 2: 1000}
di.key()
Traceback (most recent call last):
  File "<pyshell#62>", line 1, in <module>
    di.key()
AttributeError: 'dict' object has no attribute 'key'. Did you mean: 'keys'?
di.keys()
dict_keys(['name', 'age', 2])
di.values()
dict_values(['xamse', 30, 1000])



di['name']=ridwan
Traceback (most recent call last):
  File "<pyshell#68>", line 1, in <module>
    di['name']=ridwan
NameError: name 'ridwan' is not defined
di['name']="ridwan"
di
{'name': 'ridwan', 'age': 30, 2: 1000}
di['lastname']="apdi"
di
{'name': 'ridwan', 'age': 30, 2: 1000, 'lastname': 'apdi'}
di.keys()
dict_keys(['name', 'age', 2, 'lastname'])


print()

print(result)
Traceback (most recent call last):
  File "<pyshell#77>", line 1, in <module>
    print(result)
NameError: name 'result' is not defined
print()

print("result")
result
p1=int(input("enter python marks:"))
enter python marks:22
j2=int(input("enter java marks:"))
enter java marks:33

======================================== RESTART: C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py =======================================
enter your namexamse
enter your phone63
welcome name your phone is phone

======================================== RESTART: C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py =======================================
enter your namexamse
enter your phone654
welcome xamse your phone is 654

= RESTART: C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py
enter your namexamse
enter your phone67333
welcome xamse your phone is 67333

result
Traceback (most recent call last):
  File "C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py", line 7, in <module>
    p1=int(inout("enter python marks:"))
NameError: name 'inout' is not defined. Did you mean: 'input'?
>>> 
= RESTART: C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py
enter your namexamse
enter your phone544
welcome xamse your phone is 544

result
enter python marks:30
enter java marks:10
Traceback (most recent call last):
  File "C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py", line 9, in <module>
    print("total results: ",p1+j2)
NameError: name 'j2' is not defined. Did you mean: 'j1'?
>>> 
= RESTART: C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py
enter your namexamse
enter your phone6444
welcome xamse your phone is 6444

result
enter python marks:70
enter java marks:0.2
Traceback (most recent call last):
  File "C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py", line 8, in <module>
    j1=int(input("enter java marks:"))
ValueError: invalid literal for int() with base 10: '0.2'
>>> 
= RESTART: C:/Users/Administrator/Desktop/sem-6/python/biggner/project1.py
enter your namexamse
enter your phone677
welcome xamse your phone is 677

result
enter python marks:60
enter java marks:70
total results:  130
