import React, { useState } from "react";
import { Modal, Steps } from "antd";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

const TransfersModal = (props) => {
  const handleCancel = () => {
    props.closeModal();
  };

  const handleOk = () => {
    alert("esto sería el ok");
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const { Step } = Steps;

  const steps = [
    {
      title: "Source",
      content: <Step1 next={next} walletFrom={props.walletFrom._id} />,
    },
    {
      title: "Destination",
      content: <Step2 next={next} prev={prev} />,
    },
    {
      title: "Amount",
      content: <Step3 next={next} prev={prev} />,
    },
    {
      title: "Confirm",
      content: <Step4 next={next} prev={prev} closeModal={props.closeModal} />,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Modal
      visible={props.visible || false}
      title="Transfer PagaCoins"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      maskClosable={false}
    >
      <div>
        <Steps current={currentStep} size="small">
          {steps.map((item) => (
            <Step
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Steps>

        <div className="transfers-modal__steps-content">
          {steps[currentStep].content}
        </div>
      </div>
    </Modal>
  );
};

export default TransfersModal;
