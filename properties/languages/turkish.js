
export default {
	
	tr : {

		id 		: 'tr' 				,
		names 	: {
			en 	: 'Turkish' 		,
			de 	: 'Türkisch' 		,
			fr 	: 'Turc' 			,
			ms 	: 'Turki' 			,
			tr 	: 'Türk' 			,
			vi 	: 'Thổ' 			,
			zh 	: '土耳其'
		} ,

		actions 		: {
			all 		: 'herşey' 							,
			add 		: 'Eklemek' 						,
			calculating : 'Hesaplama...' 					,
			cancel 		: 'İptal etmek' 					,
			load 		: 'Yük' 							,
			loading 	: 'Yükleniyor...' 					,
			refresh 	: 'Yenile' 							,
			return 		: 'Geri' 							,
			remove 		: 'Kaldır' 							,
			share 		: 'Pay' 							,
			search 		: 'Lütfen bir arama terimi girin' 	,
			update 		: 'Güncelleştirme'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
			} ,
			usd 		: {
				name 	: 'Amerikan Doları' 	,
				symbol 	: '$'
			}
		} ,

		errors : {
			500 			: 'Kullanım dışı' ,
			ajax 			: 'Verilerin alınmasında bir hata oluştu. Lütfen tekrar deneyin.' ,
			default 		: 'Hata! Bir hata oluştu. Lütfen uygulamayı yeniden başlatın.'
		} ,

		screens : {

			bull 			: {

				404 		: 'Bazı verilerin birinde sorun yaşanıyor gibi görünüyor. En son Bull\'u hesaplayamadık - özür dilerim!' ,

				changes 	: {
					hour 	: 'Son saat' 	,
					day 	: 'Son gün' 	,
					title 	: 'Hareket' 	,
					week 	: 'Geçen hafta'
				} ,

				notice 		: 'Bu derecelendirme, üst {{placeholder}} kripto para biriminden bir hesaplamaya dayanır.' ,

				market 			: {
					available 	: 'Tedarik Mevcut.' 	,
					cap 		: 'Kapak' 				,
					rank 		: 'Rütbe' 				,
					title 		: 'Pazar' 				,
					total 		: 'Tedarik Toplam' 		,
					updated 	: 'Son Güncelleme' 		,
					volume 		: '24 Saatlik Hacim'
				} 										,

				rating 			: 'Boğa Değerlendirme' 		,

				title 			: 'Son Boğa' 	,

				values 			: {
					title 		: 'Fiyatlar'
				}

			} ,

			currencies 		: {
				title 		:'En {{length}} Para Birimleri' ,
				headers 	: {
					rank 	: 'Rütbe' 	,
					change 	: '24H' 	,
					price 	: 'Fiyat' 	,
					rating 	: 'Değerlendirme' 
				} ,
				none 		: 'Arama terimi için para birimi bulunamadı'
			} ,
			
			converter 		: {
				title 		: 'Dönüştürücü' ,
				placeholder : 'Tutar'
			} ,

			detail 			: {
				title 		: 'Detay' 					,
				add 		: 'Portföyüne ekle' 		,
				update 		: 'Portföyü güncelle'
			} ,

			exchanges 		: {
				title 		: 'Satın alma'
			} ,

			language 		: {
				title 		: 'Dili değiştir'
			} ,
			
			portfolio 		: {
				404 		: 'Portföyünüze para birimi eklemediniz. Lütfen bunları para birimi detay ekranından ekleyin ve bozuk para grubunuz için tahmini bir değer önerebiliriz.' ,
				description : 'Tüm madeni paralarınızı ve bunların birleşik değerlerini takip etmek için portföy listesine {{placeholder}} ekleyin.' ,
				headers 	: {
					amount 	: 'Tutar' 	,
					name 	: 'Isim' 	,
					price 	: 'Fiyat' 	,
					total 	: 'Toplam'
				} ,
				title 		: 'Portföy'
			} ,

			settings 		: {
				title 		: 'Ayarlar'
			} ,

			share 			: {
				title 		: 'Cryptobullography' ,
				summary 	: 'En büyük gürültüyü veren kriptokrasi pazarında en son boğayı bulun!'
			} ,

			theme 			: {
				title 		: 'Temayı değiştir'
			} ,

			translations 	: {
				title 		: 'Çeviriyi gönderin' ,
				action 		: 'Bir çeviri gönderin' ,
				body 		: 'Bu uygulama, kullanıcılarımız için çok dilde destek sağlamak için Google Çeviri\'yi kullanmaktadır. Muhtemelen daha iyi olabilir. Başka bir dil konuşursanız ve uygulamaya eklemesini isterseniz lütfen bir çeviri gönderin.'
			} ,

			themes 			: {
				title 		: 'Tema gönderin',
				action 		: 'Bir tema gönder' ,
				body 		: 'Bir tema göndermek isterseniz lütfen renk paletinize ve temanızın adını gönderin ve onu uygulamaya ekleyin.'
			} ,

			donate 		: {
				action 		: '{{Placeholder}} adresini kopyala' ,
				title 		: 'Bağışta bulunmak' ,
				body 		: 'Lütfen bu uygulamanın ücretsiz olarak kalmasına ve bağış yaparak daha da geliştirilmesine yardımcı olun. Aşağıdaki düğmelere basarak M-cüzdan adresini panonuza kopyalayabilirsiniz.' ,
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
