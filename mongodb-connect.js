// example for conneting mongodb using mongoose

// first, instal mongoose (npm i --save mongoose)
const mongoose = require('mongoose');

// for using same Promises as our environment (ES6 like .race the first resolved)
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  console.log(`Connection Established - ${new Date().toString()}`);
});

mongoose.connection.on('reconnected', () => {
  console.log(`Connection Reestablished - ${new Date().toString()}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Connection Disconnected - ${new Date().toString()}`);
});

mongoose.connection.on('close', () => {
  console.log(`Connection Closed - ${new Date().toString()}`);
});

mongoose.connection.on('error', error => {
  console.error(`ERROR: ${error}`);
});

const connect = async () => {
    try {
        await mongoose.connect('mongodb://example-user:YXqrC4YXkDUH8gH@iiddoo-shard-00-00-0d0rd.gcp.mongodb.net:27017,iiddoo-shard-00-01-0d0rd.gcp.mongodb.net:27017,iiddoo-shard-00-02-0d0rd.gcp.mongodb.net:27017/test?ssl=true&replicaSet=iiddoo-shard-0&authSource=admin&retryWrites=true', {
            autoReconnect: true,
            reconnectTries: 1000000,
            reconnectInterval: 3000,
            useNewUrlParser: true
        });
        return true;
    } catch (error) {
        throw new Error(error);
    }
};

const disconnect = async () => {
    try {
        await mongoose.connection.close();
        return true;
    } catch (error) {
        throw new Error(error);
    }
};

// connect().catch(error => console.error(error));

module.exports = { connect, disconnect };