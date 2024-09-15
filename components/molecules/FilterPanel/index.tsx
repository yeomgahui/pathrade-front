'use client';

import React from 'react';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

type FilterPanelProps = {
  isVisible: boolean;
  onClose: () => void;
};

const FilterPanel = ({ isVisible, onClose }: FilterPanelProps) => {
  if (!isVisible) return null;

  const onReset = () => {
    console.log('Reset');
  };

  return (
    <div className="fixed flex flex-col justify-between right-0 top-0 h-screen w-86 bg-white shadow-lg p-4">
      <div>
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <Input
          placeholder="Search Season"
          onChange={() => {}}
          className="mb-4"
        />
        <Select
          options={['All', 'Buyer', 'Agency']}
          onChange={() => {}}
          className="mb-4"
        />
      </div>
      <div className="flex justify-end space-x-2 pt-4 border-t">
        <Button onClick={onReset} variant="secondary">
          <div className="flex items-center">
            <ArrowPathIcon className="w-4 h-4" />
            Reset
          </div>
        </Button>
        <Button onClick={onClose} variant="secondary">
          Close
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
