import React from "react";
import "./styles.scss";
const WinnerModal = ({
  optionName = "",
  isOpen = false,
  onClickOutsideWinnerModal
}) => {
  const handleStopPropogation = e => {
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <div onClick={onClickOutsideWinnerModal} className="winner-modal">
          <div onClick={handleStopPropogation} className="winner-modal-content">
            <div className="winner-modal-title">Winner Announcement</div>
            <div className="winner-modal-message">
              The winner is {optionName}!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WinnerModal;
