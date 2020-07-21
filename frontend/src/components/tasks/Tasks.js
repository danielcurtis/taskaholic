import React, { useState } from 'react';
import Modal from './children/Modal';
import Table from './children/Table';

function Tasks() {
  const [modal, setModal] = useState(false);

  if (modal) {
    return (
      <div className="w-full sm:w-3/4 md:w-3/4 lg:w-5/6 bg-blue-900">
        <Modal setModal={setModal} modal={modal} />
        <Table setModal={setModal} />
      </div>
    );
  } else {
    return (
      <div className="w-full sm:w-3/4 md:w-3/4 lg:w-5/6 bg-blue-900">
        <Table setModal={setModal} />
      </div>
    );
  }
}

export default Tasks;
