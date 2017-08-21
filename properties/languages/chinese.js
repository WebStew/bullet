
export default {
	
	zh : {

		id 				: 'zh' 				,
		names 			: {
			en 			: 'Chinese' 		,
			de 			: 'Chinesisch' 		,
			ms 			: 'Cina' 			,
			zh 			: '中文'
		} ,

		actions 		: {
			all 		: '所有' 				,
			calculating : '计算...' 			,
			load 		: '加载' 				,
			loading 	: '载入中...' 			,
			refresh 	: '刷新' 				,
			return 		: '背部' 				,
			search 		: '请输入一个搜索词' 
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: '比特币' 	,
				symbol 	: 'BTC'
			} ,
			usd 		: {
				name 	: '美元' 	,
				symbol 	: '$'
			}
		} ,

		errors : {
			500 			: '不可用' ,
			ajax 			: '检索数据时出错。请再试一次。' ,
			default 		: '糟糕 - 发生错误. 请重新启动应用程序。'
		} ,

		screens : {

			bull 			: {

				404 		: '看起来在某些数据中出现问题. 我们一直无法计算最新的牛逼' ,

				changes 	: {
					hour 	: '上一个小时' 	,
					day 	: '最后一天' 	,
					title 	: '运动' 		,
					week 	: '上个星期'
				} ,

				notice 		: '此评级是根据前{{placeholder}}名加密货币计算的。' ,

				market 			: {
					available 	: '供应可用' 	,
					cap 		: '市值' 				,
					rank 		: '秩' 				,
					title 		: '市场' 				,
					total 		: '供应总量' 		,
					updated 	: '最近更新时间' 		,
					volume 		: '24小时音量'
				} 										,

				rating 			: '公牛评级' 		,

				title 			: '最新公牛' 	,

				values 			: {
					title 		: '价格'
				}

			} ,

			currencies 		: {
				title 		:'前{{length}}名货币' ,
				headers 	: {
					rank 	: '秩' 	,
					change 	: '24小时' 	,
					price 	: '价钱' 	,
					rating 	: '评分' 
				} ,
				none 		: '找不到搜索字词的货币'
			} ,

			detail 			: {
				title 		: '详情'
			} ,

			exchanges 		: {
				title 		: '购买加密'
			} ,

			language 		: {
				title 		: '改变语言'
			} ,

			settings 		: {
				title 		: '设置'
			} ,

			theme 			: {
				title 		: '改变主题'
			} ,

			translations 	: {
				title 		: '提交翻译' ,
				action 		: '发送翻译' ,
				body 		: '此应用程序使用Google翻译为我们的用户提供多语言支持。 可能会好多了 如果您说另一种语言，并希望将其添加到应用程序中，请通过提交翻译来帮助。'
			} ,

			themes 			: {
				title 		: '提交主题',
				action 		: '发一个主题' ,
				body 		: '如果您想提交主题，请通过您的调色板和主题名称发送，我们将其添加到应用程序。'
			} ,

			donate 			: {
				action 		: '复制{{placeholder}}地址' ,
				title 		: '捐' ,
				body 		: '请帮助这个应用程序保持广告免费和进一步发展捐赠。 按下面的按钮将把钱包地址复制到剪贴板。' ,
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
