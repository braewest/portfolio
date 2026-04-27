import { useState } from 'react';
import '../styles/Personal.css';

const buildImages = [
  // { src: "/images/personal/minecraft-base.png", caption: "Survival mega base" },
];

const drumlineImages = [
  // { src: "/images/personal/rose-parade.png", caption: "Rose Parade 2022" },
];

const gamingImages = [
  // { src: "/images/personal/death-stranding.png", caption: "Death Stranding" },
];

const hikingImages = [
  // { src: "/images/personal/sedona.png", caption: "Edge of the World, Sedona" },
];

export default function Personal() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <div className="personal">
      <section>
        <h2>Beyond the Code</h2>
        <p className="personal-intro">
          I've always approached things with a logical, engineering mindset — not just at work or in school, but in everything I do. If there's a system to understand, a problem to solve, or something to build for the people around me, I'm interested. That instinct shows up pretty consistently outside of software too.
        </p>
      </section>

      <section className="personal-section">
        <h3>I Build Things for Fun</h3>
        <p>
          Outside of professional work I'm constantly tinkering. I write small programs and tools for myself and my friends — utilities, automations, little things that make our lives easier or more interesting. If I can solve a problem or create an experience for the people around me, I will.
        </p>
        <p>
          That same instinct shows up in Minecraft. I enjoy making technical builds — using the game's systems to automate and engineer things well beyond what the game expects you to do. I also play on a long-running survival world with friends where we build large-scale mega bases together. I self-host multiple servers for us, which means handling the setup, configuration, and keeping everything running smoothly.
        </p>
        <Gallery images={buildImages} onOpen={setLightboxSrc} />
        <p>
          I also DM for my friends' D&D campaign. Running a game as a Dungeon Master is more engineering than it sounds — world-building, encounter design, tracking state across sessions, and improvising when players do something you didn't plan for. I love the planning side of it as much as running the sessions themselves.
        </p>
      </section>

      <section className="personal-section">
        <h3>Drumline</h3>
        <p>
          I played quads for Rockford High School's marching band from 2019 to 2022. My junior and senior years I served as section leader, which meant leading both my section and the drumline as a whole. I was the timing reference for the drum major, so keeping everyone locked in was my responsibility every performance.
        </p>
        <p>
          Part of the role I valued most was working with newer members — figuring out where they fit, helping them improve, and keeping the section motivated through a long season. We earned first place at state championships every year I was there, reached semi-finals at nationals, and marched the Rose Parade my senior year.
        </p>
        <p>
          Outside of the school band I competed with Ascension Percussion, an independent WGI indoor group. We won every competition we entered that season, including states, and finished 8th overall at WGI Finals in A class.
        </p>
        <Gallery images={drumlineImages} onOpen={setLightboxSrc} />
      </section>

      <section className="personal-section">
        <h3>The Games I Play</h3>
        <p>
          I'm drawn to games where there's something to figure out — a story to piece together, a system to understand, or a world to explore on your own terms. <em>Death Stranding</em> is probably my favorite example: a game about connection and isolation where the story rewards you for paying attention to details most players miss. <em>The Last of Us</em> and <em>Detroit: Become Human</em> are in the same vein — both tell stories that stuck with me long after I finished them, the kind where the characters and choices feel like they actually matter.
        </p>
        <p>
          On the other end, I'm genuinely interested in space, which means <em>Astroneer</em> and <em>Kerbal Space Program</em> get a lot of my time. KSP especially scratches that itch of wanting to actually understand how something works rather than just watch it happen.
        </p>
        <Gallery images={gamingImages} onOpen={setLightboxSrc} />
      </section>

      <section className="personal-section">
        <h3>Hiking</h3>
        <p>
          Moving to Arizona got me into hiking, and Sedona in particular has become one of my favorite places. Edge of the World trail is at the top of my list — the views are unlike anything in Michigan. Getting out on the trails is a good reset, and the landscape out there still catches me off guard.
        </p>
        <Gallery images={hikingImages} onOpen={setLightboxSrc} />
      </section>

      {lightboxSrc && (
        <div className="lightbox" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>✕</button>
          <img src={lightboxSrc} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

function Gallery({ images, onOpen }) {
  if (!images.length) return null;
  return (
    <div className="personal-gallery">
      {images.map((image, i) => (
        <button key={i} className="gallery-item" onClick={() => onOpen(image.src)}>
          <img src={image.src} alt={image.caption ?? `Photo ${i + 1}`} />
          {image.caption && <span className="gallery-caption">{image.caption}</span>}
        </button>
      ))}
    </div>
  );
}
