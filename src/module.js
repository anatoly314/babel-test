import {test} from "./decorators.js";

export default class MyModule {
    @test(true)
    async getDescription () {
        return "MyModule Test12";
    }
}
