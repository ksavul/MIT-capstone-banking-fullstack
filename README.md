# Banking Application

This is a simple yet robust banking application that empowers users to manage their finances with ease. Users can create accounts, log in securely, deposit and withdraw funds, and view their account balances. With an intuitive user interface, this application simplifies financial transactions.

## Getting Started

To run the application, ensure that you have Node.js and MongoDB installed on your system. Follow the steps below to set up and start the application:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/banking-application.git
   cd banking-application
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Configure environment variables:
   Create a `.env` file in the project's root directory and provide the necessary environment variables, such as `MONGO_URI` and `JWT_SECRET`.

4. Build the application:

   ```bash
   yarn build
   ```

5. Launch the application:

   ```bash
   yarn start
   ```

   The client application will be accessible at `http://localhost:3000`.

## Usage

### Account Creation

- Navigate to the registration page by clicking "Sign Up" in the navigation bar.
- Provide your email address and password.
- Click "Create Account" to establish your account.
- Upon successful account creation, you will receive a confirmation message.

### Logging In

- Select "Log In" from the navigation bar.
- Enter your email address and password.
- Click "Log In" to access your account.

### Logging Out

- Once logged in, your email address or username will appear at the top right corner of the page.
- Access the navigation bar, click on your logged-in status, and choose "Log Out" to exit your account.

### Depositing Funds

- After logging in, additional options will appear in the navigation bar.
- Click "Deposit" and specify the desired deposit amount.
- The balance will automatically update according to the deposit, and this information will persist across login sessions.

### Withdrawing Funds

- Once logged in, additional options will appear in the navigation bar.
- Click "Withdraw" and enter the desired withdrawal amount.
- The balance will automatically adjust based on the withdrawal, and this data will persist across login sessions.

## Bonus Features

- Added transaction history for reviewing past deposits and withdrawals.
- Enhanced security measures and improved error handling.
- Developed an Access Layout for the frontend.
- Implemented password hashing and security checks.
- Work in progress: Adding checking and savings accounts.

## Technologies Utilized

- Frontend: React, Next.js
- Backend: Next.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)

## Future Enhancements

- Incorporate multi-currency support.
- Enable users to update their profile information.
