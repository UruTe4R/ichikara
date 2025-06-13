import Select from 'react-select';
import { useState } from 'react';
import styles from './FloatingSelect.module.css';

import type { SelectOption } from '@/app/components/checkout/CheckoutForm';

interface FloatingSelectProps {
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (option: SelectOption | null) => void;
}

export default function FloatingSelect({ options, value, onChange }: FloatingSelectProps) {
  const [isFocused, setIsFocused] = useState(false);

  const showLabel = isFocused || value;

  return (
    <div className={styles.floatingWrapper}>
      <label className={`${styles.floatingLabel} ${showLabel ? styles.active : ''}`}>
        都道府県
      </label>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder=""
        instanceId="prefecture"
        className="my-select-container"
        classNamePrefix="my-select"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
