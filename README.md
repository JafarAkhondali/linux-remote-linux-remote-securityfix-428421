# linux-remote
A Webside Remote Desktop of Linux.

This project is a guide for two major projects:<br>
[**client**](https://github.com/linux-remote/client) 1.2.5<br>
[**server**](https://github.com/linux-remote/server) 1.6.1
## Requested
- Linux.
- Nodejs.
- SSH server on the Linux.(just use it for login)
- Latest Chrome browsers.
## Online Demo
https://demo.linux-remote.org
<br>
username: **guest** <br>
password: **123**
## Install

**Step 1:** `cd /opt`

___/opt___ dir only writable for root. so you should use: `sudo`

<br>

**Step 2:** `sudo git clone --depth 1 https://github.com/linux-remote/linux-remote.git`<br>
or:<br>
`sudo wget https://github.com/linux-remote/linux-remote/archive/master.zip -O "linux-remote.zip" && sudo unzip -q linux-remote.zip && sudo mv linux-remote-master linux-remote && sudo rm linux-remote.zip`

If you don't want use **root** to start up. You should use: `sudo chown -R $(whoami) linux-remote`

<br>

**Step 3:** `cd ./linux-remote`

<br>

**Step 4:** `npm install`

<br>

**Step 5:** `node init`

It will generate config.js, and set permission. For The Security, The website can only start up by yourself or root.



**Step 6:** Setting `config.js`:
```js
module.exports = {
  port: 3001, // Website listen port. default: 3001

  sshPort: 22, // SSH server listen port, default: 22

  ssl : null, // http model, Unsafe,  default: null.
  /*
  ssl: {  // Or provide an Object {cert, key} to enter https model: 
    cert: '/somedir/cert.pem',
    key: '/somedir/privkey.pem'
  },
  */
  
  sessionSecret: 'some random str' // Use for express-session. generated by init. You don't need modify it.

};
```
## Start
`node index.js`




You also can use some process manager like `pm2`:

`pm2 start index.js -o /dev/null -e /tmp/linux-remote-err.log --name linux-remote`




## Update
`cd /opt/linux-remote && npm update`

## Donate

| Paypal | AliPay | WechatPay |
| ------------- | ------------- | ------------- |
| <a href="https://www.paypal.me/hezedu" target="_blank"><img src="https://www.paypalobjects.com/webstatic/paypalme/images/pp_logo_small.png" width="150"></a> | ![image](https://github.com/hezedu/SomethingBoring/blob/master/pay/alipay.png?raw=true&v=2) | ![image](https://github.com/hezedu/SomethingBoring/blob/master/pay/wxpay.png?raw=true&v=2) |


