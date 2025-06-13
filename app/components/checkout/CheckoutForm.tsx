'use client'

import styles from '@/app/components/checkout/checkoutForm.module.css';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import prefectures from 'jp-prefecture';

import CustomInput from '@/app/components/forms/CustomInput';
import FloatingSelect from '@/app/components/forms/FloatingSelect';

type Address = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  precode: string;
  zipcode: string;
}

export type SelectOption = {
  value: string;
  label: string;
}

const prefecturesOptions: SelectOption[] = prefectures.getAll("pref", "name").map((prefecture: string) => {
  return {
    value: prefecture,
    label: prefecture
  }
})

export default function CheckoutForm() {

  const [postalcode, setPostalcode] = useState('');
  const [prefecture, setprefecture] = useState<SelectOption | null>(null);
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [building, setBuilding] = useState('');

  const [results, setResults] = useState<Address[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchAddress() {
      const zip = postalcode.replace(/-/g, '');
      if (zip.length === 7) {
        try {
          console.log('fetching address', zip)
          const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`)
          const data = await res.json();
          console.log('data', data);
          
          if (data.results?.length > 0) {
            setResults(data.results);
            setIsOpen(true);
          }

          if (data.message) {
            setIsOpen(false);
          }
        } catch (error) {
          console.error('Error:', error);
          setError('郵便番号が正しく入力されていません');
        }
      }
    }

    fetchAddress();


    console.log('postalcode', postalcode);
    console.log('prefecture', prefecture);
    console.log('address2', address2);
    console.log('address3', address3);
  }, [postalcode])

  function handlePostalcodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPostalcode(e.target.value);
  }

  function handleResultClick(zip: string, prefecture: string, address2: string, address3: string) {
    setPostalcode(zip);
    setprefecture({value: prefecture, label: prefecture});
    setAddress2(address2);
    setAddress3(address3);
    setIsOpen(false);
  }

  return (
    <div className={styles.formsWrapper}>
      
      <form onSubmit={(e) => e.preventDefault()} className={`${styles.addressForm} h-adr`} >
        <h3 className={styles.h3}>連絡先</h3>

        <CustomInput type="email" placeholder='メールアドレス' id='email' className={styles.email}/>

        <h3 className={styles.h3}>配送先</h3> 
        <div className={styles.kanjiInputs}>
          <CustomInput type="text" placeholder='姓' id='lastName' />
          <CustomInput type="text" placeholder='名' id='firstName' />
        </div>

        <div className={styles.kanaInputs}>
          <CustomInput type="text" placeholder='セイ' id='lastNameKana' />
          <CustomInput type="text" placeholder='メイ' id='firstNameKana' />
        </div>

        <div className={styles.addressInputs}>
          <div className={styles.postalInputs}>
            <CustomInput type="text" placeholder="郵便番号" id="postalcode" onChange={handlePostalcodeChange} value={postalcode} />

            <div className={`${styles.searchResults} ${isOpen ? '' : styles.hidden}`}>
              <div className={styles.searchResultsHeader}>
                <p>候補</p>
                <div className={styles.close}>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon} onClick={() => setIsOpen(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>

              {results && results.map((result: Address, i) => {
                return (
                  <div className={styles.searchResult} key={i} onClick={() => handleResultClick(result.zipcode, result.address1, result.address2, result.address3)}>
                    {`${result.address1} ${result.address2} ${result.address3}`}
                  </div>
                )
              })}

            </div>
            
            <FloatingSelect 
              options={prefecturesOptions}
              value={prefecture}
              onChange={(option) => setprefecture(option)}
            />

            {/* <Select 
              options={prefecturesOptions}
              instanceId="prefectures"
              isClearable
              placeholder="都道府県"
              value={prefecture}
              onChange={(option) => setprefecture(option)}
              className="my-select-container"
              classNamePrefix="my-select"
              /> */}
            
            <CustomInput type="text" placeholder="市区町村" id="cityAndVillage" className="p-locality"value={address2} onChange={(e) => setAddress2(e.target.value)} />
          </div>

          <div className={styles.addtionalAddressInputs}>
            <CustomInput type="text" placeholder="住所" id="streetAddress" className="p-street-address" value={address3} onChange={(e) => setAddress3(e.target.value)} />
            <CustomInput type="text" placeholder="建物名(任意)" id="buildingName" className="p-extended-address" value={building} onChange={(e) => setBuilding(e.target.value)} required={false} />
          </div>

          <CustomInput type="tel" placeholder='電話番号' id='tel' className={styles.tel} />

        </div>

        </form>
          
        
      
    </div>
  )
}
