import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jayditya Dhaka</h2>
        <p>
          <a href="mailto:dhakajayditya@gmail.com">dhakajayditya@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Jay. I am a{' '}
        <a href="https://vit.ac.in/">VIT, vellore</a> B.Tech Graduate, alumnus of multiple schools around India, and Former Intern at{' '}
        <a href="https://www.tataelxsi.com/">Tata Elxsi</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Jayditya Dhaka <Link to="/">JDhaka.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
