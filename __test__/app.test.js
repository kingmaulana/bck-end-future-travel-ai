import request from 'supertest';
import app from '../app.js';

test('POST /users/login should return status access_token', async () => {
    const userAdmin1 = {
        email: "user1@mail.com",
        password: "user1"
    }

    const response = await request(app).post('/user/login').send(userAdmin1)
    expect(response.body).toHaveProperty("access_token")
});

test('POST /users/login should be failed because user is invalid', async () => {
    const userAdmin1 = {
        email: "user1@mail.co",
        password: "user11"
    }

    const response = await request(app).post('/user/login').send(userAdmin1)
    expect(response.status).toBe(401)
})


test('POST /user/google-login should ', async () => {
    const userToken = {
        googleToken: null
    }
    const response = await request(app).post('/user/google-login').send(userToken)
    expect(response.body).toHaveProperty("message", "Missing google token")
});


test('POST /trip/create-trip', async () => {
    const prompt = null;
    const response = await request(app).post('/trip/create-trip').send(prompt)
    expect(response.status).toBe(500)
});

test('POST /trip/create-trip ', async () => {
    const prompt = '';
    const response = await request(app).post('/trip/create-trip').send(prompt)
    expect(response.body).toHaveProperty("error", "Failed to generate travel plan.")
});



test('POST /trip/create-trip ', async () => {
    const userPrompt = {
        userPrompt: "Generate Travel plan for location"
    }
    const response = await request(app).post('/trip/create-trip').send(userPrompt)
    expect(response.status).toBe(200)
});

test('POST /user/google-login ', async () => {
    const userToken = {
        googleToken: null
    }
    const response = await request(app).post('/user/google-login').send(userToken)
    expect(response.status).toBe(400)
});

test('POST /trip/create-trip', async () => {
    const prompt = null;
    const response = await request(app).post('/trip/create-trip').send(prompt)
    expect(response.body).toHaveProperty("error")
});


test('POST /users/login should return status 200', async () => {
    const userAdmin1 = {
        email: "user1@mail.com",
        password: "user1"
    }

    const response = await request(app).post('/user/login').send(userAdmin1)
    expect(response.status).toBe(200)
});


test('POST /users/login should be failed because password is invalid', async () => {
    const user = {
        email: "user1@mail.co",
        password: "user11"
    }

    const response = await request(app).post('/user/login').send(user)
    // console.log("🚀 ~ test ~ response:", response)
    expect(response.body).toHaveProperty("message", "Invalid email or password")
})


test('POST /trip/create-trip', async () => {
    const prompt = '';
    const response = await request(app).post('/trip/create-trip').send(prompt)
    expect(response.status).toBe(500)
});