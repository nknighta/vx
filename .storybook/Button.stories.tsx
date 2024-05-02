import GitButton from './button';
import WalletButton from './walletbutton';
import React from 'react';

export default {
  title: 'Button',
};

export const GitSignButton = () => <GitButton>Sign in</GitButton>;
export const WalletConnectButton = () => <WalletButton>Sign in</WalletButton>;