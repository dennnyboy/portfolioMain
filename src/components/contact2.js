import React, { useState } from 'react';
import './contact2.css'; // Ensure your CSS is correctly imported
import dog1 from './Dogpics/dog1.JPG';
import dog2 from './Dogpics/dog2.JPG';
import dog3 from './Dogpics/dog3.JPG';
import dog4 from './Dogpics/dog4.JPG';
import dog5 from './Dogpics/dog5.PNG';
import dog6 from './Dogpics/dog6.JPG';
import dog7 from './Dogpics/dog7.JPG';
import dog8 from './Dogpics/dog8.JPG';
import dog9 from './Dogpics/dog9.JPG';
import dog10 from './Dogpics/dog10.JPG';
import dog11 from './Dogpics/dog11.PNG';

 
const imagesAndTexts = [
  { imgSrc: dog1, text: 'Here is a picture of my dog Mister Peanut Butter to change your mind' },
  { imgSrc: dog2, text: 'Does this change your mind?' },
  { imgSrc: dog3, text: 'Mister loves emails!' },
  { imgSrc: dog4, text: 'How could you not contact this face?' },
  { imgSrc: dog5, text: 'Just look at him!' },
  { imgSrc: dog6, text: 'At this point this has to change your mind' },
  { imgSrc: dog7, text: 'He is so worried you have not clicked the email button!' },
  { imgSrc: dog8, text: 'If this does not change your mind nothing will' },
  { imgSrc: dog9, text: 'Mister Green Bean!' },
  { imgSrc: dog10, text: 'How have you gone this long without clicking "Email Me"?' },
  { imgSrc: dog11, text: 'Come on!' },
  // Add more images and texts as needed
];

const Contact2 = () => {
  const email = "Dennis11@live.com";
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleEmailMeClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleStillNotReadyClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesAndTexts.length);
  };

  return (
    <div className="section contact2">
      <div className="container2">
        <h2>Not Ready to Connect?</h2>
        <p>Oh you're not ready to connect yet? <br/>This site did not satisfy you? <br/>Please feel free to click the button below.</p>
        {/* Updated to use an anchor tag */}
        <a href="#!" onClick={() => setModalVisible(true)} className="email-button2">Click Here</a>
      </div>

      {modalVisible && (
        <div className="modal-overlay" onClick={(e) => {
          // Close modal when clicking outside of it
          if (e.target.className === 'modal-overlay') {
            setModalVisible(false);
          }
        }}>
          <div className="modal-content">
            <img src={imagesAndTexts[currentImageIndex].imgSrc} alt="Display" />
            <p>{imagesAndTexts[currentImageIndex].text}</p>
            <button onClick={handleEmailMeClick}>Email Me</button>
            <button onClick={handleStillNotReadyClick}>Still Not Ready</button>
            <button onClick={() => setModalVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact2;