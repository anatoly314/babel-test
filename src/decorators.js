export function test(test){
    return function (value, { kind, name }) {
        if (kind === "method" || kind === "getter" || kind === "setter") {
            return function (...args) {
                console.log(test);
                console.log(`starting ${name} with arguments ${args.join(", ")}`);
                const ret = value.call(this, ...args);
                console.log(`ending ${name}`);
                return ret;
            };
        }
    }
}
