// Json news file
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
// Card element
const Card = (props) => {
	return <div>
		<div className="card d-flex justify-content-center " style={{ width: "18rem" }}>
			<img src={news[props.data].image} className="card-img-top" alt="img" />
			<div className="p-3">
				<h6 className="">{news[props.data].title}</h6>
				<p className="" >{news[props.data].date}</p>
				<a href={news[props.data].link} className="btn btn-info">READ MORE</a></div>
		</div>
	</div>
}

// Testing rendering to html
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Card />);

// News category element
const Allnews = () => {
	return (
		<div className="row d-flex justify-content-center">
			<div className="col d-flex justify-content-center p-1"> <Card data='0' /></div>
			<div className="col d-flex justify-content-center p-1">	<Card data='1' /></div>
			<div className="col d-flex justify-content-center p-1">	<Card data='2' /></div>
		</div>
	)
}
const Admissions = () => {
	return (
		<div className="row d-flex justify-content-center">
			<div className="col d-flex justify-content-center p-1">	<Card data='0' /></div>
		</div>
	)
}
const Campus = () => {
	return (
		<div className="row d-flex justify-content-center">
			<div className="col d-flex justify-content-center p-1">	<Card data='1' /></div>
			<div className="col d-flex justify-content-center p-1"> <Card data='2' /></div>
		</div>
	)
}
// Bottons returning results using state
const App = () => {
	const [showResults, setShowResults] = React.useState('AllNews')
	return (
		<div>
			<nav>
				<h3 className='p-1 pt-3'>NEWS</h3>
				<div className='dropdown d-flex flex-row'>
					<button
						className="btn btn-default dropdown-toggle p-1 pb-3"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-haspopup='true'
						aria-expanded="true"
					>
					News Selection
					</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" onClick={() => setShowResults('AllNews') }>All News</a></li>
						<li><a className="dropdown-item" onClick={() => setShowResults('Admissions')}>Admissions</a></li>
						<li><a className="dropdown-item" onClick={() => setShowResults('Campus')}>Campus</a></li>
					</ul>
				</div>
			</nav>
			<div className='d-flex flex-column'>
				{showResults === 'AllNews' && <Allnews />}
				{showResults === 'Admissions' && <Admissions />}
				{showResults === 'Campus' && <Campus />}
			</div>
		</div>
	)
}

// Render to the HTML
ReactDOM.render(<App />, document.getElementById('root'))
