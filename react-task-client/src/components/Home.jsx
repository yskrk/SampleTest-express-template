import React from 'react';

import  pic from "./images/sample_test.png";
function Home(props)
{

    return (
        <div>
            <img src={pic} />
            <h2> Express - React with CRUD Operations</h2>
            <p>React front-end calls Express REST API to add, 
            list, update, or delete a task.</p>
        </div>
    );

}
//
export default Home;	
