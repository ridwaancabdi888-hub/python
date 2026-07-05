# name = input("enter your name ")
# phone = input("enter your phone ")
# print("welcome", name, 'your phone is ' + phone)

# print()
# print("result")
# j0 = int(input("enter python marks:"))
# j1 = int(input("enter java marks:"))
# j2 = int(input("enter html marks:"))
# j3 = int(input("enter com marks:"))
# average = (j0 + j1 + j2 + j3) / 4
# print("total results: ", j0+j1+j2+j3)
# print("averages: ", average)


# APLUS = 96
# A = 90
# AMINUS = 86

# BPLUS = 80
# B = 76
# BMINUS = 70

# grademarks = (APLUS)
# print
# num = int(input("enter a number"))
# sum1 = 0
# while (num > 0):
#     sum = sum1+num
#     num = num-1
#     print("totale sum is ", num)
# tr = 0
# for t in range(1, 50):
#     tr += t
#     print("sum ", tr)
# she = ['ismaciil', 'ridwaan', 'maxmed', 'maxmed', 'mubarak', 'xamse']
# for i in she:
#     print(i)
#     if i == "mubarak":
#         break

she = ['ismaciil', 'ismaciil', 'maxmed', 'maxmed', 'maxmed', 'xamse']

for i in set(she):
    if she.count(i) > 1:
        print(i, "->", she.count(i), "time")
