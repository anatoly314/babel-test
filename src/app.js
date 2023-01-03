import { dirname } from 'path';
import { fileURLToPath } from 'url';

const start = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const module = await import(__dirname + "/module.js");
    const initialized = new module.default();
    const description = await initialized.getDescription();
    console.log(description);
}

await start();
