// TransferModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const TransferModal = ({ show, onHide, accounts, onTransferMoney }) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const [sourceAccount, setSourceAccount] = useState("");
  const [targetAccount, setTargetAccount] = useState("");

  const handleTransferMoney = () => {
    const sourceAcc = accounts.find((acc) => acc.name === sourceAccount);
    const targetAcc = accounts.find((acc) => acc.name === targetAccount);

    if (
      sourceAcc &&
      targetAcc &&
      transferAmount > 0 &&
      sourceAcc.balance >= transferAmount
    ) {
      // Perform the money transfer
      sourceAcc.balance -= transferAmount;
      targetAcc.balance += transferAmount;
      // setAccounts([...accounts]);
      onHide();
      // setShowTransferModal(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Transfer funds between accounts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Amount to transfer (€)</Form.Label>
            <Form.Control
              type="number"
              value={transferAmount}
              onChange={(e) => setTransferAmount(parseFloat(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Account From</Form.Label>
            <Form.Select onChange={(e) => setSourceAccount(e.target.value)}>
              <option value="">Choose account</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.name}>
                  {account.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Account To</Form.Label>
            <Form.Select onChange={(e) => setTargetAccount(e.target.value)}>
              <option value="">Choose account</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.name}>
                  {account.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          {/* ... (same as before) */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleTransferMoney}>
          Transfer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const TransferMoney = ({ accounts }) => {
  const [showTransferModal, setShowTransferModal] = useState(false);

  return (
    <div>
      <Button
        variant="primary"
        className="mt-3"
        onClick={() => setShowTransferModal(true)}
      >
        Transfer funds
      </Button>
      {showTransferModal && (
        <TransferModal
          accounts={accounts}
          show={showTransferModal}
          onHide={() => setShowTransferModal(false)}
        />
      )}
    </div>
  );
};

export default TransferMoney;
