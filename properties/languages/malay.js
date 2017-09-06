
export default {
	
	ms : {

		id 		: 'ms' 			,
		names 	: {
			en 	: 'Malay' 		,
			de 	: 'Malaiisch' 	,
			fr 	: 'Malais' 		,
			ms 	: 'Melayu' 		,
			tr 	: 'Malaya' 		,
			vi 	: 'Người Malay' ,
			zh 	: '马来语'
		} ,

		actions 		: {
			all 		: 'Semua' 							,
			add 		: 'Tambah' 							,
			calculating : 'Menghitung...' 					,
			cancel 		: 'Batalkan' 						,
			load 		: 'Beban' 							,
			loading 	: 'Memuatkan...' 					,
			refresh 	: 'Menyegarkan' 					,
			return 		: 'Belakang' 						,
			remove 		: 'Keluarkan' 						,
			share 		: 'Berkongsi' 						,
			search 		: 'Sila masukkan istilah carian' 	,
			update 		: 'Kemas kini'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
			} ,
			usd 		: {
				name 	: 'Dolar AS' 	,
				symbol 	: '$'
			}
		} ,

		errors : {
			500 			: 'Tidak ada' 														,
			ajax 			: 'Terdapat ralat untuk mendapatkan semula data. Sila cuba lagi.' 	,
			default 		: 'Oops - ralat telah berlaku. Sila mulakan semula aplikasi.'
		} ,

		screens : {

			bull 			: {

				404 		: 'Sepertinya terdapat masalah dalam beberapa data. Kami tidak dapat mengira Bull terbaru - maaf!' ,

				changes 	: {
					hour 	: 'Jam terakhir' 	,
					day 	: 'Hari terakhir' 	,
					title 	: 'Pergerakan' 		,
					week 	: 'Minggu lepas'
				} ,

				notice 		: 'Enarafan ini didasarkan pada pengiraan dari {{placeholder}} mata wang utama crypto.' ,

				market 			: {
					available 	: 'Bekalan disediakan' 		,
					cap 		: 'Kapasiti' 				,
					rank 		: 'Kedudukan' 				,
					title 		: 'Pasaran' 				,
					total 		: 'Bekalan Jumlah' 			,
					updated 	: 'Terakhir Dikemaskini' 	,
					volume 		: '24 Jam Jilid'
				} ,

				rating 			: 'Lembu Jantan Penilaian' 	,

				title 			: 'Lembu jantan' ,

				values 			: {
					title 		: 'Harga'
				}

			} ,
			
			converter 		: {
				title 		: 'Penukar' ,
				placeholder : 'Jumlah'
			} ,

			currencies 		: {
				title 		:'{{length}} Mata Wang Teratas' ,
				headers 	: {
					rank 	: 'Kedudukan' 	,
					change 	: '24 jam' 		,
					price 	: 'Harga' 		,
					rating 	: 'Penilaian' 
				} ,
				none 		: 'Tiada mata wang yang dijumpai untuk istilah carian'
			} ,

			detail 			: {
				title 		: 'Terperinci' 				,
				add 		: 'Tambah kepada portfolio' ,
				update 		: 'Kemas kini portfolio'
			} ,

			exchanges 		: {
				title 		: 'Pembelian'
			} ,

			language 		: {
				title 		: 'Tukar bahasa'
			} ,

			portfolio 		: {
				404 		: 'Anda belum menambahkan sebarang mata wang ke portfolio anda. Sila tambahkan mereka dari skrin terperinci mata wang dan kami akan dapat menasihati anda tentang nilai anggaran untuk pengumpulan duit syiling anda' ,
				description : 'Tambah {{placeholder}} ke senarai portfolio anda untuk menyimpan trek semua syiling anda dan nilai gabungan mereka.' ,
				headers 	: {
					amount 	: 'Jumlah' ,
					name 	: 'Nama' ,
					price 	: 'Harga' ,
					total 	: 'Jumlah'
				} ,
				title 		: 'Portfolio'
			} ,

			settings 		: {
				title 		: 'Tetapan'
			} ,

			share 			: {
				title 		: 'Cryptobullography' ,
				summary 	: 'Cari lembu terbaru di pasaran cryptocurrency yang membuat bunyi terbesar!'
			} ,

			theme 			: {
				title 		: 'Tukar tema'
			} ,

			translations 	: {
				title 		: 'Terjemahan' ,
				action 		: 'Hantar terjemahan' ,
				body 		: 'Aplikasi ini menggunakan Google Translate untuk memberikan sokongan berbilang bahasa kepada pengguna kami. Ini mungkin lebih baik. Sekiranya anda bercakap bahasa lain dan ingin menambahkannya kepada aplikasi, sila membantu dengan menyerahkan terjemahan.'
			} ,

			themes 			: {
				title 		: 'Hantar tema',
				action 		: 'Hantar tema' ,
				body 		: 'Jika anda ingin menyerahkan tema sila hantar melalui palet warna dan nama tema anda dan kami akan menambahkannya ke aplikasi.'
			} ,

			donate 		: {
				action 		: 'Salin alamat {{placeholder}}' ,
				title 		: 'Menderma' ,
				body 		: 'Tolong bantu aplikasi ini supaya iklan percuma dan pembangunan selanjutnya dengan menderma. Menekan butang di bawah akan menyalin alamat dompet ke clipboard anda.' ,
				wallets 	: [
					{
						name 	: 'Ethereum' ,
						id 		: '0x790b032d497131296eae4250a4840785dfcfd83e'
					} ,
					{
						name 	: 'BitCoin' ,
						id 		: '1MGkY3ZtvPVZUrg68eMdeKcjAv5FwD7hhm'
					} ,
					{
						name 	: 'LiteCoin' ,
						id 		: 'Li5YUuaso9Dzmf1ZB9qrh9QBfy9TWeLTdJ'
					} ,
					{
						name 	: 'Groestlcoin' ,
						id 		: 'FqmnNi5CVUi3wPBhzCZkTWRyE666j6oYat'
					} ,
					{
						name 	: 'NEO' ,
						id 		: 'ARr1SNboRfbHEjnpnrdVkpApz9cNknS7hL'
					}
				]
			}
		}
	}
};
