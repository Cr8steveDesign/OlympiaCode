// Creating the array of Python methods and Built-In Functions
// Their syntax and use cases (code example)

const python = [
  // List Methods
  {
    id: 1,
    method: "append()",
    syntax: "list.append(item)",
    exampleOfUse:
      "my_list = [1, 2, 3]\nmy_list.append(4)\n# Result: my_list = [1, 2, 3, 4]",
    ReturnValue: "None",
    Category: "List",
  },
  {
    id: 2,
    method: "extend()",
    syntax: "list.extend(iterable)",
    exampleOfUse:
      "my_list = [1, 2, 3]\nmy_list.extend([4, 5])\n# Result: my_list = [1, 2, 3, 4, 5]",
    ReturnValue: "None",
    Category: "List",
  },
  {
    id: 3,
    method: "insert()",
    syntax: "list.insert(index, item)",
    exampleOfUse:
      "my_list = [1, 2, 3]\nmy_list.insert(1, 4)\n# Result: my_list = [1, 4, 2, 3]",
    ReturnValue: "None",
    Category: "List",
  },
  {
    id: 4,
    method: "remove()",
    syntax: "list.remove(item)",
    exampleOfUse:
      "my_list = [1, 2, 3, 2]\nmy_list.remove(2)\n# Result: my_list = [1, 3, 2]",
    ReturnValue: "None",
    Category: "List",
  },
  {
    id: 5,
    method: "pop()",
    syntax: "list.pop(index)",
    exampleOfUse:
      "my_list = [1, 2, 3]\nvalue = my_list.pop(1)\n# Result: value = 2, my_list = [1, 3]",
    ReturnValue: "The removed item",
    Category: "List",
  },
  {
    id: 6,
    method: "index()",
    syntax: "list.index(item, start, end)",
    exampleOfUse:
      "my_list = [1, 2, 3, 2]\nindex = my_list.index(2)\n# Result: index = 1",
    ReturnValue: "The index of the first occurrence of the item",
    Category: "List",
  },
  {
    id: 7,
    method: "count()",
    syntax: "list.count(item)",
    exampleOfUse:
      "my_list = [1, 2, 3, 2]\ncount = my_list.count(2)\n# Result: count = 2",
    ReturnValue: "The number of occurrences of the item in the list",
    Category: "List",
  },
  {
    id: 8,
    method: "sort()",
    syntax: "list.sort(key=None, reverse=False)",
    exampleOfUse:
      "my_list = [3, 1, 2]\nmy_list.sort()\n# Result: my_list = [1, 2, 3]",
    ReturnValue: "None",
    Category: "List",
  },
  {
    id: 9,
    method: "reverse()",
    syntax: "list.reverse()",
    exampleOfUse:
      "my_list = [1, 2, 3]\nmy_list.reverse()\n# Result: my_list = [3, 2, 1]",
    ReturnValue: "None",
    Category: "List",
  },
  {
    id: 10,
    method: "copy()",
    syntax: "list.copy()",
    exampleOfUse:
      "my_list = [1, 2, 3]\nnew_list = my_list.copy()\n# Result: new_list = [1, 2, 3]",
    ReturnValue: "A new shallow copy of the list",
    Category: "List",
  },
  // String Methods
  {
    id: 11,
    method: "capitalize()",
    syntax: "str.capitalize()",
    exampleOfUse:
      "my_str = 'hello world'\nnew_str = my_str.capitalize()\n# Result: new_str = 'Hello world'",
    ReturnValue: "A new string with the first character capitalized",
    Category: "String",
  },
  {
    id: 12,
    method: "upper()",
    syntax: "str.upper()",
    exampleOfUse:
      "my_str = 'hello world'\nnew_str = my_str.upper()\n# Result: new_str = 'HELLO WORLD'",
    ReturnValue: "A new string with all characters in uppercase",
    Category: "String",
  },
  {
    id: 13,
    method: "lower()",
    syntax: "str.lower()",
    exampleOfUse:
      "my_str = 'Hello World'\nnew_str = my_str.lower()\n# Result: new_str = 'hello world'",
    ReturnValue: "A new string with all characters in lowercase",
    Category: "String",
  },
  {
    id: 14,
    method: "strip()",
    syntax: "str.strip([characters])",
    exampleOfUse:
      "my_str = '   hello world   '\nnew_str = my_str.strip()\n# Result: new_str = 'hello world'",
    ReturnValue:
      "A new string with leading and trailing characters removed (whitespace by default)",
    Category: "String",
  },
  {
    id: 15,
    method: "split()",
    syntax: "str.split([separator[, maxsplit]])",
    exampleOfUse:
      "my_str = 'apple,banana,cherry'\nparts = my_str.split(',')\n# Result: parts = ['apple', 'banana', 'cherry']",
    ReturnValue: "A list of substrings split by the separator",
    Category: "String",
  },
  {
    id: 16,
    method: "join()",
    syntax: "str.join(iterable)",
    exampleOfUse:
      "my_list = ['apple', 'banana', 'cherry']\njoined_str = ','.join(my_list)\n# Result: joined_str = 'apple,banana,cherry'",
    ReturnValue:
      "A new string with the elements of the iterable joined by the string",
    Category: "String",
  },
  {
    id: 17,
    method: "replace()",
    syntax: "str.replace(old, new[, count])",
    exampleOfUse:
      "my_str = 'Hello, world!'\nnew_str = my_str.replace('world', 'Python')\n# Result: new_str = 'Hello, Python!'",
    ReturnValue: "A new string with all occurrences of 'old' replaced by 'new'",
    Category: "String",
  },
  {
    id: 18,
    method: "find()",
    syntax: "str.find(sub[, start[, end]])",
    exampleOfUse:
      "my_str = 'Hello, world!'\npos = my_str.find('world')\n# Result: pos = 7",
    ReturnValue: "The lowest index of the substring 'sub' or -1 if not found",
    Category: "String",
  },
  {
    id: 19,
    method: "startswith()",
    syntax: "str.startswith(prefix[, start[, end]])",
    exampleOfUse:
      "my_str = 'Hello, world!'\nstarts_with_hello = my_str.startswith('Hello')\n# Result: starts_with_hello = True",
    ReturnValue: "True if the string starts with 'prefix', otherwise False",
    Category: "String",
  },
  {
    id: 20,
    method: "endswith()",
    syntax: "str.endswith(suffix[, start[, end]])",
    exampleOfUse:
      "my_str = 'Hello, world!'\nends_with_world = my_str.endswith('world')\n# Result: ends_with_world = True",
    ReturnValue: "True if the string ends with 'suffix', otherwise False",
    Category: "String",
  },
  // Dictionary Methods
  {
    id: 21,
    method: "get()",
    syntax: "dict.get(key[, default])",
    exampleOfUse:
      "my_dict = {'name': 'John', 'age': 30}\nvalue = my_dict.get('name', 'Unknown')\n# Result: value = 'John'",
    ReturnValue: "The value for 'key' if 'key' exists, otherwise 'default'",
    Category: "Dictionary",
  },
  {
    id: 22,
    method: "keys()",
    syntax: "dict.keys()",
    exampleOfUse:
      "my_dict = {'name': 'John', 'age': 30}\nkeys = my_dict.keys()\n# Result: keys = ['name', 'age']",
    ReturnValue: "A list of all keys in the dictionary",
    Category: "Dictionary",
  },
  {
    id: 23,
    method: "values()",
    syntax: "dict.values()",
    exampleOfUse:
      "my_dict = {'name': 'John', 'age': 30}\nvalues = my_dict.values()\n# Result: values = ['John', 30]",
    ReturnValue: "A list of all values in the dictionary",
    Category: "Dictionary",
  },
  {
    id: 24,
    method: "items()",
    syntax: "dict.items()",
    exampleOfUse:
      "my_dict = {'name': 'John', 'age': 30}\nitems = my_dict.items()\n# Result: items = [('name', 'John'), ('age', 30)]",
    ReturnValue: "A list of all key-value pairs (tuples) in the dictionary",
    Category: "Dictionary",
  },
  {
    id: 25,
    method: "pop()",
    syntax: "dict.pop(key[, default])",
    exampleOfUse:
      "my_dict = {'name': 'John', 'age': 30}\nvalue = my_dict.pop('age')\n# Result: value = 30, my_dict = {'name': 'John'}",
    ReturnValue:
      "The value for 'key' if 'key' exists, otherwise 'default' (or raises KeyError if not found and no default provided)",
    Category: "Dictionary",
  },
  {
    id: 26,
    method: "popitem()",
    syntax: "dict.popitem()",
    exampleOfUse:
      "my_dict = {'name': 'John', 'age': 30}\nitem = my_dict.popitem()\n# Result: item = ('age', 30), my_dict = {'name': 'John'} (random item removed)",
    ReturnValue: "A random key-value pair (tuple) removed from the dictionary",
    Category: "Dictionary",
  },
  {
    id: 27,
    method: "clear()",
    syntax: "dict.clear()",
    exampleOfUse:
      "my_dict = {'name': 'John', 'age': 30}\nmy_dict.clear()\n# Result: my_dict = {}",
    ReturnValue: "None",
    Category: "Dictionary",
  },
  {
    id: 28,
    method: "update()",
    syntax: "dict.update(iterable)",
    exampleOfUse:
      "my_dict = {'name': 'John', 'age': 30}\nmy_dict.update({'age': 31, 'city': 'New York'})\n# Result: my_dict = {'name': 'John', 'age': 31, 'city': 'New York'}",
    ReturnValue: "None",
    Category: "Dictionary",
  },
  // Number Methods
  {
    id: 29,
    method: "int()",
    syntax: "int(x)",
    exampleOfUse: "num_str = '42'\nnum = int(num_str)\n# Result: num = 42",
    ReturnValue: "An integer converted from a number or string",
    Category: "Number",
  },
  {
    id: 30,
    method: "float()",
    syntax: "float(x)",
    exampleOfUse:
      "num_str = '3.14'\nnum = float(num_str)\n# Result: num = 3.14",
    ReturnValue: "A floating-point number converted from a number or string",
    Category: "Number",
  },

  {
    id: 32,
    method: "round()",
    syntax: "round(x[, ndigits])",
    exampleOfUse:
      "num = 3.14159\nrounded = round(num, 2)\n# Result: rounded = 3.14",
    ReturnValue:
      "A number rounded to the specified number of decimal places (ndigits)",
    Category: "Number",
  },
  {
    id: 33,
    method: "max()",
    syntax: "max(iterable, key, default)",
    exampleOfUse:
      "my_list = [3, 1, 4, 1, 5, 9, 2]\nmax_num = max(my_list)\n# Result: max_num = 9",
    ReturnValue:
      "The maximum item from an iterable (or the maximum of multiple arguments)",
    Category: "Number",
  },
  {
    id: 34,
    method: "min()",
    syntax: "min(iterable, key, default)",
    exampleOfUse:
      "my_list = [3, 1, 4, 1, 5, 9, 2]\nmin_num = min(my_list)\n# Result: min_num = 1",
    ReturnValue:
      "The minimum item from an iterable (or the minimum of multiple arguments)",
    Category: "Number",
  },
  {
    id: 36,
    method: "range()",
    syntax: "range(stop)",
    exampleOfUse: "my_range = range(5)\n# Result: my_range = [0, 1, 2, 3, 4]",
    ReturnValue: "A sequence of numbers from 0 to (stop-1)",
    Category: "Builtin",
  },
  {
    id: 37,
    method: "enumerate()",
    syntax: "enumerate(iterable, start=0)",
    exampleOfUse:
      "my_list = ['apple', 'banana', 'cherry']\nenum = enumerate(my_list)\n# Result: enum = [(0, 'apple'), (1, 'banana'), (2, 'cherry')]",
    ReturnValue:
      "An enumerate object that generates pairs of index and item from an iterable",
    Category: "Builtin",
  },
  {
    id: 39,
    method: "sorted()",
    syntax: "sorted(iterable, key=None, reverse=False)",
    exampleOfUse:
      "my_list = [3, 1, 4, 1, 5, 9, 2]\nsorted_list = sorted(my_list)\n# Result: sorted_list = [1, 1, 2, 3, 4, 5, 9]",
    ReturnValue: "A new list with elements from the iterable sorted",
    Category: "Builtin",
  },
  {
    id: 40,
    method: "zip()",
    syntax: "zip(iterable1, iterable2, ...)",
    exampleOfUse:
      "list1 = [1, 2, 3]\nlist2 = ['apple', 'banana', 'cherry']\nzipped = zip(list1, list2)\n# Result: zipped = [(1, 'apple'), (2, 'banana'), (3, 'cherry')]",
    ReturnValue:
      "An iterator of tuples, where the first item in each passed iterator is paired together",
    Category: "Builtin",
  },
  {
    id: 42,
    method: "any()",
    syntax: "any(iterable)",
    exampleOfUse:
      "my_list = [True, True, False]\nresult = any(my_list)\n# Result: result = True",
    ReturnValue:
      "True if any element in the iterable is true (or empty iterable), otherwise False",
    Category: "Builtin",
  },
  {
    id: 43,
    method: "filter()",
    syntax: "filter(function, iterable)",
    exampleOfUse:
      "my_list = [1, 2, 3, 4, 5]\nfiltered = filter(lambda x: x % 2 == 0, my_list)\n# Result: filtered = [2, 4]",
    ReturnValue:
      "An iterator containing elements from the iterable for which the function returns true",
    Category: "Builtin",
  },
  {
    id: 44,
    method: "map()",
    syntax: "map(function, iterable, ...)",
    exampleOfUse:
      "my_list = [1, 2, 3]\ndoubled = map(lambda x: x * 2, my_list)\n# Result: doubled = [2, 4, 6]",
    ReturnValue:
      "An iterator that applies the function to all items in the iterable",
    Category: "Builtin",
  },
  {
    id: 45,
    method: "reduce()",
    syntax: "functools.reduce(function, iterable[, initializer])",
    exampleOfUse:
      "from functools import reduce\nmy_list = [1, 2, 3, 4, 5]\nresult = reduce(lambda x, y: x * y, my_list)\n# Result: result = 120",
    ReturnValue:
      "The result of applying the function cumulatively to the items of the iterable",
    Category: "Built-in",
  },
  {
    id: 46,
    method: "sorted()",
    syntax: "sorted(iterable, key=None, reverse=False)",
    exampleOfUse:
      "my_list = [3, 1, 4, 1, 5, 9, 2]\nsorted_list = sorted(my_list)\n# Result: sorted_list = [1, 1, 2, 3, 4, 5, 9]",
    ReturnValue: "A new list with elements from the iterable sorted",
    Category: "Built-in",
  },

  {
    id: 49,
    method: "round()",
    syntax: "round(x[, ndigits])",
    exampleOfUse:
      "num = 3.14159\nrounded = round(num, 2)\n# Result: rounded = 3.14",
    ReturnValue:
      "A number rounded to the specified number of decimal places (ndigits)",
    Category: "Built-in",
  },
  {
    id: 51,
    method: "min()",
    syntax: "min(iterable, *args[, key, default])",
    exampleOfUse:
      "my_list = [3, 1, 4, 1, 5, 9, 2]\nmin_num = min(my_list)\n# Result: min_num = 1",
    ReturnValue:
      "The minimum item from an iterable (or the minimum of multiple arguments)",
    Category: "Built-in",
  },
  {
    id: 52,
    method: "sum()",
    syntax: "sum(iterable, /, start=0)",
    exampleOfUse:
      "my_list = [1, 2, 3, 4, 5]\nresult = sum(my_list)\n# Result: result = 15",
    ReturnValue:
      "The sum of all elements in an iterable, with an optional start value",
    Category: "Built-in",
  },
  {
    id: 55,
    method: "any()",
    syntax: "any(iterable, /)",
    exampleOfUse:
      "my_list = [True, True, False]\nresult = any(my_list)\n# Result: result = True",
    ReturnValue:
      "True if any element in the iterable is true (or empty iterable), otherwise False",
    Category: "Built-in",
  },
  {
    id: 56,
    method: "all()",
    syntax: "all(iterable, /)",
    exampleOfUse:
      "my_list = [True, True, False]\nresult = all(my_list)\n# Result: result = False",
    ReturnValue:
      "True if all elements in the iterable are true (or empty iterable), otherwise False",
    Category: "Built-in",
  },
  {
    id: 57,
    method: "zip()",
    syntax: "zip(*iterables)",
    exampleOfUse:
      "list1 = [1, 2, 3]\nlist2 = ['apple', 'banana', 'cherry']\nzipped = zip(list1, list2)\n# Result: zipped = [(1, 'apple'), (2, 'banana'), (3, 'cherry')]",
    ReturnValue:
      "An iterator of tuples, where the first item in each passed iterator is paired together",
    Category: "Built-in",
  },
  {
    id: 58,
    method: "reduce()",
    syntax: "functools.reduce(function, iterable[, initializer])",
    exampleOfUse:
      "from functools import reduce\nmy_list = [1, 2, 3, 4, 5]\nresult = reduce(lambda x, y: x * y, my_list)\n# Result: result = 120",
    ReturnValue:
      "The result of applying the function cumulatively to the items of the iterable",
    Category: "Built-in",
  },
  {
    id: 59,
    method: "round()",
    syntax: "round(number[, ndigits])",
    exampleOfUse:
      "num = 3.14159\nrounded = round(num, 2)\n# Result: rounded = 3.14",
    ReturnValue:
      "Round a number to the nearest integer or to the specified number of decimal places (ndigits)",
    Category: "Built-in",
  },

  {
    id: 62,
    method: "len()",
    syntax: "len(s)",
    exampleOfUse:
      "my_list = [1, 2, 3, 4, 5]\nlength = len(my_list)\n# Result: length = 5",
    ReturnValue:
      "The number of items in an iterable or the length of a sequence",
    Category: "Built-in",
  },
  {
    id: 64,
    method: "min()",
    syntax: "min(iterable, *[, key, default])",
    exampleOfUse:
      "my_list = [3, 1, 4, 1, 5, 9, 2]\nmin_num = min(my_list)\n# Result: min_num = 1",
    ReturnValue:
      "The minimum item from an iterable (or the minimum of multiple arguments)",
    Category: "Built-in",
  },
  {
    id: 65,
    method: "pow()",
    syntax: "pow(base, exp[, mod])",
    exampleOfUse: "result = pow(2, 3)\n# Result: result = 8",
    ReturnValue:
      "The result of raising 'base' to the power 'exp', optionally modulo 'mod'",
    Category: "Built-in",
  },
  {
    id: 66,
    method: "divmod()",
    syntax: "divmod(a, b)",
    exampleOfUse: "result = divmod(10, 3)\n# Result: result = (3, 1)",
    ReturnValue:
      "A pair of numbers representing the quotient and remainder when 'a' is divided by 'b'",
    Category: "Built-in",
  },
  {
    id: 67,
    method: "bin()",
    syntax: "bin(x)",
    exampleOfUse: "binary = bin(42)\n# Result: binary = '0b101010'",
    ReturnValue: "A string representing the binary value of 'x'",
    Category: "Built-in",
  },
  {
    id: 68,
    method: "oct()",
    syntax: "oct(x)",
    exampleOfUse: "octal = oct(42)\n# Result: octal = '0o52'",
    ReturnValue: "A string representing the octal value of 'x'",
    Category: "Built-in",
  },
  {
    id: 69,
    method: "hex()",
    syntax: "hex(x)",
    exampleOfUse: "hexadecimal = hex(42)\n# Result: hexadecimal = '0x2a'",
    ReturnValue: "A string representing the hexadecimal value of 'x'",
    Category: "Built-in",
  },
  {
    id: 70,
    method: "ord()",
    syntax: "ord(c)",
    exampleOfUse: "ascii_value = ord('A')\n# Result: ascii_value = 65",
    ReturnValue: "The ASCII value of the character 'c'",
    Category: "Built-in",
  },
  {
    id: 71,
    method: "chr()",
    syntax: "chr(i)",
    exampleOfUse: "character = chr(65)\n# Result: character = 'A'",
    ReturnValue: "The character representing the Unicode code point 'i'",
    Category: "Built-in",
  },
  {
    id: 72,
    method: "bool()",
    syntax: "bool(x)",
    exampleOfUse: "value = 42\nis_true = bool(value)\n# Result: is_true = True",
    ReturnValue: "Converts 'x' to a Boolean value (True or False)",
    Category: "Built-in",
  },
  {
    id: 73,
    method: "list()",
    syntax: "list(iterable)",
    exampleOfUse:
      "my_tuple = (1, 2, 3)\nmy_list = list(my_tuple)\n# Result: my_list = [1, 2, 3]",
    ReturnValue: "Converts an iterable to a list",
    Category: "Built-in",
  },
  {
    id: 74,
    method: "tuple()",
    syntax: "tuple(iterable)",
    exampleOfUse:
      "my_list = [1, 2, 3]\nmy_tuple = tuple(my_list)\n# Result: my_tuple = (1, 2, 3)",
    ReturnValue: "Converts an iterable to a tuple",
    Category: "Built-in",
  },
  {
    id: 75,
    method: "set()",
    syntax: "set(iterable)",
    exampleOfUse:
      "my_list = [1, 2, 2, 3, 3, 4]\nmy_set = set(my_list)\n# Result: my_set = {1, 2, 3, 4}",
    ReturnValue: "Converts an iterable to a set, removing duplicate elements",
    Category: "Built-in",
  },
  {
    id: 76,
    method: "dict()",
    syntax: "dict(iterable)",
    exampleOfUse:
      "my_list = [('a', 1), ('b', 2)]\nmy_dict = dict(my_list)\n# Result: my_dict = {'a': 1, 'b': 2}",
    ReturnValue: "Converts an iterable of key-value pairs to a dictionary",
    Category: "Built-in",
  },
  {
    id: 77,
    method: "sorted()",
    syntax: "sorted(iterable, /, *, key=None, reverse=False)",
    exampleOfUse:
      "my_list = [3, 1, 4, 1, 5, 9, 2]\nsorted_list = sorted(my_list)\n# Result: sorted_list = [1, 1, 2, 3, 4, 5, 9]",
    ReturnValue: "A new list with elements from the iterable sorted",
    Category: "Built-in",
  },
  {
    id: 78,
    method: "enumerate()",
    syntax: "enumerate(iterable, start=0)",
    exampleOfUse:
      "my_list = ['apple', 'banana', 'cherry']\nenum = enumerate(my_list)\n# Result: enum = [(0, 'apple'), (1, 'banana'), (2, 'cherry')]",
    ReturnValue:
      "An enumerate object that generates pairs of index and item from an iterable",
    Category: "Built-in",
  },
  {
    id: 79,
    method: "zip()",
    syntax: "zip(*iterables)",
    exampleOfUse:
      "list1 = [1, 2, 3]\nlist2 = ['apple', 'banana', 'cherry']\nzipped = zip(list1, list2)\n# Result: zipped = [(1, 'apple'), (2, 'banana'), (3, 'cherry')]",
    ReturnValue:
      "An iterator of tuples, where the first item in each passed iterator is paired together",
    Category: "Built-in",
  },
  {
    id: 82,
    method: "any()",
    syntax: "any(iterable, /)",
    exampleOfUse:
      "my_list = [True, True, False]\nresult = any(my_list)\n# Result: result = True",
    ReturnValue:
      "True if any element in the iterable is true (or empty iterable), otherwise False",
    Category: "Built-in",
  },
  {
    id: 84,
    method: "callable()",
    syntax: "callable(object)",
    exampleOfUse:
      "def my_function():\n    return 42\n\nresult = callable(my_function)\n# Result: result = True",
    ReturnValue:
      "True if the object appears callable (e.g., a function), otherwise False",
    Category: "Built-in",
  },
  {
    id: 85,
    method: "hash()",
    syntax: "hash(object)",
    exampleOfUse: "value = 42\nhashed = hash(value)\n# Result: hashed = 42",
    ReturnValue: "A hash value for the object (an integer)",
    Category: "Built-in",
  },
];

module.exports = python;
