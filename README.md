# Zefner
A knight that will attack and stress load your HTTP's endpoint.

## Introduction

Zefner allows you to attack and test your HTTP's
endpoint performance using multiple HTTP request sent
to the endpoint.

## Installation

```
npm install zefner
```

## Launching Simple Attack

To attack an endpoint, you can use the CLI interface
or the API provided by Zefner directly.

```
./node_modules/.bin/zefner get https://google.com -n 1000
```

This will launch 1000 HTTP GET request to the endpoint
and give you details about the attack as below:

```
1 GET Hit https://google.com - 49ms : 1MB
2 GET Hit https://google.com - 11ms : 1MB
...
1000 GET Hit https://google.com - 132ms : 1MB
 
Highest Damage Hit: 92 GET Hit https://google.com - 1320ms : 1MB
Lowest Damage Hit: 91 GET Hit https://google.com - 5ms : 1MB
Average Damage: 200ms
```

The time needed for the server to response to our request
is called **damage**.

The highest damage hit is
when the server took the most time to response.

The lowest damage hit is when the server took the less
time to response.

The average damage is the average
response time of the server.

### Using API

```js
const Zefner = require('zefner/dist/zefner/Zefner').default;
const AxiosSword = require('zefner/dist/weapon/AxiosSword').default;
const AxiosLogCommander = require('zefner/dist/commander/AxiosLogCommander').default;

new Zefner()
    .use(new AxiosSword())
    .reportTo(new AxiosLogCommander())
    .hit({
        method: 'GET',
        endpoint: 'http://google.com'
    })
    .times(5)
    .charge();
```

## Contribution

You can contribute to Zefner development by creating
weapons for him. Currently, the only weapon Zefner
can use is Sword of Axios (sending HTTP request using Axios).

Refactoring and performance improvement is also welcome.

## About

Zefner is the name of Avagant knight, **Zefner Keth**.
He was the guardian of Titania until he decided to join
the royal army of Avaga.