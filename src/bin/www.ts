#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app'
import debug from "debug";
import http = require("http");
import cluster, { Worker } from "cluster";
import os from 'os';

type WorkerSet = {
    [key: number]: Worker
};

const workers: WorkerSet = {};

const numCPUs = os.cpus().length;
if (cluster.isPrimary) {
    for (let i = 0; i < numCPUs; ++i) {
        workers[i] = cluster.fork();

        ((j) => {
            workers[j].on('listening', (msg) => {
                console.log(workers[j].process.pid);
                console.dir(msg);
            });
        })(i);
    }
}
else {
    /**
     * Get port from environment and store in Express.
     */

    const port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);

    /**
     * Create HTTP server.
     */

    const server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */

    server.listen(port, () => {
        console.log(`I am listening on ${port} from ${process.pid}`);
    });
    server.on('error', onError);
    server.on('listening', onListening);

    /**
     * Event listener for HTTP server "error" event.
     */

    function onError(error: any) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */

    function onListening() {
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr!.port;
        debug('Listening on ' + bind);
    }

}



/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
    const tempPort: number = parseInt(val, 10);

    if (isNaN(tempPort)) {
        // named pipe
        return val;
    }

    if (tempPort >= 0) {
        // port number
        return tempPort;
    }

    return false;
}
