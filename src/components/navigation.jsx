export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <img id='company-logo' alt="" src={props.data ? props.data.logo: ""} />
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          {props.data ? props.data.title : "Loading"}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                <b>About</b>
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                <b>Services</b>
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                <b>Our Team</b>
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                <b>Contact</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

