import './first.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useNavigate } from 'react-router-dom';

const First = () => {
    const navigate = useNavigate();
    return (
    <div className="Apppes">
    <div className="hop">
   <div onClick={() => {navigate('/Sabaq')}}><div className="head"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
       </svg></div></div>
   <div><h1 className="headered">Beginner</h1></div>
   <div></div>
   </div>
   <div className='less'><h1>Lessons</h1></div>

    <div className="">
    <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start" onClick={() => {navigate('/Lesson')}}>
                  <div className="ms-2 me-auto" onClick={() => {navigate('/Lesson')}}>
                    
                    <div className="fw-bold">Alphabet and Spelling</div>
                    Students have to recognise and say different letters of the alphabet based on your instruction.
                                   </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Content for list item
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Content for list item
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
              </ol>  
        </div>
    </div>
      );
}
export default First;