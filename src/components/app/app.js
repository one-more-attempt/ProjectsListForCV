import styles from "./app.module.scss";
const links = {
  pomodoro: "https://pomodoro-app-steel-phi.vercel.app/main-page.html",
  station22: "https://one-more-attempt.github.io/station22/",
  clevertecSprint: "https://my-clevertec-sprint.vercel.app/#/books/all",
  vanillaCalc: "https://it-academy-hw.vercel.app/",
  tuning: "https://tuning-atelier-plain-html.vercel.app/pages/main/main.html",
  todo: "https://todos-app-tau.vercel.app/",
  chat: "https://one-more-attempt.web.app/",
  itbootcamptest: "https://itbootcamp-672fc.web.app/",
  conduit: "https://techblogapp-d75d9.web.app/",
  marvel: "https://marvel-clevertec.vercel.app/",
};

const text = {
  pomodoro: "",
  station22: "",
  clevertecSprint: "",
  vanillaCalc: "",
  tuning: "",
  todo: "",
  chat: "",
  itbootcamptest: "",
  conduit: "",
  marvel: "",
};

export const App = () => {
  return (
    <div className={styles[`main-wrapper`]}>
      <section>
        <span className={styles[`category-title`]}>React + TypeScript</span>
        <hr />
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://drive.google.com/file/d/11EfKzSM7jB7rhvj6CLFQSGUjGqL3cTbv/view?usp=sharing"
            >
              IT BootCamp Internship Project
            </a>
          </p>
          <p>
            I can't demonstrate source code under NDA policy, but i can show
            some of my main tasks in this
          </p>
          <p>
            Technologies: JS(ES6), React, Typescript, SASS, Redux, RTK Query,
            Docker, React Tables, Lexical Editor, async mutex, JWT, Husky
          </p>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://techblogapp-d75d9.web.app"
            >
              Conduit Blog App (medium clone)
            </a>
          </p>
          <p>
            The application is a multi-page blog with great functionality
            (folowing of authors, read personalized feed of subscriptions, use
            likes, comments, user account settings, etc.)
            <p>All features unlocked after registration.</p>
          </p>
          <p>
            Technologies: Typescript, React.js, SASS, Redux Toolkit, RTK Query,
            RealWorld API
          </p>
          <p>
            <u>Credentials to login:</u> testaccount@mail.com (mail) testaccount
            (password)
          </p>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://one-more-attempt.web.app"
            >
              SweetLine Chat App
            </a>
          </p>
          <p>Secured real-time chat for registered users.</p>
          <p>
            Technologies:JavaScript, React.js, SASS, Firebase Realtime Database,
            React Context
          </p>
          <p>
            <u>Credentials to login:</u> testaccount@mail.com (mail) testaccount
            (password)
          </p>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://marvel-clevertec.vercel.app"
            >
              Marvel information portal
            </a>
          </p>
          <p>Marvel information portal with dynamic loading</p>
          <p>
            Technologies: Typescript, React.js, SASS, Redux Toolkit, Marvel API
          </p>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://my-clevertec-sprint.vercel.app/#/books/all"
            >
              Clevertec Library (Clevertec test task)
            </a>
          </p>
          <p>
            Clevertec Library app layout with some functionality (change view
            mode and navigation)
          </p>
          <p>Technologies: JavaScript, React.js, SASS</p>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://itbootcamp-672fc.web.app"
            >
              IT BootCamp Test Task (Characters list)
            </a>
          </p>
          <p>
            Rick and morty charactrers list with infinite loading, optional
            pagination, and navigation
          </p>
          <p>
            Technologies:Typescript, React.js, React Infinite Query, SASS,
            RickAndMorty API
          </p>
        </div>
      </section>
      <section>
        <span className={styles[`category-title`]}>Vanilla JS</span>
        <hr />
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://todos-app-tau.vercel.app/"
            >
              Todo App
            </a>
          </p>
          <p>
            Secured app for save and manage your to do list. Have many
            functions: find other users, likes, comments, add images to server.
          </p>
          <p>
            Technologies: JavaScript, Webpack, SASS, Firebase DB, Firestore{" "}
          </p>
          <p>
            <u>Credentials to login:</u> testaccount@mail.com (mail) testaccount
            (password)
          </p>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://pomodoro-app-steel-phi.vercel.app/"
            >
              Pomodoro focus helper
            </a>
          </p>
          <p>
            The application allows you to work more productively according to
            pomodory method, signaling the time when you need to rest. All
            timers and settings are configurable.
          </p>
          <p>Technologies: JavaScript, Webpack, SASS, Firebase DB</p>
          <p>
            <u>Credentials to login:</u> testaccount@mail.com (mail) testaccount
            (password)
          </p>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://it-academy-hw.vercel.app/"
            >
              Calculator
            </a>
          </p>
          <p>Calculator app with modern design</p>
          <p>Technologies: JavaScript, HTML5, CSS3 </p>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://tuning-atelier-plain-html.vercel.app/pages/main/main.html"
            >
              1M Tuning Atelier
            </a>
          </p>
          <p>Info web site for tuning atelier</p>
          <p>Technologies: HTML5, CSS3, JavaScript</p>
        </div>
      </section>
      <section>
        <span className={styles[`category-title`]}>Plain HTML layouts</span>
        <hr />

        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://one-more-attempt.github.io/station22/"
            >
              Station 22 cafe
            </a>
          </p>
          <p>Just a simple minimalistic info layout of cafe</p>
          <p>Technologies: HTML5, CSS3</p>
        </div>
      </section>
    </div>
  );
};
