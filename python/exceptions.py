def divideOp():
    try:
        n1 = int(input('Enter numerator: '))
        n2 = int(input('Enter denominator: '))
        ans = n1/n2;
        print(f"Ans is {ans}")
    except ValueError as e:
        print('Values must be int.. ')
    except ZeroDivisionError as e:
        print('Denominator cannot be 0..')
    except Exception as e:
        print(e)
    finally:
        print('Operation Completed..')
        
divideOp()


#ValueError: invalid literal for int() with base 10: 'n1'
#ZeroDivisionError: division by zero