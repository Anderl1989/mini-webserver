import express from 'express';
import childProcess from 'child_process';

const PORT = 3000;

let start = 'xdg-open';
if (process.platform === 'darwin') start = 'open';
if (process.platform === 'win32') start = 'start';

const app = express();

// static file hosting
app.use(express.static('public'));

app.listen(PORT, () => {
    childProcess.exec(`${start} http://localhost:${PORT}/`);
});
