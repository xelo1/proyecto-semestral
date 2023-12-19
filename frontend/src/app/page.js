import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {

  return (
    <main>
      <h1>Proyecto Semestral</h1>

      <Link href="/about">
        <a>
          <button>Ir a About</button>
        </a>
      </Link>

    </main>
  ) 
}