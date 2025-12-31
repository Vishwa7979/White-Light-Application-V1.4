#!/bin/bash
echo "1. Registering Conversation User..."
auth_response=$(curl -s -X POST http://localhost:8081/api/v1/auth/register \
-H "Content-Type: application/json" \
-d '{"name": "Chat User", "email": "chat@example.com", "password": "password123"}')
token=$(echo $auth_response | sed 's/.*"token":"\([^"]*\)".*/\1/')
echo "Token Acquired"

echo -e "\n2. Creating Chat Thread..."
thread_response=$(curl -s -X POST http://localhost:8081/api/v1/chat/threads \
-H "Authorization: Bearer $token" \
-H "Content-Type: application/json" \
-d '{"title": "Shopping for Son"}')
thread_id=$(echo $thread_response | sed 's/.*"id":\([0-9]*\).*/\1/')
echo "Thread ID: $thread_id"

echo -e "\n3. Sending Message: 'I'm looking for a cricket bat'..."
curl -s -X POST http://localhost:8081/api/v1/chat/threads/$thread_id/messages \
-H "Authorization: Bearer $token" \
-H "Content-Type: application/json" \
-d '{"text": "I am looking for a cricket bat for my son"}'

echo -e "\n\n4. Sending Follow-up: 'He is 12 years old'..."
curl -s -X POST http://localhost:8081/api/v1/chat/threads/$thread_id/messages \
-H "Authorization: Bearer $token" \
-H "Content-Type: application/json" \
-d '{"text": "He is 12 years old"}'

echo -e "\n\n5. Checking Thread History..."
curl -s -X GET http://localhost:8081/api/v1/chat/threads/$thread_id/messages \
-H "Authorization: Bearer $token" | cut -c 1-200

echo -e "\n\n6. Testing Image Recognition Mock..."
# Create a dummy file
echo "dummy image content" > test_shoe.jpg
curl -s -X POST http://localhost:8081/api/v1/recognition/upload \
-H "Authorization: Bearer $token" \
-F "file=@test_shoe.jpg"
rm test_shoe.jpg
