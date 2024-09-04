# Ultrachem 

## Overview

Ultrachem is a full-stack e-commerce platform designed to sell chemical products online. Built using the MERN stack (MongoDB, Express, React, Node.js), Ultrachem provides a seamless and secure shopping experience with various features to enhance user engagement and transaction security.

## Features

- **Secure Payment Integration**: Integrated PayPal payment gateway for safe and secure online transactions.
- **Comprehensive Shopping Features**: 
  - **Add to Cart**: Allows users to add products to their cart and manage their selections.
  - **Product Filtering**: Enables users to filter products by categories, price, and ratings.
  - **Ratings and Reviews**: Users can leave ratings and reviews for products, helping others make informed decisions.
  - **Multi-Step Checkout Process**: A streamlined and secure checkout process guiding users through each step.
- **User Authentication and Authorization**: 
  - Utilizes JSON Web Tokens (JWT) to ensure secure user authentication and authorization.
- **Responsive Design**: A mobile-friendly and user-centric interface designed to enhance the user experience and engagement.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payment Gateway**: PayPal
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/parth968/UltraChem.git
   cd UltraChem
   ```

2. **Set up a virtual environment for the backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend:**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Variables**:
   - Create a `.env` file in the root directory of the backend and add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PAYPAL_CLIENT_ID=your_paypal_client_id
     ```

5. **Run the application:**
   - **Backend**:
     ```bash
     cd backend
     npm run dev
     ```
   - **Frontend**:
     ```bash
     cd frontend
     npm start
     ```

6. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` to access the website.

## Usage

1. **Browse Products**: Use the filters to find the products you need.
2. **Add to Cart**: Select your desired products and add them to your cart.
3. **Checkout**: Proceed through the multi-step checkout process, secure your purchase via PayPal, and complete the order.

## Project Structure

```
UltraChem/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── index.js
└── README.md
```

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [MERN Stack](https://www.mongodb.com/mern-stack)
- [PayPal Developer](https://developer.paypal.com/)
- [JWT](https://jwt.io/)
