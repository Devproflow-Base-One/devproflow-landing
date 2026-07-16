import sys
filepath = '/opt/lumina/ai-proxy/ai-proxy-server.js'
with open(filepath, 'r') as f:
    content = f.read()

old = '''realtime: { enabled: false, transport: require(" ws
) },'''
new = '''realtime: { enabled: false, transport: require("ws") },'''

if old in content:
    content = content.replace(old, new)
    with open(filepath, 'w') as f:
        f.write(content)
    print('FIXED')
else:
    print('NOT FOUND - trying alternate')
    # Try to find any broken variant
    import re
    pattern = r'realtime:\s*\{[^}]*transport:\s*require\([^)]*\)[^}]*\}'
    match = re.search(pattern, content)
    if match:
        print(f'Found: {repr(match.group())}')
        content = content.replace(match.group(), 'realtime: { enabled: false, transport: require("ws") }')
        with open(filepath, 'w') as f:
            f.write(content)
        print('FIXED via regex')
    else:
        print('No match found')
