import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Resume");
    }

    async getHtml() {
        return `
            <h1>This the Resume page!</h1>
        `;
    }
}