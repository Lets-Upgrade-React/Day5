import { Link , Details } from "./styled";
import data from './api.json'

function App() {

    const Items = data.map((item) => (
        <div className="col-4 my-2">
            <div className="card" style={{width: '18rem'}}>
            <img
                style={{height:'450px',width:'286px', objectFit:'cover', backgroundColor:'transparent'}}
                src={item.url}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <Details className="card-text">
                    {item.desc}
                </Details>
                <a href="/" className="btn btn-success">Rs.{item.price}</a>
            </div>
            </div>
        </div>
    ));

    return (
        <>            
            <nav className="navbar navbar-expand-lg text-white bg-dark">
                <Link className="navbar-brand text-success" >Navbar</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" href="/">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" href="/">About Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link text-white">
                        Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" href="/">Meeting</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    </form>
                </div>
            </nav>
            <div className="jumbotron ">
                <h1 className="display-4">App looks great!</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                    necessitatibus, quas voluptas beatae optio maxime cupiditate at fuga
                    officiis odit rem provident nobis esse magni! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Assumenda velit dolorem repudiandae qui
                    rerum possimus sit animi. Illo, laudantium ea!
                </p>
                <hr className="my-4" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    incidunt?
                </p>
                <div className='d-flex justify-content-center mb-3'>
                    <a className="btn btn-success btn-lg text-center" href="/" role="button"
                        >React is awesome</a>
                </div>
            </div>

            <div className="bg-success text-center">
                <p className="display-4 text-white p-4">Discover the amazing new app</p>
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
                </p>
            <div className="row  p-4">
                <div className="col-6 d-flex flex-row-reverse">
                <button className="btn btn-warning btn-lg">Play Store</button>
                </div>
                
                <div className="col-6 d-flex">
                <button className="btn btn-warning btn-lg">App Store</button>
                </div>
            </div>
            </div>

            <section className="contact bg-success ">
                <div className="container ">
                    <h2 className="text-white">
                    We love new friends!
                    </h2>
                    <div className="row">
                        {Items}
                    </div>
                </div>
            </section>

            <section className="footer  bg-dark text-white">
                <p className="lead container">Contact us at Instagram</p>
                <p className="lead container">You can react via email too</p>
                <p className="lead container">NO COPYRIGHT</p>
            </section>
        </>
    );
}

export default App;
