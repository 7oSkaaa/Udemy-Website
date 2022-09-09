import React, { useState } from "react";
import { MdOndemandVideo, MdInsertDriveFile } from "react-icons/md";
import { IoInfinite } from 'react-icons/io5'
import { RiFolderDownloadFill } from 'react-icons/ri'
import { FaMobileAlt } from 'react-icons/fa'
import { BiTrophy } from 'react-icons/bi'
import './CourseCardSticky.css';


export default function CourseCardSticky({courseData}) {
    
    const [x, setX] = useState(true);
    const price = parseInt(courseData.avg_rating * courseData.num_published_lectures);

    window.onscroll = (e) => {
        if (window.scrollY > 400) setX(false);
        if (window.scrollY < 350) setX(true);
    };

    return (
        <div>
            <div className="hed" style={{ display: x ? "none" : "block", position: "sticky", top: "0", zIndex: "2000" }} >
            </div>
            <div className="side-bar-container">
                <img src={courseData.image_750x422} alt="Course img" className="photo" style={{ display: x ? "block" : "none" }} ></img>
                <div className="child" style={{ position: !x ? "fixed" : null, width: !x ? "20%" : null, top: !x ? "10px" : null, zIndex: "3000" }}>
                <h2 className="price">E£{price}</h2>
                <div className='sidebar_buttons' >
                    <button className="add-to-cart">Add to cart</button>
                    <button className="buy">Buy now</button>
                </div>
                <div className="money-back">30-Day Money-Back Guarantee</div>
                <div className="include">
                    <h6>This course includes:</h6>
                    <div className='lineDesc'>
                        <MdOndemandVideo/>
                        <p>{courseData.content_info_short} hours on-demand video </p>
                    </div>
                    <div className='lineDesc'>
                        <MdInsertDriveFile/>
                        <p>{courseData.num_article_assets} articles </p>
                    </div>
                    <div className='lineDesc'>
                        <RiFolderDownloadFill/>
                        <p>{Object.keys(courseData.promo_asset.download_urls).length} downloadable resources</p>
                    </div>
                    <div className='lineDesc'>
                        <IoInfinite/>
                        <p>Full lifetime access</p>
                    </div>
                    <div className='lineDesc'>
                        <FaMobileAlt/>
                        <p>Access on mobile and TV</p>
                    </div>
                    <div className='lineDesc'>
                        <BiTrophy/>
                        <p>Certificate of completion</p>
                    </div>
                </div>
                <div className="share-gift-apply">
                    <a href='\#' className='links'>Share</a>
                    <a href='\#' className='links'>Gift this course</a>
                    <a href='\#' className='links'>Apply Coupon</a>
                </div>
                <hr/>
                <h5 className="train">Training 5 or more people?</h5>
                <p className="get">Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                <button className="try">Try Udemy Business</button>
                </div>
            </div>
        </div>
    );
}