import React from 'react'
import PageHero from '../../Components/PageHero/PageHero';
import SprintCourt2 from '../../Assets/sprint-court2.jpeg'
import Footer from '../../Components/Footer/Footer';
import CallToAction from '../../Components/CallToAction/CallToAction';
import SearchArea from '../../Components/SearchArea/SearchArea';

export default function EasyBuy() {
  return (
    <div>
      <PageHero
        title="Easy Buy"
        subTitle="Introducing Easy Access to Owning your Dream Property."
        coverImg={SprintCourt2}
        description="Pay Installment for a period of 12 months and own a land for as low as 900k."
      />
      <SearchArea/>
      <CallToAction message="Begin your journey to owning your dream property"/>
      <Footer/>
    </div>
  );
}
