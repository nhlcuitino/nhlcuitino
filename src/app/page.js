import Image from "next/image";

export default function Home() {
  return (
    <div >
      <header>
        Hola
      </header>
      <main align="center">
        <h1>Welcome to NHL Cuitino!</h1>
        <Image
            aria-hidden
            src="/next.svg"
            alt="Next"
            width={300}
            color="#fff"
            height='200'
          />
      </main>
      <footer>
        <p>
          footer
        </p>
      </footer>
    </div>
  );
}
