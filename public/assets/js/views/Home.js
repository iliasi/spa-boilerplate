import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome to my page!</h1>
            <a href="/projects" data-link>View my Projects </a>
        `;
    }
}