import { Link } from 'react-router-dom';
import cn from 'classnames';
import favicon from 'images/favicon.ico';
import search from 'images/search.png';

export function Header() {
  return (
    <header>
      <section className="title">
        <img src={favicon} height="50" alt="To Do" />
        <h3>To Do</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">Додому</Link>
            </li>
            <li>
              <Link to="/done">Виконані</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="searchSection">
        <label htmlFor="search" className={cn('searchLabel')}>
          Очистити
        </label>
        <input type="text" placeholder="" id="search" />
        <img id="searchIcon" src={search} alt="Search" />
      </section>
    </header>
  );
}
