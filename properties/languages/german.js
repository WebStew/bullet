
export default {
	
	de : {

		id 		: 'de' 			,
		names  	: {
			en 	: 'German' 		,
			de 	: 'Deutsche' 	,
			fr 	: 'Allemand' 	,
			ms 	: 'Jerman' 		,
			tr 	: 'Almanca' 	,
			vi 	: 'tiếng Đức' 	,
			zh 	: '德语'
		} ,

		actions 		: {
			all 		: 'alle' 			,
			calculating : 'Berechnen...' 	,
			load 		: 'Belastung' 		,
			loading 	: 'Laden...' 		,
			refresh 	: 'Erneuern' 		,
			return 		: 'Zurück' 			,
			share 		: 'Aktie' 			,
			search 		: 'Bitte geben Sie einen Suchbegriff ein' 
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
			} ,
			usd 		: {
				name 	: 'US Dollar' 	,
				symbol 	: '$'
			}
		} ,

		errors : {
			500 			: 'Nicht verfügbar' ,
			ajax 			: 'Es gab einen Fehler beim Abrufen der Daten. Bitte versuche es erneut.' ,
			default 		: 'Oops - ein Fehler ist aufgetreten. Bitte starten Sie die Anwendung neu.'
		} ,

		screens : {

			bull 			: {

				404 		: 'Sieht aus wie in einem Problem in einigen der Daten. Wir konnten den letzten Bull - sorry nicht berechnen!' ,

				changes 	: {
					hour 	: 'Letzte Stunde' 	,
					day 	: 'Letzter Tag' 	,
					title 	: 'Bewegung' 		,
					week 	: 'Letzte Woche'
				} ,

				notice 		: 'Diese Bewertung basiert auf einer Berechnung von den Top-{{placeholder}} Krypto-Währungen.' ,

				market 			: {
					available 	: 'Versorgung verfügbar' 	,
					cap 		: 'Kapazität' 				,
					rank 		: 'Rang' 					,
					title 		: 'Markt' 					,
					total 		: 'Versorgung insgesamt' 	,
					updated 	: 'Letzte Aktualisierung' 	,
					volume 		: '24 Stunden Volumen'
				} 											,

				rating 			: 'Bull Bewertung' 			,

				title 			: 'Neueste Bull' 			,

				values 			: {
					title 		: 'Preise'
				}

			} ,

			currencies 		: {
				title 		:'Top {{length}} Währungen' ,
				headers 	: {
					rank 	: 'Rang' 	,
					change 	: '24H' 	,
					price 	: 'Preis' 	,
					rating 	: 'Bewertung' 
				} ,
				none 		: 'eine Währungen für Suchbegriff gefunden'
			} ,

			detail 			: {
				title 		: 'Detail'
			} ,

			exchanges 		: {
				title 		: 'Kauf'
			} ,

			language 		: {
				title 		: 'Sprache ändern'
			} ,

			settings 		: {
				title 		: 'Einstellungen'
			} ,

			share 			: {
				title 		: 'Cryptobullography' ,
				summary 	: 'Finde den neuesten Stier auf dem Krypto-Markt, der den größten Lärm macht!'
			} ,

			theme 			: {
				title 		: 'Thema ändern'
			} ,

			translations 	: {
				title 		: 'Übersetzung abgeben' ,
				action 		: 'Senden Sie eine Übersetzung' ,
				body 		: 'Diese Anwendung verwendet Google Translate, um mehrsprachige Unterstützung für unsere Nutzer zu bieten. Es könnte wohl viel besser sein. Wenn Sie eine andere Sprache sprechen und möchten, dass sie der Bewerbung hinzugefügt wurde, helfen Sie bitte, indem Sie eine Übersetzung einreichen.'
			} ,

			themes 			: {
				title 		: 'Thema abgeben',
				action 		: 'Senden Sie ein Thema' ,
				body 		: 'Wenn Sie ein Thema einreichen möchten, senden Sie bitte Ihre Farbpalette und den Themennamen und wir werden es der Anwendung hinzufügen.'
			} ,

			donate 		: {
				action 		: 'Kopiere {{placeholder}} Adresse' ,
				title 		: 'Spenden' ,
				body 		: 'Bitte helfen Sie dieser Anwendung bleiben Sie kostenlos und Weiterentwicklung durch Spenden. Durch Drücken der folgenden Schaltflächen wird die Brieftasche in die Zwischenablage kopiert.' ,
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
