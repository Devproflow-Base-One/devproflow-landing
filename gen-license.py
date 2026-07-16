import hmac, hashlib
client_id = 'DEVPROFLOW'
version = '1.0.0'
secret = 'lumina-master-2024-secret-key'
msg = f'{client_id}-{version}'.encode()
sig = hmac.new(secret.encode(), msg, hashlib.sha256).hexdigest()[:16]
print(f'LUMINA-{client_id}-{version}-{sig}')
