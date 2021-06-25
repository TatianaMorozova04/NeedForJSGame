const { fileURLToPath } = require('url');

const url = require('url').format({
    protocol: 'file',
    slashes: true,
    pathname: require('path').join(__dirname, 'index.html')
});

const { app, BrowserWindow, BrowserView } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 500,
        height: 850
    });

    win.loadURL(url);

    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow);


//for linux and macOS
app.on('window-all-closed', function () {
    app.quit();
});

//electron-packager .
//команда для создния файла игры