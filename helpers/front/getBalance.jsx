const getBalance = ({currentUser, accountName = 'checking'}) => {
  return currentUser?.bankAccounts?.find(account => account.accountName === accountName)
}

export default getBalance
