import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/Logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { useState } from 'react';

export function Header() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>(false);

  function handleTransactionModalOpenChange(value: boolean) {
    setIsTransactionModalOpen(value);
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root
          open={isTransactionModalOpen}
          onOpenChange={handleTransactionModalOpenChange}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal
            handleTransactionModalOpenChange={handleTransactionModalOpenChange}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
