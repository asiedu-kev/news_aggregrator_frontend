import { Modal } from "antd";
import React from "react";

export type ConfirmationModalProps = {
  description: string;
  confirmAction: React.RefCallback<any>;
  opened: boolean;
  cancelAction: React.RefCallback<any>;
};

const ConfirmationModal = ({
  description,
  confirmAction,
  opened,
  cancelAction,
}: ConfirmationModalProps) => {
  return (
    <>
      <Modal
        title="Action Confirmation"
        open={opened}
        onOk={confirmAction}
        onCancel={cancelAction}
        okText="Confirm"
        cancelText="Cancel"
        okButtonProps={<style>ghost</style>}
      >
        <p>{description}</p>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
