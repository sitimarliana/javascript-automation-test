const request = require("supertest");
const baseUrl = require('../../env')

describe("Post Request Test", () => {
  it("Create User", async () => {
    const response = request(baseUrl())
    .post("/api/users")
    .send({
        "id": "812",
        "username": "sity",
        "firstName": "siti",
        "lastName": "marliana",
        "email": "siti@gmail.com",
        "password": "12345",
        "phone": "0087777",
        "userStatus": 0,
        "createdAt": "2023-05-17T06:51:00.606Z"
    })
    console.log((await response).status)
    console.log((await response).body)
  });
});
