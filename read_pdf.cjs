const fs = require('fs');
const pdf = require('pdf-parse');

const fileNames = ['TMD - Info y servicios.pdf', 'SERVICIOS.pdf'];

async function readPdfs() {
    for (const name of fileNames) {
        const path = `C:\\Users\\giuli\\Downloads\\${name}`;
        if (fs.existsSync(path)) {
            console.log(`\n\n--- CONTENTS OF ${name} ---\n`);
            let dataBuffer = fs.readFileSync(path);
            try {
                let data = await pdf(dataBuffer);
                console.log(data.text);
            } catch (err) {
                console.error('Error reading PDF:', err);
            }
        } else {
            console.log(`\n--- NOT FOUND: ${name} ---\n`);
        }
    }
}
readPdfs();
