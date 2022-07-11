import './lesson.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Lesson = () => {
    const navigate = useNavigate();
    return (
    <div className="Apppe">
    <div className="hope">
   <div onClick={() => {navigate('/First')}}><div className="heads"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
       </svg></div></div>
   <div><h1 className="styleese">Alphabet and Spelling</h1></div>
   <div></div>
   </div>

    <div className="">
    <div className="list-group">
      <div className='ar'>
  <div className="list-group-item list-group-item-action " aria-current="true">
    <div className="d-flex w-100 justify-content-between" onClick={() => {navigate('/Material')}}>
      <h5 className="mb-1">MATERIAL</h5>
      <small>3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </div>
  </div>
  <div className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Task One</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small className="text-muted">And some muted small print.</small>
  </div>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Task Two</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small className="text-muted">And some muted small print.</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action " aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Task Three</h5>
      <small>3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Final Test</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small className="text-muted">And some muted small print.</small>
  </a>
</div>
        </div>
    </div>
      );
}
export default Lesson;