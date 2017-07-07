
// https://stackoverflow.com/a/13542669
const blend = {

		rgb ( color , mixer , percent ) {

			let f = color.split ( ',' ) 			,
				t = mixer.split ( ',' ) 			,
				R = parseInt ( f [ 0 ].slice ( 4 )) ,
				G = parseInt ( f [ 1 ]) 			,
				B = parseInt ( f [ 2 ]);

			return 'rgb(' + ( Math.round (( parseInt ( t [ 0 ].slice ( 4 )) - R ) * percent ) + R ) + ',' + ( Math.round (( parseInt ( t [ 1 ]) - G ) * percent ) + G ) + ',' + ( Math.round (( parseInt ( t [ 2 ]) - B ) * percent ) + B ) + ')';

		} ,

		hex ( color , mixer , percent ) {

			let f = parseInt ( color.slice ( 1 ) , 16 ) , 
				t = parseInt ( mixer.slice ( 1 ) , 16 ) ,
				R1 = f >> 16 							, 
				G1 = f >> 8 & 0x00FF 					,
				B1 = f & 0x0000FF 						,
				R2 = t >> 16 							,
				G2 = t >> 8 & 0x00FF 					,
				B2 = t & 0x0000FF;

			return '#' + ( 0x1000000 + ( Math.round (( R2 - R1 ) * percent ) + R1 ) * 0x10000 + ( Math.round (( G2 - G1 ) * percent ) + G1 ) * 0x100 + ( Math.round (( B2 - B1 ) * percent ) + B1 )).toString ( 16 ).slice ( 1 );
		}

	} ,

	shade = {

		rgb ( color , percent ) {

			let f = color.split ( ',' ) 					,
				t = percent < 0 ? 0 : 255 					,
				p = percent < 0 ? percent * -1 : percent 	,
				R = parseInt ( f [ 0 ].slice ( 4 )) 		,
				G = parseInt ( f [ 1 ]) 					,
				B = parseInt ( f [ 2 ]);

			return 'rgb(' + ( Math.round (( t - R ) * p ) + R ) + ',' + ( Math.round (( t - G ) * p ) + G ) + ',' + ( Math.round (( t - B ) * p ) + B ) + ')';
		} ,

		hex ( color , percent ) {

			const 	f = parseInt ( color.slice ( 1 ) , 16 ) 	,
					t = percent < 0 ? 0 : 255 					,
					p = percent < 0 ? percent * -1 : percent 	,
					R = f >> 16 								,
					G = f >> 8 & 0x00FF 						, 
					B = f & 0x0000FF;

			return '#' + ( 0x1000000 + ( Math.round (( t - R ) * p ) + R ) * 0x10000 + ( Math.round (( t - G ) * p ) + G ) * 0x100 + ( Math.round (( t - B ) * p ) + B )).toString ( 16 ).slice ( 1 );
		}

	};

export default {

	blend ( color , mixer , percent ) {

		const type = color.length > 7 ? 'rgb' : 'hex';

		return blend [ type ] ( color , mixer , percent );
	} ,

	shade ( color , percent ) {

		const type = color.length > 7 ? 'rgb' : 'hex';

		return shade [ type ] ( color , percent );
	}

};
