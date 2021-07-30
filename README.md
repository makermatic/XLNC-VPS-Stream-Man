# XLNC VPS Stream Man 1.2.2

## Another Scuffed Stream Manager by maker
XLNC Stream Man is built with NodeCG 1.7.4, a Node.js library designed to make browser based broadcast graphics and make production accessible without any downloads needed. 
The actual dashboard and graphics code is in the `bundles/xlnc_bundle` folder, but all the files here are required to run everything on a server.

## Setting up for the First Time

 1. If you haven't already, deploy a server. OS can be anything, but I reccomend using Ubunto or any Linux/Unix-like OS. NGINX/Apache is also handy for auto-redeploying.
 2. Install Node.js
		   1. In the terminal, type in `sudo apt install nodejs`
		   2. Once installed, double check the installed version using `node -v` (optional)
		   3. Install NPM (very important for later) `sudo apt install npm`
		   4. Double check the installed version using `npm -v`
3. Clone the repo using git clone 
4. Head into the repo folder using `cd XLNC-VPS-Stream-Man`
5. Type in `npm install production --save` (servers only)
6. Run the server
7. Copy each graphic link into their respective browser sources

## Running the Server
1. If you haven't yet, head into the repo folder using `cd XLNC VPS Stream Man`
2. Type in `node index.js` to run the server, the manager will start running
3. Make a browser dock in OBS and enter the server's IP address followed by `:9090`


## FAQs
- Can I run this locally? 
	- Of course! If you don't have Node.js installed, opening `run.bat` should automatically open it in porta-mode
- Can I change the port its on? 
	- Yes, but it's reccomended it only you plan on running multiple instances on the same server  (Eg: run one instance on port 9090 and another on port 8080).
	- To do this: navigate to `cfg/nodecg.json` and change the port number to whatever you please
- Is multi-user support per instance coming?
    - Yes, I'm working on it. BUT, given how layout links will be token-based when sign in comes up, it might be working already, I have no idea.
