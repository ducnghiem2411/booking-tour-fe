import React from "react";

const SuccessBookModal = () => {
  return (
    <>
      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <div className="icon-box">
              <i className="fa fa-check"></i>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body text-center">
              <h4>Happy!</h4>
              <p>Your tour has been booking successfully.</p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessBookModal;
