import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import LandingMarkdown from "./_markdown-landing-page.md"


const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardIcon}>
        <img src={icon} alt="Icon" />
      </div>
      <div className="cardContent">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const theme = document.documentElement.getAttribute("data-theme");
  return (
    <Layout
      title={siteConfig.title}
      description={`${siteConfig.title} Documentation.`}
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <img width="200" src="https://img.shields.io/badge/HASHINAMI-grey?style=for-the-badge&color=F2B05E&logo=data:image/png;base64,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"/>
          <h1 style={{fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", color: "#F2B05E"}}>{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div style={{marginTop: "2rem"}}>
            <Link
              className="button button--lg"
              style={{borderRadius: "10px", backgroundColor: "#F2B05E"}}
              to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main style={{ textAlign: "center", marginBottom: "2em"}}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Card 
            icon="/img/icon-rocket.png" 
            title="Fast" 
            description="Zips along like a rocket, making everything you do faster and smoother." 
          />
          <Card 
            icon="/img/icon-lightning.png" 
            title="Easy to use" 
            description="Super easy to import and use wherever you need them. No fuss, just straightforward integration." 
          />
          <Card 
            icon="/img/icon-fire.png" 
            title="Always updated" 
            description="I'm constantly adding new features to keep things fresh and exciting. Stay tuned, awesome updates are just around the corner!" 
          />
        </div>
        <div className="container" style={{textAlign: "left"}}>
          <hr />
          <LandingMarkdown />
          <hr />
        </div>
      </main>
      
    </Layout>
  );
}

