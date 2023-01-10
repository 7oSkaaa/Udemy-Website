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
    
    return (
        <div className='feedback-sections'>
            <div className="feedback">
                <h4>Student feedback</h4>
                <Row>
                    <div className='course-rate'>
                        <Col md={3} className='feedback-rating'>
                            <p className="big-rating">{courseData.rating.toPrecision(2)}</p>
                            <Stars rating={courseData.rating}/>
                            <p className="big-course-rating">Course Rating</p>
                        </Col>
                        <Col md={9}>
                            <Row className='rate-ratio'>
                                {
                                    courseData.feedbacks.map((item, idx) => (
                                        <div key={idx} className='right_column'>
                                            <Col md={7}>
                                                <Par key={idx} ratio={item.percentage} />
                                            </Col>
                                            <Col md={5}>
                                                <div key={idx} className="par-stars">
                                                    <Stars key={idx} rating={item.value}/> 
                                                    <p>{(item.percentage).toPrecision(2)}%</p>
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