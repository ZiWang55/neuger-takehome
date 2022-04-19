

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
		"image": "images/news-2.png",
		"category": "Campus"
	},
	{
		"title": "Center of Excellence in Hockey Includes Upgrades for the Iceoplex",
		"date": "2019-09-01",
		"link": "https://apple.com/",
		"image": "news-3.png",
		"category": "Campus"
	}
]

function Admissions(prop) {
    return <div>
		   <div className="card" style={{width: "25rem"}}>
		<img src={news[0].image} className="card-img-top" alt="img" />
	<h1>{news[0].title}</h1>
	<p className="card-text">{news[0].date}</p>
	<a href='https://example.com/' className="btn btn-info">READ MORE</a>
	</div>
	</div>
  }

  const root = ReactDOM.createRoot(document.getElementById('first-card'));
  root.render(<Admissions/>);