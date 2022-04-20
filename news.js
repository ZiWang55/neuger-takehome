
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
function FirstCard(prop) {
	return <div>
		<div className="col">
			<div className="card" style={{ width: "25rem" }}>
				<img src={news[0].image} className="card-img-top" alt="img" />
				<h1>{news[0].title}</h1>
				<p className="card-text">{news[0].date}</p>
				<a href={news[0].link} className="btn btn-info">READ MORE</a>
			</div>
		</div></div>
}
//   Testing rendering to html
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FirstCard />);

//   Second Card Comp
function SecondCard(prop) {
	return <div>
		<div className="col">
			<div className="card" style={{ width: "25rem" }}>
				<img src={news[1].image} className="card-img-top" alt="img" />
				<h1>{news[1].title}</h1>
				<p className="card-text">{news[1].date}</p>
				<a href={news[1].link} className="btn btn-info">READ MORE</a>
			</div>
		</div></div>
}

// Third Card Comp
function ThirdCard(prop) {
	return <div>	<div className="col">
		<div className="card" style={{ width: "25rem" }}>
			<img src={news[2].image} className="card-img-top" alt="img" />
			<h1>{news[2].title}</h1>
			<p className="card-text">{news[2].date}</p>
			<a href={news[2].link} className="btn btn-info">READ MORE</a>
		</div>
	</div></div>
}

const Allnews = () => (
	<div>
		<FirstCard />
		<SecondCard />
		<ThirdCard />
</div>
)

const Admissions = () => (
	<div>
		<FirstCard/>
	</div>
)

const All = () => {
	const [showResults, setShowResults] = React.useState(false)
	const onClick = () => setShowResults(true)
	return (
	  <div>
		<input type="submit" value="All News" onClick={onClick} />
		{ showResults ? <Allnews /> : null }
	  </div>
	)
}



ReactDOM.render(<All />, document.getElementById('all-news'))

const Admis = () => {
	const [showResults, setShowResults] = React.useState(false)
	const onClick = () => setShowResults(true)
	return (
	  <div>
		<input type="submit" value="Admissions" onClick={onClick} />
		{ showResults ? <Admissions /> : null }
	  </div>
	)
}
	
ReactDOM.render(<Admis />, document.getElementById('admission-button'))