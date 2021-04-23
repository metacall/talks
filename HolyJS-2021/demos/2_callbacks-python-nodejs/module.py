def operateNumbers(numbers, callback):
    results = []
    for i in numbers:
        results.append(callback(i))
    return results