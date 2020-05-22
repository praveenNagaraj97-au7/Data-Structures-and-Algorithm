def isBalanced(s):
    stack = []
    obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for each in range(len(s)):
        if s[each] == "(" or s[each] == '{' or s[each] == "[":
            stack.append(s[each])
        else:
            try:
                last = stack.pop()
                if s[each] != obj[last]:
                    return "NO"
            except:
                return "NO"

    if len(stack) != 0:
        return "NO"
    return "YES"


n = int(input())
for each in range(n):
    s = input()
    print(isBalanced(s))
