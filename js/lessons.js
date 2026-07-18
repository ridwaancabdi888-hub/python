/* Course content is kept separate so lessons are easy to edit or extend. */
const LESSONS = [
  {
    id:'introduction', title:'Introduction to Python', level:'Getting Started',
    summary:'Discover what Python is, where it is used, and why it is a great first programming language.',
    content:`<h2>What is Python?</h2><p>Python is a popular, general-purpose programming language. Its clean, readable syntax lets you focus on solving problems instead of punctuation. Python is used for websites, automation, data science, artificial intelligence, cybersecurity, and much more.</p><div class="note"><strong>Good to know:</strong> Python reads your program from top to bottom. Indentation is part of the language, so spacing matters.</div><h2>Your first program</h2><p>The <code>print()</code> function displays a value in the terminal.</p>`,
    code:`message = "Hello, Python!"
print(message)
print("I am ready to learn.")`,
    exercise:'Create a variable named <code>city</code>, give it the value <code>"Hargeisa"</code>, and print a welcome message.',
    solution:`city = "Hargeisa"
print("Welcome to", city)`
  },
  {
    id:'installing-python', title:'Installing Python', level:'Getting Started',
    summary:'Install Python and check that it works on Windows, macOS, or Linux.',
    content:`<h2>Install and verify</h2><p>Download Python 3 from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener">python.org</a>. On Windows, select <strong>Add Python to PATH</strong> before clicking Install. Then open Terminal, Command Prompt, or PowerShell.</p><p>Use one of these commands to see the installed version:</p>`,
    code:`# Run these in a terminal, not inside a .py file
python --version
# On some systems:
python3 --version`,
    after:`<h2>Run a file</h2><p>Create a file named <code>hello.py</code>, add a print statement, open the terminal in that folder, and run <code>python hello.py</code>. You may also use IDLE or VS Code.</p>`,
    exercise:'Create <code>hello.py</code> and make it print your name and your learning goal on separate lines.',
    solution:`print("My name is Ridwaan")
print("My goal is to learn Python")`
  },
  {
    id:'syntax', title:'Python Syntax', level:'Foundations',
    summary:'Learn statements, comments, indentation, and the basic rules of Python code.',
    content:`<h2>Readable by design</h2><p>A statement is an instruction. Comments begin with <code>#</code> and are ignored by Python. A block of related code uses the same indentation, normally four spaces.</p>`,
    code:`# This is a comment
temperature = 28

if temperature > 25:
    print("It is a warm day")
    print("Remember to drink water")`,
    after:`<p>Removing the indentation below <code>if</code> causes an <code>IndentationError</code>. Python is case-sensitive: <code>name</code> and <code>Name</code> are different.</p>`,
    exercise:'Write an <code>if</code> block that prints “Keep learning” when <code>hours</code> is greater than 0.',
    solution:`hours = 2
if hours > 0:
    print("Keep learning")`
  },
  {
    id:'variables', title:'Variables', level:'Foundations',
    summary:'Store, name, update, and display information in your programs.',
    content:`<h2>Names for values</h2><p>A variable points to a value. Use descriptive names with letters, numbers, and underscores. Names cannot start with a number and should not use reserved words such as <code>if</code>.</p>`,
    code:`student_name = "Ayaan"
course = "Python"
completed_lessons = 4

completed_lessons = completed_lessons + 1
print(student_name, "completed", completed_lessons, "lessons")`,
    after:`<h2>Multiple assignment</h2><p>You can assign several values at once: <code>x, y = 10, 20</code>. Constants are usually written in uppercase, such as <code>MAX_SCORE = 100</code>.</p>`,
    exercise:'Store a product name, price, and quantity. Calculate and print the total.',
    solution:`product = "Notebook"
price = 3.5
quantity = 4
total = price * quantity
print(product, "total:", total)`
  },
  {
    id:'data-types', title:'Data Types', level:'Foundations',
    summary:'Understand strings, integers, floats, collections, and type conversion.',
    content:`<h2>Values have types</h2><p>Common types include <code>str</code> for text, <code>int</code> for whole numbers, <code>float</code> for decimals, <code>bool</code> for truth values, and collections such as lists and dictionaries. Use <code>type()</code> to inspect a value.</p>`,
    code:`name = "Ridwaan"       # str
age = 22               # int
gpa = 3.3              # float
is_student = True      # bool

print(type(name))
print(type(gpa))
print(int("25") + 5)  # convert text to an integer`,
    exercise:'Create one value of each type: string, integer, float, and boolean. Print each type.',
    solution:`city = "Hargeisa"
year = 2026
temperature = 28.5
is_sunny = True
for value in [city, year, temperature, is_sunny]:
    print(type(value))`
  },
  {
    id:'numbers', title:'Numbers', level:'Foundations',
    summary:'Perform arithmetic and use useful numeric operators and functions.',
    content:`<h2>Working with numbers</h2><p>Python supports integers and floating-point numbers. Operators include addition <code>+</code>, subtraction <code>-</code>, multiplication <code>*</code>, division <code>/</code>, floor division <code>//</code>, remainder <code>%</code>, and exponentiation <code>**</code>.</p>`,
    code:`price = 12.50
quantity = 3
subtotal = price * quantity
tax = subtotal * 0.05

print("Subtotal:", subtotal)
print("Total:", round(subtotal + tax, 2))
print("17 divided by 5 leaves", 17 % 5)`,
    exercise:'Convert 27 degrees Celsius to Fahrenheit using <code>F = C × 9/5 + 32</code>.',
    solution:`celsius = 27
fahrenheit = celsius * 9 / 5 + 32
print(fahrenheit)`
  },
  {
    id:'strings', title:'Strings', level:'Foundations',
    summary:'Create, combine, slice, format, and transform text.',
    content:`<h2>Text in Python</h2><p>Strings are sequences of characters inside quotes. Indexing starts at zero. Useful methods include <code>lower()</code>, <code>upper()</code>, <code>strip()</code>, and <code>replace()</code>. F-strings provide a clean way to insert values.</p>`,
    code:`name = "Ridwaan"
language = "Python"

print(name[0])          # R
print(language[0:3])   # Pyt
print(language.upper())
print(f"{name} is learning {language}!")`,
    exercise:'Given <code>message = "  learn python  "</code>, remove spaces, capitalize it, and print its length.',
    solution:`message = "  learn python  "
clean = message.strip().title()
print(clean)
print(len(clean))`
  },
  {
    id:'booleans', title:'Booleans', level:'Foundations',
    summary:'Represent true or false and combine comparisons into decisions.',
    content:`<h2>Truth values</h2><p>A Boolean is either <code>True</code> or <code>False</code>. Comparisons return Booleans. Use <code>and</code>, <code>or</code>, and <code>not</code> to combine or reverse conditions.</p>`,
    code:`age = 21
has_id = True

can_enter = age >= 18 and has_id
print(can_enter)
print(age == 21)
print(not has_id)`,
    exercise:'Check whether <code>score</code> is at least 50 and attendance is at least 75.',
    solution:`score = 78
attendance = 82
passed = score >= 50 and attendance >= 75
print(passed)`
  },
  {
    id:'lists', title:'Lists', level:'Collections',
    summary:'Keep ordered, changeable groups of items in one place.',
    content:`<h2>Ordered collections</h2><p>Lists use square brackets and can contain different types. Add with <code>append()</code>, remove with <code>remove()</code> or <code>pop()</code>, and access items by index.</p>`,
    code:`lessons = ["Syntax", "Variables", "Strings"]
lessons.append("Lists")
lessons[0] = "Python Syntax"

print(lessons[0])
print(lessons[-1])
print("Total:", len(lessons))`,
    exercise:'Create a shopping list, add one item, remove one item, then print every remaining item.',
    solution:`shopping = ["rice", "milk", "bread"]
shopping.append("fruit")
shopping.remove("milk")
for item in shopping:
    print(item)`
  },
  {
    id:'tuples', title:'Tuples', level:'Collections',
    summary:'Store ordered values that should not change.',
    content:`<h2>Fixed collections</h2><p>Tuples use parentheses. Unlike lists, they are immutable: their items cannot be changed after creation. They are useful for coordinates, colors, and records with a fixed shape.</p>`,
    code:`location = (9.56, 44.06)
latitude, longitude = location

print("Latitude:", latitude)
print("Longitude:", longitude)
print("Items:", len(location))`,
    exercise:'Create an RGB color tuple, unpack its three values, and print them.',
    solution:`color = (48, 105, 152)
red, green, blue = color
print(red, green, blue)`
  },
  {
    id:'sets', title:'Sets', level:'Collections',
    summary:'Work with unique values and compare collections efficiently.',
    content:`<h2>Unique, unordered items</h2><p>A set automatically removes duplicates. Sets support union <code>|</code>, intersection <code>&</code>, and difference <code>-</code>. Because they are unordered, items do not have indexes.</p>`,
    code:`group_a = {"Ali", "Ayaan", "Hani"}
group_b = {"Hani", "Omar", "Ali"}

print(group_a & group_b)  # in both
print(group_a | group_b)  # in either
group_a.add("Ridwaan")`,
    exercise:'Remove duplicates from <code>[10, 20, 10, 30, 20]</code> and print the unique values.',
    solution:`numbers = [10, 20, 10, 30, 20]
unique_numbers = set(numbers)
print(unique_numbers)`
  },
  {
    id:'dictionaries', title:'Dictionaries', level:'Collections',
    summary:'Connect descriptive keys to values and model real information.',
    content:`<h2>Key-value data</h2><p>Dictionaries use keys to find values. Keys must be unique. Add or update with square brackets, read safely with <code>get()</code>, and loop with <code>items()</code>.</p>`,
    code:`student = {
    "name": "Ridwaan",
    "course": "Software Engineering",
    "gpa": 3.3
}
student["year"] = 3

for key, value in student.items():
    print(f"{key}: {value}")`,
    exercise:'Create a book dictionary with title, author, and pages. Update pages and print each key and value.',
    solution:`book = {"title": "Python Basics", "author": "A. Learner", "pages": 180}
book["pages"] = 200
for key, value in book.items():
    print(key, value)`
  },
  {
    id:'if-else', title:'If / Else Statements', level:'Control Flow',
    summary:'Make your programs choose what to do based on conditions.',
    content:`<h2>Making decisions</h2><p><code>if</code> checks the first condition, <code>elif</code> checks alternatives, and <code>else</code> handles everything remaining. Only the first matching block runs.</p>`,
    code:`score = 84

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "Needs improvement"

print("Grade:", grade)`,
    exercise:'Check whether a number is positive, negative, or zero.',
    solution:`number = -4
if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")`
  },
  {
    id:'for-loops', title:'For Loops', level:'Control Flow',
    summary:'Repeat work for every item in a collection or number in a range.',
    content:`<h2>Repeat over a sequence</h2><p>A <code>for</code> loop visits each item. <code>range(start, stop)</code> creates a number sequence where the stop value is excluded. <code>enumerate()</code> adds a counter.</p>`,
    code:`topics = ["Variables", "Lists", "Loops"]

for number, topic in enumerate(topics, start=1):
    print(f"{number}. {topic}")

for number in range(1, 6):
    print(number, "squared is", number ** 2)`,
    exercise:'Use a loop to calculate the sum of numbers from 1 through 10.',
    solution:`total = 0
for number in range(1, 11):
    total += number
print(total)`
  },
  {
    id:'while-loops', title:'While Loops', level:'Control Flow',
    summary:'Repeat code while a condition remains true.',
    content:`<h2>Condition-based repetition</h2><p>A <code>while</code> loop continues until its condition becomes false. Update the condition inside the loop to avoid an infinite loop. <code>break</code> exits early and <code>continue</code> skips to the next iteration.</p>`,
    code:`countdown = 5

while countdown > 0:
    print(countdown)
    countdown -= 1

print("Launch!")`,
    exercise:'Start at 2 and repeatedly double the value while it is less than 100. Print every value.',
    solution:`value = 2
while value < 100:
    print(value)
    value *= 2`
  },
  {
    id:'functions', title:'Functions', level:'Reusable Code',
    summary:'Group reusable logic, accept inputs, and return results.',
    content:`<h2>Reusable building blocks</h2><p>Define a function with <code>def</code>. Parameters receive inputs and <code>return</code> sends a result back. Small focused functions make programs easier to test and understand.</p>`,
    code:`def calculate_average(scores):
    """Return the average of a list of scores."""
    if not scores:
        return 0
    return sum(scores) / len(scores)

result = calculate_average([80, 92, 76])
print(f"Average: {result:.1f}")`,
    exercise:'Write a function <code>is_even(number)</code> that returns <code>True</code> for even numbers.',
    solution:`def is_even(number):
    return number % 2 == 0

print(is_even(8))
print(is_even(7))`
  },
  {
    id:'modules', title:'Modules', level:'Reusable Code',
    summary:'Organize code into files and use Python’s standard library.',
    content:`<h2>Import useful code</h2><p>A module is a Python file containing functions, variables, or classes. Use <code>import</code> to access it. The standard library includes modules for mathematics, random values, dates, files, and more.</p>`,
    code:`import math
from random import randint

radius = 5
area = math.pi * radius ** 2
print(f"Area: {area:.2f}")
print("Lucky number:", randint(1, 10))`,
    after:`<p>You can create <code>helpers.py</code> with a function, then use <code>from helpers import function_name</code> in another file in the same folder.</p>`,
    exercise:'Import <code>datetime</code> and print the current date.',
    solution:`from datetime import date
today = date.today()
print("Today is", today)`
  },
  {
    id:'file-handling', title:'File Handling', level:'Intermediate',
    summary:'Read and write text files safely using context managers.',
    content:`<h2>Persist information</h2><p>Opening with <code>"r"</code> reads, <code>"w"</code> replaces, and <code>"a"</code> appends. The <code>with</code> statement closes a file automatically, even if an error occurs.</p>`,
    code:`# Write a file
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Practice Python every day.\n")

# Read it back
with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)`,
    exercise:'Append three goals to <code>goals.txt</code>, one goal per line, then read and print the file.',
    solution:`goals = ["Learn functions", "Build a project", "Practice daily"]
with open("goals.txt", "a", encoding="utf-8") as file:
    for goal in goals:
        file.write(goal + "\n")
with open("goals.txt", encoding="utf-8") as file:
    print(file.read())`
  },
  {
    id:'error-handling', title:'Error Handling', level:'Intermediate',
    summary:'Handle expected failures gracefully with try and except.',
    content:`<h2>Programs can recover</h2><p>Place risky code in <code>try</code> and handle specific exceptions with <code>except</code>. <code>else</code> runs on success, and <code>finally</code> always runs. Avoid catching every error without understanding it.</p>`,
    code:`try:
    number = int("not a number")
    result = 100 / number
except ValueError:
    print("Please enter a whole number.")
except ZeroDivisionError:
    print("The number cannot be zero.")
else:
    print("Result:", result)`,
    exercise:'Safely ask for two integers and divide the first by the second. Handle invalid input and zero.',
    solution:`try:
    first = int(input("First: "))
    second = int(input("Second: "))
    print(first / second)
except ValueError:
    print("Enter integers only")
except ZeroDivisionError:
    print("Cannot divide by zero")`
  },
  {
    id:'oop', title:'Object-Oriented Programming', level:'Intermediate',
    summary:'Model data and behavior together with classes and objects.',
    content:`<h2>Classes are blueprints</h2><p>A class describes a type of object. <code>__init__</code> sets its initial attributes, <code>self</code> refers to the current object, and methods define behavior. Inheritance lets a class extend another class.</p>`,
    code:`class Student:
    def __init__(self, name, scores):
        self.name = name
        self.scores = scores

    def average(self):
        return sum(self.scores) / len(self.scores)

    def summary(self):
        return f"{self.name}: {self.average():.1f}"

student = Student("Ridwaan", [85, 90, 82])
print(student.summary())`,
    after:`<div class="note"><strong>Design tip:</strong> Use a class when several values and behaviors naturally belong to the same concept. A simple function is often enough for smaller tasks.</div>`,
    exercise:'Create a <code>BankAccount</code> class with owner, balance, deposit, and withdraw behavior.',
    solution:`class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return True
        return False

account = BankAccount("Ridwaan", 100)
account.deposit(50)
account.withdraw(30)
print(account.balance)`
  }
];

