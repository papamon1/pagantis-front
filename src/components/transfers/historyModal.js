import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Table } from "antd";
import { formatWithTime } from "../../utils";
import {
  transfersList,
  listTransfers,
  loading,
} from "../../store/reducers/transfers";
import LoadingSpinner from "../loadingSpinner";

const HistoryModal = (props) => {
  const handleCancel = () => {
    props.closeModal();
  };

  const transfersTransfers = useSelector(transfersList);
  const transfersLoading = useSelector(loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.visible) dispatch(listTransfers(props.walletFrom._id));
  }, []);

  useEffect(() => {
    if (props.visible) dispatch(listTransfers(props.walletFrom._id));
  }, [props.visible]);

  const getColumns = () => {
    const cols = [];

    cols.push({
      title: "Created",
      dataIndex: "createdAt",
      dataIndex: "createdAt",
      render: (record) => <div>{formatWithTime(record)}</div>,
      sorter: true,
    });

    cols.push({
      title: "From",
      dataIndex: "walletFrom",
      dataIndex: "walletFrom",
      render: (record) => <div>{record}</div>,
      sorter: true,
    });

    cols.push({
      title: "To",
      dataIndex: "walletTo",
      dataIndex: "walletTo",
      render: (record) => <div>{record}</div>,
      sorter: true,
    });

    cols.push({
      title: "Amount",
      dataIndex: "amount",
      dataIndex: "amount",
      render: (record) => <div>{record}</div>,
      sorter: true,
    });

    return cols;
  };

  return (
    <Modal
      visible={props.visible || false}
      title="History Log"
      onCancel={handleCancel}
      footer={null}
      maskClosable={false}
      width={580}
    >
      <div>
        {transfersLoading && <LoadingSpinner />}

        {!transfersLoading && (
          <Table
            dataSource={transfersTransfers || []}
            columns={getColumns()}
            size="small"
            rowKey={({ id }) => id}
          />
        )}
      </div>
    </Modal>
  );
};

export default HistoryModal;
