import React from 'react';
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Footer from '../../components/Layout/Footer'
import Header from '../../components/Header'
import UHeader from '../../components/Uheader/Uheader'
const index = ({ blogs }) => {
    return (
      <div>
        <UHeader />
        <Header />
        <Section2 blog={blogs} />
        <Section3 blog={blogs} />
        <Footer />
      </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:8000/getblog');
    const blogs = await res.json();
    return {
        props: {
            blogs,
        },
    }
}
export default index