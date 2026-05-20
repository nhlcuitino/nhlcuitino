import Image from "next/image";
import styles from "@/styles/home.scss";

export default function Home() {
  return (
    <div className="container">
       <div className="card">
        <div className="left-column">  
          <div className="avatar">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={100}
              height={100}
            />
            </div>
            <div className="cont-info">
              <ul className="info">
                <li>
                  <h2>Fecha de Nacimiento</h2>
                  <p>09.01.1987</p>
                </li>
                <li>
                  <h2>Contacto</h2>
                  <p>cuitinonahuel@gmail.com</p>
                  <p>*** *** *** **</p>
                </li><li>
                  <h2>Residencia</h2>
                  <p>Mar del Plata 966 - Merlo</p>
                </li><li>
                  <h2>Estudios</h2>
                  <p>Licenciatura en Artes Multimediales - IUNA</p>
                </li>
              </ul>
            </div>
          </div>
        <div className="main-column">

        </div>
      
      </div>
   
    </div>
  );
}
