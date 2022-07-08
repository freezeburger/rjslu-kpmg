import React, { FC } from 'react';
import './BaseButton.scss';

interface BaseButtonProps {}

const BaseButton: FC<BaseButtonProps> = () => (
  <div className="BaseButton">
    BaseButton Component
  </div>
);

export default BaseButton;
