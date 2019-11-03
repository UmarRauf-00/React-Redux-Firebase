import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container sextion project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos est facilis debitis neque eligendi eius, explicabo fuga, ipsa, culpa amet officia ipsam minus distinctio sed illum temporibus laborum tempora.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Ninja Umar XD</div>
                    <div>3rd Oct 2019, 4pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
