import {test} from "./decorators.js";

export default class MyModule {
    @test(true)
    getDescription () {
        return "MyModule Test12";
    }
}
