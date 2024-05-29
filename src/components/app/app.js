import styles from "./app.module.scss";
const divider = <span className={styles.divider}> | </span>;

export const App = () => {
  return (
    <div className={styles[`main-wrapper`]}>
      <section>
        <span className={styles[`category-title`]}>React Native</span>
        <hr />
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://drive.google.com/file/d/1FdlVHy1ZzGs2thkLF1_VjQuUBl73kBci/view"
            >
              iTechArt Internship Project (video demo)
            </a>
            {divider}
            <a
              className={styles["project-links"]}
              href="https://github.com/one-more-attempt/ITA-Labs-2024-T3-Mobile"
            >
              Source code
            </a>
          </p>
          <p>Auction app for agricultural goods trading.</p>

          <details>
            <summary>Click for more info:</summary>
            <div className={styles.content}>
              <p>
                <b>Used technologies / Libraries:</b> JS(ES6), React Native,
                Typescript, AWS Cognito Auth, AWS Amlify, MMKW, EC2 Services,
                Docker, Redux Toolkit, RTK Query, a lot of React Native
                libraries
              </p>
              <p>
                <b>Version control:</b> Git
              </p>
              <p>
                <b>Management system:</b> SCRUM, Git Issues
              </p>
              <p>Team: 1 lead, 2 mobile dev, 3 backend dev, 2 frontend dev</p>
              <p>
                <b>Tasks performed :</b> Sign in / sign up operations with
                Cognito, operations with lots, viewing and editing data, user
                profile update operations, sucurity confiruring, layoyt with RN,
                protected routing, errors handling, code review
              </p>
              <p>
                <b>Achievements:</b> got experience with React Native, improved
                code review skills
              </p>
            </div>
          </details>
        </div>
      </section>
      <section>
        <span className={styles[`category-title`]}>React + TypeScript</span>
        <hr />
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://drive.google.com/file/d/11EfKzSM7jB7rhvj6CLFQSGUjGqL3cTbv/view"
            >
              IT Bootcamp Internship Project (presentation)
            </a>
          </p>
          <p>
            I can't demonstrate source code under NDA policy, but i can show
            some of my main tasks in this presentation
          </p>
          <details>
            <summary>Click for more info:</summary>
            <div className={styles.content}>
              <p>
                <b>Used technologies / Libraries:</b> JS(ES6), React,
                Typescript, SASS, Redux, RTK Query, Docker, React Tables,
                Lexical Editor, async mutex, JWT, Husky
              </p>
              <p>
                <b> Version control:</b> Git (Gitlab)
              </p>
              <p>
                <b> Management system:</b> SCRUM, Jira
              </p>
              <p>
                Team: 1 lead, 3 frontend, 3 backend, 2 UI/UXs, 2 PM, 2 BA, 2 HR
              </p>
              <p>
                <b>Tasks performed :</b> secure web application with an
                administrator panel has been implemented: operations with users,
                viewing and editing data in tables and graphs. Integrated text
                editor with functions for text styling and image loading). Tools
                have been developed for further scaling of the project.
              </p>
              <p>
                <b>Achievements:</b> experience working in a team using the
                SCRUM methodology, understanding of the software development
                cycle, code reviews, task formulation and decomposition,
                improving of soft skills
              </p>
            </div>
          </details>
        </div>
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://techblogapp-d75d9.web.app"
            >
              Clevertec internship Project (web)
            </a>
            {divider}
            <a
              className={styles["project-links"]}
              href="https://github.com/one-more-attempt/techBlogApp"
            >
              Source code
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
              SweetLine Chat App (web)
            </a>
            {divider}
            <a
              className={styles["project-links"]}
              href="https://github.com/one-more-attempt/SweetLineChatApp"
            >
              Source code
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
            {divider}
            <a
              className={styles["project-links"]}
              href="https://github.com/one-more-attempt/CleverlandReactCourse/tree/master/HomeWorks/marvel"
            >
              Source code
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
              Clevertec Library Test Task
            </a>
            {divider}
            <a
              className={styles["project-links"]}
              href="https://github.com/one-more-attempt/myClevertecSprint"
            >
              Source code
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
              IT Bootcamp Test Task, characters list
            </a>
            {divider}
            <a
              className={styles["project-links"]}
              href=" https://github.com/one-more-attempt/ITBootcampTestTask"
            >
              Source code
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
            {divider}
            <a
              className={styles["project-links"]}
              href="https://github.com/one-more-attempt/todosApp"
            >
              Source code
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
              Pomodoro Focus Helper
            </a>
            {divider}
            <a
              className={styles["project-links"]}
              href="https://github.com/one-more-attempt/PomodoroApp"
            >
              Source code
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
              Vanilla Calculator
            </a>
          </p>
          <p>Calculator app with modern design</p>
          <p>Technologies: JavaScript, HTML5, CSS3 </p>
        </div>
      </section>
      <section>
        <span className={styles[`category-title`]}>Plain HTML layouts</span>
        <hr />
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
        <div className={styles.project}>
          <p>
            <a
              className={styles["project-title"]}
              href="https://one-more-attempt.github.io/station22/"
            >
              Station 22 Cafe
            </a>
          </p>
          <p>Just a simple minimalistic info layout of cafe</p>
          <p>Technologies: HTML5, CSS3</p>
        </div>
      </section>
    </div>
  );
};
