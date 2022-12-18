

export default function handler(req, res) {

const fs = require('fs');
fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
  if (err) {
    res.status(500).json({error: "Internal server error"})
    return;
  }
  console.log(req.query.slug);
  res.status(200).json(JSON.parse(data));
});
}
  