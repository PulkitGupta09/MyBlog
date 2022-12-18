

export default async function handler(req, res) {
    const fs = require('fs');
    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allblogs = [];
    // res.status(200).json(data);
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item);
        myfile = await fs.promises.readFile("blogdata/" + item, 'utf8')
        // console.log(myfile);
        allblogs.push(JSON.parse(myfile));
    }
    res.status(200).json(allblogs);
}
  