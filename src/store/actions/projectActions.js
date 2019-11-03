const createProject = (project) => {
    return (dispatch, getState) => {
        //make async cal to DB
        dispatch({ type: 'CREATE_PROJECT', project: project })
    }
};

export default createProject
