Aplikasi menggunakan DB Postgree SQl, 

1. Buka Power shell dan arahkan ke project simple_crud_expresjs-master
2. Install libray dengan cara ketik di Power Shell : npm install express sequelize pg pg-hstore dotenv cors
3. Buka file .env dan terdapat konfigurasi database, silahkan sesuaikan dengan konfigurasi Data Base  Postgree anda
4. Buka file .env dan terdapat key PORT, sesuaikan nilainya 3000
5. Buka file package.json yang terdapat di 'src/client/' , sesuaikan untuk nilai proxy-nya = "proxy": "http://localhost:3000". 
	Pastikan nilao port-nya sama seperti yang di file .env
6. Jalankan aplikasi melalui Power Shell dengan ketik "node .\server.js"
7. Buka aplikasi melalui browser di alamat "http://localhost:3000"


