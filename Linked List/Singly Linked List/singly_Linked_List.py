class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self, val):
        newNode = Node(val)
        if self.head == None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
        return self

    def indexOf(self, val):
        if self.head == None:
            return 'No Item Found in List'
        else:
            count = 0
            current = self.head
            if val == current.val:
                return f'Found at index {count}'
            else:
                while current.next:
                    current = current.next
                    count += 1
                    if(current.val == val):
                        return f'Found at index {count}'

                return 'Value is Not Found in the List'

    def pop(self):
        if self.head == Node:
            return "No Item Found To Delete"
        else:
            current = self.head
            while current.next:
                newTail = current
                current = current.next
            current.val = None
            self.tail = newTail
        self.length -= 1
        return self

    def show(self):
        if self.head == None:
            print("List is Empty")
        else:
            current = self.head
            print(current.val)
            while(current.next):
                current = current.next
                if(current.val == None):
                    break
                print(current.val)

    def insertAt(self, val, index):
        if self.head == None:
            self.push(val)
            return self
            self.length += 1
        else:
            count = 0
            current = self.head
            if index == 0:
                current.val = val
                return self
            else:
                while current.next:
                    current = current.next
                    count += 1
                    if(index == count):
                        current.val = val
                        return self
                print('Out Of Index')


s = SinglyLinkedList()
s.push(1)
s.push(2)
s.push(3)
s.pop()
s.push(3)
s.push(4)
s.push(5)
s.push(6)
# s.show()
print(s.indexOf(6))
s.insertAt('One', 0)

s.insertAt('Six', 5)
s.insertAt('Three', 2)
s.show()
s.insertAt('seven', 6)
