import { Page, expect } from '@playwright/test';

export class DashboardPage {
    page: Page;
    xpathDashboard: string;

    constructor(page: Page) {
        this.page = page;
        this.xpathDashboard = "//h1[text()='Dashboard']";
    }
}