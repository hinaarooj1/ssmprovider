import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './pacotesSection.css';

const PacotesSection = () => {
  return (
    <section
      className="w-100 mt-5 mt-lg-4 d-flex flex-column flex-lg-row gap-4 px-3 px-lg-5 mb-4"
      id="pacotes"
    >
      <div className="d-flex align-items-start w-fit gap-5 mx-auto flex-column flex-lg-row">
        <div className="w-fit card-main">
          <span>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 129" width="64px" height="64px"><g fill="none"><circle cx="64" cy="64" r="64" fill="#8A3AB9"></circle><path fill="#233E49" d="M121.9,107 L5.8,107 C5.2,107 4.8,106.6 4.8,106 C4.8,105.4 5.2,105 5.8,105 L121.9,105 C122.5,105 122.9,105.5 122.9,106 C122.9,106.6 122.4,107 121.9,107 Z"></path><path fill="#EAEAEA" d="M103.2,98.2 C103.2,102.6 99.6,106.2 95.2,106.2 L32.7,106.2 C28.3,106.2 24.7,102.6 24.7,98.2 L24.7,35.7 C24.7,31.3 28.3,27.7 32.7,27.7 L95.2,27.7 C99.6,27.7 103.2,31.3 103.2,35.7 L103.2,98.2 Z"></path><path fill="#415E6D" d="M24.7,84.3 L24.7,98.4 C24.7,102.8 28.3,106.4 32.7,106.4 L95.2,106.4 C99.6,106.4 103.2,102.8 103.2,98.4 L103.2,84.3 L24.7,84.3 Z"></path><path fill="#D4D6D6" d="M96,43.3 C96,44.4 95.1,45.3 94,45.3 L86.5,45.3 C85.4,45.3 84.5,44.4 84.5,43.3 L84.5,40.3 C84.5,39.2 85.4,38.3 86.5,38.3 L94,38.3 C95.1,38.3 96,39.2 96,40.3 L96,43.3 Z"></path><polygon fill="#FC8BA4" points="58 70.3 64.2 70.3 64.2 84.9 58 84.9"></polygon><path fill="#324D5B" d="M95.2,98.3 L32.7,98.3 C28.3,98.3 24.7,94.5 24.7,90.1 L24.7,98.1 C24.7,102.5 28.3,106.1 32.7,106.1 L95.2,106.1 C99.6,106.1 103.2,102.5 103.2,98.1 L103.2,90.1 C103.2,94.6 99.6,98.3 95.2,98.3 Z"></path><polygon fill="#FF4848" points="53 70.3 58 70.3 58 84.9 53 84.9"></polygon><polygon fill="#75B600" points="64 70.3 70.1 70.3 70.1 84.9 64 84.9"></polygon><polygon fill="#3AD0F9" points="70 70.3 75.9 70.3 75.9 84.9 70 84.9"></polygon><circle cx="63.9" cy="64" r="16.2" fill="#D4D6D6"></circle><circle cx="63.9" cy="60.2" r="16.2" fill="#415E6D"></circle><circle cx="63.9" cy="60.2" r="10.9" fill="#415E6D"></circle><path fill="#233E49" d="M94,46 L86,46 C84.3,46 83,44.7 83,43 L83,40 C83,38.3 84.3,37 86,37 L94,37 C95.7,37 97,38.3 97,40 L97,43 C97,44.7 95.7,46 94,46 Z M86,39 C85.4,39 85,39.4 85,40 L85,43 C85,43.6 85.4,44 86,44 L94,44 C94.6,44 95,43.6 95,43 L95,40 C95,39.4 94.6,39 94,39 L86,39 Z"></path><circle cx="38.8" cy="43.9" r="4.8" fill="#415E6D"></circle><path fill="#233E49" d="M95,107 L33,107 C28,107 24,103 24,98 L24,35 C24,30 28,26 33,26 L95,26 C100,26 104,30 104,35 L104,98 C104,103 100,107 95,107 Z M33,28 C29.1,28 26,31.1 26,35 L26,98 C26,101.9 29.1,105 33,105 L95,105 C98.9,105 102,101.9 102,98 L102,35 C102,31.1 98.9,28 95,28 L33,28 Z"></path><path fill="#FF4848" d="M42,58 C42,60.1 40.1,62 38,62 C35.9,62 34,60.1 34,58 C34,55.9 35.9,54 38,54 C40.1,54 42,55.9 42,58 Z"></path><path fill="#233E49" d="M103,85 L25.5,85 C24.9,85 24.5,84.6 24.5,84 C24.5,83.4 24.9,83 25.5,83 L103,83 C103.6,83 104,83.4 104,84 C104,84.6 103.6,85 103,85 Z"></path><path fill="#EAEAEA" d="M85.9,121.8 C85.9,125.1 83.2,126.8 79.9,126.8 L47.9,126.8 C44.6,126.8 41.9,125.1 41.9,121.8 L41.9,94.4 L85.9,94.4 L85.9,121.8 L85.9,121.8 Z"></path><polygon fill="#D4D6D6" points="42.6 94.4 85.5 94.4 85.5 98.3 42.6 98.3"></polygon><path fill="#415E6D" d="M80.7,94.7 L80.7,117.7 C80.7,118.8 79.8,119.7 78.7,119.7 L49.3,119.7 C48.2,119.7 47.3,118.8 47.3,117.7 L47.3,94.7"></path><path fill="#233E49" d="M79.9,128.3 L47.9,128.3 C43.9,128.3 40.9,125.5 40.9,121.8 L40.9,94.4 C40.9,93.8 41.3,93.4 41.9,93.4 L85.9,93.4 C86.5,93.4 86.9,93.8 86.9,94.4 L86.9,121.8 C86.9,125.5 83.9,128.3 79.9,128.3 Z M42.9,95.4 L42.9,121.8 C42.9,124.4 45,126.3 47.9,126.3 L79.9,126.3 C82.8,126.3 84.9,124.4 84.9,121.8 L84.9,95.4 L42.9,95.4 Z"></path><polygon fill="#324D5B" points="46.9 94.4 80.9 94.4 80.9 98 46.9 98"></polygon><path fill="#233E49" d="M90.2,95 L37.8,95 C37.2,95 36.8,94.6 36.8,94 C36.8,93.4 37.2,93 37.8,93 L90.1,93 C90.7,93 91.1,93.5 91.1,94 C91.2,94.6 90.7,95 90.2,95 L90.2,95 Z M114.7,16.2 C114.4,16.2 114.2,16.1 114,15.9 C113.6,15.5 113.6,14.9 114,14.5 L120.4,8.1 C120.8,7.7 121.4,7.7 121.8,8.1 C122.2,8.5 122.2,9.1 121.8,9.5 L115.4,15.9 C115.2,16.1 114.9,16.2 114.7,16.2 Z M109.4,13.1 L109.2,13.1 C108.7,13 108.3,12.5 108.4,11.9 L109.7,5.5 C109.8,5 110.3,4.6 110.9,4.7 C111.4,4.8 111.8,5.3 111.7,5.9 L110.4,12.3 C110.3,12.8 109.9,13.1 109.4,13.1 L109.4,13.1 Z M117.7,21.4 C117.2,21.4 116.8,21.1 116.7,20.6 C116.6,20.1 116.9,19.5 117.5,19.4 L123.9,18.1 C124.4,18 125,18.3 125.1,18.9 C125.2,19.4 124.9,20 124.3,20.1 L117.9,21.4 L117.7,21.4 Z M63.9,77 C54.4,77 47,69.5 47,59.9 C47,50.4 54.4,43 63.9,43 C73.5,43 81,50.4 81,59.9 C81,69.5 73.5,77 63.9,77 Z M63.9,45 C55.6,45 49,51.5 49,59.9 C49,68.4 55.6,75 63.9,75 C72.4,75 79,68.4 79,59.9 C79,51.5 72.4,45 63.9,45 Z"></path><path fill="#233E49" d="M64,72 C57.4,72 52,66.6 52,60 C52,53.4 57.4,48 64,48 C70.6,48 76,53.4 76,60 C76,66.6 70.6,72 64,72 Z M64,50 C58.5,50 54,54.5 54,60 C54,65.5 58.5,70 64,70 C69.5,70 74,65.5 74,60 C74,54.5 69.5,50 64,50 Z"></path><path fill="#FFF" d="M64,68 C59.6,68 56,64.4 56,60 C56,59 56.2,57.9 56.6,57 C56.8,56.5 57.4,56.3 57.9,56.5 C58.4,56.7 58.6,57.3 58.4,57.8 C58.1,58.4 58,59.2 58,60 C58,63.3 60.7,66 64,66 C67.3,66 70,63.3 70,60 C70,56.7 67.3,54 64,54 C63.2,54 62.5,54.1 61.8,54.4 C61.3,54.6 60.7,54.3 60.5,53.8 C60.3,53.3 60.6,52.7 61.1,52.5 C62,52.2 63,52 64,52 C68.4,52 72,55.6 72,60 C72,64.4 68.4,68 64,68 Z" opacity=".5"></path><path fill="#FFF" d="M67.1,61 C66.6,61 66.2,60.6 66.2,60 C66.2,58.8 65.2,57.8 64.1,57.8 C62.9,57.8 62,58.8 62,60 C62,60.5 61.6,61 61.1,61 C60.6,61 60.2,60.6 60.2,60 C60.2,57.7 62,55.9 64.2,55.9 C66.4,55.9 68.2,57.7 68.2,60 C68,60.6 67.6,61 67.1,61 Z M51.4,56 C51.3,56 51.1,56 51,55.9 C50.5,55.7 50.3,55.1 50.5,54.6 C52.8,49.4 58,46 63.9,46 C69.3,46 74.2,48.8 76.7,53.4 C77,53.9 76.8,54.5 76.3,54.7 C75.8,55 75.2,54.8 74.9,54.3 C72.7,50.3 68.5,47.9 63.8,47.9 C58.7,47.9 54.2,50.8 52.2,55.3 C52.2,55.7 51.8,56 51.4,56 L51.4,56 Z" opacity=".5"></path><path fill="#233E49" d="M39,50 C35.8,50 33,47.2 33,44 C33,40.8 35.8,38 39,38 C42.2,38 45,40.8 45,44 C45,47.2 42.2,50 39,50 Z M39,40 C36.9,40 35,41.9 35,44 C35,46.1 36.9,48 39,48 C41.1,48 43,46.1 43,44 C43,41.9 41.1,40 39,40 Z M79,120.3 L49,120.3 C47.3,120.3 46,119 46,117.3 L46,94.7 C46,94.1 46.4,93.7 47,93.7 C47.6,93.7 48,94.1 48,94.7 L48,117.4 C48,118 48.4,118.4 49,118.4 L79,118.4 C79.6,118.4 80,118 80,117.4 L80,94.7 C80,94.1 80.4,93.7 81,93.7 C81.6,93.7 82,94.1 82,94.7 L82,117.4 C82,119 80.7,120.3 79,120.3 L79,120.3 Z"></path><path fill="#FFF" d="M99,60 C98.4,60 98,59.6 98,59 L98,38.3 C98,35.5 95.8,33.3 93,33.3 L62.5,33.3 C61.9,33.3 61.5,32.9 61.5,32.3 C61.5,31.7 61.9,31.3 62.5,31.3 L93,31.3 C96.9,31.3 100,34.4 100,38.3 L100,59 C100,59.6 99.6,60 99,60 Z M53.5,33.3 L37.7,33.3 C37.1,33.3 36.7,32.9 36.7,32.3 C36.7,31.7 37.1,31.3 37.7,31.3 L53.5,31.3 C54.1,31.3 54.5,31.7 54.5,32.3 C54.5,32.9 54.1,33.3 53.5,33.3 Z"></path><path fill="#FFF" d="M76,116 L65.1,116 C64.5,116 64.1,115.5 64.1,115 C64.1,114.5 64.5,114 65.1,114 L75,114 L75,102 C75,101.4 75.4,101 76,101 C76.6,101 77,101.5 77,102 L77,115 C77,115.5 76.6,116 76,116 Z M60.1,116 L53,116 C52.4,116 52,115.6 52,115 C52,114.4 52.4,114 53,114 L60.1,114 C60.7,114 61.1,114.4 61.1,115 C61.1,115.6 60.7,116 60.1,116 Z" opacity=".5"></path><path fill="#FFF" d="M112.9,78 C110.7,78 108.8,76.2 108.8,74 C108.8,71.8 110.6,70 112.9,70 C115.1,70 117,71.8 117,74 C117,76.2 115.2,78 112.9,78 Z M112.9,71.8 C111.7,71.8 110.7,72.8 110.7,73.9 C110.7,75.1 111.7,76 112.9,76 C114.1,76 115.1,75 115.1,73.9 C115.1,72.8 114.1,71.8 112.9,71.8 Z M47,22.9 C44.8,22.9 43,21.1 43,18.9 C43,16.7 44.8,14.9 47,14.9 C49.2,14.9 51,16.7 51,18.9 C51,21.1 49.2,22.9 47,22.9 Z M47,16.8 C45.8,16.8 44.9,17.8 44.9,18.9 C44.9,20.1 45.9,21 47,21 C48.2,21 49.1,20 49.1,18.9 C49.1,17.7 48.2,16.8 47,16.8 Z M19.3,74 C19.3,73.6 18.9,73.2 18.3,73.1 L16.4,72.8 C15.9,72.7 15.3,72.2 15.3,71.7 L15,69.9 C14.9,69.4 14.5,68.9 14.1,68.9 C13.7,68.9 13.3,69.3 13.2,69.9 L13,71.8 C12.9,72.3 12.4,72.9 11.9,72.9 L10,73.2 C9.5,73.3 9,73.7 9,74.1 C9,74.5 9.4,74.9 10,75 L11.9,75.3 C12.4,75.4 13,75.9 13,76.4 L13.3,78.3 C13.4,78.8 13.8,79.3 14.2,79.3 C14.6,79.3 15,78.9 15.1,78.3 L15.4,76.2 C15.5,75.7 16,75.2 16.5,75.1 L18.3,75 C18.8,74.8 19.3,74.4 19.3,74 L19.3,74 Z M83,15.5 C83,15.1 82.6,14.7 82,14.6 L80.1,14.3 C79.6,14.2 79,13.7 79,13.2 L78.7,11.3 C78.6,10.8 78.2,10.3 77.8,10.3 C77.4,10.3 77,10.7 76.9,11.3 L76.6,13.2 C76.5,13.7 76,14.3 75.5,14.3 L73.6,14.6 C73.1,14.7 72.6,15.1 72.6,15.5 C72.6,15.9 73,16.3 73.6,16.4 L75.5,16.7 C76,16.8 76.6,17.3 76.6,17.8 L76.9,19.7 C77,20.2 77.4,20.7 77.8,20.7 C78.2,20.7 78.6,20.3 78.6,19.7 L78.9,17.6 C79,17.1 79.5,16.6 80,16.5 L81.8,16.4 C82.6,16.2 83,15.9 83,15.5 L83,15.5 Z"></path></g></svg>
          </span>
          <div className="gap-2 d-flex flex-column">
            <a href="/followers" id="follow" className="card-instagram">
        <div className="card-svg">
          <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
          </svg>
        </div>
        <div className="card-text">
          <h3 className="outfit">Seguidores Instagram</h3>
          <p className="outfit flex-column">
            Serviços em promoção, clique aqui{' '}
            <span className="bg-purple text-white rounded-pill py-1 px-2">45% OFF</span>
          </p>
        </div>
      </a>
      <a href="/instagram/curtidas" className="card-instagram">
        <div className="card-svg">
          <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
          </svg>
        </div>
        <div className="card-text">
          <h3 className="outfit">Curtidas Instagram</h3>
          <p className="outfit">
            a partir de R$ 10,00{' '}
            <span className="bg-purple text-white rounded-pill py-1 px-2">34% OFF</span>
          </p>
        </div>
      </a>
      <a href="/instagram/views" className="card-instagram">
        <div className="card-svg">
          <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
          </svg>
        </div>
        <div className="card-text">
          <h3 className="outfit">Visualizações Stories Instagram</h3>
          <p className="outfit">
            a partir de R$ 10,00{' '}
            <span className="bg-purple text-white rounded-pill py-1 px-2">27% OFF</span>
          </p>
        </div>
      </a>
      <a href="/instagram/reels" className="card-instagram" id="reels">
        <div className="card-svg">
          <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z" />
          </svg>
        </div>
        <div className="card-text">
          <h3 className="outfit">Visualizações Reels Instagram</h3>
          <p className="outfit">
            a partir de R$ 10,00{' '}
            <span className="bg-purple text-white rounded-pill py-1 px-2">10% OFF</span>
          </p>
        </div>
      </a>
      <a href="/instagram/comentarios" className="card-instagram">
        <div className="card-svg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" version="1.1" id="Layer_1" width="32px" height="32px" viewBox="796 796 200 200" enableBackground="new 796 796 200 200">
            <path d="M896.001,812.517c-55.23,0-100.001,31.369-100.001,70.071c0,18.018,9.72,34.439,25.67,46.851  c3.721,2.895,5.446,7.685,4.424,12.286l-6.872,30.926c-0.498,2.242,0.419,4.561,2.316,5.855c1.896,1.295,4.391,1.304,6.297,0.022  l36.909-24.804c3.238-2.176,7.17-3.074,11.032-2.516c6.532,0.945,13.294,1.448,20.226,1.448c55.227,0,99.999-31.37,99.999-70.069  C996,843.886,951.229,812.517,896.001,812.517z" />
          </svg>
        </div>
        <div className="card-text">
          <h3 className="outfit">Comentarios Instagram</h3>
          <p className="outfit">
            a partir de R$ 8,90{' '}
            <span className="bg-purple text-white rounded-pill py-1 px-2">20% OFF</span>
          </p>
        </div>
      </a>
          </div>
        </div>

        <div className="w-fit card-main tiktok-new position-relative">
         <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 129" width="64px" height="64px"><g xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="64" cy="64" r="64" fill="#000"></circle><path fill="#D4D6D6" d="M89,121 C89,124.3 86.3,127 83,127 L36,127 C32.7,127 30,124.3 30,121 L30,23 C30,19.7 32.7,17 36,17 L83,17 C86.3,17 89,19.7 89,23 L89,121 Z"></path><path fill="#A3A3A3" d="M83,128 L36,128 C32.1,128 29,124.9 29,121 L29,23 C29,19.1 32.1,16 36,16 L83,16 C86.9,16 90,19.1 90,23 L90,121 C90,124.9 86.9,128 83,128 Z M36,18 C33.2,18 31,20.2 31,23 L31,121 C31,123.8 33.2,126 36,126 L83,126 C85.8,126 88,123.8 88,121 L88,23 C88,20.2 85.8,18 83,18 L36,18 Z"></path><path fill="#EAEAEA" d="M95,121 C95,124.3 92.3,127 89,127 L42,127 C38.7,127 36,124.3 36,121 L36,23 C36,19.7 38.7,17 42,17 L89,17 C92.3,17 95,19.7 95,23 L95,121 Z"></path><path fill="#000" d="M88,107 C88,109.2 86.2,111 84,111 L48,111 C45.8,111 44,109.2 44,107 L44,33 C44,30.8 45.8,29 48,29 L84,29 C86.2,29 88,30.8 88,33 L88,107 Z"></path><path fill="#ADADAD" d="M72,25 L61,25 C60.4,25 60,24.6 60,24 C60,23.4 60.4,23 61,23 L72,23 C72.6,23 73,23.4 73,24 C73,24.6 72.6,25 72,25 Z"></path><path fill="#A3A3A3" d="M89,128 L42,128 C38.1,128 35,124.9 35,121 L35,23 C35,19.1 38.1,16 42,16 L89,16 C92.9,16 96,19.1 96,23 L96,121 C96,124.9 92.9,128 89,128 Z M42,18 C39.2,18 37,20.2 37,23 L37,121 C37,123.8 39.2,126 42,126 L89,126 C91.8,126 94,123.8 94,121 L94,23 C94,20.2 91.8,18 89,18 L42,18 Z"></path><path fill="#FFF" d="M91,96 C90.4,96 90,95.7 90,95.3 L90,81.7 C90,81.3 90.4,81 91,81 C91.6,81 92,81.3 92,81.7 L92,95.2 C92,95.7 91.6,96 91,96 Z M91,70.8 C90.4,70.8 90,70.4 90,69.8 L90,28.4 C90,23.7 88.6,22.9 84.4,22.9 C83.8,22.9 83.4,22.5 83.4,21.9 C83.4,21.3 83.8,20.9 84.4,20.9 C89.2,20.9 92,22.1 92,28.4 L92,69.9 C92,70.4 91.6,70.8 91,70.8 L91,70.8 Z"></path><path fill="#FFF" d="M107,84 C104.8,84 103,82.2 103,80 C103,77.8 104.8,76 107,76 C109.2,76 111,77.8 111,80 C110.9,82.2 109.1,84 107,84 Z M107,77.9 C105.8,77.9 104.9,78.9 104.9,80 C104.9,81.2 105.8,82.1 107,82.1 C108.2,82.1 109.1,81.1 109.1,80 C109.1,78.8 108.1,77.9 107,77.9 Z M22,50 C19.8,50 18,48.2 18,46 C18,43.8 19.8,42 22,42 C24.2,42 26,43.8 26,46 C26,48.2 24.2,50 22,50 Z M22,43.9 C20.8,43.9 19.9,44.9 19.9,46 C19.9,47.2 20.9,48.1 22,48.1 C23.2,48.1 24.1,47.1 24.1,46 C24.1,44.8 23.2,43.9 22,43.9 Z M20.6,69.6 C20.6,69.2 20.2,68.8 19.6,68.7 L17.7,68.4 C17.2,68.3 16.6,67.8 16.6,67.3 L16.3,65.4 C16.2,64.9 15.8,64.4 15.4,64.4 C15,64.4 14.6,64.8 14.5,65.4 L14.2,67.3 C14.1,67.8 13.6,68.4 13.1,68.4 L11.2,68.7 C10.7,68.8 10.2,69.2 10.2,69.6 C10.2,70 10.6,70.4 11.2,70.5 L13.1,70.8 C13.6,70.9 14.2,71.4 14.2,71.9 L14.5,73.8 C14.6,74.3 15,74.8 15.4,74.8 C15.8,74.8 16.2,74.4 16.3,73.8 L16.6,71.7 C16.7,71.2 17.2,70.7 17.7,70.6 L19.5,70.5 C20.1,70.4 20.6,70 20.6,69.6 L20.6,69.6 Z M117.1,50.1 C117.1,49.7 116.7,49.3 116.1,49.2 L114.2,48.9 C113.7,48.8 113.1,48.3 113.1,47.8 L112.8,45.9 C112.7,45.4 112.3,44.9 111.9,44.9 C111.5,44.9 111.1,45.3 111,45.9 L110.7,47.8 C110.6,48.3 110.1,48.9 109.6,48.9 L107.7,49.2 C107.2,49.3 106.7,49.7 106.7,50.1 C106.7,50.5 107.1,50.9 107.7,51 L109.6,51.3 C110.1,51.4 110.7,51.9 110.7,52.4 L111,54.3 C111.1,54.8 111.5,55.3 111.9,55.3 C112.3,55.3 112.7,54.9 112.8,54.3 L113.1,52.2 C113.2,51.7 113.7,51.2 114.2,51.1 L116,51 C116.6,50.9 117.1,50.5 117.1,50.1 L117.1,50.1 Z" opacity=".5"></path><path fill="#ADADAD" d="M33,38 C32.4,38 32,37.5 32,36.9 L32,29.1 C32,28.5 32.4,28 33,28 C33.6,28 34,28.5 34,29.1 L34,36.9 C34,37.5 33.6,38 33,38 Z M33,54 C32.4,54 32,53.6 32,53 L32,43 C32,42.4 32.4,42 33,42 C33.6,42 34,42.4 34,43 L34,53 C34,53.6 33.6,54 33,54 Z M68,123 L64,123 C60.1,123 57,121 57,118.5 C57,116 60.1,114 64,114 L68,114 C71.9,114 75,116 75,118.5 C75,121 71.9,123 68,123 Z M64,116 C61.1,116 59,117.3 59,118.5 C59,119.7 61.1,121 64,121 L68,121 C70.9,121 73,119.7 73,118.5 C73,117.3 70.9,116 68,116 L64,116 Z"></path><path fill="#FFF" d="M80.6,92.4 C80.2,92 79.6,91.9 79.3,92.2 L68.2,102.5 C67.9,102.8 68,103.3 68.4,103.7 C68.8,104.1 69.4,104.2 69.7,103.9 L80.8,93.6 C81.1,93.3 81,92.7 80.6,92.4 Z M65.6,92.4 C65.2,92 64.6,91.9 64.3,92.2 L57.2,98.5 C56.9,98.8 57,99.3 57.4,99.7 C57.8,100.1 58.4,100.2 58.7,99.9 L65.8,93.6 C66.1,93.3 66,92.7 65.6,92.4 Z M73.6,35.4 C73.2,35 72.6,34.9 72.3,35.2 L61.2,45.4 C60.9,45.7 61,46.2 61.4,46.6 C61.8,47 62.4,47.1 62.7,46.8 L73.8,36.5 C74.1,36.3 74,35.7 73.6,35.4 Z M58.6,35.4 C58.2,35 57.6,34.9 57.3,35.2 L50.2,41.5 C49.9,41.8 50,42.3 50.4,42.7 C50.8,43.1 51.4,43.2 51.7,42.9 L58.8,36.6 C59.1,36.3 59,35.7 58.6,35.4 Z"></path></g></svg></span>
          <div className="gap-2 mt-0 d-flex flex-column">
            <a href="/tiktok/followers" id="follow" className="card-instagram">
              <div className="card-svg">
                <svg aria-hidden="true" height="32px" width="32px" fill="#fff" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                </svg>
              </div>
              <div className="card-text">
                <h3 className="outfit">Seguidores <span className="text-danger fw-bold fs-4">TikTok</span></h3>
                <p className="outfit flex-column">Serviços em promoção, clique aqui <span className="bg-purple rounded-pill text-white py-1 px-2">60% OFF</span></p>
              </div>
            </a>
          </div>
          <div className="rotate-box px-4 py-2 gradient-novo position-absolute end-0 rounded-top rounded-end top-2 rotate-12 fs-5 h-min text-white fw-semibold ubuntu">NOVO SERVIÇO!</div>
        </div>
      </div>
    </section>
  );
};

export default PacotesSection;
