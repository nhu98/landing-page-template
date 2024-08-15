import styles from './page.module.scss';
import Banner from './components/banner';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (<div className={styles.page}>
    <div className="wrapper">
      <Banner />
      {/*<div className="container">*/}
      {/*  <div id="welcome">*/}
      {/*    <h1>*/}
      {/*      <span> Hello there, </span>*/}
      {/*      Welcome api-software 👋*/}
      {/*    </h1>*/}
      {/*  </div>*/}

      {/*</div>*/}
    </div>
  </div>);
}
