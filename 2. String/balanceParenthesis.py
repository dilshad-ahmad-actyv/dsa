class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        n = len(s)
        stack = []

        for char in s:
            if char == '(' or char == '{' or char == '[':
                stack.append(char)
            else:
                if len(stack) > 0:
                    if char == ')' and stack[-1] == '(':
                        stack.pop()
                    elif char == '}' and stack[-1] == '{':
                        stack.pop()
                    elif char == ']' and stack[-1] == '[':
                        stack.pop()
                    else:
                        stack.append(char)
                else:
                    stack.append(char)
        print(stack)
        if len(stack) > 0:
            return False
        else:
            return True
        
obj = Solution()
ans = obj.isValid('()')
print('ans', ans)
