class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def insert(self, val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            newNode.prev = self.tail
            self.tail = newNode
        self.length += 1
        return f'------------\nHEAD : {self.head.val} \nTAIL : {self.tail.val}'

    def remove(self):
        if self.head == None:
            return None
        current = self.tail
        removedEL = current.val
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.tail = current.prev
            self.tail.next = None
            current = None
        self.length -= 1
        return removedEL

    def searchIndex(self, val):
        if not self.head:
            return None
        current = self.head
        count = 0
        if current.val == val:
            return f'Found At Index {count}'
        while current.next:
            current = current.next
            count += 1
            if current.val == val:
                return f'Found At Index {count}'
            elif not current.next:
                return "Not Found"


d = DoublyLinkedList()
d.insert(1)
d.insert(2)
d.insert(3)
d.remove()
d.remove()
d.remove()
d.insert(3)
d.insert(2)
d.insert(1)
d.insert(0)

print(d.searchIndex(3))
print(d.searchIndex(2))
print(d.searchIndex(1))
print(d.searchIndex(0))
print(d.searchIndex(10))
