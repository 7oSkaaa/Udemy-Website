import React from 'react'
import Stars from '../../HomePage/Section/CoursesSection/CourseCard/Stars'
import { Row, Col } from 'react-bootstrap'
import './StudentFeedback.css'

function Par({ratio}) {
    return (
        <div className="ratio-par">
            <div className="ration-par-filled" style={{width: `${ratio}%`}}>
            </div>
        </div>
    )
}

export default function StudentFeedback({courseData}) {

    const {rating: Rate, num_reviews: Reviews, rating_distribution: FeedbackData} = courseData;
    
    return (
        <div className='feedback-sections'>
            <div className="feedback">
                <h4>Student feedback</h4>
                <Row>
                    <div className='course-rate'>
                        <Col md={3} className='feedback-rating'>
                            <p className="big-rating">{Rate.toPrecision(2)}</p>
                            <Stars rating={Rate}/>
                            <p className="big-course-rating">Course Rating</p>
                        </Col>
                        <Col md={9}>
                            <Row className='rate-ratio'>
                                {
                                    Object.keys(FeedbackData).reverse().map((item, idx) => (
                                        <div key={idx} className='right_column'>
                                            <Col md={7}>
                                                <Par key={idx} ratio={100 * FeedbackData[item].count / Reviews} />
                                            </Col>
                                            <Col md={5}>
                                                <div key={idx} className="par-stars">
                                                    <Stars key={idx} rating={FeedbackData[item].rating}/> 
                                                    <p>{(100 * FeedbackData[item].count/Reviews).toPrecision(2)}%</p>
                                                </div>
                                            </Col>
                                        </div>
                                    ))
                                }
                            </Row>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>        
    )
}