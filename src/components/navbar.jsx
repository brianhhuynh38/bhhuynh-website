import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends PureComponent {

  render() {
    const sections = [
      { name: "Home", link: "/index" },
      { name: "Projects", link: "/projects" }
    ]
    const sectionButtons = sections.map(section =>
    <li key={section.name}>
      <Link to={section.link}>
        <button>{section.name}</button>
      </Link>
    </li>);

    return (
      <div>
        <ul>{sectionButtons}</ul>
      </div>
    );
  }
}
