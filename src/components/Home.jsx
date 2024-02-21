import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1><Link to="/create">CreateBooks</Link></h1>
            <h1><Link to="/books">Books</Link></h1>
        </div>
    );
}

export default Home;
