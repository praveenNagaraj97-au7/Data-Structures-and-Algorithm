#n = [int(x) for x in input().split(' ')]
#no_of_Rotate = n[1]
#values = [int(x) for x in  input().split(' ')]
n = 25231
values = []
index = len(values)-1
while n > 0:
    popped = values.pop(index-1)
    values.insert(index, popped)
    index -= 1
    n -= 1

print(*values)
