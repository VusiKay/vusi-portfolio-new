import {Link} from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header>
        <div><h2>React Meetups</h2></div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>My favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation
