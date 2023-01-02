import request from "supertest";
import app from "../app";

const newUser = {
  name: "name",
  email: "email@mail.com",
  password: "password",
};

describe("users", () => {
  test("POST/users should be able to create a user", async () => {
    const response = await request(app).post("/users").send(newUser);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.status).toBe(201);
  });

  test("POST/users should NOT be able to create a user that already exists", async () => {
    const response = await request(app).post("/users").send(newUser);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("GET/users should be able to list all users", async () => {
    const response = await request(app).get("/users");
    expect(response.body).toHaveProperty("map");
    expect(response.status).toBe(200);
  });
});
