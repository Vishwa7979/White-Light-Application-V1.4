#!/bin/bash
echo "1. Registering User..."
auth_response=$(curl -s -X POST http://localhost:8081/api/v1/auth/register \
-H "Content-Type: application/json" \
-d '{"name": "Commerce User", "email": "commerce@example.com", "password": "password123"}')

echo "Auth Response: $auth_response"
token=$(echo $auth_response | sed 's/.*"token":"\([^"]*\)".*/\1/')
echo "Token: $token"

echo -e "\n2. Fetching Products..."
curl -s -X GET http://localhost:8081/api/v1/products \
-H "Authorization: Bearer $token" | cut -c 1-200

echo -e "\n\n3. Placing Order..."
# Using Product ID 1 (Sony Headphones)
curl -s -X POST http://localhost:8081/api/v1/orders \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $token" \
-d '{"productId": 1, "shippingAddress": "123 Tech Park, Bangalore"}'

echo -e "\n\n4. Fetching My Orders..."
curl -s -X GET http://localhost:8081/api/v1/orders \
-H "Authorization: Bearer $token"
