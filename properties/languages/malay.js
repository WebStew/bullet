
export default {
	
	ms : {

		id 				: 'ms' 				,
		name 			: 'Malay' 			,

		actions 		: {
			all 		: 'Semua' 			,
			calculating : 'Menghitung...' 	,
			load 		: '' 				,
			loading 	: 'Memuatkan...' 	,
			refresh 	: 'Menyegarkan' 	,
			return 		: 'Belakang' 		,
			search 		: 'Sila masukkan istilah carian' 
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

				title 			: 'Yang Terbaru Lembu Jantan' ,

				values 			: {
					title 		: 'Harga'
				}

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
				title 		: 'Terperinci'
			} ,

			exchanges 		: {
				title 		: 'Beli Crypto'
			} ,

			language 		: {
				title 		: 'Tukar Bahasa'
			} ,

			settings 		: {
				title 		: 'Tetapan'
			} ,

			theme 			: {
				title 		: 'Tukar Tema'
			}

		}
	}
};
