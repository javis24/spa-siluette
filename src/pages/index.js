import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ServiceSection from '../components/ServiceSection';
import AppointmentContainer from '../components/AppointmentContainer';
import '../app/globals.css';
import CourseOffer from '@/components/CourseOffer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beauty Spa Header</title>
      </Head>
      <Header />
      <Banner />
      <ServiceSection />
      <AppointmentContainer />
      <CourseOffer />
    </>
  );
}
