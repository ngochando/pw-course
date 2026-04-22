import { test, expect, APIRequestContext } from '@playwright/test';
import { TodoApi } from './02-todo.api';

test.describe("Test API with POM", async () => {
    let todoApi: TodoApi;

    test.beforeEach(async ({ request }) => {
        todoApi = new TodoApi(request, "https://material.playwrightvn.com/api/todo-app/v1");
    });

    test("Test api get list todo - with POM", async ({ request }) => {
        const response = await todoApi.getTodos();

        // lấy ra body, assert body bao gồm 3 phần tử
        const responseBody = await response.json();
        expect(responseBody.success).toBeTruthy();
        expect(responseBody.todos).toBeTruthy();
    });

    test("Test api get single todo - with POM", async ({ request }) => {
        // Gọi API get todos
        const id = 3;
        const response = await todoApi.getTodo(id);

        // lấy ra body, assert body bao gồm 3 phần tử
        const responseBody = await response.json();
        expect(responseBody.success).toBeTruthy();
        expect(responseBody.todo.title).toEqual("Update dependencies");
    });
});





test("Test api create todo", async ({ request }) => {
    const body = {
        "title": "Todo - Minh Phong [K22 - Playwright]",
        "description": "Write comprehensive docs for the API",
        "status": "pending",
        "priority": "high",
        "due_date": "2025-10-25T17:00:00",
        "user_id": 1
    }

    // Gọi API create todo
    const response = await request.post(`https://material.playwrightvn.com/api/todo-app/v1/todo.php`, {
        data: body
    });

    // Lấy ra status code -> assert status code = 200
    const statusCode = response.status();
    expect(statusCode).toEqual(201);

    // lấy ra body, assert body bao gồm 3 phần tử
    const responseBody = await response.json();
    expect(responseBody.success).toBeTruthy();

    expect(responseBody.todo.id).toBeGreaterThan(3);
    expect(responseBody.todo.title).toEqual(body.title);
});

// Test case tổng hợp:
// 1. Gọi API tạo todo
//.  -> Verify: code = 201, title đúng, id > 3

// 3. Gọi API get list, verify, trong list có id vừa tạo

test("Test api create todo - multile validation", async ({ request }) => {
    const body = {
        "title": "Todo - Minh Phong [K22 - Multiple validation]",
        "description": "Write comprehensive docs for the API",
        "status": "pending",
        "priority": "high",
        "due_date": "2025-10-25T17:00:00",
        "user_id": 1
    }

    // Gọi API create todo
    let response = await request.post(`https://material.playwrightvn.com/api/todo-app/v1/todo.php`, {
        data: body
    });
    // Lấy ra status code -> assert status code = 200
    let statusCode = response.status();
    expect(statusCode).toEqual(201);
    // lấy ra body, assert body bao gồm 3 phần tử
    let responseBody = await response.json();
    const createdId = responseBody.todo.id;
    expect(responseBody.success).toBeTruthy();
    expect(createdId).toBeGreaterThan(3); // sao id phai >3 a?
    expect(responseBody.todo.title).toEqual(body.title);

    // 2. Gọi API Get single by id (id đã tạo ở bước 1)
    // --> verify: code = 200, title đúng, id đúng
    response = await request.get(`https://material.playwrightvn.com/api/todo-app/v1/todo.php?id=${createdId}`);

    // Lấy ra status code -> assert status code = 200
    statusCode = response.status();
    expect(statusCode).toEqual(200);
    // lấy ra body, assert body có chứa todo với id và title chính xác
    responseBody = await response.json();

    expect(responseBody.success).toBe(true);
    expect(responseBody.todo.id).toEqual(createdId);
    expect(responseBody.todo.title).toEqual(body.title);
    // .toBe(true) với toBeTruthy dùng như nhau đúng không anh
});