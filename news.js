
// json file
const news = [
	{
		"title": "Now Enrolling Students 6-12 for Fall 2020",
		"date": "2019-09-19",
		"link": "https://example.com/",
		"image": "images/news-1.png",
		"category": "Admissions"
	},
	{
		"title": "Mary's School Site Plan for Valley Campus",
		"date": "2019-09-13",
		"link": "https://google.com/",
		"image": "images/news-2.jpg",
		"category": "Campus"
	},
	{
		"title": "Center of Excellence in Hockey Includes Upgrades for the Iceoplex",
		"date": "2019-09-01",
		"link": "https://apple.com/",
		"image": "images/news-3.jpg",
		"category": "Campus"
	}
]
// First Card Comp
const FirstCard =(props) => {
	return <div>
		<div>
			<div className="card" style={{ width: "25rem" }}>
				<img src={news[props.data].image} className="card-img-top" alt="img" />
				<h1>{news[props.data].title}</h1>
				<p className="card-text">{news[props.data].date}</p>
				<a href={news[props.data].link} className="btn btn-info">READ MORE</a>
			</div>
		</div></div>
}
//   Testing rendering to html
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FirstCard />);


const Allnews=()=> {

		return (
			<div className="row">
		<div  className="col">	<FirstCard data='0' /></div>
		<div  className="col">		<FirstCard data='1' /></div>
		<div  className="col">		<FirstCard data='2' /></div>
 	</div>
		)
	
}
const Admissions=()=> {

	return (
		<div className="row">
	<div  className="col">	<FirstCard data='0' /></div>

 </div>
	)

}
const Campus=()=> {

	return (
		<div className="row">
	<div  className="col">		<FirstCard data='1' /></div>
		<div  className="col">		<FirstCard data='2' /></div>

 </div>
	)

}


const App = () => {
	const [showResults, setShowResults] = React.useState('AllNews')
	return (
		<div>
			<nav>
				<button onClick={()=> setShowResults('AllNews')}>All News</button>
				<button onClick={() => setShowResults('Admissions')}>Admissions</button>
				<button onClick={()=> setShowResults('Campus')}>Campus</button>
			</nav>
			<div>
				{showResults=== 'AllNews' && <Allnews/>}
				{showResults === 'Admissions' && <Admissions />}
				{showResults=== 'Campus' && <Campus/>}
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('button'))
