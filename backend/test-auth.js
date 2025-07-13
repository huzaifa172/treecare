const fetch = require('node-fetch');

const API_BASE = 'http://localhost:5000/api';

async function testAuth() {
  try {
    console.log('Testing auth endpoints...');
    
    // Test registration
    console.log('\n1. Testing registration...');
    const registerResponse = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      })
    });
    
    const registerData = await registerResponse.json();
    console.log('Registration response:', registerData);
    
    if (registerResponse.ok) {
      console.log('✅ Registration successful!');
      
      // Test login
      console.log('\n2. Testing login...');
      const loginResponse = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'password123'
        })
      });
      
      const loginData = await loginResponse.json();
      console.log('Login response:', loginData);
      
      if (loginResponse.ok) {
        console.log('✅ Login successful!');
        
        // Test token verification
        console.log('\n3. Testing token verification...');
        const verifyResponse = await fetch(`${API_BASE}/auth/verify`, {
          headers: {
            'Authorization': `Bearer ${loginData.data.token}`
          }
        });
        
        const verifyData = await verifyResponse.json();
        console.log('Verify response:', verifyData);
        
        if (verifyResponse.ok) {
          console.log('✅ Token verification successful!');
        } else {
          console.log('❌ Token verification failed!');
        }
      } else {
        console.log('❌ Login failed!');
      }
    } else {
      console.log('❌ Registration failed!');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testAuth();