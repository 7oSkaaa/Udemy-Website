import React, { useContext } from "react";
import { MdOndemandVideo, MdInsertDriveFile } from "react-icons/md";
import { IoInfinite } from 'react-icons/io5'
import { RiFolderDownloadFill } from 'react-icons/ri'
import { FaMobileAlt } from 'react-icons/fa'
import { BiTrophy } from 'react-icons/bi'
import { VscQuestion } from 'react-icons/vsc'
import { IoMdAlarm }  from 'react-icons/io'
import { BiPlay } from 'react-icons/bi'
import { Context } from "../../Context";
import './CourseCardSticky.css';
import Sticky from 'react-stickynode';

function adjust_img(img){
    img = img.split('/');
    img[4] = '750x422';
    img = img.join('/');
    return img;
}

function LineDesc({icon, text}){
    if(text === null) return null;  
    return (
        <div className="lineDesc">
            {icon}
            <p>{text}</p>
        </div>
    );
}

function StickyItem({courseData, isCardAppear}){
    return (
        <div>
            <div className="side-bar-container">
                <div className="Card_header">
                    <BiPlay/>
                    <p className="on_photo">Preview this course</p>
                    <img src={adjust_img(courseData.img)} alt="Course img" className={isCardAppear ? 'photo' : 'hidden_img'} ></img>
                </div>
                <div className={isCardAppear ? 'child' : 'child sticky_sidebar'}>
                    <div className="price">
                        <p>E£{courseData.price}</p> 
                        {courseData.discount_percentage ? <s className="__discount">{courseData.oldprice}</s> : null} 
                        {courseData.discount_percentage ? <span className="discount_per">{courseData.discount_percentage}% off</span> : null}
                    </div>
                    {
                        courseData.discount_percentage ?
                            <div className="expire_date">
                                <IoMdAlarm/>
                                <p dangerouslySetInnerHTML={{ __html: courseData.discount_expiration }} />
                            </div>
                        : 
                            null
                    }
                    <div className='sidebar_buttons' >
                        <button className="add-to-cart">Add to cart</button>
                        <button className="buy">Buy now</button>
                    </div>
                    <div className="money-back">30-Day Money-Back Guarantee</div>
                    <div className="include">
                        <h6>This course includes:</h6>
                        <LineDesc icon={<MdOndemandVideo/>} text={courseData.video_content_length}/>
                        <LineDesc icon={<MdInsertDriveFile/>} text={courseData.num_articles}/>
                        <LineDesc icon={<RiFolderDownloadFill/>} text={courseData.num_additional_resources}/>
                        <LineDesc icon={<VscQuestion/>} text={courseData.num_practice_tests}/>
                        <LineDesc icon={<IoInfinite/>} text={'Full lifetime access'}/>
                        <LineDesc icon={<FaMobileAlt/>} text={'Access on mobile and TV'}/>
                        <LineDesc icon={<BiTrophy/>} text={'Certificate of completion'}/>
                    </div>
                    <div className="share-gift-apply">
                        <a href='/udemy-home-page-React' className='links'>Share</a>
                        <a href='/udemy-home-page-React' className='links'>Gift this course</a>
                        <a href='/udemy-home-page-React' className='links'>Apply Coupon</a>
                    </div>
                    <hr/>
                    <h5 className="train">Training 5 or more people?</h5>
                    <p className="get">Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                    <button className="try">Try Udemy Business</button>
                </div>
            </div>
        </div>
    )
}

export default function CourseCardSticky({courseData, isCardAppear, InBack}) {
    
    const { YLimit } = useContext(Context);

    return (
        <Sticky bottomBoundary={YLimit} top={100} innerZ={InBack ? 1 : 10} enabled={!isCardAppear} enableTransforms={true}>
            <StickyItem courseData={courseData} isCardAppear={isCardAppear}/>
        </Sticky>
    );
}