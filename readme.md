# Get discord Username(s) from the discord id

Hello, this repository hosts a script that can get usernames of a given dicord id or list of a given discord id's. You can clone or fork this repository and start making changes if you want.

## Requirements:
* Node.JS (Recommended latest LTS version of NodeJS, install it from [here](https://nodejs.org/en/))

## Why Node.Js?
* I really Love Python but for this use case pyhon didn't work due to discord api uses cloudflare and cloudflare blocks HTTP 1/1 which is the protocol that requests uses, when you hit the api you will get a Access Denied error.

## How to run this Script?
If you already have created a Discord Bot Application, please skip to `step 3`.
1. Go [this site](https://discord.com/developers/applications) and click on **New Application**, and just name it whatever you want.
2. Now, go back to your **Discord Developers Portal** and go to the menu **Bot**. Here click on *Reset Token* & copy this token.
3. Open this project in your IDE, and write `npm i` in the Console/Shell and hit enter. For VS Code users, hit `Ctrl + J` to open up the terminal and then run this command. This will install all the required packages!
4. Go to the file *index.js* and replace the token with `YOUR_BOT_TOKEN`. The final one should look like this,
`const token = ewtgwsry.784ny03574yvn952784yup092y3u41.4ttw4ty4wy9`
5. Go to your console, write `node .` and hit enter. If you've done everything correctly, the script should be start running!

## Note:
* place all the ids in which you need the usernames in `ids.txt` , each id should be seprated by a comma(,). The final one should look like this,
`12345678678,356362536523,2343434343,343434341313122`
* `username.txt` is the file in which all the extracted usernames will be stored , each username will be seprated by a comma(,). The final one should look like this,
`sacsbrainz#3627,test#7738,noob#2771`