const PROJECTS = [
  {id:'calculator',icon:'＋',title:'Calculator',description:'A menu-driven calculator that performs four common operations.',tags:['Input','Functions','Conditions'],requirements:['Ask the user for two numbers','Support +, -, *, and /','Handle division by zero and invalid operations'],code:`def calculate(a, operator, b):
    if operator == "+": return a + b
    if operator == "-": return a - b
    if operator == "*": return a * b
    if operator == "/":
        if b == 0: return "Cannot divide by zero"
        return a / b
    return "Unknown operation"

try:
    first = float(input("First number: "))
    operator = input("Operation (+, -, *, /): ")
    second = float(input("Second number: "))
    print("Result:", calculate(first, operator, second))
except ValueError:
    print("Please enter valid numbers.")`},
  {id:'guessing-game',icon:'?',title:'Number Guessing Game',description:'Guess a random number with helpful higher-or-lower clues.',tags:['Random','While Loop','Input'],requirements:['Generate a number from 1 to 100','Count attempts','Give higher/lower feedback'],code:`from random import randint

secret = randint(1, 100)
attempts = 0
print("I picked a number from 1 to 100.")

while True:
    try:
        guess = int(input("Your guess: "))
        attempts += 1
        if guess < secret:
            print("Higher!")
        elif guess > secret:
            print("Lower!")
        else:
            print(f"Correct in {attempts} attempts!")
            break
    except ValueError:
        print("Enter a whole number.")`},
  {id:'todo-list',icon:'✓',title:'To-Do List',description:'Add, view, and complete tasks in a terminal application.',tags:['Lists','Functions','Loops'],requirements:['Show a numbered menu','Add and list tasks','Mark tasks complete','Exit cleanly'],code:`tasks = []

def show_tasks():
    if not tasks:
        print("No tasks yet.")
    for index, task in enumerate(tasks, 1):
        mark = "✓" if task["done"] else " "
        print(f"{index}. [{mark}] {task['title']}")

while True:
    print("\n1. View  2. Add  3. Complete  4. Exit")
    choice = input("Choose: ")
    if choice == "1":
        show_tasks()
    elif choice == "2":
        tasks.append({"title": input("Task: "), "done": False})
    elif choice == "3":
        show_tasks()
        try:
            number = int(input("Task number: "))
            tasks[number - 1]["done"] = True
        except (ValueError, IndexError):
            print("Invalid task number.")
    elif choice == "4":
        break`},
  {id:'password-generator',icon:'⌘',title:'Password Generator',description:'Create strong passwords with a user-selected length.',tags:['Strings','Random','Validation'],requirements:['Ask for a length of at least 8','Use letters, numbers, and symbols','Return a randomly generated password'],code:`import secrets
import string

characters = string.ascii_letters + string.digits + "!@#$%&*"

while True:
    try:
        length = int(input("Password length (8+): "))
        if length < 8:
            print("Use at least 8 characters.")
            continue
        password = "".join(secrets.choice(characters) for _ in range(length))
        print("Password:", password)
        break
    except ValueError:
        print("Enter a whole number.")`},
  {id:'quiz-app',icon:'◎',title:'Simple Quiz App',description:'Ask multiple-choice questions and calculate a final score.',tags:['Dictionaries','Loops','Score'],requirements:['Store questions and answers','Check responses without case sensitivity','Display the final percentage'],code:`questions = [
    {"question": "Which keyword defines a function?", "answer": "def"},
    {"question": "Which type stores key-value pairs?", "answer": "dictionary"},
    {"question": "What value means no value?", "answer": "none"}
]

score = 0
for item in questions:
    answer = input(item["question"] + " ").strip().lower()
    if answer == item["answer"]:
        print("Correct!")
        score += 1
    else:
        print("Answer:", item["answer"])

percentage = score / len(questions) * 100
print(f"Final score: {score}/{len(questions)} ({percentage:.0f}%)")`},
  {id:'grade-calculator',icon:'A+',title:'Student Grade Calculator',description:'Calculate averages and assign letter grades for several students.',tags:['Functions','Lists','Dictionaries'],requirements:['Accept several scores','Validate scores from 0 to 100','Calculate average and letter grade'],code:`def letter_grade(average):
    if average >= 90: return "A"
    if average >= 80: return "B"
    if average >= 70: return "C"
    if average >= 60: return "D"
    return "F"

name = input("Student name: ")
scores = []
for subject in ["Python", "Database", "Networking"]:
    while True:
        try:
            score = float(input(f"{subject} score: "))
            if 0 <= score <= 100:
                scores.append(score)
                break
            print("Score must be from 0 to 100.")
        except ValueError:
            print("Enter a valid number.")

average = sum(scores) / len(scores)
print(f"{name}: {average:.1f}% — Grade {letter_grade(average)}")`}
];
