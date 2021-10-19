import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from 'reactstrap';

const MovieModal = (props) => {
  const {
    buttonLabel,
    className,
    movieData
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <span className="d-flex flex-wrap justify-content-between">
              <h6>
                <span className="fw-bolder text-primary">Released :</span>{" "}
                {movieData.Released}
              </h6>
              <h6>
                <span className="fw-bolder text-primary">Runtime :</span>{" "}
                {movieData.Runtime}
              </h6>
            </span>
            <span className="d-flex flex-wrap justify-content-between">
              <h6>
                <span className="fw-bolder text-primary">Director :</span>{" "}
                {movieData.Director}
              </h6>
              <h6>
                <span className="fw-bolder text-primary">Country :</span>{" "}
                {movieData.Country}
              </h6>
            </span>
            <div className="d-flex flex-wrap justify-content-between">
              <h6>
                <span className="fw-bolder text-primary">Writer :</span>{" "}
                {movieData.Writer}
              </h6>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <h6>
                <span className="fw-bolder text-primary">Plot :</span>{" "}
                {movieData.Plot}
              </h6>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <h6>
                <span className="fw-bolder text-primary">Award :</span>{" "}
                {movieData.Awards}
              </h6>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <h6>
                <span className="fw-bolder text-primary">Type :</span>{" "}
                {movieData.Type}
              </h6>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <h6>
                <span className="fw-bolder text-primary">Ratings :</span>{" "}
              </h6>
              {movieData.Ratings?.map((e, idx) => {
                if (e.Source === "Rotten Tomatoes") {
                  var ratings = e.Value.substring(0, e.Value.length - 1);
                }
                console.log("hello", ratings);

                return <Progress striped color="danger" value={75} />;
              })}
              <Progress striped color="danger" value={75} />
            </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MovieModal;