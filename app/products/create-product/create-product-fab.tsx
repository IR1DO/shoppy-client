'use client';

import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateProductModal from './create-product-modal';
import { useState } from 'react';

const CreateProductFab = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <CreateProductModal
        open={modalVisible}
        handleClose={() => {
          setModalVisible(false);
        }}
      />
      {/* FIXME sticky property will cause fab location not on the left-bottom position*/}
      <div className='sticky left-10 bottom-10'>
        <Fab color='primary' onClick={() => setModalVisible(true)}>
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};

export default CreateProductFab;
