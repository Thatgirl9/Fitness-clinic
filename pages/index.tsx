import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Head>
      <title>Fitness Clinic</title>
      <meta
        name="description"
        content="Fitness Clinic is a platform for fitness enthusiasts to find the best exercises for their needs."
      />
      <link rel="icon" href="/favicon.ico" />
      
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
  );
}
