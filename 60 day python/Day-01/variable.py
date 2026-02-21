#print('Hello World', 'Welcome to 60 Days of Python', sep=' & ', end=' * ')
var='My Name Is Mahfuz'
print('Good Morning ' + var)
id(var)
import sys
sys.getsizeof(var)
x=100
print(x)

#global & Local
x = 1000 #global

def func1():
    x = 500 #local
    print('My Num is : ',x)
func1()

x = 1000 #global

def func1():
    x = 500 #local
    print('My Num is : ',x)
func1()
print('My Num is : ',x)

def func1():
    global x
    x = 500 #local
    print('My Num is : ',x)
func1()
print('My Num is : ',x)