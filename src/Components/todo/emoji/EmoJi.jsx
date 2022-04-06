import React from "react";
const Emoji = () => {
  return (
    <div className="container motionicon" style={{ borderRadius: "5px" }}>
      <span class="emoji monkey" role="img" aria-label="monkey"></span>
      <span class="emoji clock" role="img" aria-label="clock"></span>
      <span class="emoji mailbox" role="img" aria-label="mailbox"></span>
      <span class="emoji camera" role="img" aria-label="camera flash"></span>
      <span class="emoji hourglass" role="img" aria-label="hourglass"></span>
      <span class="emoji earth" role="img" aria-label="earth rotating"></span>
      <span class="emoji moon" role="img" aria-label="moon phases"></span>
      {/* <span
      class="emoji bomb"
      role="img"
      aria-label="bomb exploding"
    ></span> */}
      <span class="emoji hearts" role="img" aria-label="hearts"></span>
      {/* <span class="emoji wave" role="img" aria-label="hand wave"></span> */}
      <span class="emoji inbox" role="img" aria-label="inbox tray"></span>
      <span class="emoji vomit" role="img" aria-label="face vomiting"></span>
    </div>
  );
};

export default Emoji;
