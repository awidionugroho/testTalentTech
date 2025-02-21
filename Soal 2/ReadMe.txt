1. Masuk ke Folder "kafka-nodejs-app"
2. Pada file ".env" sesuakan BROKER ke alamat Kafka anda
3. Jalankan Producer dengan cara :
	3.0	buka PowerShell di path project ini
	3.1 	ketik node .\producer.js
	3.2 	isi nilai Key
	3.3	ini nikai Value
	3.4 	ketik exit untuk mengakhiri procedure
4. Jalankan Consumer dengan cara :
	4.0 	buka PowerShell di path project ini
	4.1 	ketik node .\consumer.js

Hasil yang diharapkan adalah pada Consumer akan mendapatkan nilai inputan Key dan Value dari Producer
