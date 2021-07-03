import { ProgramFormPage } from "./programFormPage";

export class HomePage {
    constructor() {
    }

    get createProgramButton() {
        return element(by.id("createProgramButton"));
    }


    addWorkout() {
        this.createProgramButton.tap();
        return new ProgramFormPage();
    }

    
}