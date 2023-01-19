import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import secondS from '../styles/modal.module.css';

export type CardModalProps = {
  active: boolean;
  actionEvent: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  children: React.ReactNode;
};

const CardModal = ({ actionEvent, title, children }: CardModalProps) => {
  return (
    <>
      <CardModalContainer>
        <h3>{title}</h3>
        <div className="msg">{children}</div>
        <div className="action_box">
          <button onClick={actionEvent} className={secondS.button}>
            내 동승에서 확인
          </button>
        </div>
      </CardModalContainer>
    </>
  );
};

CardModal.defaultProps = {
  active: false,
};

const CardModalContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    display: inline;
  }

  .msg {
    line-height: 1.5;
    font-size: 1rem;
    color: rgb(73, 80, 87);
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }

  .action_box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      margin-left: 0.5rem;
    }
  }
  
  .closeBtn {
    display: inline;
  }
`;

export default CardModal;