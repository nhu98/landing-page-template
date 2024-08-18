import styles from '../page.module.scss';
import Banner from './components/banner';
import AboutUs from './components/about-us';
import TrustedLogos from './components/trusted-logos';
import IntroduceAI from './components/introduce-ai';
import UsCombineAi from './components/us-combine-ai';
import Fields from './components/fields';
import EmailSubmit from './components/email-submit';
import Address from './components/address';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (<div className={styles.page}>
    <div className="wrapper">
      <Banner />
      <AboutUs />
      <TrustedLogos />
      <IntroduceAI />
      <UsCombineAi />
      <Fields />
      <EmailSubmit />
      <Address />
    </div>
  </div>);
}
