// const Either = Right || Left

const Right = x =>
	({
		map: f => Right(f(x)),
		fold: (f, g) => g(x),
		inspect: () => `Right(${x})`
	})

const Left = x =>
	({
		map: f => Left(x),
		fold: (f, g) => f(x),
		inspect: () => `Left(${x})`
	})

/**
 * Error handling with pure functions 
 */
//const result = Right(3).map(x => x * x).fold(x => 'Error', x => x)

const fromNullable = x =>
	x != null ? Right(x) : Left(null)

const findColor = name =>
	fromNullable({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])

	
const result = findColor('green')
	.map(s => s.slice(1))
	.fold(e => 'no color',
				c => c.toUpperCase())

console.log(result)
