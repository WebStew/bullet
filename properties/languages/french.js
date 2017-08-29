
export default {
	
	fr : {

		id 		: 'fr' 				,
		names 	: {
			en 	: 'French' 			,
			de 	: 'Französisch' 	,
			fr  : 'Français' 		,
			ms 	: 'Perancis' 		,
			tr 	: 'Fransızca' 		,
			vi 	: 'Người Pháp' 		,
			zh 	: '法国'
		} ,

		actions 		: {
			all 		: 'tout' 			,
			calculating : 'Calculateur...' 	,
			load 		: 'Charge' 			,
			loading 	: 'Chargement...' 	,
			refresh 	: 'Rafraîchir' 		,
			return 		: 'Arrière' 		,
			share 		: 'Partager' 		,
			search 		: 'Entrez un terme de recherche' 
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' ,
				symbol 	: 'BTC'
			} ,
			usd 		: {
				name 	: 'Dollars américain' ,
				symbol 	: '$'
			}
		} ,

		errors : {
			500 			: 'Indisponible' ,
			ajax 			: 'Une erreur s\'est produite lors de la récupération des données. Veuillez réessayer.' ,
			default 		: 'Oups: une erreur s\'est produite. Redémarrez l\'application.'
		} ,

		screens : {

			bull 			: {

				404 		: 'On dirait qu\'il y a eu un problème dans certaines données. Nous n\'avons pas pu calculer le dernier Bull - désolé!' ,

				changes 	: {
					hour 	: 'Dernière heure' 	,
					day 	: 'Dernier jour' 	,
					title 	: 'Mouvement' 		,
					week 	: 'La semaine dernière'
				} ,

				notice 		: 'Cette notation est basée sur un calcul des principales monnaies cryptographiques {{placeholder}}.' ,

				market 			: {
					available 	: 'Fourniture disponible' 	,
					cap 		: 'Casquette' 				,
					rank 		: 'Rang' 					,
					title 		: 'Marché' 					,
					total 		: 'Total de l\'offre' 		,
					updated 	: 'Dernière mise à jour' 	,
					volume 		: 'Volume 24 heures'
				} 											,

				rating 			: 'Évaluation Du Toucher' 	,

				title 			: 'Dernier Taureau' 		,

				values 			: {
					title 		: 'Des prix'
				}

			} ,

			currencies 		: {
				title 		:'Haut {{length}} Devises' ,
				headers 	: {
					rank 	: 'Rang' 	,
					change 	: '24H' 	,
					price 	: 'Prix' 	,
					rating 	: 'Évaluation' 
				} ,
				one 		: 'Aucune devise trouvée pour le terme de recherche'
			} ,

			detail 			: {
				title 		: 'Détail'
			} ,

			exchanges 		: {
				title 		: 'Achat'
			} ,

			language 		: {
				title 		: 'Changer de langue'
			} ,

			settings 		: {
				title 		: 'Paramètres'
			} ,

			share 			: {
				title 		: 'Cryptobullographie' ,
				summary 	: 'Trouvez le dernier Bull sur le marché de la cryptocurrence qui fait le plus gros bruit!'
			} ,

			theme 			: {
				title 		: 'Change le thème'
			} ,

			translations 	: {
				title 		: 'Soumettre une traduction' 	,
				action 		: 'Envoyer une traduction' 		,
				body 		: 'Cette application utilise Google Translate pour fournir un support multilingue à nos utilisateurs. Cela pourrait probablement être beaucoup mieux. Si vous parlez une autre langue et souhaitez que cela soit ajouté à la demande, veuillez vous en faire part de la traduction.'
			} ,

			themes 			: {
				title 		: 'Soumettre un thème'	,
				action 		: 'Envoyer un thème' 	,
				body 		: 'Si vous souhaitez soumettre un thème, veuillez envoyer votre palette de couleurs et votre nom de thème et nous l\'ajouterons à la demande.'
			} ,

			donate 		: {
				action 		: 'Copier {{placeholder}} adresse' ,
				title 		: 'Faire un don' ,
				body 		: 'Aidez cette application à rester libre et à développer en faisant un don. En appuyant sur les boutons ci-dessous, vous copiez l\'adresse du porte-monnaie dans votre presse-papiers.' ,
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
