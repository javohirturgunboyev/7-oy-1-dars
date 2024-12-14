import React, { useState } from 'react';
import Wifi from './assets/Filter.png';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rate: '',
    balance: '',
    deposit: '',
    status: '',
  });
  const [customers, setCustomers] = useState([]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.rate || isNaN(formData.rate)) newErrors.rate = 'Valid rate is required';
    if (!formData.balance || isNaN(formData.balance)) newErrors.balance = 'Valid balance is required';
    if (!formData.deposit || isNaN(formData.deposit)) newErrors.deposit = 'Valid deposit is required';
    if (!formData.status) newErrors.status = 'Status is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (validate()) {
      setCustomers([...customers, formData]);
      setFormData({ name: '', description: '', rate: '', balance: '', deposit: '', status: '' });
      setModalOpen(false);
    }
  };

  return (
    <div className='container mx-auto bg-gray-600 p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img className='w-8 h-10' src={Wifi} alt="" />
          <input
            className='input input-bordered ml-4'
            type="text"
            placeholder='🔍 Search'
          />
        </div>
        <button
          className='btn bg-blue-600'
          onClick={() => setModalOpen(true)}
        >
          ➕ Add Customer
        </button>
      </div>

      <div className='grid grid-cols-6 gap-4 mt-4 text-white'>
        <p>Name</p>
        <p>Description</p>
        <p>Rate</p>
        <p>Balance</p>
        <p>Deposit</p>
        <p>Status</p>
      </div>

      {customers.map((customer, index) => (
        <div key={index} className='grid grid-cols-6 gap-4 mt-2 text-white'>
          <p>{customer.name}</p>
          <p>{customer.description}</p>
          <p>{customer.rate}</p>
          <p>{customer.balance}</p>
          <p>{customer.deposit}</p>
          <p>{customer.status}</p>
        </div>
      ))}

      {modalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>Add Customer</h3>
            <div className='mt-4'>
              <input
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className={`input input-bordered w-full mb-2 ${errors.name ? 'border-red-500' : ''}`}
                placeholder='Name'
              />
              {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}

              <input
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                className={`input input-bordered w-full mb-2 ${errors.description ? 'border-red-500' : ''}`}
                placeholder='Description'
              />
              {errors.description && <p className='text-red-500 text-sm'>{errors.description}</p>}

              <input
                name='rate'
                value={formData.rate}
                onChange={handleInputChange}
                className={`input input-bordered w-full mb-2 ${errors.rate ? 'border-red-500' : ''}`}
                placeholder='Rate'
              />
              {errors.rate && <p className='text-red-500 text-sm'>{errors.rate}</p>}

              <input
                name='balance'
                value={formData.balance}
                onChange={handleInputChange}
                className={`input input-bordered w-full mb-2 ${errors.balance ? 'border-red-500' : ''}`}
                placeholder='Balance'
              />
              {errors.balance && <p className='text-red-500 text-sm'>{errors.balance}</p>}

              <input
                name='deposit'
                value={formData.deposit}
                onChange={handleInputChange}
                className={`input input-bordered w-full mb-2 ${errors.deposit ? 'border-red-500' : ''}`}
                placeholder='Deposit'
              />
              {errors.deposit && <p className='text-red-500 text-sm'>{errors.deposit}</p>}

              <input
                name='status'
                value={formData.status}
                onChange={handleInputChange}
                className={`input input-bordered w-full mb-2 ${errors.status ? 'border-red-500' : ''}`}
                placeholder='Status'
              />
              {errors.status && <p className='text-red-500 text-sm'>{errors.status}</p>}
            </div>

            <div className='modal-action'>
              <button className='btn bg-blue-600' onClick={handleSave}>Save</button>
              <button className='btn' onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
