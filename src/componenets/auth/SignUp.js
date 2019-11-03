import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname:'',
        lastname: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {


        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-feild">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-feild">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-feild">
                        <label htmlFor="firstname">First name</label>
                        <input type="text" id="firstname" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-feild">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" id="lastname" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink z-depth-0">Login</button>
                    </div>

                </form>                
            </div>
        )
    }
}

export default SignUp
