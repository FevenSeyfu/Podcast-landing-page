import "./App.css";
import SignupForm from "./Components/SignupForm";
import Logo from './assets/Logo.png';
import SpotifyLogo from './assets/Spotify_logo_with_text.png';
import AppleLogo from './assets/Apple_podcast.png';
import googleLogo from './assets/GooglePodcast.png'
import pocketCasts from './assets/PocketCasts.png'
function App() {
  return (
    <>
      <nav>
        <img src={Logo} alt="Pod Logo" />
      </nav>
      <main>
        <section className="hero-text">
          <h1 className=" ">
            <span className="">Publish your podcasts</span> <br />{" "}
            everywhere.
          </h1>
          <p>
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </p>
          <div className="form-testimonial">
            <SignupForm />
            <ul>
              <li><img src={SpotifyLogo} alt="Spotify Logo" /></li>
              <li><img src={AppleLogo} alt="Apple Podcast Logo" /></li>
              <li><img src={googleLogo} alt="Google Podcast Logo" /></li>
              <li><img src={pocketCasts} alt="PocketCasts Logo" /></li>
            </ul>
          </div>
        </section>
        <section className="hero-img">
          {/* <img src="src/assets/Bitmap.png" alt="" /> */}
        </section>
        
      </main>
      <span className="combined-shapes"></span>
    </>
  );
}

export default App;
