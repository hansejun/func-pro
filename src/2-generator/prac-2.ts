// 홀수 만들기
// function* odds(limit:number){
// 	for(let i = 0; i < limit; i++){
// 		if(i % 2) yield i;
// 	}
// }

// const oddsIterator = odds(10); // 1 3 5 7 9

// 무한히 홀수만 뽑는 제너레이터 
function* infinity(i:number){
	while(true) yield i++;
}

function* limit(l:number,iterable:Iterable<number>){
	for(const a of iterable){
		yield a;
		if( a === l ) return ;
	}
}

function* odds(l:number){
	for(const a of limit(l,infinity(1))){
		if(a % 2) yield a;
	}
}