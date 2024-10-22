import React from "react"
import "@styles/main.scss"
import heroBg from "@images/bg.jpg"
import heroshot from "@images/home/hero-shot.png"
import Footer from "../components/footer"
import Header from "../components/header"
import games from "@data/games.json"
import GridImages from "../components/GridImages"
import Seo from "../components/seo"

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
          <div id="featured">
            <h1>Monster Hunter UI Theme</h1>
            <h2>For Steam</h2>
            <a href = "/ui/theme" className="cta">Get Started</a>
          </div>
          <img alt="UI Theme" src={heroshot} className="hero-shot" />
        </div>
      </section>

      <section id="games">
        <h5>New</h5>
        <h3>Steam Grid Artwork</h3>
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
