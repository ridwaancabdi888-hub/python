Python 3.13.14 (tags/v3.13.14:fd17997, Jun 10 2026, 13:03:48) [MSC v.1944 64 bit (AMD64)] on win32
Enter "help" below or click "Help" above for more information.
>>> uni=hargaisa
Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    uni=hargaisa
NameError: name 'hargaisa' is not defined
>>> uni= 'hargisa'
>>> print(uni)
hargisa
>>> li[2,1,'sof',"com",0.32]
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    li[2,1,'sof',"com",0.32]
NameError: name 'li' is not defined
>>> li=[3,4,2, ,0,"sof","eng",7.32]
SyntaxError: invalid syntax
>>> li=[3,4,2, 0,"sof","eng",7.32]
>>> li
[3, 4, 2, 0, 'sof', 'eng', 7.32]
>>> len(li)
7
>>> type(li)
<class 'list'>
