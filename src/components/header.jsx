export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <div className="containerNeon">
                  <h1 className="neonText">
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                </div>

                <h1>

                </h1>
                <br/>
                <p><i>
                  <b>{props.data ? props.data.paragraph : 'Loading'}</b>
                  <br/><br/>
                  <b>{" - "}{props.data ? props.data.author : 'Loading'}{" - "}</b>
                </i></p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

