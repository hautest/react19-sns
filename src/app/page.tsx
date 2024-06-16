"use client";

import { Button } from "@/common/ui/Button";
import { css } from "../../styled-system/css";
import SvgHome from "@/common/icons/Home";
import { Input } from "@/common/ui/Input";
import { Modal } from "@/common/ui/Modal/Modal";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <div className={css({ fontFamily: "light" })}>개light</div>
      <div className={css({ fontFamily: "bold" })}>light</div>
      <div className={css({ fontFamily: "bold" })}>한국기계연구원 bold</div>
      <div
        className={css({
          // fontSize: "18px",/
          // fontWeight: 700,
        })}
      >
        개발자 준비중인데
      </div>
      <div
        className={css({
          // fontFamily: "var(--font-light)",
          fontFamily: "bold",
          // fontSize: "18px",/
          // fontWeight: 700,
          color: "yellow",
        })}
      >
        개발자 준비중인데
      </div>
      <Input placeholder="test" rightNode={<div>123</div>} />
      <Input size="small" rightNode={<div>123</div>} />
      <Input variants="outline" />
      <Button color="black">123</Button>
      <Button color="yellow">123</Button>
      <Button size="medium">123</Button>
      <Button size="small">123</Button>
      <Button>123</Button>
      <Modal>
        <Modal.Trigger>열기</Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content className={css({ height: "10rem", width: "10rem" })}>
            <Modal.Close>닫기</Modal.Close>
          </Modal.Content>
        </Modal.Portal>
      </Modal>
    </div>
  );
}
