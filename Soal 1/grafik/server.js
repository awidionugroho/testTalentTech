const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

//dummy data dari BPS
const data = [
  { provinsi: "Aceh", value: 5554.8 },
  { provinsi: "Sumatera Utara", value: 15588.5 },
  { provinsi: "Sumatera Barat", value: 5836.2 },
  { provinsi: "Riau", value: 6728.1 },
  { provinsi: "Kep Riau", value: 2183.3 },
  { provinsi: "Jambi", value: 3724.3 },
  { provinsi: "Sumatera Selatan", value: 8837.3 },
  { provinsi: "Sumatera Barat", value: 5836.2 },
  { provinsi: "Bengkulu", value: 2112.2 },
  { provinsi: "Lampung", value: 9419.6 },
  { provinsi: "DKI Jakarta", value: 10684.9 },
  { provinsi: "Jawa Barat", value: 50345.2 },
  { provinsi: "Banten", value: 12431.4 },
  { provinsi: "Jawa Tengah", value: 37892.3 },
  { provinsi: "DI Yogyakarta", value: 3759.5 },
  { provinsi: "Jawa Timur", value: 41814.5 },
];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
