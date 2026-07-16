#!/bin/bash
FILE="/opt/lumina/ai-proxy/ai-proxy-server.js"
# Fix the broken line
sed -i 's|realtime: { enabled: false, transport: require(" ws) },|realtime: { enabled: false, transport: require("ws") },|' "$FILE"
# Verify
grep -n 'realtime' "$FILE"
