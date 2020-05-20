'''
Input : 
          1
        /   \
       2     5
      / \     \
     3   4     6
Output :
    1
     \
      2
       \
        3
         \
          4
           \
            5
             \
              6

'''


class Node:
    def __init__(self, val):
        self.val = val
        self.right = None
        self.left = None


class BST:
    def __init__(self):
        self.root = None

    def insert(self, val):
        newNode = Node(val)
        if not self.root:
            self.root = newNode
            return 'Inserted'
        else:
            current = self.root
            while(True):
                if val > current.val:
                    if not current.right:
                        current.right = newNode
                        return "Inserted"
                    else:
                        current = current.right
                elif val < current.val:
                    if not current.left:
                        current.left = newNode
                        return "Inserted"
                    else:
                        current = current.left
                else:
                    return "Value Already exist In Tree"

    def flatten(self):
        data = []
        if not self.root:
            return "No Data"
        current = self.root

        def traverse(node):
            if(node.left):
                traverse(node.left)
            data.append(node.val)
            if(node.right):
                traverse(node.right)

        traverse(current)
        return data


b = BST()

b.insert(1)
b.insert(5)
b.insert(6)
b.insert(2)
b.insert(3)
b.insert(4)
print(b.flatten())
