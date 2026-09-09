export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  pincode: string;
}

export const VALID_CUSTOMER: CustomerDetails = {
  name: 'Mohamed Nabil',
  phone: '9876543210',
  address: '123 Cross Street, Anna Nagar',
  state: 'Tamil Nadu',
  city: 'Tiruppur',
  pincode: '641604',
};

export const ALTERNATE_CUSTOMER: CustomerDetails = {
  name: 'Rajesh Kumar',
  phone: '9123456789',
  address: '456 MG Road, Indiranagar',
  state: 'Karnataka',
  city: 'Bengaluru',
  pincode: '560038',
};

export const INVALID_CUSTOMER_SHORT_PHONE: CustomerDetails = {
  name: 'Anita Sharma',
  phone: '98765', // Invalid: less than 10 digits
  address: '789 Park Street',
  state: 'Maharashtra',
  city: 'Mumbai',
  pincode: '400001',
};

export const INVALID_CUSTOMER_SHORT_PINCODE: CustomerDetails = {
  name: 'Anita Sharma',
  phone: '9876543210',
  address: '789 Park Street',
  state: 'Maharashtra',
  city: 'Mumbai',
  pincode: '4000', // Invalid: less than 6 digits
};

export const TEST_PRODUCTS = {
  MENS_DROP_SHOULDER: {
    id: 'mens-001',
    name: 'Drop Shoulder Printed T-Shirt',
    category: 'mens',
    price: 121,
    comboPrice: 605,
    minimumOrder: 5,
    defaultSize: 'L',
    defaultColor: 'Navy Blue',
  },
  LADIES_LEGGINGS: {
    id: 'ladies-001',
    name: 'Ladies Ankle Leggings',
    category: 'ladies',
    price: 156,
    comboPrice: 780,
    minimumOrder: 5,
    defaultSize: 'L',
    defaultColor: 'Black',
  },
};

export const STORE_CONTACT_INFO = {
  phone: '+91 63829 31069',
  ordersWhatsapp: '+91 99941 11762',
  email: 'sales@smkayyappagarments.com',
  address: '6-A, 1st Street, Tiruppur Old Bus Stand Backside, Jammanai, Tiruppur, TN – 641604',
};
