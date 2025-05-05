import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data= useLoaderData();
    const {id}=useParams();

    const [news,setNews] =useState({});
    console.log(data,id);

    useEffect(()=>{
        const newsdetails =data.find(singlenews=> singlenews.id == id)
        setNews(newsdetails);
    },[id,data])
    return (
        <div>
            <header>
               <Header></Header>
            </header>
            <main className=' w-11/12 mx-auto grid grid-cols-12 gap-5 '>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                   <RightAside></RightAside> 
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;