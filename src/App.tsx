import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css'
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/tiago-SO.png',
      name: 'Tiago Sousa',
      role: 'Dev Frontend',
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },   
    ],
    publishedAt: new Date('2022-11-27 12:35:28'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },   
    ],
    publishedAt: new Date('2022-11-11 18:24:48'),
  }
]

function App() {
  return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(posts => {
              return (
                <Post 
                  key={posts.id}
                  author={posts.author}
                  content={posts.content}
                  publishedAt={posts.publishedAt}
                />
              )
            })}
          </main>

        </div>
      </div>


    )
}

export default App;