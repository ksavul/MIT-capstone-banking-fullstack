import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import TransferMoney from '../components/Accounts/TransferModal';
import CreateAccountHandler from '../components/Accounts/CreateAccountModal';
import { userActions } from '../helpers/front/userActions';
import useUserContext from '../hooks/useUserContext';

const AccountCard = ({ account }) => {
  return (
    <div className="col">
      <Card>
        <Card.Body>
          <Card.Title>{account.name}</Card.Title>
          <Card.Text>Balance: {account.balance} €</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const Accounts = () => {
  // Mock data for user's accounts


  const initialAccounts = [
    { id: 1, name: 'Compte courant', balance: 1000 },
    { id: 2, name: 'Compte d\'épargne', balance: 5000 },
  ];
  const [loading, setLoading] = React.useState(false);


  const {currentUser, setCurrentUser} = useUserContext();
  const [accounts, setAccounts] = useState(initialAccounts);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [transferAmount, setTransferAmount] = useState(0);
  const [sourceAccount, setSourceAccount] = useState('');
  const [targetAccount, setTargetAccount] = useState('');
  const [newAccountName, setNewAccountName] = useState('');

  // const handleTransferMoney = () => {
  //   // ... (same as before)
  // };

  useEffect(() => {
    setLoading(true);
    const getAccounts = async () => {
      await userActions.getBankAccounts({email: currentUser?.email})
      .then((res) => {
        console.log('RESULTAT de get accounts : ', res)
        setLoading(false)
      })

    }

    // getAccounts();

  }, [currentUser])

  const handleCreateAccount = ({accountName = 'Saving account'}) => {
    userActions.createBankAccount({email: currentUser?.email, accountName: accountName});

    // setShowCreateModal(true);
  };

  const handleConfirmCreateAccount = () => {
    if (newAccountName.trim() !== '') {
      const newAccount = {
        id: accounts.length + 1,
        name: newAccountName.trim(),
        balance: 0,
      };
      setAccounts([...accounts, newAccount]);
      setNewAccountName('');
      setShowCreateModal(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Comptes</h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {accounts.map((account, index) => (
          <AccountCard key={index} account={account} />
        ))}
      </div>

      {/* <Button variant="primary" className="mt-3" onClick={() => setShowTransferModal(true)}>
        Transférer de l'argent
      </Button> */}
      <TransferMoney accounts={accounts}/>

      {/* <Button variant="success" className="mt-3" onClick={() => setShowCreateModal(true)}>
        Créer un nouveau compte
      </Button> */}

      {/* <TransferModal
        show={showTransferModal}
        onHide={() => setShowTransferModal(false)}
        accounts={accounts}
        onTransferMoney={handleTransferMoney}
      /> */}

      <CreateAccountHandler
        createAccount={handleCreateAccount}
        // show={showCreateModal}
        // onHide={() => setShowCreateModal(false)}
        // onCreateAccount={handleConfirmCreateAccount}
      />


      {/* <CreateAccountModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onCreateAccount={handleConfirmCreateAccount}
      /> */}
    </div>
  );
};

export default Accounts;
