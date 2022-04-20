
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
// First Card Comp
function FirstCard(prop) {
    return <div>
	<div className="col">
		   <div className="card" style={{width: "25rem"}}>
		<img src={news[0].image} className="card-img-top" alt="img" />
	<h1>{news[0].title}</h1>
	<p className="card-text">{news[0].date}</p>
	<a href={news[0].link} className="btn btn-info">READ MORE</a>
	</div>
	</div></div>
  }
//   Testing rendering to html
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(<FirstCard/>);

//   Second Card Comp
console.log(<FirstCard/>)

function SecondCard(prop) {
return <div>
<div className="card" style={{width: "25rem"}}>
<img src={news[1].image} className="card-img-top" alt="img" />
<h1>{news[1].title}</h1>
<p className="card-text">{news[1].date}</p>
<a href={news[1].link} className="btn btn-info">READ MORE</a>
</div>
</div>}

// Third Card Comp
function ThirdCard(prop) {
return <div>
<div className="card" style={{width: "25rem"}}>
<img src={news[0].image} className="card-img-top" alt="img" />
<h1>{news[0].title}</h1>
<p className="card-text">{news[0].date}</p>
<a href={news[0].link} className="btn btn-info">READ MORE</a>
</div>
</div>}