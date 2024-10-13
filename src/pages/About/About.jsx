import { Helmet } from "react-helmet"

function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
          <h2 className="text-3xl">About</h2>
    </div>
  )
}

export default About
