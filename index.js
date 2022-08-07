import fs from "fs";
import axios from "axios";
const TIMEOUT = 2000;

// You might want to store this in an environment variable or something
const token =
  "YOUR_BOT_TOKEN";

const getUsernames = () => {
  if (!fs.existsSync("username.txt")) {
    //create new file if not exist
    fs.closeSync(fs.openSync("username.txt", "w"));
  }
  fs.readFile("ids.txt", "utf8", function (err, data) {
    if (err) throw err;
    data.split(",").forEach((ids, index) => {
      const postion = index + 1;
      const currentTimeout = TIMEOUT * postion;
      setTimeout(() => {
        const config = {
          method: "get",
          url: `https://discord.com/api/users/${ids}`,
          headers: {
            Authorization: `Bot ${token}`,
          },
        };

        axios(config)
          .then((response) => {
            const res =
              response.data.username.concat("#") +
              response.data.discriminator +
              ", " +
              "\n";
            fs.appendFile("username.txt", res, (err) => {
              if (err) {
                console.log(err);
              }
            });
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, currentTimeout);
    });
  });
};

getUsernames();
