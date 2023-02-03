import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/SLG_6956.jpg'}
        title={'Built to Your Measurements'}
        subtitle={'Langlitz Leathers are custom built to your measurements, for a fit that lasts'}
        ctaText={'shop now'}
        ctaAction={goToShop}
      />

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/SLG_7599-PROOF.jpg'}
            miniImage={'/SLG_7634-400x400.jpg'}
            title={'Deluxe Travel Bags'}
            description={`Our deluxe travel bag has a square profile, and measures approximately 10″ x 10″ x 20″. These bags have three pockets.
            Travel Bags come in Cowhide or Goatskin – the same leather we use for our Langlitz jackets.`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={'/banner2.jpg'} title={`100% American Made`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Cheers to another 75 years'}
        quote={
          'I got a used Columbia from Arthur at Avalon Antiques in 1987. After all these years it is still my ‘go to’ .The blood, pain and passion it has witnessed is more than I can remember. but unforgettable. She is my second skin. I just wanted to sat thank you. -Omurcuus '
                 }
      />

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={'/welcome-to-our-family.jpg'}
          title={'Welcome To Our Family'}
          subtitle={
            'When you order a Langlitz, you’re not simply a customer--you’re part of our Family. We get to know you, and work with you to build your ideal custom garment that you’ll be proud to own.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @langlitzleathers to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img height="500px" src={`/Langlitz-Leathers-Motorcycle-Leather-Jacket-Best-Leather-Moto-Portland-Oregon_2.jpg`} />
          <img height="500px" src={`/tumblr_or4ec5MJKd1sktkrzo1_500.jpg`} />
          <img height="500px"  src={`/e236012492954cd04a242898bf9e0c17.jpg`} />
          <img height="500px" src={`/9f6f6e215867530923403bf5fc702832.jpg`} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
