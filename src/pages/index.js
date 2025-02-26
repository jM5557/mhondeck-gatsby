import React from "react"
import "@styles/main.scss"
import "@styles/changelog.scss"
import heroBg from "@images/bg.jpg"
import Footer from "@components/footer"
import Header from "@components/header"
import games from "@data/games.json"
import GridImages from "@components/GridImages"
import Seo from "@components/seo"

export default function Home() {
  const getRandomEntries = (array) => {
    const randomIndexes = [];

    // Generate 4 unique random indexes
    while (randomIndexes.length < 4) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    // Return the array elements at those indexes
    return randomIndexes.map(index => array[index]);
  }

  const _games = getRandomEntries(Object.entries(games));

  return (
    <main>
      <section id="hero">
        <Header />
        <div id="featured-wrapper">
          <img alt="UI Theme" src="/images/CSS Theme/game.PNG" className="hero-shot" />
          <div id="featured">
            <h1>Monster Hunter UI Theme</h1>
            <h2>For Steam</h2>
            <a href = "/ui/theme" className="cta">Get Started</a>
          </div>
        </div>
      </section>

      <section id = "changelog">
        <h2>Changelog - 2/23/24</h2>
        <ul>
          <li>
            Fixed minor bugs across interactive elements (focus & hover states)
          </li>
          <li>
            Combined Footer and Navbar customization options for more cohesive options
          </li>
          <li>
            Set "Monster Hunter Wilds" font for a variety of headings/menu buttons
          </li>
          <li>
            Added Library wallpaper customization options
          </li>
          <li>
            Added Settings menu art customization options
          </li>
          <li>
            Added themed backgrounds to "Friends & Chat" page elements
          </li>
          <li>
            Added "Monster Hunter Stories 2" icons for the Main Menu as a customization option
          </li>
          <li>
            Added artwork for controller settings page background
          </li>
        </ul>
      </section>

      <section id="games">
        <h5>New</h5>
        <h3>Steam Game Artwork</h3>
        <div className="flex space-s align-s">
          <GridImages games={_games} />
          <a href="/games" className="cta secondary">See All</a>
        </div>
      </section>

      <section id="videos">
        <div className="preview">
          <div className="thumb">
            <img alt="Preview thumbnail" src={heroBg} />
          </div>
          <div className="description">
            <h5>Featured</h5>
            <h3>Bootup Videos</h3>
            <h4>for Steam</h4>
            <a href="/videos" className="cta">Browse</a>
          </div>
        </div>
      </section>

      <Footer />

      <Seo title = "Monster Hunter UI Theme for Steam & More" />
    </main>
  )
}
