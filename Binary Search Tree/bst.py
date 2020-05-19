class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class BST:
    def __init__(self):
        self.root = None

    def insert(self, val):
        newNode = Node(val)
        if self.root == None:
            self.root = newNode
            return val
        else:
            current = self.root
            while True:
                if val > current.val:
                    if not current.right:
                        current.right = newNode
                        return val
                    else:
                        current = current.right
                elif val < current.val:
                    if not current.left:
                        current.left = newNode
                        return val
                    else:
                        current = current.left
                else:
                    return "Value Present Already"

    def find_Max(self):
        if not self.root:
            return "No Data"
        else:
            current = self.root
            while current.right:
                current = current.right
                if not current.right:
                    return f'Max : {current.val}'

    def find_min(self):
        if not self.root:
            return "No Data"
        else:
            current = self.root
            while current.left:
                current = current.left
                if not current.left:
                    return f'Min : {current.val}'


b = BST()

b.insert(10)
b.insert(15)
b.insert(7)
b.insert(20)
b.insert(5)
print(b.insert(25))

print(b.find_Max())
print(b.find_min())
