// @ts-nocheck
import React from 'react'
import { Modal, Flex, Text } from '@beef-swap-libs/uikit'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { useBeef, useProfile } from 'hooks/useContract'
import useApproveConfirmTransaction from 'hooks/useApproveConfirmTransaction'
import { fetchProfile } from 'state/profile'
import useToast from 'hooks/useToast'
import { REGISTER_COST } from '../ProfileCreation/config'
import ApproveConfirmButtons from './ApproveConfirmButtons'
import { State } from '../ProfileCreation/contexts/types'

interface Props {
  userName: string
  selectedNft: State['selectedNft']
  account: string
  teamId: number
  minimumBeefRequired: BigNumber
  allowance: BigNumber
  onDismiss?: () => void
}

const ConfirmProfileCreationModal: React.FC<Props> = ({
  account,
  teamId,
  selectedNft,
  minimumBeefRequired,
  allowance,
  onDismiss,
}) => {
  const { t } = useTranslation()
  const profileContract = useProfile()
  const dispatch = useAppDispatch()
  const { toastSuccess } = useToast()
  const BeefContract = useBeef()

  const { isApproving, isApproved, isConfirmed, isConfirming, handleApprove, handleConfirm } =
    useApproveConfirmTransaction({
      onRequiresApproval: async () => {
        try {
          const response = await BeefContract.methods.allowance(account, profileContract.options.address).call()
          const currentAllowance = new BigNumber(response)
          return currentAllowance.gte(minimumBeefRequired)
        } catch (error) {
          return false
        }
      },
      onApprove: () => {
        return BeefContract.methods.approve(profileContract.options.address, allowance.toJSON()).send({ from: account })
      },
      onConfirm: () => {
        return profileContract.methods
          .createProfile(teamId, selectedNft.nftAddress, selectedNft.tokenId)
          .send({ from: account })
      },
      onSuccess: async () => {
        await dispatch(fetchProfile(account))
        onDismiss()
        toastSuccess(t('Profile created!'))
      },
    })

  return (
    <Modal title={t('Complete Profile')} onDismiss={onDismiss}>
      <Text color="textSubtle" mb="8px">
        {t('Submitting NFT to contract and confirming User Name and Team.')}
      </Text>
      <Flex justifyContent="space-between" mb="16px">
        <Text>{t('Cost')}</Text>
        <Text>{t('%num% Beef', { num: REGISTER_COST })}</Text>
      </Flex>
      <ApproveConfirmButtons
        isApproveDisabled={isConfirmed || isConfirming || isApproved}
        isApproving={isApproving}
        isConfirmDisabled={!isApproved || isConfirmed}
        isConfirming={isConfirming}
        onApprove={handleApprove}
        onConfirm={handleConfirm}
      />
    </Modal>
  )
}

export default ConfirmProfileCreationModal
