import { APIRequestContext, expect } from "@playwright/test";

export class TodoApi {
    request: APIRequestContext;
    baseURL: string; // https://material.playwrightvn.com/api/todo-app/v1

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    // Expect có nên để trong POM hay không?
    // - Tuỳ vào trường hợp
    async getTodos() {
        // Gọi API get todos
        const response = await this.request.get(`${this.baseURL}/todos.php`);

        // Lấy ra status code -> assert status code = 200
        const statusCode = response.status();
        expect(statusCode).toEqual(200);

        return response;
    }

    async getTodo(id: number) {
        const response = await this.request.get(`${this.baseURL}/todo.php?id=${id}`);

        // Lấy ra status code -> assert status code = 200
        const statusCode = response.status();
        expect(statusCode).toEqual(200);

        return response;
    }
}
