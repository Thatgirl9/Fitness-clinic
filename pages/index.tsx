import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ExerciseCard from "../components/ExerciseCard";

const exercises = [
  {
    title: "Pelvic Tuck Lying Down",
    thumbnail: "https://img.youtube.com/vi/44D6Xc2Fkek/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=44D6Xc2Fkek",
  },
  {
    title: "Pelvic Tuck Sitting",
    thumbnail: "https://img.youtube.com/vi/PdEKzbBFZrE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=PdEKzbBFZrE",
  },
  {
    title: "Pelvic Tilt Wall",
    thumbnail: "https://img.youtube.com/vi/QIBQFR4CG6w/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=QIBQFR4CG6w",
  },
  {
    title: "Isolate and strengthen your glutes",
    thumbnail: "https://img.youtube.com/vi/UZLsQXWj-Tc/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=UZLsQXWj-Tc",
  },
  {
    title: "Hip flexor isometric strengthening",
    thumbnail: "https://img.youtube.com/vi/3_BAvXb-yaA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=3_BAvXb-yaA",
  },
  {
    title: "Double leg back stretch",
    thumbnail: "https://img.youtube.com/vi/ZEz80zvkUv4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ZEz80zvkUv4",
  },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fitness Clinic</title>
        <meta
          name="description"
          content="Fitness Clinic is a platform for fitness enthusiasts to find the best exercises for their needs."
        />
        {/* <link
          rel="icon"
          href="/icons8-fitness-bubbles-favicons/Web/icons8-fitness-bubbles-96.png"
        /> */}
      </Head>
      <main className="bg-bg-primary md:px-14 px-6 mb-[2em]">
        <Header />
        <Hero />

        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[4em] md:px-[3em] px-[2em] scroll-m-28"
          id="exercise"
        >
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} {...exercise} />
          ))}
        </section>
        <Footer />
      </main>
    </div>
  );
}
