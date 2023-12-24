import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/Mukund15k/portfolio")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <SocialIcons />
      <a className="footer-link" href="https://github.com/Mukund15k/portfolio">
        <span>
          <AiOutlineStar /> {gitHubInfo.stars} <BiGitRepoForked />
          {gitHubInfo.forks} - Give this project a star!
        </span>
        <p>
          <span>▷</span> Designed and built by Mukund Kale &copy; {currentYear}
        </p>
        <p>All views and work are my own</p>
      </a>
    </footer>
  );
};

export default Footer;
