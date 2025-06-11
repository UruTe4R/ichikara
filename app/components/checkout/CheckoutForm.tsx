'use client'

import styles from '@/app/components/checkout/checkoutForm.module.css';

import React, { useState, useEffect } from 'react';

import CustomInput from '@/app/components/forms/CustomInput';

export default function CheckoutForm() {

  const [postalcode, setPostalcode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchAddress() {
      const zip = postalcode.replace(/-/g, '');
      if (zip.length === 7) {
        try {
          console.log('fetching')
          const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`)
          const data = await res.json();
          console.log('data', data);
          
          if (data.results?.length > 0) {
            setAddress1(data.results[0].address1);
            setAddress2(data.results[0].address2);
            setAddress3(data.results[0].address3);
          }
        } catch (error) {
          console.error('Error:', error);
          setError('郵便番号が正しく入力されていません');
        }
      }
    }

    fetchAddress();
    console.log('postalcode', postalcode);
    console.log('address1', address1);
    console.log('address2', address2);
    console.log('address3', address3);
  }, [postalcode])

  function handlePostalcodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPostalcode(e.target.value);
  }

  return (
    <div className={styles.formsWrapper}>
      <div className={styles.addressFormContainer}>
        <h3 className={styles.h3}>配送先</h3>
        
          
        <form onSubmit={(e) => e.preventDefault()} className={`${styles.addressForm} h-adr`}>
          <div className={styles.kanjiInputs}>
            <CustomInput type="text" placeholder='姓' id='lastName' />
            <CustomInput type="text" placeholder='名' id='firstName' />
          </div>

          <div className={styles.kanaInputs}>
            <CustomInput type="text" placeholder='セイ' id='lastNameKana' />
            <CustomInput type="text" placeholder='メイ' id='firstNameKana' />
          </div>

          <div className={styles.addressInputs}>
            <CustomInput type="text" placeholder="郵便番号" id="postalcode" onChange={handlePostalcodeChange} value={postalcode}/>
            <CustomInput type="text" placeholder="都道府県" id="prefecture" className="p-region" value={address1} readOnly={true}/>
            <CustomInput type="text" placeholder="市区町村" id="cityAndVillage" className="p-locality"value={address2} readOnly={true} />
            <CustomInput type="text" placeholder="番地" id="streetAddress" className="p-street-address" value={address3} readOnly={true}/>
            <CustomInput type="text" placeholder="建物名" id="buildingName" className="p-extended-address" />


          </div>

        </form>
          
        
      </div>
    </div>
  )
}
