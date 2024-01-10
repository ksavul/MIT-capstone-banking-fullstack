// CreateAccountModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateAccountModal = ({ show, onHide, createAccount }) => {
  const [newAccountName, setNewAccountName] = useState("");

  const handleCreateAccount = (e) => {
    e.preventDefault();
    createAccount({ accountName: newAccountName });
    // ... (same as before)
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create a new bank account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCreateAccount}>
          <Form.Group className="mb-3">
            <Form.Label>Name of the account</Form.Label>
            <Form.Control
              type="text"
              value={newAccountName}
              onChange={(e) => setNewAccountName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleCreateAccount}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CreateAccountHandler = ({ createAccount }) => {
  const [showAccountModal, setShowAccountModal] = useState(false);

  return (
    <div>
      <Button
        variant="success"
        className="mt-3"
        onClick={() => setShowAccountModal(true)}
      >
        Create a new account
      </Button>
      {showAccountModal && (
        <CreateAccountModal
          show={showAccountModal}
          onHide={() => setShowAccountModal(false)}
          createAccount={createAccount}
        />
      )}
    </div>
  );
};

export default CreateAccountHandler;
