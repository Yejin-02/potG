import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';


export type LogoutModalProps = {
  active: boolean;
  actionEvent: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  closeEvent: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  children: React.ReactNode;
};

const LogoutModal = ({ actionEvent, closeEvent }: LogoutModalProps) => {
  return (
    <>
      <CardModalContainer>
        <div>
          <h3>로그아웃 하시겠습니까?</h3>
          <div className="action_box">
            <button onClick={actionEvent}>예</button>
            <button onClick={closeEvent}>아니요</button>
          </div>
        </div>
      </CardModalContainer>
    </>
  );
};

LogoutModal.defaultProps = {
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

export default LogoutModal;