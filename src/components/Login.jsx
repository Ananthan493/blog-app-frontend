import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="container1-fluid">
                <h2>BloG ApP</h2>

                <img class="img-fluid"
                    src="https://img.freepik.com/free-photo/top-view-office-desk-with-growth-chart-coins_23-2148780621.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712793600&semt=ais" width="100%" />

                <div className="container1">
                    <div className="row g-3">
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 ">
                            <label htmlFor="" className="label form-label">Enter Email Id</label>
                            <input type="text" className="form-control" placeholder='email-id' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Enter Password</label>
                            <input type="text" className="form-control" placeholder='password' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <a href='/Register'> Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login