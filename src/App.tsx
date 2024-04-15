import "./App.css";
import SignupForm from "./Components/SignupForm";

function App() {
  return (
    <>
      <nav>
        <img src="src/assets/Logo.png" alt="Pod Logo" />
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
              <li><img src="../assets/Spotify_logo_with_text.png" alt="" /></li>
              <li><img src="src/assets/Apple_podcast.png" alt="" /></li>
              <li><img src="src/assets/GooglePodcast.png" alt="" /></li>
              <li><img src="src/assets/PocketCasts.png" alt="" /></li>
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
