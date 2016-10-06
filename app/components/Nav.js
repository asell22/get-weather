var React = require('react');

function Nav() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
     <div className="container">
       <div className="navbar-header">
          <a className="navbar-brand" href="#">Get Weather</a>
       </div>
       <div id="navbar" className="navbar-collapse collapse">
          {/* <ul className="nav navbar-nav navbar-right">
           <li><a href="../navbar/">Default</a></li>
           <li><a href="../navbar-static-top/">Static top</a></li>
           <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
         </ul> */}
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
       </div>
     </div>
   </nav>
  )
}

module.exports = Nav;
