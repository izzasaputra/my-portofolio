import React, { useState } from "react";
import { Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "./confirmationModal.module.scss";

export interface ModalType {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleOk: () => void;
}

const ConfirmationModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
}: ModalType) => {
  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.modal_icon}>
          <CheckCircleOutlined />
        </div>
        <p className={styles.title}>Are You Sure?</p>
        <p className={styles.description}>
          You are sure to download Izza Saputras resume in PDF file format?
        </p>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
