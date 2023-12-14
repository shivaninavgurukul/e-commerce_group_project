import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: '#3498db', color: '#fff' }}>
            <div className="container-fluid">
                <img  src="https://www.shutterstock.com/image-vector/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.jpg" className="navbar-brand" style={{height:60,width:200}}></img>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit" style={{ backgroundColor: '#2980b9', color: '#fff' }}>
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;


