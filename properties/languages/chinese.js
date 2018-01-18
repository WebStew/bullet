
export default {
	
	zh : {

		id 		: 'zh' 				,
		names 	: {
			en 	: 'Chinese' 		,
			es  : 'Chino' 			,
			de 	: 'Chinesisch' 		,
			fr 	: 'Chinois' 		,
			ms 	: 'Cina' 			,
			tr 	: 'Çince' 			,
			vi 	: 'Trung Quốc' 		,
			zh 	: '中文'
		} ,

		actions 		: {
			ad 			: '赞助商' 			,
			all 		: '所有' 				,
			add 		: '加' 				,
			calculating : '计算...' 			,
			cancel 		: '取消' 				,
			load 		: '加载' 				,
			loading 	: '载入中...' 			,
			more 		: '阅读更多' 			,
			remove 		: '去掉' 				,
			refresh 	: '刷新' 				,
			return 		: '背部' 				,
			share 		: '分享' 				,
			search 		: '请输入一个搜索词' 	,
			update 		: '更新'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: '比特币' 	,
				symbol 	: 'BTC'
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

				description : '公牛评级是基于过去24小时内按市值，价格和最新趋势时间框架变化移动的硬币总量的数字。时间范围可以只有一小时或最多一天。 这个数字越高，货币越有可能在积极的方向发展。' ,

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

			currency 		: {
				title 		: '更改货币'
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

			converter 		: {
				title 		: '变流器' ,
				placeholder : '量'
			} ,

			detail 			: {
				title 		: '详情' 	,
				add 		: '加入投资组合' 	,
				update 		: '更新投资组合'
			} ,

			exchanges 		: {
				title 		: '采购'
			} ,

			language 		: {
				title 		: '改变语言'
			} ,

			news 			: {
				title 		: '新闻'
			} ,

			portfolio 		: {
				404 		: '您尚未将任何货币加入投资组合。 请从货币详细信息屏幕添加它们，我们将能够为您的硬币收集提供建议' ,
				description : '将{{placeholder}}添加到您的投资组合列表中，以跟踪所有硬币及其合并价值。' ,
				headers 	: {
					amount 	: '量' 	,
					name 	: '名称' ,
					price 	: '价钱' ,
					total 	: '总'
				} ,
				title 		: '投资组合'
			} ,

			settings 		: {
				title 		: '设置'
			} ,

			share 			: {
				title 		: 'Cryptobullography' ,
				summary 	: '找到最新的斗牛市场上最大的噪音！#Cryptobullography'
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
