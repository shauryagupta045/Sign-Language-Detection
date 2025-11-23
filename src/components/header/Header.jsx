import React from 'react'
import "./Header.css"
import SignHand from "../../assests/SignHand.jpg";

const Header = () => {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  const words = ["Detect", "Learn", "Practice", "Connect"];

  React.useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <div className="signlang__header section__padding gradient__bg" id="home">

      <div className="signlang__header-content">
        <h1 className="gradient__text">
          Enhance Your Skills with SLD <br />
          <span className="slider-text">{text}</span>
        </h1>
        <p>
          Unlock the power of silent communication. Our intelligent tool helps you master sign language through real-time detection and interactive learning.
          Join a global community of over 72 million users and bridge the communication gap today.
        </p>

      </div>
      <div className="signlang__header-image">
        <img src={SignHand} alt='SIGN-HAND' />
      </div>
    </div>
  )
}

export default Header