import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
            <h1>This the Projects page!</h1>
        `;
    }
}